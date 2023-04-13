package com.example.forumdemo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * 评论实体
 */
@Data
public class ForumComment implements Serializable {
    // 主键
    @TableId(type = IdType.ASSIGN_ID)
    private Long commentId;
    // 作品ID
    private Long zuopinId;
    // 用户ID 那个用户回复
    private Long userId;
    // 回复者用户信息 张三回复李四 张三对象
    @TableField(exist = false)
    private ForumUser userInfo;
    // 评论主体
    private String comment;
    // 1级 0  2级 父评论Id
    private Long parentCommentId;
    // 回复那个用户
    private Long replyUserId;
    // 接收者,被回复者  张三回复李四 李四角色
    @TableField(exist = false)
    private ForumUser replyUserInfo;
    // 入库时间
    private String workTime;
    // work_time: 3个月前
    @TableField(exist = false)
    private String workTimeText;
    // 删除状态
    private Integer del = 1;
    // 点赞数
    private Integer zanCount = 0;
    // 回复的是哪条评论ID
    private Long replyId;
    // 评论已读0 未读1
    private Integer readState;
    // 热评
    @TableField(exist = false)
    private boolean hotState;

    // 评论下挂的子评论 只有2层
    @TableField(exist = false)
    private List<ForumComment> child;

    /**
     * 存在一种情况(只在子评论列表中会产生,top不存在这种情况)
     * 在某条top评论的下方 比如说有A B C 三位回复者 他们回复的都这当前这个顶级评论
     * top:有人在吗
     * child:{
     *     A:我在
     *     B回复A:你在哪
     *     C:我不在
     *     A回复B:我在月球
     * }
     * 那么前端展示又稍微有所不同 评论内容就需要编程 @xxx的形式
     * 所以需要返回此字段,为true时,是艾特的形式,A与B的关系  为false时,是普通形式,C的情况
     * 数据库不用加字段,观察之后,发现当parent_Comment_id和reply_id相等时,即为C的情况 该字段设置为false
     * 不等的时候,就是艾特的情况  该字段设置为true
     * 顶级top 0==0 同样返回false,不影响,同样返回false
     */
    @TableField(exist = false)
    private boolean aiteState;
}
