package com.example.forumdemo.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * 敲击表,作品点赞,评论点赞,作品收藏公用这个模型
 */
@Data
public class ForumJoinKnocking implements Serializable {
    private Long id;
    private Long userId;
    private Long abstractId;
    private Integer abstractType;
    private String workTime;
}
