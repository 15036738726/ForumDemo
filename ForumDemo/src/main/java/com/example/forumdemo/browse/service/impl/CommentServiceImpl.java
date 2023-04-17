package com.example.forumdemo.browse.service.impl;

import com.example.forumdemo.browse.mapper.CommentMapper;
import com.example.forumdemo.browse.service.CommentService;
import com.example.forumdemo.entity.ForumComment;
import com.example.forumdemo.entity.ForumUser;
import com.example.forumdemo.util.Utils;
import com.github.yulichang.base.MPJBaseServiceImpl;
import com.github.yulichang.wrapper.MPJLambdaWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl extends MPJBaseServiceImpl<CommentMapper, ForumComment> implements CommentService {
    @Autowired
    private CommentMapper commentMapper;

    /**
     * 保存方法,保存评论
     * @param comment
     */
    @Override
    public void saveComment(ForumComment comment) {
        comment.setWorkTime(Utils.getCurrentData());
        commentMapper.insert(comment);
    }

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

        /**
         * 对返回对象进行处理,尽管可以在一个方法中处理,但这里所有的处理都单独分开写,代码更清晰,用的流,效率差不了多少
         */

        /**
         * 所有对象的字段处理
         * 1.处理@艾特情况,给所有comment对象中的aiteState字段设值
         * 2.处理workTimeText字段
         */
        handleCommentDataForFiled(list);

        // 处理层级
        List<ForumComment> top = handleCommentDataForLevel(list);

        // 打包链模型问题处理
        top = handleCommentDataForPackage(top,queryComment);
        return top;
    }

    /**
     * 处理互相回复的情况,需要给每个实体设置isAiTe字段值,实体类中有情况说明
     * @param list
     */
    private void handleCommentDataForFiled(List<ForumComment> list) {
        Optional.ofNullable(list).ifPresent(e -> {
            e.stream().forEach(temp -> {
                boolean equals = temp.getParentCommentId().equals(temp.getReplyId());
                // 设置艾特字段 相等为true 则设置该字段为false
                temp.setAiteState(!equals);
                temp.setWorkTimeText(Utils.workTimeText(temp.getWorkTime()));
            });
        });
    }

    /**
     * 处理评论数据,层级问题封装
     * @param list
     */
    private List<ForumComment> handleCommentDataForLevel(List<ForumComment> list){
        List<ForumComment> rtn = new ArrayList<>();
        Optional.ofNullable(list).ifPresent(e -> {
            // e ->list
            // 收集所有顶级
            Long val = Long.valueOf("0");
            List<ForumComment> top = e.stream()
                    .filter(temp -> temp.getParentCommentId().equals(val))
                    // top层按照点赞倒排
                    .sorted(Comparator.comparing(ForumComment::getZanCount).reversed())
                    .collect(Collectors.toList());
            // 遍历top 把所有的子类,封装到child属性中
            top.stream().forEach(temp -> {
                Long topCommentId = temp.getCommentId();
                List<ForumComment> child = list.stream()
                        .filter(childTemp -> childTemp.getParentCommentId().equals(topCommentId))
                        // child层按照id正拍,最早的回复放上边,保证回复从上到下,是一套合理的对话
                        .sorted(Comparator.comparing(ForumComment::getCommentId))
                        .collect(Collectors.toList());
                temp.setChild(child);
            });
            // 设置返回值
            rtn.addAll(top);
        });
        return rtn;
    }

    // 打包链问题处理
    private List<ForumComment> handleCommentDataForPackage(List<ForumComment> list,ForumComment comment) {
        // 传入的有userId,才排序,否则直接返回
        if(ObjectUtils.isEmpty(comment.getUserId())) return list;
        List<ForumComment> rtn = new ArrayList<>();

        Optional.ofNullable(list).ifPresent(e -> {
            // 排child
            e.stream().forEach(temp -> {
                List<ForumComment> child = temp.getChild();
                if(child.size()>0){
                    List<ForumComment> first = child.stream()
                            .filter(tempChild -> tempChild.getUserId().equals(comment.getUserId()))
                            .sorted(Comparator.comparing(ForumComment::getCommentId))
                            .collect(Collectors.toList());

                    List<ForumComment> second = child.stream()
                            .filter(tempChild -> !tempChild.getUserId().equals(comment.getUserId()))
                            .sorted(Comparator.comparing(ForumComment::getCommentId))
                            .collect(Collectors.toList());
                    child.clear();
                    child.addAll(first);
                    child.addAll(second);
                }
            });

            // 顶层排序
            // 找所有所有是当前用户的评论,按照时间倒排,commentId是有序的,并且效率比workTime字符串效率高
            List<ForumComment> first = e.stream()
                    .filter(temp -> temp.getUserId().equals(comment.getUserId()))
                    .sorted(Comparator.comparing(ForumComment::getCommentId))
                    .collect(Collectors.toList());

            List<ForumComment> sencond = e.stream()
                    .filter(temp -> !temp.getUserId().equals(comment.getUserId()))
                    .sorted(Comparator.comparing(ForumComment::getCommentId))
                    .collect(Collectors.toList());
            rtn.addAll(first);
            rtn.addAll(sencond);
        });
        return rtn;
    }
}
