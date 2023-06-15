package com.example.forumdemo.browse.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.ObjectUtils;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.example.forumdemo.browse.mapper.CommentMapper;
import com.example.forumdemo.browse.mapper.KnockingMapper;
import com.example.forumdemo.browse.mapper.PlayMapper;
import com.example.forumdemo.browse.service.PlayService;
import com.example.forumdemo.entity.*;
import com.example.forumdemo.user.mapper.UserOpeMapper;
import com.example.forumdemo.user.service.UserOpeService;
import com.example.forumdemo.util.Utils;
import com.github.yulichang.base.MPJBaseServiceImpl;
import com.github.yulichang.wrapper.MPJLambdaWrapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayServiceImpl extends MPJBaseServiceImpl<PlayMapper, ForumZuoPin> implements PlayService {
    @Autowired
    private PlayMapper playMapper;

    @Autowired
    private UserOpeMapper userOpeMapper;
    @Autowired
    private UserOpeService userOpeService;

    @Autowired
    private CommentMapper commentMapper;

    @Autowired
    private KnockingMapper knockingMapper;

    /**
     * 根据条件查询产品表
     * @param queryParam
     * @return
     */
    public List<ForumZuoPin> queryList(ForumZuoPin queryParam) {
        MPJLambdaWrapper<ForumZuoPin> lambdaWrapper = new MPJLambdaWrapper<ForumZuoPin>();
        // 开始构建构建Wrapper 主表的全字段
        lambdaWrapper.selectAll(ForumZuoPin.class)
                // 一对一查询并映射Association,把forumUser实体类中的所有字段,映射到ForumZuoPin实体类中的getUserInfo中
                .selectAssociation(ForumUser.class,ForumZuoPin::getUserInfo)
                // 链接表  连接条件
                .leftJoin(ForumUser.class,ForumUser::getUserId,ForumZuoPin::getUserId);
        // 设置查询参数
        // 查询归类设置 如果如果是0,就查询观看人数高的(lookCount倒排序),否则,查询指定的归类
        boolean contentTypeCondition = queryParam.getContentType() == 0;
        lambdaWrapper.orderByDesc(contentTypeCondition,ForumZuoPin::getLookCount);
        lambdaWrapper.eq(!contentTypeCondition,ForumZuoPin::getContentType,queryParam.getContentType());

        // 删除状态
        lambdaWrapper.eq(queryParam.getDel()!=null,ForumZuoPin::getDel,queryParam.getDel());
        // 执行查询
        List<ForumZuoPin> list = playMapper.selectJoinList(ForumZuoPin.class, lambdaWrapper);

        /**
         * 处理界面显示文本
         * 1.观看次数
         * 2.发布时间
         * 3.
         *
         */
        Optional.ofNullable(list).ifPresent(e -> e.stream().forEach(e1 -> {
            e1.setLookCountText(Utils.lookCountText(e1.getLookCount()));
            e1.setWorkTimeText(Utils.workTimeText(e1.getWorkTime()));
        }));

        return list;
    }

    /**
     * 查询作品详情信息
     * @param queryParam
     * @return
     */
    @Override
    public ForumZuoPinExt queryZuoPinDetail(ForumZuoPinExt queryParam) {
        ForumZuoPinExt zuopinInfoExt = new ForumZuoPinExt();
        /**
         * 查询内容有:
         * 标题/原创/观看次数/弹幕数/发布时间/简介(暂时没有)/点赞数/当前登录用户点赞信息/当前登录用户收藏信息/评论数
         */

        LambdaQueryWrapper<ForumZuoPin> zuopinWrapper = Wrappers.lambdaQuery();
        zuopinWrapper.eq(queryParam.getZuopinId()!=null,ForumZuoPin::getZuopinId,queryParam.getZuopinId());
        ForumZuoPin zuopinInfo =  playMapper.selectOne(zuopinWrapper);
        zuopinInfo.setLookCountText(Utils.lookCountText(zuopinInfo.getLookCount()));
        zuopinInfo.setWorkTimeText(Utils.timeFormatter(zuopinInfo.getWorkTime()));

        /*
        LambdaQueryWrapper<ForumUser> userWrapper = Wrappers.lambdaQuery();
        userWrapper.eq(zuopinInfo.getUserId()!=null,ForumUser::getUserId,zuopinInfo.getUserId());
        ForumUser forumUser = userOpeMapper.selectOne(userWrapper);
        zuopinInfo.setUserInfo(forumUser);
         */
        // 查询用户基本信息
        ForumUserExt forumUserExt = userOpeService.queryUserInfo(zuopinInfo.getUserId());
        zuopinInfo.setUserInfo(forumUserExt);

        // 父类对象属性值赋值给子类对象
        BeanUtils.copyProperties(zuopinInfo,zuopinInfoExt);

        // 查询评论数
        LambdaQueryWrapper<ForumComment> commentWrapper = Wrappers.lambdaQuery();
        commentWrapper.eq(queryParam.getZuopinId()!=null,ForumComment::getZuopinId,queryParam.getZuopinId());
        Integer commentNum = commentMapper.selectCount(commentWrapper);
        zuopinInfoExt.setCommentCount(commentNum);

        // 点赞 收藏 关注 参数后续设置
        // 获取登录用户ID
        Long loginUserId = queryParam.getLoginUserId();
        // 如果登录,则设置当前登录用户的点赞 收藏 关注等状态 为 1 否则跳过,默认值0
        if(loginUserId!=null){
            // 作品点赞状态
            LambdaQueryWrapper<ForumJoinKnocking> lambdaQueryZan = Wrappers.lambdaQuery();
            lambdaQueryZan.eq(queryParam.getLoginUserId()!=null, ForumJoinKnocking::getUserId,queryParam.getLoginUserId());
            lambdaQueryZan.eq(queryParam.getZuopinId()!=null,ForumJoinKnocking::getAbstractId,queryParam.getZuopinId());
            lambdaQueryZan.eq(ForumJoinKnocking::getAbstractType,2);
            ForumJoinKnocking zanInfo = knockingMapper.selectOne(lambdaQueryZan);
            if(!ObjectUtils.isEmpty(zanInfo)){
                zuopinInfoExt.setDianzanId(zanInfo.getId());
                zuopinInfoExt.setDianzanType(zanInfo.getActionType());
            }

            // 收藏状态
            LambdaQueryWrapper<ForumJoinKnocking> lambdaQuerylove = Wrappers.lambdaQuery();
            lambdaQuerylove.eq(queryParam.getLoginUserId()!=null, ForumJoinKnocking::getUserId,queryParam.getLoginUserId());
            lambdaQuerylove.eq(queryParam.getZuopinId()!=null,ForumJoinKnocking::getAbstractId,queryParam.getZuopinId());
            lambdaQuerylove.eq(ForumJoinKnocking::getAbstractType,3);
            ForumJoinKnocking loveInfo = knockingMapper.selectOne(lambdaQuerylove);
            if(!ObjectUtils.isEmpty(loveInfo))zuopinInfoExt.setShoucangId(loveInfo.getId());

            // 关注状态
            LambdaQueryWrapper<ForumJoinKnocking> userLoveLambda = Wrappers.lambdaQuery();
            userLoveLambda.eq(queryParam.getLoginUserId()!=null,ForumJoinKnocking::getUserId,queryParam.getLoginUserId());
            userLoveLambda.eq(queryParam.getUserId()!=null,ForumJoinKnocking::getAbstractId,queryParam.getUserId());
            userLoveLambda.eq(ForumJoinKnocking::getAbstractType,4);
            ForumJoinKnocking loveUser = knockingMapper.selectOne(userLoveLambda);
            if(!ObjectUtils.isEmpty(loveUser))zuopinInfoExt.setGuanzhuId(loveUser.getId());

        }
        return zuopinInfoExt;
    }

}
