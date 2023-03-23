package com.example.forumdemo.browse.controller;

import com.example.forumdemo.jwt.PassToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class PlayController {

    /**
     * 主页面
     * @return
     */
    @RequestMapping(value = {"/","/index"})
    @PassToken
    public ModelAndView index(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("index.html");
        return mv;
    }
}
