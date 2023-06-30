package com.example.forumdemo.task;

import org.springframework.stereotype.Component;

/**
 * 任务列表类,定义处理方法
 */
@Component
public class TaskList {

    /**
     * 评论回复消息任务 从指令表中找type=1的数据,处理并插入到forum_message表中
     */
    @TaskLog(taskName = "评论回复消息处理")
    public void commentReplyMessageTask(){
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
        }
        System.out.println("xxxxx执行定时任务,评论回复消息处理");
    }



    /**
     * 评论点赞消息处理
     */
    @TaskLog(taskName = "评论点赞消息处理")
    public void commentZanMessageTask(){
        System.out.println("xxxxx执行定时任务,评论点赞消息处理");
    }

    /**
     * 关注情况消息处理
     */
    @TaskLog(taskName = "关注任务消息处理")
    public void loveUserMessageTask(){
        System.out.println("xxxxx执行定时任务,关注任务消息处理");
    }

}
