package com.example.forumdemo.browse.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.ObjectUtils;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.forumdemo.browse.mapper.CommentMapper;
import com.example.forumdemo.browse.mapper.PlayMapper;
import com.example.forumdemo.browse.mapper.KnockingMapper;
import com.example.forumdemo.browse.service.KnockingService;
import com.example.forumdemo.entity.ForumComment;
import com.example.forumdemo.entity.ForumJoinKnocking;
import com.example.forumdemo.entity.ForumZuoPin;
import com.example.forumdemo.instruct_receive.anno.InstructReceive;
import com.example.forumdemo.enumeration.ReceiveType;
import com.example.forumdemo.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class KnockingServiceImpl extends ServiceImpl<KnockingMapper, ForumJoinKnocking> implements KnockingService {

    @Autowired
    private KnockingMapper knockingMapper;

    @Autowired
    private CommentMapper commentMapper;

    @Autowired
    private PlayMapper playMapper;

    /**
     * 存在旧删除,不存在就增加 增加一条数据 返回1,减少一条数据 返回-1
     * @param entity
     * @return
     */
    public Integer knocking(ForumJoinKnocking entity){
        LambdaQueryWrapper<ForumJoinKnocking> lambdaQuery = Wrappers.lambdaQuery();
        // 只用设置userId 和 抽象ID即可,但是type因为涉及到保存,所以还得传入
        lambdaQuery.eq(entity.getUserId()!=null,ForumJoinKnocking::getUserId,entity.getUserId());
        lambdaQuery.eq(entity.getAbstractId()!=null,ForumJoinKnocking::getAbstractId,entity.getAbstractId());
        lambdaQuery.eq(entity.getAbstractType()!=null,ForumJoinKnocking::getAbstractType,entity.getAbstractType());
        ForumJoinKnocking one = knockingMapper.selectOne(lambdaQuery);

        if(ObjectUtils.isEmpty(one)){
            // 没找到
            entity.setWorkTime(Utils.getCurrentData());
            knockingMapper.insert(entity);
            return 1;
        }else{
            // 找到
            knockingMapper.deleteById(one.getId());
            return -1;
        }
    }

    /**
     * 评论敲击
     * @param entity
     * @return 返回真实点赞数
     */
    @InstructReceive(receiveType = ReceiveType.COMMENT_ZAN_TYPE)
    @Override
    public Map<String,Object> zanComment(ForumJoinKnocking entity) {
        Integer knocking = this.knocking(entity);
        String zanIdFlag = knocking>0?"-":"";
        // 对评论表数据做更新,update xx set zan+knocking where id= entity.getabstartId
        /*
        LambdaUpdateWrapper<ForumComment> updateWrapper = Wrappers.lambdaUpdate();
        updateWrapper.eq(ForumComment::getZanCount,knocking)
                .setSql(" 'zanCount' = 'zanCount' + "+knocking+" ");
        commentMapper.update(null,updateWrapper);
        */
        // 最终要返回变更的数值 所以还得先查询出来
        ForumComment comment = commentMapper.selectById(entity.getAbstractId());
        Integer val = comment.getZanCount()+knocking;
        // 更新
        LambdaUpdateWrapper<ForumComment> updateWrapper = Wrappers.lambdaUpdate();
        updateWrapper.eq(entity.getAbstractId()!=null,ForumComment::getCommentId,entity.getAbstractId())
                        .set(ForumComment::getZanCount,val);
        commentMapper.update(null, updateWrapper);

        Map<String, Object> map = new HashMap<>();
        map.put("zanId",zanIdFlag);
        map.put("zanCount",val);
        return map;
    }

    /**
     * 作品点赞敲击
     * @param entity
     * @return
     */
    @Override
    public Map<String, Object> zanZuopin(ForumJoinKnocking entity) {
        Integer knocking = this.knocking(entity);
        String flag = knocking>0?"-":"";
        // 找原来数据
        ForumZuoPin zuoPin = playMapper.selectById(entity.getAbstractId());
        Integer val = zuoPin.getZan()+knocking;
        // 更新作品表zan数据
        LambdaUpdateWrapper<ForumZuoPin> updateWrapper = Wrappers.lambdaUpdate();
        updateWrapper.eq(entity.getAbstractId()!=null,ForumZuoPin::getZuopinId,entity.getAbstractId())
                .set(ForumZuoPin::getZan,val);
        playMapper.update(null, updateWrapper);

        Map<String, Object> map = new HashMap<>();
        map.put("zan",val);
        map.put("dianzanId",flag);
        map.put("dianzanType",entity.getActionType());
        return map;
    }

    /**
     * 作品收藏敲击
     * @param entity
     * @return
     */
    @Override
    public Map<String, Object> loveZuopin(ForumJoinKnocking entity) {
        Integer knocking = this.knocking(entity);
        String flag = knocking>0?"-":"";
        // 找原来数据
        ForumZuoPin zuoPin = playMapper.selectById(entity.getAbstractId());
        Integer val = zuoPin.getLove()+knocking;
        // 更新作品表love数据
        LambdaUpdateWrapper<ForumZuoPin> updateWrapper = Wrappers.lambdaUpdate();
        updateWrapper.eq(entity.getAbstractId()!=null,ForumZuoPin::getZuopinId,entity.getAbstractId())
                .set(ForumZuoPin::getLove,val);
        playMapper.update(null, updateWrapper);

        Map<String, Object> map = new HashMap<>();
        map.put("love",val);
        map.put("shoucangId",flag);
        return map;
    }

    /**
     * 关注某个用户
     * @param entity
     * @return
     */
    @InstructReceive(receiveType = ReceiveType.LOVE_USER_TYPE)
    @Override
    public Map<String, Object> loveUser(ForumJoinKnocking entity) {
        Integer knocking = this.knocking(entity);
        String flag = knocking>0?"-":"";
        // 关注数量暂时不存在更新问题
        Map<String, Object> map = new HashMap<>();
        map.put("guanzhuId",flag);
        return map;
    }


}
