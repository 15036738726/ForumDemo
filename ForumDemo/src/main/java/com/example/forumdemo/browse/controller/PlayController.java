package com.example.forumdemo.browse.controller;

import com.example.forumdemo.browse.service.PlayService;
import com.example.forumdemo.entity.ForumZuoPin;
import com.example.forumdemo.jwt.PassToken;
import com.example.forumdemo.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

/**
 * 首页数据相关
 */
@RestController
public class PlayController {

    @Autowired
    private PlayService playService;


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

    /**
     * 加载主页产品
     * @param queryParam
     * @return
     */
    @PutMapping("/loadItemData")
    @ResponseBody
    public Result<List<ForumZuoPin>> loadItemData(@RequestBody ForumZuoPin queryParam){
        List<ForumZuoPin> data = playService.queryList(queryParam);
        playService.queryList2(queryParam);
        return Result.success("加载成功",data);
    }
}
