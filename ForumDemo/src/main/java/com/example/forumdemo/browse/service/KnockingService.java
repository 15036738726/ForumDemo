package com.example.forumdemo.browse.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.forumdemo.entity.ForumJoinKnocking;

import java.util.Map;

public interface KnockingService extends IService<ForumJoinKnocking> {
    /**
     * 敲击事件
     * @param entity
     * @return
     */
    Integer knocking(ForumJoinKnocking entity);

    /**
     * 评论敲击
     * @param entity
     * @return
     */
    Map<String,Object> zanComment(ForumJoinKnocking entity);

    /**
     * 作品点赞敲击
     * @param entity
     * @return
     */
    Map<String, Object> zanZuopin(ForumJoinKnocking entity);

    /**
     * 作品收藏敲击
     * @param entity
     * @return
     */
    Map<String, Object> loveZuopin(ForumJoinKnocking entity);

}
