package com.example.forumdemo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * 评论实体
 */
@Data
public class ForumComment implements Serializable {
    // 主键
    @TableId(type = IdType.ASSIGN_ID)
    private Long commentId;
    // 作品ID
    private Long zuopinId;
    // 用户ID 那个用户回复
    private Long userId;
    // 回复者用户信息 张三回复李四 张三对象
    @TableField(exist = false)
    private ForumUser userInfo;
    // 评论主体
    private String comment;
    // 1级 0  2级 父评论Id
    private Long parentCommentId;
    // 回复那个用户
    private Long replyUserId;
    // 接收者,被回复者  张三回复李四 李四角色
    @TableField(exist = false)
    private ForumUser replyUserInfo;
    // 入库时间
    private String workTime;
    // 删除状态
    private Integer del = 1;
    // 点赞数
    private Integer zanCount = 0;
    // 回复的是哪条评论ID
    private Long replyId;
    // 评论已读0 未读1
    private Integer isRead;
    // 热评
    @TableField(exist = false)
    private boolean isHot;

    // 评论下挂的子评论 只有2层
    @TableField(exist = false)
    private List<ForumComment> child;
}
