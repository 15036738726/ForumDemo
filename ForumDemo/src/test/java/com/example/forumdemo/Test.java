package com.example.forumdemo;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.Random;

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

    }

    private static int getRandomNumberInRange(int min, int max) {
        if (min >= max) {
            throw new IllegalArgumentException("max must be greater than min");
        }
        Random r = new Random();
        return r.nextInt((max - min) + 1) + min;
    }
}
