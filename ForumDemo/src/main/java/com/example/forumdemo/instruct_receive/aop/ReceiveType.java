package com.example.forumdemo.instruct_receive.aop;

/**
 * 接收类型 用于区分处理方式不同
 */
public enum ReceiveType {
    COMMENT_REPLY_TYPE,// 评论回复
    COMMENT_ZAN_TYPE,// 评论点赞
    LOVE_USER_TYPE// 关注某个用户

}
