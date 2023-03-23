package com.example.forumdemo.system.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.forumdemo.entity.ForumUser;
import com.example.forumdemo.system.mapper.UserOpeMapper;
import com.example.forumdemo.system.service.UserOpeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserOpeServiceImpl extends ServiceImpl<UserOpeMapper,ForumUser> implements UserOpeService{

    @Autowired
    private UserOpeMapper userOpeMapper;

    /**
     * 注册用户,重复,则跳过,返回true 注册成功返回false
     * @param forumUser
     * @return
     */
    @Override
    public boolean userRegister(ForumUser forumUser){
        QueryWrapper<ForumUser> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_name",forumUser.getUserName());
        // 判断是否重复 根据用户名
        ForumUser user = userOpeMapper.selectOne(queryWrapper);
        if(user!=null){
            return true;
        }
        int count = userOpeMapper.insert(forumUser);
        return false;
    }

    /**
     * 用户登录 验证账号和用户名是否匹配
     * @param forumUser
     * @return
     */
    @Override
    public boolean userLogin(ForumUser forumUser) {
        QueryWrapper<ForumUser> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_name",forumUser.getUserName());
        queryWrapper.eq("password",forumUser.getPassword());
        ForumUser user = userOpeMapper.selectOne(queryWrapper);
        // 账号存在,则登录成功
        if(user!=null) {
            return true;
        }
        return false;
    }

    /**
     * 根据用户名,查询用户信息
     * @param forumUser
     * @return
     */
    @Override
    public ForumUser getUserByUserName(ForumUser forumUser) {
        QueryWrapper<ForumUser> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_name",forumUser.getUserName());
        ForumUser user = userOpeMapper.selectOne(queryWrapper);
        return user;
    }

}
