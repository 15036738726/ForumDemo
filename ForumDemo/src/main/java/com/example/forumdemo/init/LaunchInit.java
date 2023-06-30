package com.example.forumdemo.init;

import com.example.forumdemo.init.mapper.ForumParamMapper;
import com.example.forumdemo.util.ForumParamEnum;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * 项目启动时的一些初始化操作
 */
@Slf4j
@Component
public class LaunchInit implements ApplicationRunner {

    @Autowired
    private ForumParamMapper forumParamMapper;

    @Autowired
    private InitMessage initMessage;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        log.info("ApplicationRunner.run方法开始");
        /**
         * load系统参数
         */
        initForumParam();
        /**
         * 异步方式处理 积赞的指令数据封装成消息记录插入到消息表,项目启动的时候,只处理一次,后续通过定时任务去处理
         */
        initMessage.initMessageTask();
        log.info("ApplicationRunner.run方法结束");
    }

    /**
     * 初始化系统配置参数
     */
    private void initForumParam(){
        log.info("initForumParam加载配置表参数");
        List<Map<String, Object>> maps = forumParamMapper.selectMaps(null);
        // System.out.println(maps);
        Optional.ofNullable(maps).ifPresent(e -> e.stream().forEach(temp -> {
            String key = String.valueOf(temp.get("forum_cfg_key"));// cfg_text_fold_limit
            String value =  String.valueOf(temp.get("forum_cfg_value"));//50
            System.out.println(key +"-->"+ value);
            ForumParamEnum.autoSet(key,value);
        }));
    }

}
