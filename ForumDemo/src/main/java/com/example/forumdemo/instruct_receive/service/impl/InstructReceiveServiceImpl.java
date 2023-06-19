package com.example.forumdemo.instruct_receive.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.forumdemo.entity.ForumInstructReceive;
import com.example.forumdemo.instruct_receive.mapper.InstructReceiveMapper;
import com.example.forumdemo.instruct_receive.service.InstructReceiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InstructReceiveServiceImpl extends ServiceImpl<InstructReceiveMapper, ForumInstructReceive> implements InstructReceiveService {
    @Autowired
    private InstructReceiveMapper instructReceiveMapper;
}
