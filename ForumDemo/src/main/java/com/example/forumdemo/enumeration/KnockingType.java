package com.example.forumdemo.enumeration;

/**
 * 敲击类型
 */
public enum KnockingType {
    //1:评论点赞2:作品点赞3:作品收藏4:关注
    COMMENT_ZAN_TYPE(1),
    ZUOPIN_ZAN_TYPE(2),
    ZUOPIN_COLLECT_TYPE(3),
    USER_COLLECT_TYPE(4);

    private Integer code;

    KnockingType(Integer code) {
        this.code = code;
    }

    public Integer getCode() {
        return code;
    }
}
