package com.example.forumdemo;

import com.example.forumdemo.entity.Chain;
import com.example.forumdemo.entity.ForumComment;

import javax.xml.stream.events.Comment;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class Test {

    public static void main(String[] args) {
/*        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        int year = getRandomNumberInRange(2018,2023);
        int month = getRandomNumberInRange(1,12);
        int day = getRandomNumberInRange(1,28);
        int hour = getRandomNumberInRange(0,23);
        int minute = getRandomNumberInRange(0,59);
        int second = getRandomNumberInRange(0,59);
        //int nanoOfSecond = getRandomNumberInRange(0,999);
        LocalDateTime localDateTime = LocalDateTime.of(year, month, day, hour, minute, second);
        System.out.println(localDateTime.toString());
        String format = formatter.format(localDateTime);
        System.out.println(format);*/


/*        LocalDateTime localDateTime1 = LocalDateTime.of(2022, 4, 5, 18, 5, 10);
        LocalDateTime localDateTime2 = LocalDateTime.of(2023, 4, 5, 18, 5, 10);
        // 相差的分钟数
        long temp = Duration.between(localDateTime1, localDateTime2).toMinutes();
        System.out.println(temp);*/


/*        LocalDate localDate1 = LocalDate.of(2022, 4, 5);
        LocalDate localDate2 = LocalDate.of(2023, 4, 5);
        Period between = Period.between(localDate1, localDate2);
        System.out.println(between.getDays());
        System.out.println(between.getMonths());
        //System.out.println(between.getUnits());
        System.out.println(between.getYears());*/

        // main 分支保护,拒绝强推,pull request进行代码合并,后续推送,往dev2.0上推送

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

        ForumComment a1 = new ForumComment();
        a1.setCommentId(1L);
        a1.setComment("AAA");
        a1.setZanCount(30);
        ForumComment b1 = new ForumComment();
        b1.setCommentId(1L);
        b1.setComment("BBB");
        b1.setZanCount(20);
        ForumComment c1 = new ForumComment();
        c1.setCommentId(3L);
        c1.setComment("CCCC");
        c1.setZanCount(10);
        List<ForumComment> allList = new ArrayList<>();
        allList.add(a1);
        allList.add(b1);
        allList.add(c1);

        Comparator<ForumComment> comparator = Comparator
                .comparing(ForumComment::getCommentId, Comparator.reverseOrder())
                .thenComparing(ForumComment::getZanCount, Comparator.reverseOrder());

        List<ForumComment> collect = allList.stream()
                .sorted(comparator)
                .collect(Collectors.toList());
        System.out.println(collect);




    }


    public static List<Chain> getChain(List<ForumComment> data,List<ForumComment> target,ForumComment top){
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


    public static void printChain(Chain chain){
        System.out.println(chain.getData());
        if(chain.getNext()!=null){
            printChain(chain.getNext());
        }
    }

    private static int getRandomNumberInRange(int min, int max) {
        if (min >= max) {
            throw new IllegalArgumentException("max must be greater than min");
        }
        Random r = new Random();
        return r.nextInt((max - min) + 1) + min;
    }
}
