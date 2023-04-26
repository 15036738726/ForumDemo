package com.example.forumdemo.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

import java.io.Serializable;

/**
 * 作品实体的字段扩展类
 */
@Data
public class ForumZuoPinExt extends ForumZuoPin implements Serializable {
    // 登录用户ID
    private Long loginUserId;
    /**
     * 			实体需要返回{
     * 				guanzhu_status登录用户在该视频下的 已关注/关注 信息  0:关注 1:已关注
     * 				dianzan_status点赞状态 0未赞   1已赞
     * 				shoucang_status收藏状态 0未收藏  1已收藏
     *          }
     */
    private Integer guanzhuStatus;
    private Integer dianzanStatus;
    private Integer shoucangStatus;
    // 该作品下的评论计数
    private Integer commentCount;
}
