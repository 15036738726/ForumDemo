package com.example.forumdemo.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.forumdemo.entity.ForumUser;

public interface UserOpeService extends IService<ForumUser>{
    /**
     * 用户注册
     * @param forumUser
     * @return
     */
    boolean userRegister(ForumUser forumUser);

    /**
     * 用户登录
     * @param forumUser
     * @return
     */
    boolean userLogin(ForumUser forumUser);

    /**
     * 根据用户名,查询用户信息
     * @param forumUser
     * @return
     */
    ForumUser getUserByUserName(ForumUser forumUser);
}
