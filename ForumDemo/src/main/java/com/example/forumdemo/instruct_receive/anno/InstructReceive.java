package com.example.forumdemo.instruct_receive.anno;

import com.example.forumdemo.instruct_receive.aop.ReceiveType;

import java.lang.annotation.*;

/**
 * 指令接收注解
 */
@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface InstructReceive {
    // 参数位置 默认第一个参数
    int index() default 0;
    // aop切面拦截时,使用何种方式对获取到的参数进行处理
    ReceiveType receiveType();
}
