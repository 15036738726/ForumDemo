package com.example.forumdemo.browse.controller;

import com.example.forumdemo.browse.service.KnockingService;
import com.example.forumdemo.entity.ForumJoinKnocking;
import com.example.forumdemo.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/knockingController")
public class knockingController {
    @Autowired
    private KnockingService knockingService;

    /**
     * 评论点赞 敲击
     * @param entity
     * @return
     */
    @PutMapping("/zanComment")
    public Result<Map<String,Object>> zanComment(@RequestBody ForumJoinKnocking entity){
        Map<String,Object> knocking = knockingService.zanComment(entity);
        return Result.success(knocking);
    }

    /**
     * 作品点赞 敲击
     * @param entity
     * @return
     */
    @PutMapping("/zanZuopin")
    public Result<Map<String,Object>> zanZuopin(@RequestBody ForumJoinKnocking entity){
        Map<String,Object> knocking = knockingService.zanZuopin(entity);
        return Result.success(knocking);
    }

    /**
     * 作品收藏 敲击
     * @param entity
     * @return
     */
    @PutMapping("/loveZuopin")
    public Result<Map<String,Object>> loveZuopin(@RequestBody ForumJoinKnocking entity){
        Map<String,Object> knocking = knockingService.loveZuopin(entity);
        return Result.success(knocking);
    }

    /**
     * 关注用户 敲击
     * @param entity
     * @return
     */
    @PutMapping("/loveUser")
    public Result<Map<String,Object>> loveUser(@RequestBody ForumJoinKnocking entity){
        Map<String,Object> knocking = knockingService.loveUser(entity);
        return Result.success(knocking);
    }
}
