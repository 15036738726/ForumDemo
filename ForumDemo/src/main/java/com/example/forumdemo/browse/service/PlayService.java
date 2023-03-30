package com.example.forumdemo.browse.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.forumdemo.entity.ForumZuoPin;
import com.example.forumdemo.entity.ItemQuery;

import java.util.HashMap;
import java.util.List;

public interface PlayService extends IService<ForumZuoPin> {

    /**
     * 根据条件查询产品表
     * @param itemQuery
     * @return
     */
    List<ForumZuoPin> queryList(ForumZuoPin queryParam);
}
