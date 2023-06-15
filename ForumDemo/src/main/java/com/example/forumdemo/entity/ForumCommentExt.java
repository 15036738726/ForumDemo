package com.example.forumdemo.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

import java.io.Serializable;

/**
 * 针对ForumComment类的扩展属性 减少原来类的污染
 *
 */
@Data
public class ForumCommentExt extends ForumComment implements Serializable {

    // 最热排序0 最新排序1 查询的时候传参用到
    @TableField(exist = false)
    private Integer sortType;

}
