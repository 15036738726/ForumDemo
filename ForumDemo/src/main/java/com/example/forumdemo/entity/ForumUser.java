package com.example.forumdemo.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * 用户实体
 */
@Data
public class ForumUser implements Serializable {
    private String userId;
    private String userName;
    private String password;
    private Integer sex;
    private String address;
    private String email;



    //    注册表FORUM_USER:
//    user_id  主键user_32位uuid
//    user_name  不可重复
//    password  登录密码
//    sex 0:女  1:男
//    addres 40
//    email
//			--content_pull_count:发布作品数	 通过中间表可算出来 实体需要考虑
//             --content_pull_count_zan_ed:作品被点赞数
//             --content_pull_count_zan:点赞别人作品数
//             --comment_zan://赞别人评论
//            --comment_zan_ed://评论被别人赞
//
//            --do_guanzhu:关注数
//			--guanzhu_ed:被关注数



}
