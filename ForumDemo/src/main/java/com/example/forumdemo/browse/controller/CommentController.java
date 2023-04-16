package com.example.forumdemo.browse.controller;

import com.example.forumdemo.browse.service.CommentService;
import com.example.forumdemo.entity.ForumComment;
import com.example.forumdemo.util.ForumParamEnum;
import com.example.forumdemo.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/commentController")
public class CommentController {

    @Autowired
    private CommentService commentService;

    /**
     * 保存
     * @param comment
     * @return
     */
    @PutMapping("/saveComment")
    public Result<String> saveComment(@RequestBody ForumComment comment){
        commentService.saveComment(comment);
        return Result.success("发布成功");
    };


    /**
     * 根据作品id,查询当前作品下的所有评论,先加载全部,后续在看要不要优化
     * @param queryComment
     * @return
     */
    @PutMapping("/queryCommentData")
    public Result<List<ForumComment>> queryCommentData(@RequestBody ForumComment queryComment){
        List<ForumComment> list = commentService.queryCommentData(queryComment);
        return Result.success("查询成功",list);
    }

    /**
     * 获取系统config参数
     * @return
     */
    @PutMapping("/getConfigParam")
    public Result<Map<String,String>> getConfigParam(){
        Map<String, String> configParamMap = ForumParamEnum.getConfigParamMap();
        return Result.success(configParamMap);
    }

}
