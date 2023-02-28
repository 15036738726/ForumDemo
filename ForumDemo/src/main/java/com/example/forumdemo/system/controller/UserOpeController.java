package com.example.forumdemo.system.controller;

import com.example.forumdemo.entity.ForumUser;
import com.example.forumdemo.system.service.UserOpeService;
import com.example.forumdemo.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


@RestController
@RequestMapping("userOpe")
public class UserOpeController {

    @Autowired
    private UserOpeService userOpeService;

    /**
     * 用户注册
     * @return
     */
    @RequestMapping("userRegister")
    @ResponseBody
    public Result<String> userRegister(@RequestBody ForumUser forumUser){
        //System.out.println(forumUser);
        boolean result = userOpeService.userRegister(forumUser);
        if(result){
            return Result.fail("已存在");
        }
        return Result.success("注册成功");
    }

    @RequestMapping("test")
    public ModelAndView test(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("USER_REGISTER.html");
        System.out.println(this.getClass().getResource("/"));
        return mv;
    }
}
