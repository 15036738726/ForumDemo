package com.example.forumdemo.browse.service;

import com.example.forumdemo.entity.ForumZuoPin;
import com.github.yulichang.base.MPJBaseService;

import java.util.List;

public interface PlayService extends MPJBaseService<ForumZuoPin> {

    /**
     * 根据条件查询产品表
     * @param queryParam
     * @return
     */
    List<ForumZuoPin> queryList(ForumZuoPin queryParam);

}
