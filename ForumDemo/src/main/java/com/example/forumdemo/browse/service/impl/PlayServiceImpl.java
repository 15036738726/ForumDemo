package com.example.forumdemo.browse.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.example.forumdemo.browse.mapper.PlayMapper;
import com.example.forumdemo.browse.service.PlayService;
import com.example.forumdemo.entity.ForumUser;
import com.example.forumdemo.entity.ForumZuoPin;
import com.example.forumdemo.user.mapper.UserOpeMapper;
import com.github.yulichang.base.MPJBaseServiceImpl;
import com.github.yulichang.query.MPJQueryWrapper;
import com.github.yulichang.wrapper.MPJLambdaWrapper;
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


    public List<ForumZuoPin> queryList2(ForumZuoPin queryParam) {
        /**
         * leftJoin
         * 第一个参数: 参与连表的实体类class
         * 第二个参数: 连表的ON字段,这个属性必须是第一个参数实体类的属性
         * 第三个参数: 参与连表的ON的另一个实体类属性
         */
 /*       MPJLambdaWrapper<ForumZuoPin> lambdaWrapper = new MPJLambdaWrapper<ForumZuoPin>();
        // 主表的全字段
        lambdaWrapper.selectAll(ForumZuoPin.class)
                // 附表的部分字段
                .select(ForumUser::getUserName,ForumUser::getUserHead)
                // 链接表  连接条件
                .leftJoin(ForumUser.class,ForumZuoPin::getUserId,ForumUser::getUserId);*/

/*        List<ForumZuoPin> xx = playMapper.selectJoinList(ForumZuoPin.class,
                new MPJLambdaWrapper<>().selectAll(ForumZuoPin.class)
                        // 附表的部分字段
                        .select(ForumUser::getUserName,ForumUser::getUserHead)
                        // 链接表  连接条件
                        .leftJoin(ForumUser.class,ForumUser::getUserId,ForumZuoPin::getUserId)
                );
        */

        List<ForumZuoPin> list = playMapper.selectJoinList(ForumZuoPin.class,
                new MPJLambdaWrapper<ForumZuoPin>()
                        .selectAll(ForumZuoPin.class)
                        .select(ForumUser::getUserName,ForumUser::getUserHead)
                        .leftJoin(ForumUser.class, ForumUser::getUserId,ForumZuoPin::getUserId)
        );
        System.out.println(list);
        return list;
    }


    /**
     * 根据条件查询产品表
     * @param queryParam
     * @return
     */
    @Override
    public List<ForumZuoPin> queryList(ForumZuoPin queryParam) {
        QueryWrapper queryWrapper = new QueryWrapper();
        // 查询归类设置 如果如果是0,就查询观看人数高的
        if(queryParam.getContentType()==0){
            queryWrapper.orderByDesc("look_count");
        }else{
            queryWrapper.eq("contentType",queryParam.getContentType());
        }
        // 是否删除
        queryWrapper.eq("del",queryParam.getDel());
        List<ForumZuoPin> forumZuoPins = playMapper.selectList(queryWrapper);

        // 设置用户信息
        Optional.ofNullable(forumZuoPins).ifPresent(this::setUserInfo);

        // 数据太少,这里暂时先增加点数据
        Optional<ForumZuoPin> any = forumZuoPins.stream().findAny();
        // 追加5个
        for(int i = 0;i<5;i++){
            forumZuoPins.add(any.get());
        }
        return forumZuoPins;
    }

    /**
     * 设置用户信息
     * @param list
     */
    public void setUserInfo(List<ForumZuoPin> list){
        list.stream().forEach(e -> {
            ForumUser forumUser = userOpeMapper.selectById(e.getUserId());
            //e.setUserName(forumUser.getUserName());
            //e.setUserHead(forumUser.getUserHead());
            e.setUserInfo(forumUser);
        });
    }

}
