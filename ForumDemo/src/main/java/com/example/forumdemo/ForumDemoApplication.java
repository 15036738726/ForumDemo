package com.example.forumdemo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan({"com.example.forumdemo.*.mapper"})
public class ForumDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(ForumDemoApplication.class, args);
    }

}
