package com.example.forumdemo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.io.Serializable;
@Data
public class ForumMessage implements Serializable {
    // 主键
    @TableId(type = IdType.ASSIGN_ID)
    private Long messageId;
    // 消息类型 从指令表中获取  1.评论消息 2.赞消息  3.被关注消息,增加了新的粉丝
    private Integer messageType;
    // 抽象ID,对应真实的处理数据ID
    private Long abstractId;
    // 指令ID,从指令表中获取设置,留个记录可能用不到
    private Long instructId;
    // 消息所属用户
    private Long userId;
    // 消息所属用户名称,信息不重要可以冗余,不怕改名
    private String userName;
    // 你的消息内容
    private String userContent;
    // 消息(动作)发生时间
    private String happenTime;
    // 对手方用户ID
    private Long targetUserId;
    // 对手方用户姓名
    private String targetUserName;
    // 对手方用户内容
    private String targetContent;
    // 已读状态  0,已读,1未读
    private Integer readStatus;
    // 数据插入本表时间,当前业务表的时间记录
    private String workTime;
}
