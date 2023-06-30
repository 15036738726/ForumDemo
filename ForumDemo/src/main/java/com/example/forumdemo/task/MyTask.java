package com.example.forumdemo.task;

import com.example.forumdemo.entity.ForumParam;
import com.example.forumdemo.init.mapper.ForumParamMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;
import org.springframework.scheduling.support.CronTrigger;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.Executors;

/**
 * 定时任务  基于接口的
 */
@Component
public class MyTask implements  SchedulingConfigurer   {
    @Autowired
    private ForumParamMapper paramMapper;
    /**
     *     这个注入非常有必要 因为内部调用会导致代理失效 从而LogAOP无法有效拦截
     *     这里也可以注入MyTask,通过注入的对象来调用方法,这里索性全部把任务方法都提到另外一个类中
     */
    @Autowired
    private TaskList taskList;

    /**
     * 定时任务默认cron配置,如果获取不到就取这里边的
     */
    private Map<String, String> CRON = new HashMap<>();
    public MyTask(){
        // 初始化CRON
        // 评论回复  3分钟跑一次
        CRON.put("cron_comment_reply_type","0 */3 * * * ?");
        // 评论点赞  5分钟跑一次
        CRON.put("cron_comment_zan_type","0 */5 * * * ?");
        // 关注 10分钟跑一次
        CRON.put("cron_love_user_type","0 */10 * * * ?");
    }

    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
        // 指定定时任务线程池大小
        taskRegistrar.setScheduler(Executors.newScheduledThreadPool(5));

        // 增加"处理生成评论回复消息"任务,并设置执行周期
        taskRegistrar.addTriggerTask(() -> taskList.commentReplyMessageTask(),triggerContext -> {
            // 查询获取定时任务对应的cron表达式
            String cron  = getCron("cron_comment_reply_type");
            return new CronTrigger(cron).nextExecutionTime(triggerContext);
        });

        // 增加"处理生成评论点赞消息"任务,并设置执行周期
        taskRegistrar.addTriggerTask(() -> taskList.commentZanMessageTask(),triggerContext -> {
            String cron  = getCron("cron_comment_zan_type");
            return new CronTrigger(cron).nextExecutionTime(triggerContext);
        });

        // 增加"处理生成被关注消息"任务,并设置执行周期
        taskRegistrar.addTriggerTask(() -> taskList.loveUserMessageTask(),triggerContext -> {
            String cron  = getCron("cron_love_user_type");
            return new CronTrigger(cron).nextExecutionTime(triggerContext);
        });
    }

    /**
     * 每次任务执行的时候,都从数据库中获取最新的配置,控制不重启服务器而改变任务执行时间
     * @param key
     * @return
     */
    private String getCron(String key){
        ForumParam forumParam = paramMapper.selectById(key);
        if (Objects.isNull(forumParam)) {
            return CRON.get(key);
        }
        String cron = forumParam.getForumCfgValue();
        return cron;
    }

}
