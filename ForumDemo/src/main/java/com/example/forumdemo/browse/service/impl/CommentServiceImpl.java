package com.example.forumdemo.browse.service.impl;

import com.example.forumdemo.browse.mapper.CommentMapper;
import com.example.forumdemo.browse.service.CommentService;
import com.example.forumdemo.entity.ForumComment;
import com.example.forumdemo.entity.ForumUser;
import com.github.yulichang.base.MPJBaseServiceImpl;
import com.github.yulichang.wrapper.MPJLambdaWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl extends MPJBaseServiceImpl<CommentMapper, ForumComment> implements CommentService {
    @Autowired
    private CommentMapper commentMapper;


    @Override
    public List<ForumComment> queryCommentData(ForumComment queryComment) {
        MPJLambdaWrapper<ForumComment> wrapper = new MPJLambdaWrapper<>();
        wrapper.selectAll(ForumComment.class)
                .selectAssociation("t1",ForumUser.class,ForumComment::getUserInfo)
                .selectAssociation("t2",ForumUser.class,ForumComment::getReplyUserInfo)
                .leftJoin(ForumUser.class,ForumUser::getUserId,ForumComment::getUserId)
                .leftJoin(ForumUser.class,ForumUser::getUserId,ForumComment::getReplyUserId);
        // 设置作品id参数
        wrapper.eq(ForumComment::getZuopinId,queryComment.getZuopinId());
        // 查询正常数据
        wrapper.eq(ForumComment::getDel,queryComment.getDel());
        List<ForumComment> list = commentMapper.selectJoinList(ForumComment.class, wrapper);
        // 处理层级
        List<ForumComment> top = handleCommentData(list);
        return top;
    }

    /**
     * 处理评论数据,层级问题封装
     * @param list
     */
    private List<ForumComment> handleCommentData(List<ForumComment> list){
        List<ForumComment> rtn = new ArrayList<>();
        Optional.ofNullable(list).ifPresent(e -> {
            // e ->list
            // 收集所有顶级
            Long val = Long.valueOf("0");
            List<ForumComment> top = e.stream().filter(temp -> temp.getParentCommentId().equals(val)).collect(Collectors.toList());
            // 遍历top 把所有的子类,封装到child属性中
            top.stream().forEach(temp -> {
                Long topCommentId = temp.getCommentId();
                List<ForumComment> child = list.stream().filter(childTemp -> childTemp.getParentCommentId().equals(topCommentId)).collect(Collectors.toList());
                temp.setChild(child);
            });
            // 设置返回值
            rtn.addAll(top);
        });
        return rtn;
    }
}
