-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: forum
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `forum_comment`
--

DROP TABLE IF EXISTS `forum_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_comment` (
  `comment_id` bigint NOT NULL COMMENT '主键',
  `zuopin_id` bigint NOT NULL COMMENT '作品外键',
  `user_id` bigint NOT NULL COMMENT '用户外键',
  `comment` varchar(200) NOT NULL COMMENT '评论内容主体',
  `parent_comment_id` bigint NOT NULL COMMENT '评论的根  默认:0 为1级top  如果是第二级:值为某个评论的id',
  `reply_user_id` bigint NOT NULL COMMENT '回复的是那个用户Id',
  `work_time` varchar(40) NOT NULL COMMENT '入库时间',
  `del` int NOT NULL DEFAULT '1' COMMENT '删除状态,0:已删除 1:未删除',
  `zan_count` int NOT NULL DEFAULT '0' COMMENT '点赞数',
  `reply_id` bigint NOT NULL COMMENT '回复是那条评论,评论id',
  `read_state` int NOT NULL DEFAULT '1' COMMENT '评论已读0,未读1',
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_comment`
--

LOCK TABLES `forum_comment` WRITE;
/*!40000 ALTER TABLE `forum_comment` DISABLE KEYS */;
INSERT INTO `forum_comment` VALUES (1743564376197816322,1643564381092569089,1643564378479517698,'top1我是马保国,对面是哪位年轻人?',0,1643564380765413377,'2022-08-12 05:39:29',1,10,0,1),(1743564376197816323,1643564381092569089,1643564375287652353,'child1马老师你好,我是松坡将军!',1743564376197816322,1643564378479517698,'2022-09-13 05:39:29',1,0,1743564376197816322,1),(1743564376197816324,1643564381092569089,1643564378479517698,'top2,我是马保国,耗子尾汁?',0,1643564380765413377,'2023-04-11 06:39:29',1,5,0,1),(1743564376197816325,1643564381092569089,1643564378479517698,'child2,嗯你现在在哪里?',1743564376197816322,1643564375287652353,'2022-10-13 05:39:30',1,2,1743564376197816323,1),(1743564376197816326,1643564381092569089,1643564375287652353,'child3,我在云南,起兵护国,讨伐袁世凯!',1743564376197816322,1643564378479517698,'2022-11-13 05:39:31',1,20,1743564376197816325,1);
/*!40000 ALTER TABLE `forum_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_param`
--

DROP TABLE IF EXISTS `forum_param`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_param` (
  `forum_cfg_key` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '参数名称',
  `forum_cfg_value` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '参数值',
  `desp` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '参数描述'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC COMMENT='论坛demo,参数表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_param`
--

LOCK TABLES `forum_param` WRITE;
/*!40000 ALTER TABLE `forum_param` DISABLE KEYS */;
INSERT INTO `forum_param` VALUES ('cfg_text_fold_limit','50','文字过长折叠限制'),('cfg_count_fold_limit','5','评论条数几条折叠'),('cfg_text_formwork','展开','展开 [某个评论内容过长提示模板]'),('cfg_count_formwork','展开*回复','展开[更多/5条]回复 [子评论过长模板],使用时替换'),('cfg_hot_count','5','热评值,点赞数超过多少就算热评'),('cfg_guanzhu_formwork','关注*已关注','关注/已关注模板,切割使用');
/*!40000 ALTER TABLE `forum_param` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_user`
--

DROP TABLE IF EXISTS `forum_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_user` (
  `user_id` bigint NOT NULL COMMENT '主键,用户id',
  `user_name` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户昵称,不可重复',
  `password` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '账号登录密码',
  `sex` int NOT NULL DEFAULT '1' COMMENT '0:女  1:男',
  `address` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '地址',
  `email` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '邮箱',
  `user_head` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户头像,图片地址',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC COMMENT='论坛demo,用户表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_user`
--

LOCK TABLES `forum_user` WRITE;
/*!40000 ALTER TABLE `forum_user` DISABLE KEYS */;
INSERT INTO `forum_user` VALUES (1643564375287652353,'松坡将军','1',0,'华山','6660.@163.com','img/main_index/user_head/head0.image'),(1643564376785018881,'直男文史课','1',1,'赤壁','6661.@163.com','img/main_index/user_head/head1.image'),(1643564377825206273,'吕布','1',0,'珠海','6662.@163.com','img/main_index/user_head/head2.image'),(1643564378479517698,'保国同志','1',1,'凤阳','6663.@163.com','img/main_index/user_head/head3.image'),(1643564379070914562,'曹阿瞒','1',0,'月球','6664.@163.com','img/main_index/user_head/head4.image'),(1643564379721031681,'文西与阿漆','1',1,'火星','6665.@163.com','img/main_index/user_head/head5.image'),(1643564380182405121,'荀彧','1',0,'逍遥津','6666.@163.com','img/main_index/user_head/head6.image'),(1643564380765413377,'坤坤','1',1,'木叶村','6667.@163.com','img/main_index/user_head/head7.image'),(1643564381293895681,'爱新觉罗叶赫渣渣','1',0,'官渡','6668.@163.com','img/main_index/user_head/head8.image'),(1643564381885292545,'电梯战神','1',1,'函谷关','6669.@163.com','img/main_index/user_head/head9.image'),(1643564382472495106,'宇智波马达啦','1',0,'江东','66610.@163.com','img/main_index/user_head/head10.image'),(1643564383126806530,'冷淡熊','1',1,'百慕大','66611.@163.com','img/main_index/user_head/head11.image');
/*!40000 ALTER TABLE `forum_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_zuo_pin`
--

DROP TABLE IF EXISTS `forum_zuo_pin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_zuo_pin` (
  `zuopin_id` bigint NOT NULL COMMENT '主键',
  `category` int NOT NULL COMMENT '分类 视频1/图片2/论题3',
  `content_type` int NOT NULL COMMENT '内容归类 科技,文学等...',
  `title` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '内容标题',
  `img_path` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '封面图片地址',
  `video_path` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '视频地址',
  `yuanchuang` tinyint NOT NULL DEFAULT '0' COMMENT '原创 boolean值  true(1)和false(0)',
  `look_count` int NOT NULL DEFAULT '0' COMMENT '观看次数,6万次观看',
  `dan_mu` int NOT NULL DEFAULT '0' COMMENT '弹幕条数,82条弹幕',
  `work_time` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '发布时间',
  `biao_qian` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '标签:#猫咪的迷惑行为  #猫咪  #动物',
  `del` int NOT NULL DEFAULT '1' COMMENT '删除标志 0:已删除 1:未删除',
  `zan` int NOT NULL DEFAULT '0' COMMENT '视频点赞数',
  `user_id` bigint NOT NULL COMMENT '外键,标识该内容是由那个用户发布的',
  PRIMARY KEY (`zuopin_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_zuo_pin`
--

LOCK TABLES `forum_zuo_pin` WRITE;
/*!40000 ALTER TABLE `forum_zuo_pin` DISABLE KEYS */;
INSERT INTO `forum_zuo_pin` VALUES (1643564376197816322,1,17,'世界上最伟大的工程之一,都江堰为什么能运转200多年?','img/main_index/vedio_img/main_tupian0.avif','vedio/gou.mp4',1,58449,78539,'2023-02-05 01:25:46','#动物,#搞笑,#迷惑行为',1,37806,1643564375287652353),(1643564377368027138,1,16,'【三国2022】主公过了20岁，就不能像个小诸侯了！','img/main_index/vedio_img/main_tupian1.avif','vedio/gou.mp4',0,30245,39691,'2021-11-08 04:10:18','#动物,#搞笑,#迷惑行为',1,55121,1643564376785018881),(1643564378282385410,1,15,'【吸奇侠】《三国》孙权做了哪些恶？图什么？','img/main_index/vedio_img/main_tupian2.avif','vedio/gou.mp4',1,51699,14518,'2021-08-13 21:20:26','#动物,#搞笑,#迷惑行为',1,25963,1643564377825206273),(1643564378806673409,1,14,'二姐一本正经的教，三姐和爷爷一本正经的学','img/main_index/vedio_img/main_tupian3.avif','vedio/gou.mp4',0,8499,40703,'2021-08-03 07:47:55','#动物,#搞笑,#迷惑行为',1,11055,1643564378479517698),(1643564379398070274,1,13,'曹操：你吕布什么档次和我一个爱好？','img/main_index/vedio_img/main_tupian4.avif','vedio/gou.mp4',1,50942,83275,'2022-08-05 11:34:35','#动物,#搞笑,#迷惑行为',1,66748,1643564379070914562),(1643564379922358274,1,12,'开心锤锤：你羡慕别人的时候，说不定别人也在羡慕着你','img/main_index/vedio_img/main_tupian5.avif','vedio/gou.mp4',0,70150,31290,'2021-12-11 21:02:37','#动物,#搞笑,#迷惑行为',1,99604,1643564379721031681),(1643564380442451970,1,11,'吴用到底是真的智多星还是狗头军师？大哥身后的他有几张面孔？','img/main_index/vedio_img/main_tupian6.avif','vedio/gou.mp4',1,61090,71195,'2021-05-22 23:06:39','#动物,#搞笑,#迷惑行为',1,73344,1643564380182405121),(1643564381092569089,1,10,'【吸奇侠】《教父》终局之战，无数经典致敬的血色教堂解析 18','img/main_index/vedio_img/main_tupian7.avif','vedio/gou.mp4',0,60431,5927,'2022-09-27 16:18:28','#动物,#搞笑,#迷惑行为',1,52053,1643564380765413377),(1643564381558136834,1,9,'嘎子卖手机 潘叔把握不住了！','img/main_index/vedio_img/main_tupian8.avif','vedio/gou.mp4',1,89590,48728,'2023-04-05 18:40:59','#动物,#搞笑,#迷惑行为',1,25660,1643564381293895681),(1643564382149533697,1,8,'我的热爱《水浒传》：被嫌弃的时迁一生，轻功第一为何排名垫底？','img/main_index/vedio_img/main_tupian9.avif','vedio/gou.mp4',0,33937,93029,'2022-08-12 05:39:29','#动物,#搞笑,#迷惑行为',1,26631,1643564381885292545),(1643564382665433089,1,7,'宋江哥哥收服小弟的超强领导艺术，给钱？诛心？还是断其后路？','img/main_index/vedio_img/main_tupian10.avif','vedio/gou.mp4',1,3222,99412,'2022-10-13 00:03:02','#动物,#搞笑,#迷惑行为',1,25051,1643564382472495106),(1643564383391047682,1,6,'我大意了啊,没有闪!','img/main_index/vedio_img/main_tupian11.avif','vedio/gou.mp4',0,88831,59450,'2021-11-01 13:14:01','#动物,#搞笑,#迷惑行为',1,4511,1643564383126806530);
/*!40000 ALTER TABLE `forum_zuo_pin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'forum'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-13 16:40:24
