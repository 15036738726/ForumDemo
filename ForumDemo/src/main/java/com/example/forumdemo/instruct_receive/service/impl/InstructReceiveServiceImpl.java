package com.example.forumdemo.instruct_receive.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.example.forumdemo.entity.ForumInstructReceive;
import com.example.forumdemo.instruct_receive.mapper.InstructReceiveMapper;
import com.example.forumdemo.instruct_receive.service.InstructReceiveService;
import com.github.yulichang.base.MPJBaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstructReceiveServiceImpl extends MPJBaseServiceImpl<InstructReceiveMapper, ForumInstructReceive> implements InstructReceiveService {
    @Autowired
    private InstructReceiveMapper instructReceiveMapper;

    /**
     * 根据指令类型获取数据
     * @param type
     * @return
     */
    @Override
    public List<ForumInstructReceive> getInstructDataByType(Integer type) {
        LambdaQueryWrapper<ForumInstructReceive> queryWrapper = Wrappers.lambdaQuery();
        queryWrapper.eq(type!=null,ForumInstructReceive::getInstructType,type);
        // 按照数据插入时间 正排
        queryWrapper.orderByAsc(ForumInstructReceive::getInstructId);
        return instructReceiveMapper.selectList(queryWrapper);
    }
}
