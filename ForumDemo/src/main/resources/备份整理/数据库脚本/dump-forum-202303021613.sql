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
-- Table structure for table `forum_param`
--

DROP TABLE IF EXISTS `forum_param`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum_param` (
  `forum_cfg_key` varchar(40) NOT NULL COMMENT '参数名称',
  `forum_cfg_vlaue` varchar(40) NOT NULL COMMENT '参数值',
  `desp` varchar(40) DEFAULT NULL COMMENT '参数描述'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='论坛demo,参数表';
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
  `user_name` varchar(40) NOT NULL COMMENT '用户昵称,不可重复',
  `password` varchar(40) NOT NULL COMMENT '账号登录密码',
  `sex` int NOT NULL DEFAULT '1' COMMENT '0:女  1:男',
  `address` varchar(40) NOT NULL COMMENT '地址',
  `email` varchar(40) NOT NULL COMMENT '邮箱',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='论坛demo,用户表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_user`
--

LOCK TABLES `forum_user` WRITE;
/*!40000 ALTER TABLE `forum_user` DISABLE KEYS */;
INSERT INTO `forum_user` VALUES (1631102796239331330,'1','1',1,'1','1111111@qq.com'),(1631190730158206978,'11','1',1,'1','1'),(1631190765381971970,'111','1',1,'1','1'),(1631194168585711617,'111111','1',1,'1','1'),(1631205137974128641,'123232','1',1,'1','1'),(1631205415918071809,'12323223232','1',1,'1','1'),(1631205464630718466,'123232232321','1',1,'1','1');
/*!40000 ALTER TABLE `forum_user` ENABLE KEYS */;
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

-- Dump completed on 2023-03-02 16:13:03
