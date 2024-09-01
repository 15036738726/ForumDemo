package com.example.forumdemo.task;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.LocalDateTime;
@Slf4j
@Aspect
@Component
public class TaskLogAop {

    /**
     * 拦截所有被该注解所标记的方法
     */
    @Pointcut("@annotation(com.example.forumdemo.task.TaskLog)")
    public void myCut(){};

    /**
     * 环绕增强
     * @param joinPoint
     * @param anno
     */
    @Around("myCut()&&@annotation(anno)")
    public void run(ProceedingJoinPoint joinPoint, TaskLog anno){
        String methodName = joinPoint.getSignature().getName();
        String taskName = anno.taskName();
        LocalDateTime start = LocalDateTime.now();
        log.info("开始:任务名称["+ taskName + ","+methodName +"],时间:" + start.toString() + ";线程:" + Thread.currentThread().getName());
        Integer realNum = 0;
        try {
            // 执行目标方法
            Object proceed = joinPoint.proceed();
            // 为空或者返回的不是int值 则不进行转换(默认处理条数0)
            if(!(proceed == null || !(proceed instanceof Integer))){
                realNum = (Integer) proceed;
            }
        } catch (Throwable e) {
            e.printStackTrace();
        }
        LocalDateTime end = LocalDateTime.now();
        Duration duration = getTaskRunTime(start, end);
        // 毫秒数duration.toMillis
        log.info("结束:任务名称["+ taskName + ","+methodName +"],时间:"+end.toString()+";线程:" + Thread.currentThread().getName()+";耗时:" + duration.getSeconds()+"秒;共处理记录条数:"+realNum);
    }


    @Before("myCut()&&@annotation(anno)")
    public void before(JoinPoint joinPoint,TaskLog anno){
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
