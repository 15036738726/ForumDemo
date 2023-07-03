package com.example.forumdemo.message.service.impl;

import com.example.forumdemo.entity.ForumMessage;
import com.example.forumdemo.message.mapper.MessageMapper;
import com.example.forumdemo.message.service.MessageService;
import com.github.yulichang.base.MPJBaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl extends MPJBaseServiceImpl<MessageMapper,ForumMessage> implements MessageService {
    @Autowired
    private MessageMapper messageMapper;



}
