package com.example.forumdemo.system;

import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;
import org.springframework.scheduling.support.CronTrigger;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.concurrent.Executors;

/**
 * 定时任务  基于接口的
 */
@Component
public class MyTask implements  SchedulingConfigurer   {

    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
        // 设置线程池大小
        taskRegistrar.setScheduler(Executors.newScheduledThreadPool(10));

        // 增加任务,并设置执行周期
        taskRegistrar.addTriggerTask(() -> process1(),triggerContext -> {
            // 1秒执行一次
            return new CronTrigger("*/1 * * * * ?").nextExecutionTime(triggerContext);
        });

        // 增加任务,并设置执行周期
        taskRegistrar.addTriggerTask(() -> process2(),triggerContext -> {
            // 2秒执行一次
            return new CronTrigger("*/5 * * * * ?").nextExecutionTime(triggerContext);

        });
    }

    public void process1(){
        System.out.println("第一个定时任务开始 : " + LocalDateTime.now().toLocalTime() + "....线程 : " + Thread.currentThread().getName());
        // 休眠一秒
        try {
            Thread.sleep(1000 * 1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
        }
    }

    public void process2(){
        System.out.println("第2个定时任务开始 : " + LocalDateTime.now().toLocalTime() + "....线程 : " + Thread.currentThread().getName());
    }

    private String getCron(){
/*        String cron = cronMapper.getCron(1);
        if (cron.isEmpty()) {
            System.out.println("cron is null");
        }

 */
        return null;
    }

}
