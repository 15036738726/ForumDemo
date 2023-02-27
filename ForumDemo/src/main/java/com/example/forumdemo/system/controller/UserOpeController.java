package com.example.forumdemo.system.controller;

import com.example.forumdemo.entity.ForumUser;
import com.example.forumdemo.util.Result;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@ResponseBody
@RestController
@RequestMapping("userOpe")
public class UserOpeController {

    /**
     * 用户注册
     * @return
     */
    @RequestMapping("userRegister")
    public Result<String> userRegister(@RequestBody ForumUser forumUser){
        System.out.println(forumUser);
        return Result.success("注册成功");
    }

    @RequestMapping("test")
    public ModelAndView test(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("USER_REGISTER.html");
        return mv;
    }
}
