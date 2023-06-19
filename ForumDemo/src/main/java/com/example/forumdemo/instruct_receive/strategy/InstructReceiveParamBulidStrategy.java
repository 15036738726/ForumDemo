package com.example.forumdemo.instruct_receive.strategy;

import com.example.forumdemo.entity.ForumInstructReceive;

import java.util.Map;

/**
 * 策略接口,指令接收参数构建策略接口
 */
public interface InstructReceiveParamBulidStrategy {
    /**
     * 构建指令表参数
     * @return
     */
    ForumInstructReceive bulid(Object obj);
}
