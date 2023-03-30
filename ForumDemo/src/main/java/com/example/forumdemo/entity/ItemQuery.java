package com.example.forumdemo.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * playController查询使用的实体
 */
@Data
public class ItemQuery implements Serializable {
    // 页面大小
    private Integer pageSize;
    // 第几页
    private Integer pageNum;
    // 查询类型  科技,生活,娱乐,文学
    private String contentType;
    // 删除状态
    private String del;


}
