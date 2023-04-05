package com.example.forumdemo.browse.service.impl;

import com.example.forumdemo.browse.mapper.PlayMapper;
import com.example.forumdemo.browse.service.PlayService;
import com.example.forumdemo.entity.ForumUser;
import com.example.forumdemo.entity.ForumZuoPin;
import com.example.forumdemo.util.Utils;
import com.github.yulichang.base.MPJBaseServiceImpl;
import com.github.yulichang.wrapper.MPJLambdaWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayServiceImpl extends MPJBaseServiceImpl<PlayMapper, ForumZuoPin> implements PlayService {
    @Autowired
    private PlayMapper playMapper;

    /**
     * 根据条件查询产品表
     * @param queryParam
     * @return
     */
    public List<ForumZuoPin> queryList(ForumZuoPin queryParam) {
        MPJLambdaWrapper<ForumZuoPin> lambdaWrapper = new MPJLambdaWrapper<ForumZuoPin>();
        // 开始构建构建Wrapper 主表的全字段
        lambdaWrapper.selectAll(ForumZuoPin.class)
                // 一对一查询并映射Association,把forumUser实体类中的所有字段,映射到ForumZuoPin实体类中的getUserInfo中
                .selectAssociation(ForumUser.class,ForumZuoPin::getUserInfo)
                // 链接表  连接条件
                .leftJoin(ForumUser.class,ForumUser::getUserId,ForumZuoPin::getUserId);
        // 设置查询参数
        // 查询归类设置 如果如果是0,就查询观看人数高的(lookCount倒排序),否则,查询指定的归类
        boolean contentTypeCondition = queryParam.getContentType() == 0;
        lambdaWrapper.orderByDesc(contentTypeCondition,ForumZuoPin::getLookCount);
        lambdaWrapper.eq(!contentTypeCondition,ForumZuoPin::getContentType,queryParam.getContentType());

        // 删除状态
        lambdaWrapper.eq(ForumZuoPin::getDel,queryParam.getDel());
        // 执行查询
        List<ForumZuoPin> list = playMapper.selectJoinList(ForumZuoPin.class, lambdaWrapper);

        /**
         * 处理界面显示文本
         * 1.观看次数
         * 2.发布时间
         * 3.
         *
         */
        Optional.ofNullable(list).ifPresent(e -> e.stream().forEach(e1 -> {
            e1.setLookCountText(Utils.lookCountText(e1.getLookCount()));
            e1.setWorkTimeText(Utils.workTimeText(e1.getWorkTime()));
        }));

        // 数据太少,这里暂时先增加点数据 追加5个
//        Optional<ForumZuoPin> any = list.stream().findAny();
//        for(int i = 0;i<5;i++){
//            list.add(any.get());
//        }
        return list;
    }

}
