package com.example.forumdemo.interceptor;

import com.example.forumdemo.jwt.MyJwtInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.List;

/**
 * 配置拦截器
 */
@Configuration
public class InterceptorConfig implements WebMvcConfigurer {

    @Autowired
    private MyJwtInterceptor myJwtInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 创建白名单,针对myJwtInterceptor拦截的白名单
        List<String> patterns = new ArrayList<String>();
        patterns.add("/error");
        // 登录验证拦截器类,拦截所有
        //registry.addInterceptor(myJwtInterceptor).addPathPatterns("/**").excludePathPatterns(patterns);
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        //发送/main.html请求来到bmodule/B01
        // registry.addViewController("/main.html").setViewName("B01");
    }
}
