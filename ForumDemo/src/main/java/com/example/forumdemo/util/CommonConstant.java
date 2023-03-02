package com.example.forumdemo.util;

/**
 * 状态码
 */
public interface CommonConstant {

    // 全局异常处理返回code 系统级错误
    public static final Integer SYSTEM_ERR_CODE = 500;
    public static final String SYSTEM_ERR_MESSAGE = "系统内部错误";

    // 预期的请求拒绝
    public static final Integer FAIL_CODE = 400;
    public static final String FAIL_MESSAGE = "失败";

    // 预期的请求成功
    public static final Integer SUCCESS_CODE = 200;
    public static final String SUCCESS_MESSAGE = "成功";




}

