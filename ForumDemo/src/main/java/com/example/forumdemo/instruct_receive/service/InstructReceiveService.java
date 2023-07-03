package com.example.forumdemo.instruct_receive.service;

import com.example.forumdemo.entity.ForumInstructReceive;
import com.github.yulichang.base.MPJBaseService;

import java.util.List;

/**
 * 指令接收服务
 */
public interface InstructReceiveService extends MPJBaseService<ForumInstructReceive> {
    /**
     * 根据指令类型获取数据
     * @return
     */
    List<ForumInstructReceive> getInstructDataByType(Integer type);
}
