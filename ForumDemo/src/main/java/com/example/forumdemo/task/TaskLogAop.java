package com.example.forumdemo.task;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.LocalDateTime;
@Slf4j
@Aspect
@Component
public class TaskLogAop {
    //统计请求的处理时间
    ThreadLocal<LocalDateTime> startTime = new ThreadLocal<>();

    /**
     * 拦截所有被该注解所标记的方法
     */
    @Pointcut("@annotation(com.example.forumdemo.task.TaskLog)")
    public void myCut(){};

    @Before("myCut()&&@annotation(anno)")
    public void before(JoinPoint joinPoint,TaskLog anno){
        String methodName = joinPoint.getSignature().getName();
        String taskName = anno.taskName();
        LocalDateTime start = LocalDateTime.now();
        // 设置时间
        startTime.set(start);
        // start.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"))
        log.info("开始:任务名称["+ taskName + ","+methodName +"],时间:" + start.toString() + ";线程:" + Thread.currentThread().getName());
    }

    /**
     *
     * @param joinPoint
     * @param anno
     * @param count 方法执行完返回的参数,可以没有,如果有则打印
     * @throws Exception
     */
    @AfterReturning(value = "myCut()&&@annotation(anno)",returning = "count")
    public void afterReturning(JoinPoint joinPoint,TaskLog anno,Object count)throws Exception{
        String methodName = joinPoint.getSignature().getName();
        String taskName = anno.taskName();
        LocalDateTime end = LocalDateTime.now();
        LocalDateTime start = startTime.get();
        Duration duration = getTaskRunTime(start, end);
        Integer realNum = 0;
        if(count == null || !(count instanceof Integer)){
            realNum = 0;
        }
        // 毫秒数duration.toMillis
        log.info("结束:任务名称["+ taskName + ","+methodName +"],时间:"+end.toString()+";线程:" + Thread.currentThread().getName()+";耗时:" + duration.getSeconds()+"秒;共处理记录条数:"+realNum);
    }

    /**
     * 获取任务运行时间
     * @return
     */
    private Duration getTaskRunTime(LocalDateTime start,LocalDateTime end){
        Duration duration = Duration.between(start, end);
        return duration;
    }

}
