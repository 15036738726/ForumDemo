package com.example.forumdemo.instruct_receive.strategy;

import com.example.forumdemo.entity.ForumComment;
import com.example.forumdemo.entity.ForumInstructReceive;
import com.example.forumdemo.entity.ForumJoinKnocking;
import com.example.forumdemo.enumeration.ReceiveType;
import com.example.forumdemo.util.Utils;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

/**
 * 所有构建方式定义 放入到容器中
 */
@Component
public class InstructReceiveParamBulidStrategyMap {
    private Map<ReceiveType,InstructReceiveParamBulidStrategy> map = new HashMap<>();

    /**
     * 定义不同的参数初始化策略 如果想要在服务器启动的时候就创建,则可以把这个方法名称定义成构造方法
     */
    public void InstructReceiveParamBulidStrategyMapInit(){
        // 评论回复对应的指令参数构建
        InstructReceiveParamBulidStrategy commentTypeStrategy = obj -> {
            ForumInstructReceive receive = new ForumInstructReceive();
            ForumComment comment = (ForumComment) obj;
            receive.setInstructType(ReceiveType.COMMENT_REPLY_TYPE.getReviceTypeCode());
            receive.setAbstractId(comment.getCommentId());
            receive.setWorkTime(Utils.getCurrentData());
            return receive;
        };
        map.put(ReceiveType.COMMENT_REPLY_TYPE,commentTypeStrategy);

        // 评论点赞对应的指令参数构建
        InstructReceiveParamBulidStrategy zanTypeStrategy = obj -> {
            ForumInstructReceive receive = new ForumInstructReceive();
            ForumJoinKnocking zan = (ForumJoinKnocking) obj;
            receive.setInstructType(ReceiveType.COMMENT_ZAN_TYPE.getReviceTypeCode());
            receive.setAbstractId(zan.getId());
            receive.setWorkTime(Utils.getCurrentData());
            return receive;
        };
        map.put(ReceiveType.COMMENT_ZAN_TYPE,zanTypeStrategy);

        // 关注操作对应的指令参数构建
        InstructReceiveParamBulidStrategy loveTypeStrategy = obj -> {
            ForumInstructReceive receive = new ForumInstructReceive();
            ForumJoinKnocking love = (ForumJoinKnocking) obj;
            receive.setInstructType(ReceiveType.LOVE_USER_TYPE.getReviceTypeCode());
            receive.setAbstractId(love.getId());
            receive.setWorkTime(Utils.getCurrentData());
            return receive;
        };
        map.put(ReceiveType.LOVE_USER_TYPE,loveTypeStrategy);
    };

    /**
     * 返回对应的策略
     * @param type
     * @return
     */
    public InstructReceiveParamBulidStrategy getBulidStrategy(ReceiveType type)throws Exception{
        if(map.size()==0){
            InstructReceiveParamBulidStrategyMapInit();
        }
        InstructReceiveParamBulidStrategy strategy = map.get(type);
        if(strategy==null){
            throw new Exception("获取策略异常...com.example.forumdemo.instruct_receive.strategy.InstructReceiveParamBulidStrategyMap.getBulidStrategy");
        }
        return strategy;
    }

}
