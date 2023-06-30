package com.example.forumdemo.task;

import java.lang.annotation.*;

@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface TaskLog {
    // 任务名称
    String taskName() default "未知任务";
}