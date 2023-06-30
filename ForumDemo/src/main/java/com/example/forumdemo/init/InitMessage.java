package com.example.forumdemo.init;

import com.example.forumdemo.task.TaskList;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

/**
 * 项目启动的时候 把积攒的指令数据统一做一次处理 异步执行,之后通过定时任务控制任务执行
 */
@Slf4j
@Component
public class InitMessage {
    @Autowired
    private TaskList taskList;

    /**
     * 使用异步执行任务,线程池使用我们预先定义好的
     */
    @Async("systemThreadPool")
    public void initMessageTask(){
        log.info("####异步处理积赞的指令表数据到消息表开始####");
        taskList.commentReplyMessageTask();
        taskList.commentZanMessageTask();
        taskList.loveUserMessageTask();
        log.info("####异步处理积赞的指令表数据到消息表结束####");
    }
}
