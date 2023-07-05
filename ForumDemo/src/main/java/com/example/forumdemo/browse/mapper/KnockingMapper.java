package com.example.forumdemo.browse.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.forumdemo.entity.ForumJoinKnocking;
import com.github.yulichang.base.MPJBaseMapper;

public interface KnockingMapper extends MPJBaseMapper<ForumJoinKnocking> {
    /**
     * 这里BaseMapper替换成了MPJBaseMapper  定时任务那里牵涉复杂关联查询 但service中的还是基础的mp
     * 一般都是基础的  用BaseMapper<ForumJoinKnocking>; IService<ForumJoinKnocking> ; ServiceImpl<KnockingMapper, ForumJoinKnocking>
     * 牵涉复杂查询的  用MPJBaseMapper<ForumJoinKnocking>; MPJBaseService<ForumJoinKnocking>; MPJBaseServiceImpl<KnockingMapper, ForumJoinKnocking>
     * 但是不配套也不影响
     */

}
