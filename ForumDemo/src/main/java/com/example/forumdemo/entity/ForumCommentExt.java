package com.example.forumdemo.entity;

import lombok.Data;

import java.util.List;

/**
 * 评论实体扩展,层级处理
 */
@Data
public class ForumCommentExt extends ForumComment{
    private List<ForumComment> child;
}
