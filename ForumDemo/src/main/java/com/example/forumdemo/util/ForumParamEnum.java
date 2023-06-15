package com.example.forumdemo.util;

import java.util.HashMap;
import java.util.Map;

/**
 * 系统配置参数 项目启动时,从数据库读取,然后重新覆盖设置
 */
public enum ForumParamEnum {
    // 文字过长折叠限制
    cfg_text_fold_limit("50"),
    // 评论条数几条折叠
    cfg_count_fold_limit("5"),
    // 展开 [某个评论内容过长提示模板]
    cfg_text_formwork("展开"),
    // 展开[更多/5条]回复 [子评论过长模板],使用时替换
    cfg_count_formwork("展开*回复"),
    // 热评值,点赞数超过多少就算热评
    cfg_hot_count("5"),
    // 关注/已关注模板,切割使用
    cfg_guanzhu_formwork("关注*已关注");

    private String val;
    ForumParamEnum(String val)
    {
        this.val = val;
    }

    public String getVal() {
        return val;
    }
    public void setVal(String val) {
        this.val = val;
    }

    /**
     * 返回map
     */
    public static Map<String,String> getConfigParamMap(){
        Map<String, String> map = new HashMap<>();
        map.put("cfg_text_fold_limit",cfg_text_fold_limit.getVal());
        map.put("cfg_count_fold_limit",cfg_count_fold_limit.getVal());
        map.put("cfg_text_formwork",cfg_text_formwork.getVal());
        map.put("cfg_count_formwork",cfg_count_formwork.getVal());
        map.put("cfg_hot_count",cfg_hot_count.getVal());
        map.put("cfg_guanzhu_formwork",cfg_guanzhu_formwork.getVal());
        return map;
    }

    /**
     * 覆盖参数值
     * @param key
     * @param val
     */
    public static void autoSet(String key,String val){
        switch (key){
            case "cfg_text_fold_limit" :
                cfg_text_fold_limit.setVal(val);
                break;
            case "cfg_count_fold_limit" :
                cfg_count_fold_limit.setVal(val);
                break;
            case "cfg_text_formwork" :
                cfg_text_formwork.setVal(val);
                break;
            case "cfg_count_formwork" :
                cfg_count_formwork.setVal(val);
                break;
            case "cfg_hot_count" :
                cfg_hot_count.setVal(val);
                break;
            case "cfg_guanzhu_formwork" :
                cfg_guanzhu_formwork.setVal(val);
                break;
        }
    }
}
