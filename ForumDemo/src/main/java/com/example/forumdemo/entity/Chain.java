package com.example.forumdemo.entity;

import java.util.ArrayList;
import java.util.List;

/**
 * 打包链模型  这个暂时没有用到 2023-04-24
 */
public class Chain<T> {
    private T data;
    private Chain next;

    public Chain(T data){
        this.data = data;
    }
    public Chain(){

    }
    public void setData(T data){
         this.data = data;
    }
    public T getData(){
        return this.data;
    }

    public void setNext(Chain next){
        this.next = next;
    }

    public Chain getNext(){
        return this.next;
    }


    public static List<Chain> getChain(List<ForumComment> data, List<ForumComment> target, ForumComment top){
        // 按照时间倒叙排列 还是正序,这个后续确定一下
        List<Chain> result = new ArrayList<>();
        // 先找每个target 对应的打包链
        target.stream().forEach(e -> {
            Chain temp = new Chain(e);
            // 从目标e 找到top 返回chain 是一条从child到top的回复链
            findUp(data,e,top,temp);
            result.add(temp);
        });
        return result;
    }

    private static void testPrint(List<Chain> result) {
        result.stream().forEach(e -> {
            System.out.println("---------$$$$$$$$$$$$$$$$$$$-------");
            System.out.println(e.getData());
            Chain next = e.getNext();
            while (next!=null){
                System.out.println(next.getData());
                next = next.getNext();
            }
        });
    }

    private static void findUp(List<ForumComment> data, ForumComment e, ForumComment top,Chain chain) {
        // 回复ID 上一级的comment对象
        Long replyCommentId = e.getReplyId();
        if(!replyCommentId.equals(top.getCommentId())){
            // 还要继续往上找
            // 先找到上一级
            ForumComment fc = new ForumComment();
            // 创建此次评论的chain对象
            Chain c = new Chain();
            for (int i = 0; i < data.size(); i++) {
                ForumComment temp = data.get(i);
                if(temp.getCommentId().equals(replyCommentId)){
                    fc = temp;
                    // 找到对应的节点 设置到chain中
                    c.setData(fc);
                    // 把找到的chain 追加到链中
                    chain.setNext(c);
                    break;
                }
            }
            findUp(data,fc,top,c);
        }else{
            // 单个回复的情况
            Chain<ForumComment> root = new Chain<>(top);
            chain.setNext(root);
        }
    }

    /*        Chain root=new Chain("火车头");
        Chain n1=new Chain("车厢A");
        Chain n2=new Chain("车厢B");
        Chain n3=new Chain("车厢C");
        root.setNext(n1);
        n1.setNext(n2);
        n2.setNext(n3);

        printChain(root);*/

        /*ForumComment t1 = new ForumComment();
        t1.setReplyId(5L);
        t1.setCommentId(6L);
        t1.setParentCommentId(1L);
        ForumComment t2 = new ForumComment();
        t2.setReplyId(4L);
        t2.setCommentId(5L);
        t2.setParentCommentId(1L);
        ForumComment t3 = new ForumComment();
        t3.setReplyId(3L);
        t3.setCommentId(4L);
        t3.setParentCommentId(1L);
        ForumComment t4 = new ForumComment();
        t4.setReplyId(2L);
        t4.setCommentId(3L);
        t4.setParentCommentId(1L);
        ForumComment t5 = new ForumComment();

        t5.setReplyId(1L);
        t5.setCommentId(2L);
        t5.setParentCommentId(1L);

        Chain ct1 = new Chain(t1);
        Chain ct2 = new Chain(t2);
        Chain ct3 = new Chain(t3);
        Chain ct4 = new Chain(t4);
        Chain ct5 = new Chain(t5);

        List<ForumComment> dataAll = new ArrayList<>();
        dataAll.add(t1);
        dataAll.add(t2);
        dataAll.add(t3);
        dataAll.add(t4);
        dataAll.add(t5);
        List<ForumComment> targetUser = new ArrayList<>();
        targetUser.add(t1);
        targetUser.add(t2);
        targetUser.add(t3);
        targetUser.add(t4);
        targetUser.add(t5);

        ForumComment root = new ForumComment();
        root.setReplyId(0L);
        root.setParentCommentId(0L);
        root.setCommentId(1L);

        List<Chain> result = getChain(dataAll,targetUser,root);
        testPrint(result);*/

}
