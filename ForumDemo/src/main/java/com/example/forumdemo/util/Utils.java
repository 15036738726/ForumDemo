package com.example.forumdemo.util;

import org.springframework.util.StringUtils;

import java.text.DecimalFormat;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Utils {
    private Utils(){};

    /**
     * 返回当前时间
     * @return
     */
    public static String getCurrentData(){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return formatter.format(LocalDateTime.now());
    }


    /**
     * 观看次数处理
     * @return
     */
    public static String lookCountText(Integer count){
        Integer temp = 10000;
        if(count>=temp){
            if(count%temp==0){
                return count/temp+"万次";
            }
            /**
             * 123456  1.2万次
             * 1234567 12.3万次
             */
            DecimalFormat df = new DecimalFormat("0.0");
            String format = df.format((float) count / temp);
            return format+"万次";
        }
        return count+"次";
    }

    /**
     * 粉丝数处理
     * @param count
     * @return
     */
    public static String loveCountText(Integer count){
        Integer temp = 10000;
        if(count>=temp){
            if(count%temp==0){
                return count/temp+"万";
            }
            /**
             * 123456  1.2万
             * 1234567 12.3万
             */
            DecimalFormat df = new DecimalFormat("0.0");
            String format = df.format((float) count / temp);
            return format+"万";
        }
        return count+"";
    }

    /**
     * 发布时间处理
     * @param workTime
     * @return
     */
    public static String workTimeText(String workTime){
        if(!StringUtils.hasLength(workTime)){
            // 返回当前时间
            LocalDateTime now = LocalDateTime.now();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            String format = now.format(formatter);
            return format;
        }
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime start  = LocalDateTime.parse(workTime,dateTimeFormatter);
        LocalDateTime end = LocalDateTime.now();
        Duration duration = Duration.between(start, end);
        // 相差的分钟数
        long temp = duration.toMinutes();
        if(temp==0){
            return "刚刚";
        }
        if(temp<60){
            return temp+"分钟前";
        }
        // 计算相差的小时数
        temp = duration.toHours();
        if(temp<24){
            return temp+"小时前";
        }
        // 计算相差的天数
        temp = duration.toDays();
        if(temp<30){
            return temp+"天前";
        }

        // 处理月份和年份数据
        long month = temp/30;
        if(month<12){
            return month+"个月前";
        }
        long year = temp/30/12;
        return year+"年前";
    }

    /**
     * 时间 yyyy-MM-dd HH:mm:ss 格式化为 yyyy-MM-dd HH:mm
     * @param time
     * @return
     */
    public static  String timeFormatter(String time){
        if(!StringUtils.hasLength(time)){
            // 返回当前时间
            LocalDateTime now = LocalDateTime.now();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
            String format = now.format(formatter);
            return format;
        }
        // 把传入的数据转换为localDateTime对象
        DateTimeFormatter parse = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime localDateTime = LocalDateTime.parse(time,parse);
        // 格式化
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        String format = localDateTime.format(formatter);
        return format;
    }

    public static void main(String[] args) {

//        System.out.println(lookCountText(191000));
//        System.out.println(lookCountText(190000));
//        System.out.println(lookCountText(10001));
//        System.out.println(lookCountText(10999));
//        System.out.println(lookCountText(10499));

//        System.out.println(workTimeText("2023-04-03 14:00:00"));
//        System.out.println(workTimeText("2023-04-03 12:00:00"));
//        System.out.println(workTimeText("2023-04-02 12:00:00"));
//        System.out.println(workTimeText("2023-03-04 12:00:00"));
//        System.out.println(workTimeText("2023-03-01 12:00:00"));
//        System.out.println(workTimeText("2023-02-01 12:00:00"));
//        System.out.println(workTimeText("2023-01-01 12:00:00"));
//        System.out.println(workTimeText("2022-03-01 12:00:00"));
//        System.out.println(workTimeText("2021-04-01 12:00:00"));
    }


}
