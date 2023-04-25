package com.example.forumdemo.browse.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.forumdemo.entity.ForumJoinZan;

import java.util.Map;

public interface ZanService extends IService<ForumJoinZan> {
    /**
     * 敲击事件
     * @param entity
     * @return
     */
    Integer knocking(ForumJoinZan entity);

    /**
     * 评论敲击
     * @param entity
     * @return
     */
    Map<String,Object> knockingComment(ForumJoinZan entity);
}
