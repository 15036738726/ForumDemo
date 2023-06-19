package com.example.forumdemo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.io.Serializable;

/**
 * 指令接收实体
 */
@Data
public class ForumInstructReceive implements Serializable {
    // 主键
    @TableId(type = IdType.ASSIGN_ID)
    private Long instructId;
    // 指令类型  评论回复1,评论点赞2,关注用户3
    private Integer instructType;
    // 抽象id,可以是对手用户ID,或者评论ID,或者赞ID,或其他业务ID
    private Long abstractId;
    // 入库时间
    private String workTime;
    // 状态 0:已处理,1:未处理,指令处理完之后更新为0
    private Integer status;
}
