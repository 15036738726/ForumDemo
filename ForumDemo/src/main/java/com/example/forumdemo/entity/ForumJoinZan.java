package com.example.forumdemo.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * 点赞表,作品点赞,评论点赞公用这个模型
 */
@Data
public class ForumJoinZan implements Serializable {
    private Long id;
    private Long userId;
    private Long abstractId;
    private int abstractType;
}
