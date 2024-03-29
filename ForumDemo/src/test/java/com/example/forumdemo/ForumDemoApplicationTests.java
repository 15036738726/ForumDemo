package com.example.forumdemo;

import com.example.forumdemo.browse.service.KnockingService;
import com.example.forumdemo.entity.ForumJoinKnocking;
import com.example.forumdemo.user.mapper.UserOpeMapper;
import com.example.forumdemo.util.Utils;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Map;

@RunWith(SpringRunner.class)
//@SpringBootTest
//测试类启动时就只会初始化 Spring 上下文，不再启动 Tomcat 容器了 加载某个类时,classes={}中增加class
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE, classes={})
class ForumDemoApplicationTests {
    /**
     * @Test
     *org.junit.jupiter.api.Test和org.junit.Test区别
     * 如果引入后面的包，必须用public来修饰方法(类名和方法名)，  如果引入前面的包，就不能public来修饰方法。
     */

    @Autowired
    private UserOpeMapper userOpeMapper;

    @Autowired
    private KnockingService zanService;

    @Test
    void test() {
/*        ForumUser user = new ForumUser();
        Long id = Long.valueOf("1641333480715235330");
        user.setUserId(id);

        QueryWrapper<ForumUser> queryWrapper = new QueryWrapper<ForumUser>();
        LambdaQueryWrapper<ForumUser> lambda1 = Wrappers.lambdaQuery();
        LambdaQueryWrapper<ForumUser> lambda2 = queryWrapper.lambda();
        LambdaQueryWrapper<ForumUser> lambda3 = new LambdaQueryWrapper<>();
        UpdateWrapper<ForumUser> updateWrapper = new UpdateWrapper<ForumUser>();
        LambdaUpdateWrapper<ForumUser> lambdaupdate1 = updateWrapper.lambda();

        LambdaQueryWrapper<ForumUser> lambda4 = Wrappers.lambdaQuery();
        LambdaUpdateWrapper<ForumUser> lambdaupdate2 = Wrappers.lambdaUpdate();*/

/*        ForumJoinKnocking zan = new ForumJoinKnocking();
        zan.setUserId(1L);
        zan.setAbstractId(1L);
        zan.setAbstractType(1);
        Integer knocking = zanService.knocking(zan);
        System.out.println(knocking);*/

        ForumJoinKnocking zan = new ForumJoinKnocking();

        zan.setUserId(1643564375287652353L);
        zan.setAbstractId(1650396198646697985L);
        zan.setAbstractType(1);
        zan.setWorkTime(Utils.getCurrentData());
        Map<String, Object> knocking = zanService.zanComment(zan);
        System.out.println(knocking);


    }

}
