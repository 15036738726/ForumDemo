package com.example.forumdemo.util;

import lombok.Data;

import java.io.Serializable;

/**
 * 返回信息
 * @param <T>
 */
@Data
public class Result<T> implements Serializable {
    private static final long serialVersionUID = 1L;

    private String message = "操作成功！";

    private Integer code = 0;

    private T data;

    public Result() {

    }

    /**
     * success自定义返回信息
     */
    public static <T> Result<T> success(String msg, T data) {
        Result<T> r = new Result<T>();
        r.setCode(CommonConstant.SUCCESS_CODE);
        r.setMessage(msg);
        r.setData(data);
        return r;
    }

    public static <T> Result<T> success(T data) {
        Result<T> r = new Result<T>();
        r.setCode(CommonConstant.SUCCESS_CODE);
        r.setMessage(CommonConstant.SUCCESS_MESSAGE);
        r.setData(data);
        return r;
    }

    public static <T> Result<T> success(String msg) {
        Result<T> r = new Result<T>();
        r.setCode(CommonConstant.SUCCESS_CODE);
        r.setMessage(msg);
        return r;
    }

    public static <T> Result<T> success() {
        Result<T> r = new Result<T>();
        r.setCode(CommonConstant.SUCCESS_CODE);
        r.setMessage(CommonConstant.SUCCESS_MESSAGE);
        return r;
    }

    /**
     * fail自定义返回信息
     */
    public static <T> Result<T> fail(String msg, T data) {
        Result<T> r = new Result<T>();
        r.setCode(CommonConstant.FAIL_CODE);
        r.setMessage(msg);
        r.setData(data);
        return r;
    }

    public static <T> Result<T> fail(T data) {
        Result<T> r = new Result<T>();
        r.setCode(CommonConstant.FAIL_CODE);
        r.setMessage(CommonConstant.FAIL_MESSAGE);
        r.setData(data);
        return r;
    }
    public static <T> Result<T> fail(String msg) {
        Result<T> r = new Result<T>();
        r.setCode(CommonConstant.FAIL_CODE);
        r.setMessage(msg);
        return r;
    }

    public static <T> Result<T> fial() {
        Result<T> r = new Result<T>();
        r.setCode(CommonConstant.FAIL_CODE);
        r.setMessage(CommonConstant.FAIL_MESSAGE);
        return r;
    }

    /**
     * 系统级错误 统一返回信息
     * @param data
     * @param <T>
     * @return
     */
    public static <T> Result<T> systemFial(T data) {
        Result<T> r = new Result<T>();
        r.setCode(CommonConstant.SYSTEM_ERR_CODE);
        r.setMessage(CommonConstant.SYSTEM_ERR_MESSAGE);
        r.setData(data);
        return r;
    }


}
