package com.example.forumdemo.user.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.forumdemo.browse.mapper.KnockingMapper;
import com.example.forumdemo.browse.mapper.PlayMapper;
import com.example.forumdemo.entity.ForumJoinKnocking;
import com.example.forumdemo.entity.ForumUser;
import com.example.forumdemo.entity.ForumUserExt;
import com.example.forumdemo.entity.ForumZuoPin;
import com.example.forumdemo.user.mapper.UserOpeMapper;
import com.example.forumdemo.user.service.UserOpeService;
import com.example.forumdemo.util.Utils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

@Service
public class UserOpeServiceImpl extends ServiceImpl<UserOpeMapper,ForumUser> implements UserOpeService{

    @Autowired
    private UserOpeMapper userOpeMapper;
    @Autowired
    private PlayMapper playMapper;
    @Autowired
    private KnockingMapper knockingMapper;

    /**
     * 注册用户,重复,则跳过,返回true 注册成功返回false
     * @param forumUser
     * @return
     */
    @Override
    public boolean userRegister(ForumUser forumUser){
        QueryWrapper<ForumUser> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_name",forumUser.getUserName());
        // 判断是否重复 根据用户名
        ForumUser user = userOpeMapper.selectOne(queryWrapper);
        if(user!=null){
            return true;
        }
        int count = userOpeMapper.insert(forumUser);
        return false;
    }

    /**
     * 用户登录 验证账号和用户名是否匹配
     * @param forumUser
     * @return
     */
    @Override
    public ForumUser userLogin(ForumUser forumUser) {
        LambdaQueryWrapper<ForumUser> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(ForumUser::getUserName,forumUser.getUserName());
        queryWrapper.eq(ForumUser::getPassword,forumUser.getPassword());
        ForumUser user = userOpeMapper.selectOne(queryWrapper);
        return  user;
    }

    /**
     * 根据用户名,查询用户信息
     * @param forumUser
     * @return
     */
    @Override
    public ForumUser getUserByUserName(ForumUser forumUser) {
        QueryWrapper<ForumUser> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_name",forumUser.getUserName());
        ForumUser user = userOpeMapper.selectOne(queryWrapper);
        return user;
    }

    /**
     * 查询用户信息
     * @param id 传入用户ID
     * @return
     */
    public ForumUserExt queryUserInfo(Long id){
        ForumUserExt forumUserExt = new ForumUserExt();
        LambdaQueryWrapper<ForumUser> userWrapper = Wrappers.lambdaQuery();
        userWrapper.eq(!ObjectUtils.isEmpty(id),ForumUser::getUserId,id);
        ForumUser forumUser = userOpeMapper.selectOne(userWrapper);
        // 基础属性赋值
        BeanUtils.copyProperties(forumUser,forumUserExt);
        // 其他信息查询设置
        // 1.查询作品数 userid del=1
        LambdaQueryWrapper<ForumZuoPin> queryZuopinCount = Wrappers.lambdaQuery();
        queryZuopinCount.eq(!ObjectUtils.isEmpty(id), ForumZuoPin::getUserId,id);
        queryZuopinCount.eq(ForumZuoPin::getDel,1);
        Integer zuopinCount = playMapper.selectCount(queryZuopinCount);
        forumUserExt.setContentPushCount(zuopinCount);

        // 2.查询被关注数 getAbstractId  type=4
        LambdaQueryWrapper<ForumJoinKnocking> queryLoveCount = Wrappers.lambdaQuery();
        queryLoveCount.eq(!ObjectUtils.isEmpty(id),ForumJoinKnocking::getAbstractId,id);
        queryLoveCount.eq(ForumJoinKnocking::getAbstractType,4);
        Integer loveCount = knockingMapper.selectCount(queryLoveCount);
        forumUserExt.setGuanzhuEd(loveCount);
        forumUserExt.setGuanzhuEdText(Utils.loveCountText(loveCount));
        return forumUserExt;
    }

}
