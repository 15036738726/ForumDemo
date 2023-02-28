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
}
