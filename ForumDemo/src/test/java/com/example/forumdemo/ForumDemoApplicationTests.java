package com.example.forumdemo;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.example.forumdemo.entity.ForumUser;
import com.example.forumdemo.user.mapper.UserOpeMapper;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
//@SpringBootTest
//测试类启动时就只会初始化 Spring 上下文，不再启动 Tomcat 容器了 加载某个类时,classes={}中增加class
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE, classes={})
class ForumDemoApplicationTests {

    @Autowired
    private UserOpeMapper userOpeMapper;

    @Test
    void test() {
        ForumUser user = new ForumUser();
        Long id = Long.valueOf("1641333480715235330");
        user.setUserId(id);

        QueryWrapper<ForumUser> queryWrapper = new QueryWrapper<ForumUser>();
        LambdaQueryWrapper<ForumUser> lambda1 = Wrappers.lambdaQuery();
        LambdaQueryWrapper<ForumUser> lambda2 = queryWrapper.lambda();
        LambdaQueryWrapper<ForumUser> lambda3 = new LambdaQueryWrapper<>();
        UpdateWrapper<ForumUser> updateWrapper = new UpdateWrapper<ForumUser>();
        LambdaUpdateWrapper<ForumUser> lambdaupdate1 = updateWrapper.lambda();

        LambdaQueryWrapper<ForumUser> lambda4 = Wrappers.lambdaQuery();
        LambdaUpdateWrapper<ForumUser> lambdaupdate2 = Wrappers.lambdaUpdate();

    }

}
