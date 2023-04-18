package com.example.forumdemo.browse.service;

import com.example.forumdemo.entity.ForumComment;
import com.github.yulichang.base.MPJBaseService;

import java.util.List;

public interface CommentService extends MPJBaseService<ForumComment> {
    /**
     * 根据作品id,查询当前作品下的所有评论信息
     * @param queryComment
     * @param skipHandle
     * @return
     */
    List<ForumComment> queryCommentData(ForumComment queryComment,boolean skipHandle);

    /**
     * 保存方法,保存评论
     * @param comment
     */
    ForumComment saveComment(ForumComment comment);
}
