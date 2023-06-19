package com.example.forumdemo.instruct_receive.aop;

/**
 * 接收类型 用于区分处理方式不同
 */
public enum ReceiveType {

    COMMENT_REPLY_TYPE(1),// 评论回复
    COMMENT_ZAN_TYPE(2),// 评论点赞
    LOVE_USER_TYPE(3);// 关注某个用户

    // 指令类型,查询表时设置instruct_type字段
    private Integer reviceTypeCode;
    private ReceiveType(Integer code) {
        this.reviceTypeCode = code;
    }
    public Integer getReviceTypeCode() {
        return reviceTypeCode;
    }
    public void setReviceTypeCode(Integer reviceTypeCode) {
        this.reviceTypeCode = reviceTypeCode;
    }
}
