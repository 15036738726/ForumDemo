/*
 Navicat Premium Data Transfer

 Source Server         : Test
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : forum

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 05/04/2023 18:52:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for forum_param
-- ----------------------------
DROP TABLE IF EXISTS `forum_param`;
CREATE TABLE `forum_param`  (
  `forum_cfg_key` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '参数名称',
  `forum_cfg_value` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '参数值',
  `desp` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '参数描述'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '论坛demo,参数表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of forum_param
-- ----------------------------
INSERT INTO `forum_param` VALUES ('cfg_text_fold_limit', '50', '文字过长折叠限制');
INSERT INTO `forum_param` VALUES ('cfg_count_fold_limit', '5', '评论条数几条折叠');
INSERT INTO `forum_param` VALUES ('cfg_text_formwork', '展开', '展开 [某个评论内容过长提示模板]');
INSERT INTO `forum_param` VALUES ('cfg_count_formwork', '展开*回复', '展开[更多/5条]回复 [子评论过长模板],使用时替换');
INSERT INTO `forum_param` VALUES ('cfg_hot_count', '5', '热评值,点赞数超过多少就算热评');
INSERT INTO `forum_param` VALUES ('cfg_guanzhu_formwork', '关注*已关注', '关注/已关注模板,切割使用');

-- ----------------------------
-- Table structure for forum_user
-- ----------------------------
DROP TABLE IF EXISTS `forum_user`;
CREATE TABLE `forum_user`  (
  `user_id` bigint(0) NOT NULL COMMENT '主键,用户id',
  `user_name` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户昵称,不可重复',
  `password` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '账号登录密码',
  `sex` int(0) NOT NULL DEFAULT 1 COMMENT '0:女  1:男',
  `address` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '地址',
  `email` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '邮箱',
  `user_head` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '用户头像,图片地址',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '论坛demo,用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of forum_user
-- ----------------------------
INSERT INTO `forum_user` VALUES (1643564375287652353, '松坡将军', '1', 0, '华山', '6660.@163.com', 'img/main_index/user_head/head0.image');
INSERT INTO `forum_user` VALUES (1643564376785018881, '直男文史课', '1', 1, '赤壁', '6661.@163.com', 'img/main_index/user_head/head1.image');
INSERT INTO `forum_user` VALUES (1643564377825206273, '吕布', '1', 0, '珠海', '6662.@163.com', 'img/main_index/user_head/head2.image');
INSERT INTO `forum_user` VALUES (1643564378479517698, '保国同志', '1', 1, '凤阳', '6663.@163.com', 'img/main_index/user_head/head3.image');
INSERT INTO `forum_user` VALUES (1643564379070914562, '曹阿瞒', '1', 0, '月球', '6664.@163.com', 'img/main_index/user_head/head4.image');
INSERT INTO `forum_user` VALUES (1643564379721031681, '文西与阿漆', '1', 1, '火星', '6665.@163.com', 'img/main_index/user_head/head5.image');
INSERT INTO `forum_user` VALUES (1643564380182405121, '荀彧', '1', 0, '逍遥津', '6666.@163.com', 'img/main_index/user_head/head6.image');
INSERT INTO `forum_user` VALUES (1643564380765413377, '坤坤', '1', 1, '木叶村', '6667.@163.com', 'img/main_index/user_head/head7.image');
INSERT INTO `forum_user` VALUES (1643564381293895681, '爱新觉罗叶赫渣渣', '1', 0, '官渡', '6668.@163.com', 'img/main_index/user_head/head8.image');
INSERT INTO `forum_user` VALUES (1643564381885292545, '电梯战神', '1', 1, '函谷关', '6669.@163.com', 'img/main_index/user_head/head9.image');
INSERT INTO `forum_user` VALUES (1643564382472495106, '宇智波马达啦', '1', 0, '江东', '66610.@163.com', 'img/main_index/user_head/head10.image');
INSERT INTO `forum_user` VALUES (1643564383126806530, '冷淡熊', '1', 1, '百慕大', '66611.@163.com', 'img/main_index/user_head/head11.image');

-- ----------------------------
-- Table structure for forum_zuo_pin
-- ----------------------------
DROP TABLE IF EXISTS `forum_zuo_pin`;
CREATE TABLE `forum_zuo_pin`  (
  `zuopin_id` bigint(0) NOT NULL COMMENT '主键',
  `category` int(0) NOT NULL COMMENT '分类 视频1/图片2/论题3',
  `content_type` int(0) NOT NULL COMMENT '内容归类 科技,文学等...',
  `title` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '内容标题',
  `img_path` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '封面图片地址',
  `video_path` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '视频地址',
  `yuanchuang` tinyint(0) NOT NULL DEFAULT 0 COMMENT '原创 boolean值  true(1)和false(0)',
  `look_count` int(0) NOT NULL DEFAULT 0 COMMENT '观看次数,6万次观看',
  `dan_mu` int(0) NOT NULL DEFAULT 0 COMMENT '弹幕条数,82条弹幕',
  `work_time` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '发布时间',
  `biao_qian` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '标签:#猫咪的迷惑行为  #猫咪  #动物',
  `del` int(0) NOT NULL DEFAULT 1 COMMENT '删除标志 0:已删除 1:未删除',
  `zan` int(0) NOT NULL DEFAULT 0 COMMENT '视频点赞数',
  `user_id` bigint(0) NOT NULL COMMENT '外键,标识该内容是由那个用户发布的',
  PRIMARY KEY (`zuopin_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of forum_zuo_pin
-- ----------------------------
INSERT INTO `forum_zuo_pin` VALUES (1643564376197816322, 1, 17, '世界上最伟大的工程之一,都江堰为什么能运转200多年?', 'img/main_index/vedio_img/main_tupian0.avif', 'vedio/gou.mp4', 1, 58449, 78539, '2023-02-05 01:25:46', '#动物,#搞笑,#迷惑行为', 1, 37806, 1643564375287652353);
INSERT INTO `forum_zuo_pin` VALUES (1643564377368027138, 1, 16, '【三国2022】主公过了20岁，就不能像个小诸侯了！', 'img/main_index/vedio_img/main_tupian1.avif', 'vedio/gou.mp4', 0, 30245, 39691, '2021-11-08 04:10:18', '#动物,#搞笑,#迷惑行为', 1, 55121, 1643564376785018881);
INSERT INTO `forum_zuo_pin` VALUES (1643564378282385410, 1, 15, '【吸奇侠】《三国》孙权做了哪些恶？图什么？', 'img/main_index/vedio_img/main_tupian2.avif', 'vedio/gou.mp4', 1, 51699, 14518, '2021-08-13 21:20:26', '#动物,#搞笑,#迷惑行为', 1, 25963, 1643564377825206273);
INSERT INTO `forum_zuo_pin` VALUES (1643564378806673409, 1, 14, '二姐一本正经的教，三姐和爷爷一本正经的学', 'img/main_index/vedio_img/main_tupian3.avif', 'vedio/gou.mp4', 0, 8499, 40703, '2021-08-03 07:47:55', '#动物,#搞笑,#迷惑行为', 1, 11055, 1643564378479517698);
INSERT INTO `forum_zuo_pin` VALUES (1643564379398070274, 1, 13, '曹操：你吕布什么档次和我一个爱好？', 'img/main_index/vedio_img/main_tupian4.avif', 'vedio/gou.mp4', 1, 50942, 83275, '2022-08-05 11:34:35', '#动物,#搞笑,#迷惑行为', 1, 66748, 1643564379070914562);
INSERT INTO `forum_zuo_pin` VALUES (1643564379922358274, 1, 12, '开心锤锤：你羡慕别人的时候，说不定别人也在羡慕着你', 'img/main_index/vedio_img/main_tupian5.avif', 'vedio/gou.mp4', 0, 70150, 31290, '2021-12-11 21:02:37', '#动物,#搞笑,#迷惑行为', 1, 99604, 1643564379721031681);
INSERT INTO `forum_zuo_pin` VALUES (1643564380442451970, 1, 11, '吴用到底是真的智多星还是狗头军师？大哥身后的他有几张面孔？', 'img/main_index/vedio_img/main_tupian6.avif', 'vedio/gou.mp4', 1, 61090, 71195, '2021-05-22 23:06:39', '#动物,#搞笑,#迷惑行为', 1, 73344, 1643564380182405121);
INSERT INTO `forum_zuo_pin` VALUES (1643564381092569089, 1, 10, '【吸奇侠】《教父》终局之战，无数经典致敬的血色教堂解析 18', 'img/main_index/vedio_img/main_tupian7.avif', 'vedio/gou.mp4', 0, 60431, 5927, '2022-09-27 16:18:28', '#动物,#搞笑,#迷惑行为', 1, 52053, 1643564380765413377);
INSERT INTO `forum_zuo_pin` VALUES (1643564381558136834, 1, 9, '嘎子卖手机 潘叔把握不住了！', 'img/main_index/vedio_img/main_tupian8.avif', 'vedio/gou.mp4', 1, 89590, 48728, '2023-04-05 18:40:59', '#动物,#搞笑,#迷惑行为', 1, 25660, 1643564381293895681);
INSERT INTO `forum_zuo_pin` VALUES (1643564382149533697, 1, 8, '我的热爱《水浒传》：被嫌弃的时迁一生，轻功第一为何排名垫底？', 'img/main_index/vedio_img/main_tupian9.avif', 'vedio/gou.mp4', 0, 33937, 93029, '2022-08-12 05:39:29', '#动物,#搞笑,#迷惑行为', 1, 26631, 1643564381885292545);
INSERT INTO `forum_zuo_pin` VALUES (1643564382665433089, 1, 7, '宋江哥哥收服小弟的超强领导艺术，给钱？诛心？还是断其后路？', 'img/main_index/vedio_img/main_tupian10.avif', 'vedio/gou.mp4', 1, 3222, 99412, '2022-10-13 00:03:02', '#动物,#搞笑,#迷惑行为', 1, 25051, 1643564382472495106);
INSERT INTO `forum_zuo_pin` VALUES (1643564383391047682, 1, 6, '我大意了啊,没有闪!', 'img/main_index/vedio_img/main_tupian11.avif', 'vedio/gou.mp4', 0, 88831, 59450, '2021-11-01 13:14:01', '#动物,#搞笑,#迷惑行为', 1, 4511, 1643564383126806530);

SET FOREIGN_KEY_CHECKS = 1;
