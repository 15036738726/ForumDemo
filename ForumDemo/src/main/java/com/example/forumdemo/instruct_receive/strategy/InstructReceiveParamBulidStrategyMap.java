package com.example.forumdemo.instruct_receive.strategy;

import com.example.forumdemo.entity.ForumComment;
import com.example.forumdemo.entity.ForumInstructReceive;
import com.example.forumdemo.entity.ForumJoinKnocking;
import com.example.forumdemo.instruct_receive.aop.ReceiveType;
import com.example.forumdemo.util.Utils;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

/**
 * 所有构建方式定义
 */
@Component
public class InstructReceiveParamBulidStrategyMap {
    private Map<ReceiveType,InstructReceiveParamBulidStrategy> map = new HashMap<>();
    /**
     * 定义不同的参数初始化策略
     */
    public InstructReceiveParamBulidStrategyMap(){
        InstructReceiveParamBulidStrategy commentTypeStrategy = new InstructReceiveParamBulidStrategy() {
            @Override
            public ForumInstructReceive bulid(Object obj) {
                ForumInstructReceive receive = new ForumInstructReceive();
                ForumComment comment = (ForumComment) obj;
                receive.setInstructType(1);
                receive.setAbstractId(comment.getCommentId());
                receive.setWorkTime(Utils.getCurrentData());
                return receive;
            }
        };
        map.put(ReceiveType.COMMENT_REPLY_TYPE,commentTypeStrategy);

        InstructReceiveParamBulidStrategy zanTypeStrategy = new InstructReceiveParamBulidStrategy() {
            @Override
            public ForumInstructReceive bulid(Object obj) {
                ForumInstructReceive receive = new ForumInstructReceive();
                ForumJoinKnocking zan = (ForumJoinKnocking) obj;
                receive.setInstructType(2);
                receive.setAbstractId(zan.getId());
                receive.setWorkTime(Utils.getCurrentData());
                return receive;
            }
        };
        map.put(ReceiveType.COMMENT_ZAN_TYPE,zanTypeStrategy);

        InstructReceiveParamBulidStrategy loveTypeStrategy = new InstructReceiveParamBulidStrategy() {
            @Override
            public ForumInstructReceive bulid(Object obj) {
                ForumInstructReceive receive = new ForumInstructReceive();
                ForumJoinKnocking love = (ForumJoinKnocking) obj;
                receive.setInstructType(3);
                receive.setAbstractId(love.getId());
                receive.setWorkTime(Utils.getCurrentData());
                return receive;
            }
        };
        map.put(ReceiveType.LOVE_USER_TYPE,loveTypeStrategy);
    };

    /**
     * 返回对应的策略
     * @param type
     * @return
     */
    public InstructReceiveParamBulidStrategy getBulidStrategy(ReceiveType type)throws Exception{
        InstructReceiveParamBulidStrategy strategy = map.get(type);
        if(strategy==null){
            throw new Exception("com.example.forumdemo.instruct_receive.strategy.InstructReceiveParamBulidStrategyMap.getBulidStrategy,获取策略异常");
        }
        return strategy;
    }

}
