package com.example.forumdemo.instruct_receive.aop;

import com.example.forumdemo.entity.ForumInstructReceive;
import com.example.forumdemo.enumeration.ReceiveType;
import com.example.forumdemo.instruct_receive.anno.InstructReceive;
import com.example.forumdemo.instruct_receive.service.InstructReceiveService;
import com.example.forumdemo.instruct_receive.strategy.InstructReceiveParamBulidStrategy;
import com.example.forumdemo.instruct_receive.strategy.InstructReceiveParamBulidStrategyMap;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * 指令接收切面拦截
 */
@Aspect
@Component
public class InstructReceiveAop {
    /**
     * 所有参数构建策略Map
     */
    @Autowired
    private InstructReceiveParamBulidStrategyMap strategyMap;

    @Autowired
    private InstructReceiveService instructReceiveService;

    /**
     * 拦截所有被该注解所标记的方法
     */
    @Pointcut("@annotation(com.example.forumdemo.instruct_receive.anno.InstructReceive)")
    public void afterCut(){};

    @After("afterCut()&&@annotation(anno)")
    public void doAfter(JoinPoint jp, InstructReceive anno)throws Exception{
        // 获取注解参数
        int index = anno.index();
        ReceiveType receiveType = anno.receiveType();
        // 方法上的参数列表数组
        Object[] args = jp.getArgs();
        // 获取需要处理的参数
        Object arg = args[index];

        // 获取指定的参数构建策略
        InstructReceiveParamBulidStrategy strategy = strategyMap.getBulidStrategy(receiveType);
        ForumInstructReceive model = strategy.bulid(arg);
        // 执行保存 如果为空,则跳过处理(说明是取消点赞 或者取消关注的情况,后续看要不要删除接收表的数据)
        if(model.getAbstractId()!=null)
        instructReceiveService.save(model);
    }

}
