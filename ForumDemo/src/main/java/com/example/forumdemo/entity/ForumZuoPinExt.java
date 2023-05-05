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
     * 				guanzhu_status登录用户在该视频下的 已关注/关注 信息  null:关注 有值:已关注
     * 				dianzan_status点赞状态 null未赞   有值:已赞
     * 				shoucang_status收藏状态 0未收藏  有值已收藏
     *          }
     */
    private Long guanzhuId;
    private Long dianzanId;
    // 长按还是单机
    private Integer dianzanType;
    private Long shoucangId;
    // 该作品下的评论计数
    private Integer commentCount;
}
