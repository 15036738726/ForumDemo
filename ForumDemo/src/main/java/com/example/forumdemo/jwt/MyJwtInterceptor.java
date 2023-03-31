package com.example.forumdemo.jwt;

import cn.hutool.core.text.CharSequenceUtil;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.example.forumdemo.entity.ForumUser;
import com.example.forumdemo.user.service.UserOpeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Method;

/**
 * 登录验证拦截器 获取token并验证,通过则放行,不通过则提示异常
 */
@Component
public class MyJwtInterceptor implements HandlerInterceptor {

    @Autowired
    private UserOpeService userOpeService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 如果不是映射的方法,直接放行
        if (!(handler instanceof HandlerMethod)) {
            return true;
        }
        HandlerMethod handlerMethod = (HandlerMethod) handler;
        Method method = handlerMethod.getMethod();
        //检查是否通过有PassToken注解
        if (method.isAnnotationPresent(PassToken.class)) {
            //如果有则跳过认证检查
            PassToken passToken = method.getAnnotation(PassToken.class);
            if (passToken.required()) {
                return true;
            }
        }
        //String token = request.getHeader("token");
        // 从cookie中获取token
        String token = this.getTokenByCookie(request);

        //否则进行token检查
        if (CharSequenceUtil.isBlank(token)) {
            // 无token的情况或者token过期,需要提示用户该登录了
            //throw new MyException(ResponseEnum.TOKEN_EX.getCode(), ResponseEnum.TOKEN_EX.getResultMessage());
            //throw new RuntimeException();
            //ResponseEntity.status(HttpStatus.OK).body(Result.systemFial(null));
            //response.sendRedirect("/test.html");
            //request.getRequestDispatcher("/index").forward(request,response);
            //System.out.println(request.getRequestURI());
            //response.sendRedirect("/userOpe/test");
            //request.getRequestDispatcher("/index").forward(request,response);
            //response.sendRedirect("/xx.html");
            throw new RuntimeException();
        }
        //获取token中的用户名
        String userName;
        try {
            // 从token中获取登录成功时,写入浏览器中的明文用户名
            userName = JWT.decode(token).getAudience().get(0);
        } catch (JWTDecodeException j) {
            //throw new MyException(ResponseEnum.TOKEN_EX.getCode(), ResponseEnum.TOKEN_EX.getResultMessage());
            throw new RuntimeException();
        }
        //根据token中的userName查询数据库
        ForumUser forumUser = new ForumUser();
        forumUser.setUserName(userName);
        // 获取这个用户名对应的用户信息,主要是获取password,用户验证
        ForumUser user = userOpeService.getUserByUserName(forumUser);
        if (user == null) {
            //throw new MyException(ResponseEnum.USER_EX.getCode(), ResponseEnum.USER_EX.getResultMessage());
            throw new RuntimeException();
        }

        //验证token
        JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(user.getPassword())).build();
        try {
            // 验证失败时,该方法会抛出异常
            jwtVerifier.verify(token);
        } catch (JWTVerificationException e) {
            //throw new MyException(406, "权限验证失败！");
            throw new RuntimeException();
        }
        // 验证通过放行
        return true;
    }

    /**
     * 从cookie中获取指定的token数据
     * @return
     */
    private String getTokenByCookie(HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        if(cookies!=null){
            for (int i = 0; i < cookies.length; i++) {
                if(JwtTokenUtils.TOKEN_KEY.equals(cookies[i].getName())){
                    return cookies[i].getValue();
                }
            }
        }
        return null;
    }

}
