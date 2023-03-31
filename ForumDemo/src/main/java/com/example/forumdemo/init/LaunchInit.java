package com.example.forumdemo.init;

import com.example.forumdemo.browse.mapper.PlayMapper;
import com.example.forumdemo.init.mapper.ForumParamMapper;
import com.example.forumdemo.util.ForumParamEnum;
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
@Component
public class LaunchInit implements ApplicationRunner {

    @Autowired
    private ForumParamMapper forumParamMapper;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        /**
         * load系统参数
         */
        initForumParam();

    }

    /**
     * 初始化系统配置参数
     */
    private void initForumParam(){
        System.out.println("----------initForumParam加载配置表参数---------");
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
