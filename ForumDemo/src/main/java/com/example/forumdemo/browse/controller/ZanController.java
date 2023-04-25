package com.example.forumdemo.browse.controller;

import com.example.forumdemo.browse.service.ZanService;
import com.example.forumdemo.entity.ForumJoinZan;
import com.example.forumdemo.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/zanController")
public class ZanController {
    @Autowired
    private ZanService zanService;

    /**
     * 评论点赞 敲击
     * @param entity
     * @return
     */
    @PutMapping("/knockingComment")
    public Result<Map<String,Object>> knockingComment(@RequestBody ForumJoinZan entity){
        Map<String,Object> knocking = zanService.knockingComment(entity);
        return Result.success(knocking);
    }

    /**
     * 作品点赞 敲击
     * @param entity
     * @return
     */
    @PutMapping("/knockingZuopin")
    public Result<Integer> knockingZuopin(@RequestBody ForumJoinZan entity){
        //Integer knocking = zanService.knockingZuopin(entity);
        return Result.success(1);
    }
}
