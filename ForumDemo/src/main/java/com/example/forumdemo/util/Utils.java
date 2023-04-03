package com.example.forumdemo.util;

import java.text.DecimalFormat;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

public class Utils {
    private Utils(){};

    /**
     * 观看次数处理
     * @return
     */
    public static String lookCountText(Integer count){
        Integer temp = 10000;
        if(count>=temp){
            if(count%temp==0){
                return count/temp+"万次播放";
            }
            /**
             * 123456  1.2万次
             * 1234567 12.3万次
             */
            DecimalFormat df = new DecimalFormat("0.0");
            String format = df.format((float) count / temp);
            return format+"万次播放";
        }
        return count+"次播放";
    }

    /**
     * 发布时间处理
     * @param workTime
     * @return
     */
    public static String workTimeText(String workTime){
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime start  = LocalDateTime.parse(workTime,dateTimeFormatter);
        LocalDateTime end = LocalDateTime.now();
        // 相差的分钟数
        long temp = Duration.between(start, end).toMinutes();
        if(temp<60){
            return temp+"分钟前";
        }
        // 计算相差的小时数
        temp = Duration.between(start, end).toHours();
        if(temp<24){
            return temp+"小时前";
        }
        // 计算相差的天数
        temp = Duration.between(start, end).toDays();
        if(temp<30){
            return temp+"天前";
        }
        // 对temp进行处理
        long month = temp/30;
        if(month<12){
            return month+"个月前";
        }
        long year = temp/30/12;
        return year+"年前";
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
