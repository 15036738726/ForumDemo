package com.example.forumdemo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.io.Serializable;

/**
 * 首页实体
 */
@Data
//@TableName("ForumZuoPin")
public class ForumZuoPin implements Serializable {
    @TableId(type = IdType.ASSIGN_ID)
    private Long zuopinId;
    // category : 分类 视频1/图片2/论题3/
    private Integer category;
    // content_type: 内容归类  默认值,如果是0,则为随机推荐查询
    private Integer contentType = 0;
    // title: 内容标题
    private String title;
    // url:封面图片地址
    private String imgPath;
    // video_path:视频地址
    private String videoPath;

    // 联查其他信息
    // user_id://内容是由那个用户发布的
    private Long userId;
    /*
    // user_name://用户名称   冗余字段 实体考虑 建表不需要
    @TableField(exist = false)
    private String userName;
    // user_head:// 用户头像  冗余字段 实体考虑 建表不需要
    @TableField(exist = false)
    private String userHead;
    */
    @TableField(exist = false)
    private ForumUser userInfo;

    // yuanchuang:原创 boolean值
    private boolean yuanchuang;
    // look_count  int值
    private Integer lookCount;
    // look_count:6万次观看
    @TableField(exist = false)
    private String lookCountText;
    // dan_mu:82条弹幕
    private Integer danMu;
    // work_time://发布时间
    private String workTime;
    // work_time: 3个月前
    @TableField(exist = false)
    private String workTimeText;
    // biao_qian:标签:#猫咪的迷惑行为  #猫咪  #动物
    private String biaoQian;

    /**
     * 			实体需要返回{
     * 				guanzhu_status登录用户在该视频下的 已关注/关注 信息  0:关注 1:已关注
     * 				dianzan_status点赞状态 0未赞   1已赞
     * 				shoucang_status收藏状态 0未收藏  1已收藏
     *          }
     */
    @TableField(exist = false)
    private Integer guanzhuStatus;
    @TableField(exist = false)
    private Integer dianzanStatus;
    @TableField(exist = false)
    private Integer shoucangStatus;


    // del:删除标志 0:已删除 1:未删除 默认查询未删除的
    private Integer del = 1;
    // zan:视频点赞数
    private Integer zan;


}
