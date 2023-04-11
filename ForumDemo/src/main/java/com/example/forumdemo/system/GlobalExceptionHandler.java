package com.example.forumdemo.system;
import com.example.forumdemo.util.Result;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
/**
 * 全局异常处理
 */
@ControllerAdvice
@ResponseBody
public class GlobalExceptionHandler {
    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);
    /**
     * 系统异常 预期以外异常 按照正常请求返回,包含系统内部错误信息即可
     * @param ex
     * @return
     */
    @ExceptionHandler(Exception.class)
    //@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseStatus(value = HttpStatus.OK)
    public ResponseEntity<Result> handleUnexpectedServer(Exception ex) {
        logger.error("###系统异常,全局捕获###", ex);
        //return Result.systemFial(ex.toString());
        return ResponseEntity.status(HttpStatus.OK).body(Result.systemFial(ex.toString()));
    }
}
