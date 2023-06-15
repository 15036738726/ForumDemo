package com.example.forumdemo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.io.Serializable;

/**
 * 用户实体
 */
@Data
//@TableName("ForumUser")
public class ForumUser implements Serializable {
    @TableId(type = IdType.ASSIGN_ID)
    private Long userId;
    // 不可重复
    private String userName;
    // 登录密码
    private String password;
    private Integer sex;
    private String address;
    private String email;
    // 用户头像 图片地址
    private String userHead;
}
