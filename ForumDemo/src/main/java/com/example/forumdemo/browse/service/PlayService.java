package com.example.forumdemo.browse.service;

import com.example.forumdemo.entity.ForumZuoPin;
import com.example.forumdemo.entity.ForumZuoPinExt;
import com.github.yulichang.base.MPJBaseService;

import java.util.List;

public interface PlayService extends MPJBaseService<ForumZuoPin> {

    /**
     * 根据条件查询产品表
     * @param queryParam
     * @return
     */
    List<ForumZuoPin> queryList(ForumZuoPin queryParam);

    /**
     * 查询作品详情信息
     * @param queryParam
     * @return
     */
    ForumZuoPinExt queryZuoPinDetail(ForumZuoPinExt queryParam);

}
