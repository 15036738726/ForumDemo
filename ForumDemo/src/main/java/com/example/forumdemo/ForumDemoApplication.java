package com.example.forumdemo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@MapperScan({"com.example.forumdemo.*.mapper"})
@EnableScheduling
public class ForumDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(ForumDemoApplication.class, args);
    }

}
