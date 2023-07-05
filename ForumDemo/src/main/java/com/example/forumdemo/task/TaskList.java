package com.example.forumdemo.task;

import com.example.forumdemo.browse.mapper.CommentMapper;
import com.example.forumdemo.browse.mapper.KnockingMapper;
import com.example.forumdemo.entity.*;
import com.example.forumdemo.instruct_receive.aop.ReceiveType;
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

import static sun.misc.Signal.handle;

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
    @Autowired
    private CommentMapper commentMapper;
    @Autowired
    private KnockingMapper knockingMapper;

    /**
     * 评论回复消息任务 从指令表中找type=1的数据,处理并插入到forum_message表中
     */
    @TaskLog(taskName = "评论回复消息处理")
    public Integer commentReplyMessageTask(){
        /**
         * #评论表 userId这个评论是属于谁的  reply_user_id 这个评论时回复谁的  parent_comment_id是上级ID,reply_id是根标记,如果是顶级,则根和parent_comment_id都是0,comment是用户回复的内容
         * #最终message表字段处理为:,
         * #userId 是被评论的人,因为消息是发给他的,即评论表中的reply_userId,user_content:是被回复的人的哪条评论内容被回复了,需要查询
         * # target_userId是回复的人的id,即评论表中的USER_ID  target_content:回复的什么内容,即评论表中的comment字段
         * #例如 userID=zhangsan 姓名=张三  发了一个评论,"我是张三"   comment_id="1";  user_id="lisi" 姓名='李四" 回复了 张三的评论 ":你好张三,我是李四"  comment_id='2'
         * #message表中的字段如下 id     type       abstart_id  instruct_id  user_id   user_name  user_content  target_user_id     target_userName    target_content
         * #				   自增    指令表类型1   2          指令表主键     zhangsn   张三       我是张三        lisi			     李四			   你好张三,我是李四
         * select b.instruct_id ,b.instruct_type as message_type,
         * a.comment_id as abstract_id,
         * c.user_id,c.user_name,e.comment as user_content,
         * a.work_time as happen_time,
         * d.user_id as target_user_id,d.user_name as target_user_name,a.comment as target_content
         * from forum_comment a
         * inner join forum_instruct_receive b on a.comment_id  = b.abstract_id
         * inner join forum_user c on a.reply_user_id = c.user_id
         * inner join forum_user d on a.user_id  = d.user_id
         * left join forum_comment e on a.parent_comment_id  = e.comment_id
         * order by b.instruct_id asc;
         */
        // 参考 官网https://mybatisplusjoin.com/pages/core/qt/zlj.html 自连接
        MPJLambdaWrapper<ForumComment> lambdaWrapper = new MPJLambdaWrapper<>();
        lambdaWrapper.select(ForumInstructReceive::getInstructId)
                .selectAs(ForumInstructReceive::getInstructType,ForumMessage::getMessageType)
                .selectAs(ForumComment::getCommentId,ForumMessage::getAbstractId)
                // inner join forum_instruct_receive b on a.comment_id  = b.abstract_id
                .innerJoin(ForumInstructReceive.class,ForumInstructReceive::getAbstractId,ForumComment::getCommentId)
                // inner join forum_user c on a.reply_user_id = c.user_id
                .innerJoin(ForumUser.class,ForumUser::getUserId,ForumComment::getReplyUserId,temp-> {
                    return temp.select(ForumUser::getUserId).select(ForumUser::getUserName);
                })
                .selectAs(ForumComment::getWorkTime,ForumMessage::getHappenTime)
                // inner join forum_user d on a.user_id  = d.user_id
                .innerJoin(ForumUser.class,ForumUser::getUserId,ForumComment::getUserId,temp -> {
                    return temp
                            .selectAs(ForumUser::getUserId,ForumMessage::getTargetUserId)
                            .selectAs(ForumUser::getUserName,ForumMessage::getTargetUserName);
                })
                /**
                 * 官网原话:这里容易混淆, on语句两个参数都是ForumComment, 第一个为副表条件, 第二个为主表条件, 不要弄混了
                 * leftJoin的这个表为附表  left join forum_comment e on a.parent_comment_id  = e.comment_id   e表为附表   a表为主表,
                 * 即第一个表中的条件 就是根据parentID看是否能够找到对应在评论表中的上级数据
                 */
                // left join forum_comment e on a.parent_comment_id  = e.comment_id   e.comment as user_content
                .leftJoin(ForumComment.class,ForumComment::getCommentId,ForumComment::getParentCommentId,temp -> temp.selectAs(ForumComment::getComment,ForumMessage::getUserContent))
                // a.comment as target_content
                .selectAs(ForumComment::getComment,ForumMessage::getTargetContent)
                .orderByAsc(ForumInstructReceive::getInstructId)
                // 未处理的数据
                .eq(ForumInstructReceive::getStatus,"1")
                // 类型限制,可以不加,因为数据库中这几个表的主键都是自动生成的 是唯一的,innerComment表,如果匹配,肯定是评论回复的情况
                .eq(ForumInstructReceive::getInstructType,ReceiveType.COMMENT_REPLY_TYPE.getReviceTypeCode());
        // wrap中的主表泛型已经指定为comment,所以只能用对应的commentMapper去查询 ForumMessage.class是返回的数据泛型
        List<ForumMessage> data = commentMapper.selectJoinList(ForumMessage.class,lambdaWrapper);
        /**
         * ==>  Preparing: SELECT t1.instruct_id,t1.instruct_type AS messageType,t.comment_id AS abstractId,t2.user_id,t2.user_name,t3.user_id AS targetUserId,t3.user_name AS targetUserName,t4.comment AS userContent,t.comment AS targetContent FROM forum_comment t INNER JOIN forum_instruct_receive t1 ON (t1.abstract_id = t.comment_id) INNER JOIN forum_user t2 ON (t2.user_id = t.reply_user_id) INNER JOIN forum_user t3 ON (t3.user_id = t.user_id) LEFT JOIN forum_comment t4 ON (t4.comment_id = t.parent_comment_id) WHERE (t1.status = ?) ORDER BY t1.instruct_id ASC
         * ==> Parameters: 1(String)
         */
        if(ObjectUtils.isEmpty(data))return 0;
        // 执行消息表插入和指令表更新
        return myHandle(data);
    }



    /**
     * 评论点赞消息处理
     */
    @TaskLog(taskName = "评论点赞消息处理")
    public Integer commentZanMessageTask(){
        /**
         * #敲击表(点赞)数据含义:user_ID的用户给abstract_Id(评论ID)的评论点了一个赞 type=1为作品点赞
         * 另外sql对应上的话 是不用加指令表中的指令类型(type=2) 因为这几个表的主键都是系统生成的都是唯一的  只用加未处理状态 1
         * #最终message表字段处理为:,
         * #userId 是被点赞的人,因为消息是发给他的,user_content:是被点赞的人的哪条评论内容被点赞了,需要查询
         * # target_userId是点赞的人即敲击表USER_ID  target_content:点赞根回复的区别就是主动方只有点击行为,没有内容,则空着
         * #这个查询不牵涉自关联 用户表虽然查询了两次
         *
         * select b.instruct_id ,b.instruct_type as message_type,
         * a.id as abstract_id,
         * a.user_id as target_user_id,c.user_name as target_user_name,'' as target_content,
         * a.work_time as happen_time,
         * e.user_id,e.user_name,d.comment as user_content
         * from forum_join_knocking a
         * inner join forum_instruct_receive b on a.id  = b.abstract_id
         * inner join forum_user c on a.user_id = c.user_id
         * inner join forum_comment d on a.abstract_id  = d.comment_id
         * inner join forum_user e on d.user_id = e.user_id
         * order by b.instruct_id asc;
         */
        MPJLambdaWrapper<ForumJoinKnocking> wrapper = new MPJLambdaWrapper<>();
        wrapper.select(ForumInstructReceive::getInstructId)
                .selectAs(ForumInstructReceive::getInstructType,ForumMessage::getMessageType)
                .selectAs(ForumJoinKnocking::getId,ForumMessage::getAbstractId)
                // 主表 inner join forum_instruct_receive b on a.id  = b.abstract_id
                .innerJoin(ForumInstructReceive.class,ForumInstructReceive::getAbstractId,ForumJoinKnocking::getId)
                .innerJoin(ForumUser.class,ForumUser::getUserId,ForumJoinKnocking::getUserId,temp ->{
                    // target部分  inner join forum_user c on a.user_id = c.user_id
                    return temp
                            .selectAs(ForumUser::getUserId,ForumMessage::getTargetUserId)
                            .selectAs(ForumUser::getUserName,ForumMessage::getTargetUserName);
                })
                .selectAs(ForumJoinKnocking::getWorkTime,ForumMessage::getHappenTime)
                // 主表 inner join forum_comment d on a.abstract_id  = d.comment_id
                .innerJoin(ForumComment.class,ForumComment::getCommentId,ForumJoinKnocking::getAbstractId)
                .innerJoin(ForumUser.class,ForumUser::getUserId,ForumComment::getUserId,temp -> {
                    // user部分 inner join forum_user e on d.user_id = e.user_id
                    return temp
                            .selectAs(ForumUser::getUserId,ForumUser::getUserId)
                            .selectAs(ForumUser::getUserName,ForumMessage::getUserName);
                })
                .selectAs(ForumComment::getComment,ForumMessage::getUserContent)
                .orderByAsc(ForumInstructReceive::getInstructId)
                // 找未处理的数据
                .eq(ForumInstructReceive::getStatus,"1")
                .eq(ForumInstructReceive::getInstructType, ReceiveType.COMMENT_ZAN_TYPE.getReviceTypeCode());
        List<ForumMessage> data = knockingMapper.selectJoinList(ForumMessage.class,wrapper);
        /**
         * ==>  Preparing: SELECT t1.instruct_id,t1.instruct_type AS messageType,t.id AS abstractId,t2.user_id AS targetUserId,t2.user_name AS targetUserName,t.work_time AS happenTime,t4.user_id AS userId,t4.user_name AS userName,t3.comment AS userContent FROM forum_join_knocking t INNER JOIN forum_instruct_receive t1 ON (t1.abstract_id = t.id) INNER JOIN forum_user t2 ON (t2.user_id = t.user_id) INNER JOIN forum_comment t3 ON (t3.comment_id = t.abstract_id) INNER JOIN forum_user t4 ON (t4.user_id = t3.user_id) WHERE (t1.status = ?) ORDER BY t1.instruct_id ASC
         * ==> Parameters: 1(String)
         */

        if(ObjectUtils.isEmpty(data))return 0;
        // 执行消息表插入和指令表更新
        return myHandle(data);
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

    /**
     * 公共处理方法 执行消息表插入和指令表更新
     * @param data
     * @return
     */
    private Integer myHandle(List<ForumMessage> data) {
        // 指定ID集合,用于插入消息表之后,把处理的数据的更新状态字段置为已处理
        List<ForumInstructReceive> instructReceiveList = new ArrayList<>();
        for(ForumMessage temp : data){
            temp.setWorkTime(Utils.getCurrentData());
            // 指令表数据构建
            ForumInstructReceive receive = new ForumInstructReceive();
            receive.setInstructId(temp.getInstructId());
            receive.setStatus(0);
            instructReceiveList.add(receive);
        }
        // 更新指令表数据处理状态
        instructReceiveService.updateBatchById(instructReceiveList);
        // 插入数据到消息表
        messageService.saveBatch(data);
        return data.size();
    }

    /**
     * 这个版本没有把上级回复的评论找出来
     *     @TaskLog(taskName = "评论回复消息处理")
     *     public Integer commentReplyMessageTask(){
     * //        select a.instruct_id ,a.instruct_type as message_type,
     * //        b.comment_id as abstract_id,
     * //                b.user_id ,c.user_name ,
     * //                b.comment as user_content,
     * //        b.work_time as happen_time,
     * //                b.reply_user_id as target_user_id,d.user_name as target_user_name
     * //        from forum_instruct_receive a
     * //        inner join forum_comment b on a.abstract_id  = b.comment_id
     * //        inner join forum_user c on b.user_id = c.user_id
     * //        inner join forum_user d on b.reply_user_id = d.user_id
     * //        order by a.instruct_id asc;
     *         MPJLambdaWrapper<ForumInstructReceive> wrapper = new MPJLambdaWrapper<>();
     *         wrapper
     *                 .select(ForumInstructReceive::getInstructId)
     *                 .selectAs(ForumInstructReceive::getInstructType,ForumMessage::getMessageType)
     *                 .selectAs(ForumComment::getCommentId,ForumMessage::getAbstractId)
     *                 .select(ForumComment::getUserId)
     *                 .selectAs(ForumComment::getComment,ForumMessage::getUserContent)
     *                 .selectAs(ForumComment::getWorkTime,ForumMessage::getHappenTime)
     *                 .selectAs(ForumComment::getReplyUserId,ForumMessage::getTargetUserId)
     *                 .innerJoin(ForumComment.class,ForumComment::getCommentId,ForumInstructReceive::getAbstractId)
     *                 // 查询两个姓名
     *                 .innerJoin(ForumUser.class,ForumUser::getUserId,ForumComment::getUserId,temp ->temp.selectAs(ForumUser::getUserName,ForumMessage::getUserName))
     *                 .innerJoin(ForumUser.class,ForumUser::getUserId,ForumComment::getReplyUserId,temp ->temp.selectAs(ForumUser::getUserName,ForumMessage::getTargetUserName))
     *                 .orderByAsc(ForumInstructReceive::getInstructId)
     *                 .eq(ForumInstructReceive::getStatus,"1");
     *         List<Map<String, Object>> maps = instructReceiveMapper.selectMaps(wrapper);
     *         // 对map进行message实体映射
     *         if(ObjectUtils.isEmpty(maps))return 0;
     *
     *         // 指定ID集合,用于插入消息表之后,把处理的数据的更新状态字段置为已处理
     *         List<ForumInstructReceive> instructReceiveList = new ArrayList<>();
     *         // 待插入到message表中的list集合
     *         List<ForumMessage> insertData = new ArrayList<>();
     *         for(Map<String,Object> temp : maps){
     *             // message表实体构建 将 Map 转换为 实体类
     *             ForumMessage message = JSON.parseObject(JSON.toJSONString(temp), ForumMessage.class);
     *             message.setWorkTime(Utils.getCurrentData());
     *             insertData.add(message);
     *             // 指令表数据构建
     *             ForumInstructReceive receive = new ForumInstructReceive();
     *             receive.setInstructId(message.getInstructId());
     *             receive.setStatus(0);
     *             instructReceiveList.add(receive);
     *         }
     *         // 更新指令表数据处理状态
     *         instructReceiveService.updateBatchById(instructReceiveList);
     *         // 插入数据到消息表
     *         messageService.saveBatch(insertData);
     *         int size = insertData.size();
     *         return size;
     *     }
     */

}
