package com.example.forumdemo.user.controller;

import com.example.forumdemo.entity.ForumUser;
import com.example.forumdemo.jwt.JwtTokenUtils;
import com.example.forumdemo.jwt.PassToken;
import com.example.forumdemo.user.service.UserOpeService;
import com.example.forumdemo.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping("/userOpe")
public class UserOpeController {

    @Autowired
    private UserOpeService userOpeService;

    /**
     * 用户注册 跳过验证拦截
     * @return
     */
    @PutMapping("/userRegister")
    public Result<String> userRegister(@RequestBody ForumUser forumUser){
        boolean result = userOpeService.userRegister(forumUser);
        if(result){
            return Result.fail("用户["+forumUser.getUserName()+"]已存在");
        }
        return Result.success("用户["+forumUser.getUserName()+"]注册成功");
    }

    /**
     * 用户登录  @PassToken跳过验证拦截 登录成功之后,把token写入cookie中
     * @return
     */
    @PutMapping("/userLogin")
    @PassToken
    public Result<String> userLogin(@RequestBody ForumUser forumUser, HttpServletResponse response, HttpServletRequest request){
        ForumUser user = userOpeService.getUserByUserName(forumUser);
        if(user.getPassword().equals(forumUser.getPassword())){
            // 登录成功 根据用户名和密码,生成token
            String token = JwtTokenUtils.getToken(user.getUserName(), user.getPassword());
            Cookie cookie = new Cookie(JwtTokenUtils.TOKEN_KEY, token);
            // 存活时间,单位为秒
            cookie.setMaxAge(JwtTokenUtils.COOKIE_LIVE_TIME);
            response.addCookie(cookie);
            return Result.success("登录成功......");
        }
        // 登录失败
        return Result.fail("登录失败,密码不匹配......");
    }

    @PutMapping("/test")
    @PassToken
    public ModelAndView test(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("test.html");
        System.out.println(this.getClass().getResource("/"));
        return mv;
    }
}
