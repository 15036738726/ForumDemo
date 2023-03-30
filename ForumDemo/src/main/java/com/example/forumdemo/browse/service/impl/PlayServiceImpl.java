package com.example.forumdemo.browse.service.impl;

import cn.hutool.core.text.CharSequenceUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.forumdemo.browse.mapper.PlayMapper;
import com.example.forumdemo.browse.service.PlayService;
import com.example.forumdemo.entity.ForumZuoPin;
import com.example.forumdemo.entity.ItemQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class PlayServiceImpl extends ServiceImpl<PlayMapper, ForumZuoPin> implements PlayService {
    @Autowired
    private PlayMapper playMapper;

    /**
     * 根据条件查询产品表
     * @param queryParam
     * @return
     */
    @Override
    public List<ForumZuoPin> queryList(ForumZuoPin queryParam) {
        QueryWrapper queryWrapper = new QueryWrapper();
        // 查询归类设置 如果如果是0,就查询观看人数高的
        if(queryParam.getContentType()==0){
            queryWrapper.orderByDesc("look_count");
        }else{
            queryWrapper.eq("contentType",queryParam.getContentType());
        }
        // 是否删除
        queryWrapper.eq("del",queryParam.getDel());


        List<ForumZuoPin> forumZuoPins = playMapper.selectList(queryWrapper);

        // 数据太少,这里暂时先增加点数据
        Optional<ForumZuoPin> any = forumZuoPins.stream().findAny();
        // 追加5个
        for(int i = 0;i<5;i++){
            forumZuoPins.add(any.get());
        }

        return forumZuoPins;
    }

}
