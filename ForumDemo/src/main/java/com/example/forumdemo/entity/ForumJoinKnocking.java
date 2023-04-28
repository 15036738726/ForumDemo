package com.example.forumdemo.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * 敲击表,作品点赞,评论点赞,作品收藏公用这个模型
 */
@Data
public class ForumJoinKnocking implements Serializable {
    // 主键
    private Long id;
    // 用户ID 对应那个用户操作的数据
    private Long userId;
    // 抽象ID,可以是评论ID,可以是作品ID
    private Long abstractId;
    // 类型 1:评论点赞 2.是作品点赞 3.作品收藏
    private Integer abstractType;
    // 动作类型,区分长按,还是短暂按下 主要是作品点赞有长按功能(长按是强烈推荐1,短按则点赞0),默认值为0,目前只有作品点赞功能用到该字段值
    private Integer actionType;
    // 入库时间
    private String workTime;
}
