package com.example.forumdemo.interceptor;

import com.example.forumdemo.system.MyJwtInterceptor;
import com.example.forumdemo.system.JacksonObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
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

    @Autowired
    private JacksonObjectMapper jacksonObjectMapper;

    /**
     * 全局请求拦截控制
     * @param registry
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 创建白名单,针对myJwtInterceptor拦截的白名单
        List<String> patterns = new ArrayList<String>();
        patterns.add("/error");
        // 登录验证拦截器类,拦截所有 这个暂时不用,先保留
        // registry.addInterceptor(myJwtInterceptor).addPathPatterns("/**").excludePathPatterns(patterns);
    }

    /**
     *  扩展mvc框架的消息转换器
     * @param converters
     */
    @Override
    public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
        /**
         * 处理Long类型精度损失 系统所有Long类型,返回给前端都处理成字符串,
         * 不用每个字段单独加转换注解@JsonSerialize(using = ToStringSerializer.class)
         */
        //创建消息转换器对象
        MappingJackson2HttpMessageConverter messageConverter = new MappingJackson2HttpMessageConverter();
        //设置对象转换器，底层使用Jackson将Java对象转为json
        messageConverter.setObjectMapper(jacksonObjectMapper);
        //将上面的消息转换器对象追加到mvc框架的转换器集合中 自定义的设置在第一个
        converters.add(0, messageConverter);
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        //发送/main.html请求来到bmodule/B01
        // registry.addViewController("/main.html").setViewName("B01");
    }
}
