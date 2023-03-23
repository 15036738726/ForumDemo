package com.example.forumdemo.jwt;

import com.auth0.jwt.JWT;

import java.util.Date;
import cn.hutool.core.date.DateUtil;
import com.auth0.jwt.algorithms.Algorithm;

public class JwtTokenUtils {
    private JwtTokenUtils(){};

    // token的名称
    public static final String TOKEN_KEY = "FORUM_TOKEN";

    // cookie存活时间
    public static final Integer COOKIE_LIVE_TIME = 60;

    /**
     * 生成token
     * @param userName
     * @param sign
     * @return
     */
    public static String getToken(String userName,String sign){
        return  JWT.create()
                //签收者 把用户名设置到里边,用于token中获取,并查询到该用户信息  userName = JWT.decode(token).getAudience().get(0);
                .withAudience(userName)
                //主题
                .withSubject("token")
                //1小时候token过期
                .withExpiresAt(DateUtil.offsetHour(new Date(),1))
                //以password作为token的密钥
                .sign(Algorithm.HMAC256(sign));
    }
}
