package com.example.forumdemo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

/**
 * 系统参数实体
 */
@Data
public class ForumParam {
    @TableId(type = IdType.INPUT)
    private String forumCfgKey;
    private String forumCfgValue;
}
