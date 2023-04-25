package com.example.forumdemo.browse.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.ObjectUtils;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.forumdemo.browse.mapper.CommentMapper;
import com.example.forumdemo.browse.mapper.ZanMapper;
import com.example.forumdemo.browse.service.ZanService;
import com.example.forumdemo.entity.ForumComment;
import com.example.forumdemo.entity.ForumJoinZan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class ZanServiceImpl extends ServiceImpl<ZanMapper, ForumJoinZan> implements ZanService {

    @Autowired
    private ZanMapper zanMapper;

    @Autowired
    private CommentMapper commentMapper;

    /**
     * 存在旧删除,不存在就增加 增加一条数据 返回1,减少一条数据 返回-1
     * @param entity
     * @return
     */
    public Integer knocking(ForumJoinZan entity){
        LambdaQueryWrapper<ForumJoinZan> lambdaQuery = Wrappers.lambdaQuery();
        // 只用设置userId 和 抽象ID即可,但是type因为涉及到保存,所以还得传入
        lambdaQuery.eq(ForumJoinZan::getUserId,entity.getUserId());
        lambdaQuery.eq(ForumJoinZan::getAbstractId,entity.getAbstractId());
        ForumJoinZan one = zanMapper.selectOne(lambdaQuery);

        if(ObjectUtils.isEmpty(one)){
            // 没找到
            zanMapper.insert(entity);
            return 1;
        }else{
            // 找到
            zanMapper.deleteById(one.getId());
            return -1;
        }
    }

    /**
     * 评论敲击
     * @param entity
     * @return 返回真实点赞数
     */
    @Override
    public Map<String,Object> knockingComment(ForumJoinZan entity) {
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
        updateWrapper.eq(ForumComment::getCommentId,entity.getAbstractId())
                        .set(ForumComment::getZanCount,val);
        commentMapper.update(null, updateWrapper);

        Map<String, Object> map = new HashMap<>();
        map.put("zanId",zanIdFlag);
        map.put("zanCount",val);
        return map;
    }



}
