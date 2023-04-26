package com.example.forumdemo.browse.service.impl;

import com.example.forumdemo.browse.mapper.CommentMapper;
import com.example.forumdemo.browse.service.CommentService;
import com.example.forumdemo.entity.ForumComment;
import com.example.forumdemo.entity.ForumJoinZan;
import com.example.forumdemo.entity.ForumUser;
import com.example.forumdemo.util.Utils;
import com.github.yulichang.base.MPJBaseServiceImpl;
import com.github.yulichang.wrapper.MPJLambdaWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl extends MPJBaseServiceImpl<CommentMapper, ForumComment> implements CommentService {
    @Autowired
    private CommentMapper commentMapper;

    /**
     * 保存方法,保存评论
     * @param comment
     */
    @Override
    public ForumComment saveComment(ForumComment comment) {
        comment.setWorkTime(Utils.getCurrentData());
        commentMapper.insert(comment);
        // 该条数据入库之后,调用一次查询方法查询对应的所有信息,用户页面渲染 跳过某些方法处理
        List<ForumComment> list = queryCommentData(comment,false);
        Optional<ForumComment> first = list.stream().findFirst();
        return first.get();
    }

    @Override
    public List<ForumComment> queryCommentData(ForumComment queryComment,boolean skipHandle) {
        MPJLambdaWrapper<ForumComment> wrapper = new MPJLambdaWrapper<>();
        wrapper.selectAll(ForumComment.class)
                .selectAssociation("t1",ForumUser.class,ForumComment::getUserInfo)
                .selectAssociation("t2",ForumUser.class,ForumComment::getReplyUserInfo)
                .leftJoin(ForumUser.class,ForumUser::getUserId,ForumComment::getUserId)
                .leftJoin(ForumUser.class,ForumUser::getUserId,ForumComment::getReplyUserId);
        // 登录用户点赞情况关联查询
        boolean loginStatus = !ObjectUtils.isEmpty(queryComment.getUserId());
        if(loginStatus){
            // 追击查询表以及关联条件
            wrapper
                    .selectAll(ForumJoinZan.class)
                    .selectAs(ForumJoinZan::getId,"zanId")
                    .leftJoin(ForumJoinZan.class, on -> on
                            .eq(ForumJoinZan::getAbstractId,ForumComment::getCommentId)
                            .eq(ForumJoinZan::getUserId,queryComment.getUserId())
                            .eq(ForumJoinZan::getAbstractType,1)
                    );
        }
        // 设置作品id参数
        wrapper.eq(ForumComment::getZuopinId,queryComment.getZuopinId());
        // 如果存在commentId,则加上该条件
        wrapper.eq(queryComment.getCommentId()!=null,ForumComment::getCommentId,String.valueOf(queryComment.getCommentId()));
        // 查询正常数据
        wrapper.eq(ForumComment::getDel,queryComment.getDel());
        List<ForumComment> list = commentMapper.selectJoinList(ForumComment.class, wrapper);

        /**
         * 对返回对象进行处理,尽管可以在一个方法中处理,但这里所有的处理都单独分开写,代码更清晰,用的流,效率差不了多少
         */

        /**
         * 所有对象的字段处理
         * 1.处理@艾特情况,给所有comment对象中的aiteState字段设值
         * 2.处理workTimeText字段
         */
        handleCommentDataForFiled(list);

        List<ForumComment> top = new ArrayList<>();
        if(skipHandle){
            // 处理层级
            top = handleCommentDataForLevel(list);
            // 排序问题处理
            top = handleCommentDataSort(top,queryComment);
        }else{
            top.addAll(list);
        }
        return top;
    }

    /**
     * 处理互相回复的情况,需要给每个实体设置isAiTe字段值,实体类中有情况说明
     * @param list
     */
    private void handleCommentDataForFiled(List<ForumComment> list) {
        Optional.ofNullable(list).ifPresent(e -> {
            e.stream().forEach(temp -> {
                boolean equals = temp.getParentCommentId().equals(temp.getReplyId());
                // 设置艾特字段 相等为true 则设置该字段为false
                temp.setAiteState(!equals);
                temp.setWorkTimeText(Utils.workTimeText(temp.getWorkTime()));
            });
        });
    }

    /**
     * 处理评论数据,层级问题封装 这一层不处理排序问题
     * @param list
     */
    private List<ForumComment> handleCommentDataForLevel(List<ForumComment> list){
        List<ForumComment> rtn = new ArrayList<>();
        Optional.ofNullable(list).ifPresent(e -> {
            // e ->list
            // 收集所有顶级
            Long val = Long.valueOf("0");
            List<ForumComment> top = e.stream()
                    .filter(temp -> temp.getParentCommentId().equals(val))
                    // top层按照点赞倒排
                    //.sorted(Comparator.comparing(ForumComment::getZanCount).reversed())
                    .collect(Collectors.toList());
            // 遍历top 把所有的子类,封装到child属性中
            top.stream().forEach(temp -> {
                Long topCommentId = temp.getCommentId();
                List<ForumComment> child = list.stream()
                        .filter(childTemp -> childTemp.getParentCommentId().equals(topCommentId))
                        // child层按照id正拍,最早的回复放上边,保证回复从上到下,是一套合理的对话
                        //.sorted(Comparator.comparing(ForumComment::getCommentId))
                        .collect(Collectors.toList());
                temp.setChild(child);
            });
            // 设置返回值
            rtn.addAll(top);
        });
        return rtn;
    }

    /**
     * 处理排序
     * @param list
     * @param comment
     * @return
     */
    private List<ForumComment> handleCommentDataSort(List<ForumComment> list,ForumComment comment) {
        Long userId = comment.getUserId();
        boolean loginStatus = !ObjectUtils.isEmpty(userId);
        List<ForumComment> rtn = new ArrayList<>();

        /**
         * 		top层(不存在语序问题,都是针对作品进行的评论发布,是独立的):5个排序指标
         * 			自己的评论放在前面
         * 			自己在top下有评论的,把该top放在前面
         * 			剩下按照点赞量 倒排
         * 			最后按照评论数 倒排
         * 			最后按照时间   倒排 早的在下 晚的在上 可用主键替代
         *
         * 		child层:完全按照入库时间正排 即早的放到上边  正排
         * 		如果是登录,保持入库时间正排的情况下 则单独把登录用户非@的情况(登录用户直接回复top,且该评论没有被回复) 放在上边
         *
         * 	    默认排序(最热排序)就按照上边的规则
         * 	    最新排序,则只把top层的最晚发布的数据放在上边,commentId 倒排
         */
        Optional.ofNullable(list).ifPresent(e -> {
            // e:list
            // 先排序top
            // 定义排序规则
            Comparator<ForumComment> comparator = Comparator
                    .comparing(ForumComment::getZanCount, Comparator.reverseOrder())
                    .thenComparing(temp -> temp.getChild().size(),Comparator.reverseOrder())
                    .thenComparing(ForumComment::getCommentId, Comparator.reverseOrder());

            // rtn 就是所有的top 如果是最热排序,则默认 否则按照commentId倒排
            if(comment.getSortType()==0){
                if(loginStatus){
                    List<ForumComment> firstList = e.stream().filter(temp -> temp.getUserId().equals(userId))
                            .sorted(comparator)
                            .collect(Collectors.toList());
                    rtn.addAll(firstList);
                    List<ForumComment> sencondList = e.stream().filter(temp -> !temp.getUserId().equals(userId))
                            .sorted(comparator)
                            .collect(Collectors.toList());
                    // sencondList需要继续排序 登录用户在child子评论中有过评论的情况 需要排在前边
                    if(!ObjectUtils.isEmpty(sencondList)){
                        List<ForumComment> secondListNew = new ArrayList<>();
                        // sencondList 剩余的top层 目前已经是有序的了,需要把符合情况的top提前,其他top顺序不变
                        sencondList.stream().forEach(x -> {
                            List<ForumComment> xChild = x.getChild();
                            Set<Long> xChildUsers = xChild.stream().map(ForumComment::getUserId).collect(Collectors.toSet());
                            if(xChildUsers.contains(userId)){
                                secondListNew.add(x);
                            }
                        });
                        // 此时 secondListNew中存放的都是 子评论中存在当前登录用户评论的Comment对象
                        // 把原来secondList中剩余的内容 按照顺序 追加到secondListNew中即可 如果已经存在 则跳过
                        Set<Long> set = secondListNew.stream().map(ForumComment::getCommentId).collect(Collectors.toSet());
                        sencondList.stream().forEach(x2 ->{
                            if(!set.contains(x2.getCommentId())){
                                secondListNew.add(x2);
                            }
                        });
                        rtn.addAll(secondListNew);
                    }
                }else{
                    List<ForumComment> all = e.stream().sorted(comparator).collect(Collectors.toList());
                    rtn.addAll(all);
                }

            }else{
                List<ForumComment> all = e.stream().sorted(Comparator.comparing(ForumComment::getCommentId, Comparator.reverseOrder())).collect(Collectors.toList());
                rtn.addAll(all);
            }

            // 在遍历rtn 对每个top中的child进行排序
            rtn.stream().forEach(temp -> {
                List<ForumComment> childList = temp.getChild();
                if(!ObjectUtils.isEmpty(childList)){
                        Comparator<ForumComment> childComparing = Comparator.comparing(ForumComment::getCommentId);
                        if(loginStatus){
                            // 回复id,topID相等, 且userId匹配的
                            List<ForumComment> first = childList.stream()
                                    .filter(x1 -> x1.getUserId().equals(userId))
                                    .filter(x2 -> x2.getParentCommentId().equals(x2.getReplyId()))
                                    .sorted(childComparing)
                                    .collect(Collectors.toList());
                            // 且first 不能被@
                            // 收集子类中,所有的replyId
                            Set<Long> replySet = childList.stream().map(ForumComment::getReplyId).collect(Collectors.toSet());
                            List<ForumComment> newList = new ArrayList<>();
                            first.stream().forEach(x3 -> {
                                if(!replySet.contains(x3.getCommentId())){
                                    newList.add(x3);
                                }
                            });
                            // 此时newList中 就是所有单条 且没有被@的情况
                            // 下面添加的时候,跳过newList中已经存在的元素即可
                            Set<Long> commentSet = newList.stream().map(ForumComment::getCommentId).collect(Collectors.toSet());
                            // 对所有child排序
                            List<ForumComment> allChild = childList.stream().sorted(childComparing).collect(Collectors.toList());
                            allChild.stream().forEach(x4 -> {
                                if(!commentSet.contains(x4.getCommentId())){
                                    newList.add(x4);
                                }
                            });
                            temp.setChild(newList);
                        }else{
                            List<ForumComment> childAll = childList.stream().sorted(childComparing).collect(Collectors.toList());
                            temp.setChild(childAll);
                        }
                }
            });

        });
        return rtn;
    }
}
