package com.example.forumdemo.entity;

import lombok.Data;
import org.springframework.data.relational.core.sql.In;

import java.io.Serializable;

/**
 * 用户信息扩展
 */
@Data
public class ForumUserExt extends ForumUser implements Serializable {
    // 发布作品数	 通过中间表可算出来
    private Integer contentPushCount;
    // guanzhu_ed:被关注数
    private Integer guanzhuEd;
    // guanzhu_id:被关注数 转换成对应文本
    private String guanzhuEdText;


//			--content_pull_count:发布作品数	 通过中间表可算出来 实体需要考虑
//             --content_pull_count_zan_ed:作品被点赞数
//             --content_pull_count_zan:点赞别人作品数
//             --comment_zan://赞别人评论
//            --comment_zan_ed://评论被别人赞
//
//            --do_guanzhu:关注数
//			--guanzhu_ed:被关注数
}
