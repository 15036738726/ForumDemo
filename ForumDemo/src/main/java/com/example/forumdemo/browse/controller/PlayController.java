package com.example.forumdemo.browse.controller;

import com.example.forumdemo.browse.service.PlayService;
import com.example.forumdemo.entity.ForumZuoPin;
import com.example.forumdemo.entity.ForumZuoPinExt;
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
        // 如果不写重定向,则默认跳转到template目录下
        mv.setViewName("redirect:index.html");
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
        return Result.success("加载成功",data);
    }

    /**
     * 查询作品详情
     * @param queryParam
     * @return
     */
    @PutMapping("/queryZuoPinDetail")
    @ResponseBody
    public Result<ForumZuoPinExt> queryZuoPinDetail(@RequestBody ForumZuoPinExt queryParam){
        ForumZuoPinExt data = playService.queryZuoPinDetail(queryParam);
        return Result.success("作品详细信息加载成功",data);
    }
}
