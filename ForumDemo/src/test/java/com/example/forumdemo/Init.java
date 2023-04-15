package com.example.forumdemo;

import com.example.forumdemo.browse.mapper.PlayMapper;
import com.example.forumdemo.entity.ForumUser;
import com.example.forumdemo.entity.ForumZuoPin;
import com.example.forumdemo.user.mapper.UserOpeMapper;


import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE, classes={})
class Init {

    @Autowired
    private UserOpeMapper userOpeMapper;

    @Autowired
    private PlayMapper playMapper;


    /**
     * 初始化4个评论员
     */
    @Test
    void initCommentUser(){
        List<String> nameList = new ArrayList<>();
        List<String> addressList = new ArrayList<>();
        nameList.add("网络喷子");
        nameList.add("小学生");
        nameList.add("鲁班七号");
        nameList.add("酱爆");
        addressList.add("洛兰");
        addressList.add("爱尔兰");
        addressList.add("山东");
        addressList.add("猪笼寨");
        for(int i = 0;i<nameList.size();i++){
            ForumUser userTemp = new ForumUser();
            // 密码
            userTemp.setPassword("1");
            // 姓名
            userTemp.setUserName(nameList.get(i));
            // 性别
            userTemp.setSex(i%2);
            // 地址
            userTemp.setAddress(addressList.get(i));
            // 邮箱
            userTemp.setEmail("999"+i+".@qq.com");
            // 用户头像
            userTemp.setUserHead("img/main_index/user_head/head"+(i+12)+".image");
            userOpeMapper.insert(userTemp);
        }
    }


    /**
     * 作品表和用户表数据初始化,一个用户分配一个作品
     */
    @Test
    void initData(){
        // 清空所有表数据
        playMapper.delete(null);
        userOpeMapper.delete(null);

        List<String> nameList = new ArrayList<>();
        List<String> addressList = new ArrayList<>();
        nameList.add("松坡将军");
        nameList.add("直男文史课");
        nameList.add("吕布");
        nameList.add("保国同志");
        nameList.add("曹阿瞒");
        nameList.add("文西与阿漆");
        nameList.add("荀彧");
        nameList.add("坤坤");
        nameList.add("爱新觉罗叶赫渣渣");
        nameList.add("电梯战神");
        nameList.add("宇智波马达啦");
        nameList.add("冷淡熊");

        addressList.add("华山");
        addressList.add("赤壁");
        addressList.add("珠海");
        addressList.add("凤阳");
        addressList.add("月球");
        addressList.add("火星");
        addressList.add("逍遥津");
        addressList.add("木叶村");
        addressList.add("官渡");
        addressList.add("函谷关");
        addressList.add("江东");
        addressList.add("百慕大");

        List<String> titleList = new ArrayList<>();
        titleList.add("世界上最伟大的工程之一,都江堰为什么能运转200多年?");
        titleList.add("【三国2022】主公过了20岁，就不能像个小诸侯了！");
        titleList.add("【吸奇侠】《三国》孙权做了哪些恶？图什么？");
        titleList.add("二姐一本正经的教，三姐和爷爷一本正经的学");
        titleList.add("曹操：你吕布什么档次和我一个爱好？");
        titleList.add("开心锤锤：你羡慕别人的时候，说不定别人也在羡慕着你");
        titleList.add("吴用到底是真的智多星还是狗头军师？大哥身后的他有几张面孔？");
        titleList.add("【吸奇侠】《教父》终局之战，无数经典致敬的血色教堂解析 18");
        titleList.add("嘎子卖手机 潘叔把握不住了！");
        titleList.add("我的热爱《水浒传》：被嫌弃的时迁一生，轻功第一为何排名垫底？");
        titleList.add("宋江哥哥收服小弟的超强领导艺术，给钱？诛心？还是断其后路？");
        titleList.add("我大意了啊,没有闪!");
        //titleList.add("年轻人不讲武德,耗子尾汁!");

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        for(int i = 0;i<12;i++){
            ForumUser userTemp = new ForumUser();
            // 密码
            userTemp.setPassword("1");
            // 姓名
            userTemp.setUserName(nameList.get(i));
            // 性别
            userTemp.setSex(i%2);
            // 地址
            userTemp.setAddress(addressList.get(i));
            // 邮箱
            userTemp.setEmail("666"+i+".@163.com");
            // 用户头像
            userTemp.setUserHead("img/main_index/user_head/head"+i+".image");

            ForumZuoPin zuopinTemp = new ForumZuoPin();
            // 设置内容类别,默认都是1
            zuopinTemp.setCategory(1);
            // 内容归类
            zuopinTemp.setContentType(17-i);
            // 标题
            zuopinTemp.setTitle(titleList.get(i));
            // 设置图片路径
            zuopinTemp.setImgPath("img/main_index/vedio_img/main_tupian"+i+".avif");
            // 作品视频链接地址
            zuopinTemp.setVideoPath("vedio/gou.mp4");
            // 原创
            zuopinTemp.setYuanchuang(i%2==0?true:false);
            // 观看次数
            zuopinTemp.setLookCount(getRandomNumberInRange(1,100000));
            // 弹幕数
            zuopinTemp.setDanMu(getRandomNumberInRange(1,100000));
            // 发布时间
            int year = getRandomNumberInRange(2021,2023);
            int month = getRandomNumberInRange(1,12);
            int day = getRandomNumberInRange(1,28);
            int hour = getRandomNumberInRange(0,23);
            int minute = getRandomNumberInRange(0,59);
            int second = getRandomNumberInRange(0,59);
            LocalDateTime localDateTime = LocalDateTime.of(year, month, day, hour, minute, second);
            // 时间不能比当前时间大,返回合适的时间
            LocalDateTime minTime = getMinTime(localDateTime);
            zuopinTemp.setWorkTime(formatter.format(minTime));
            // 标签
            zuopinTemp.setBiaoQian("#动物,#搞笑,#迷惑行为");
            // 删除状态
            zuopinTemp.setDel(1);
            // 点赞数
            zuopinTemp.setZan(getRandomNumberInRange(1,100000));

            userOpeMapper.insert(userTemp);
            // 外键
            zuopinTemp.setUserId(userTemp.getUserId());
            playMapper.insert(zuopinTemp);
        }
    }

    /**
     * 生成一个介于 min(含)和 max(含)
     * @param min
     * @param max
     * @return
     */
    private static int getRandomNumberInRange(int min, int max) {
        if (min >= max) {
            throw new IllegalArgumentException("max must be greater than min");
        }
        Random r = new Random();
        return r.nextInt((max - min) + 1) + min;
    }


    /**
     * 返回合适的时间,如果传入的时间比当前大,那么返回当前时间
     * @param time
     * @return
     */
    private static LocalDateTime getMinTime(LocalDateTime time){
        LocalDateTime now = LocalDateTime.now();
        if(now.isBefore(time)){
            return now;
        }
        return time;
    }
}
