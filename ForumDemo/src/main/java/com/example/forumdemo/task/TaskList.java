package com.example.forumdemo.task;

import com.alibaba.fastjson.JSON;
import com.example.forumdemo.entity.ForumComment;
import com.example.forumdemo.entity.ForumInstructReceive;
import com.example.forumdemo.entity.ForumMessage;
import com.example.forumdemo.entity.ForumUser;
import com.example.forumdemo.instruct_receive.mapper.InstructReceiveMapper;
import com.example.forumdemo.instruct_receive.service.InstructReceiveService;
import com.example.forumdemo.message.mapper.MessageMapper;
import com.example.forumdemo.message.service.MessageService;
import com.example.forumdemo.util.Utils;
import com.github.yulichang.wrapper.MPJLambdaWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 任务列表类,定义处理方法
 */
@Component
public class TaskList {
    @Autowired
    private InstructReceiveService instructReceiveService;
    @Autowired
    private InstructReceiveMapper instructReceiveMapper;
    @Autowired
    private MessageMapper messageMapper;
    @Autowired
    private MessageService messageService;

    /**
     * 评论回复消息任务 从指令表中找type=1的数据,处理并插入到forum_message表中
     */
    @TaskLog(taskName = "评论回复消息处理")
    public Integer commentReplyMessageTask(){
        /**
         * select a.instruct_id ,a.instruct_type as message_type,
         * b.comment_id as abstract_id,
         * b.user_id ,c.user_name ,
         * b.comment as user_content,
         * b.work_time as happen_time,
         * b.reply_user_id as target_user_id,d.user_name as target_user_name
         * from forum_instruct_receive a
         * inner join forum_comment b on a.abstract_id  = b.comment_id
         * inner join forum_user c on b.user_id = c.user_id
         * inner join forum_user d on b.reply_user_id = d.user_id
         * order by a.instruct_id asc;
         */
        MPJLambdaWrapper<ForumInstructReceive> wrapper = new MPJLambdaWrapper<>();
        wrapper
                .select(ForumInstructReceive::getInstructId)
                .selectAs(ForumInstructReceive::getInstructType,ForumMessage::getMessageType)
                .selectAs(ForumComment::getCommentId,ForumMessage::getAbstractId)
                .select(ForumComment::getUserId)
                .selectAs(ForumComment::getComment,ForumMessage::getUserContent)
                .selectAs(ForumComment::getWorkTime,ForumMessage::getHappenTime)
                .selectAs(ForumComment::getReplyUserId,ForumMessage::getTargetUserId)
                .innerJoin(ForumComment.class,ForumComment::getCommentId,ForumInstructReceive::getAbstractId)
                // 查询两个姓名
                .innerJoin(ForumUser.class,ForumUser::getUserId,ForumComment::getUserId,temp ->temp.selectAs(ForumUser::getUserName,ForumMessage::getUserName))
                .innerJoin(ForumUser.class,ForumUser::getUserId,ForumComment::getReplyUserId,temp ->temp.selectAs(ForumUser::getUserName,ForumMessage::getTargetUserName))
                .orderByAsc(ForumInstructReceive::getInstructId)
                .eq(ForumInstructReceive::getStatus,"1");
        List<Map<String, Object>> maps = instructReceiveMapper.selectMaps(wrapper);
        // 对map进行message实体映射
        if(ObjectUtils.isEmpty(maps))return 0;

        // 指定ID集合,用于插入消息表之后,把处理的数据的更新状态字段置为已处理
        List<ForumInstructReceive> instructReceiveList = new ArrayList<>();
        // 待插入到message表中的list集合
        List<ForumMessage> insertData = new ArrayList<>();
        for(Map<String,Object> temp : maps){
            // message表实体构建 将 Map 转换为 实体类
            ForumMessage message = JSON.parseObject(JSON.toJSONString(temp), ForumMessage.class);
            message.setWorkTime(Utils.getCurrentData());
            insertData.add(message);
            // 指令表数据构建
            ForumInstructReceive receive = new ForumInstructReceive();
            receive.setInstructId(message.getInstructId());
            receive.setStatus(0);
            instructReceiveList.add(receive);
        }
        // 更新指令表数据处理状态
        instructReceiveService.updateBatchById(instructReceiveList);
        // 插入数据到消息表
        messageService.saveBatch(insertData);
        int size = insertData.size();
        return size;
    }



    /**
     * 评论点赞消息处理
     */
    @TaskLog(taskName = "评论点赞消息处理")
    public Integer commentZanMessageTask(){
       // List<ForumInstructReceive> data = instructReceiveService.getInstructDataByType(2);
        System.out.println("xxxxx执行定时任务,评论点赞消息处理");
        return 5;
    }

    /**
     * 关注情况消息处理
     */
    @TaskLog(taskName = "关注任务消息处理")
    public Integer loveUserMessageTask(){
        //List<ForumInstructReceive> data = instructReceiveService.getInstructDataByType(3);
        System.out.println("xxxxx执行定时任务,关注任务消息处理");
        return 5;
    }

}
