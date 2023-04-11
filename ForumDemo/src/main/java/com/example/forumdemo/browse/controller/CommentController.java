package com.example.forumdemo.browse.controller;

import com.example.forumdemo.browse.service.CommentService;
import com.example.forumdemo.entity.ForumComment;
import com.example.forumdemo.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/commentController")
public class CommentController {

    @Autowired
    private CommentService commentService;


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

}
