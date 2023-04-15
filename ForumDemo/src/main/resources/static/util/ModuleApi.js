/**
 * 系统登录模块
 */
var userLoginService = function(callback){
    let __SERVICE__ = this;
    // 回调函数
    __SERVICE__.callback = callback;

    /**
     * 启动模块
     */
    __SERVICE__.start = function(){
        // 绑定登录模块交互事件,如果登录成功,最后执行回调,然后关闭弹框即可
        __SERVICE__.event();
    };

    /**
     * 登录成功,弹框关闭  由模块自己负责
     */
    __SERVICE__.close = function (){
        $(".login-dialog-container").remove();
        $('body').removeAttr("style");
        $('body').removeClass("Dialog-lockscroll");
    }

    /**
     * 事件绑定 由模块自己负责
     */
    __SERVICE__.event = function(){

        /**
         * 登录弹框关闭事件
         */
        $(".login-dialog-container .close").unbind("click").bind("click",function(e){
            __SERVICE__.close();
        });

        /**
         * 登录事件
         */
        $(".login-dialog-container .web-login-button").unbind("click").bind("click",function(e){
            let userName = $(".web-login-account-password").find('input[autocomplete="username"]').val().trim();
            let password = $(".web-login-account-password").find('input[type="password"]').val().trim();
            if(userName==''){
                $(".web-login-account-password .web-login-error").text('账号不能为空');
                return;
            }
            if(password==''){
                $(".web-login-account-password .web-login-error").text('密码不能为空');
                return;
            }
            // 验证账号正确性, 如果正确则把用户信息写入到本地缓存中,有效期1天
            // 设置登录操作回调
            let tempCallback = function (temp){
                if(temp.code == 200){
                    utils.setCache("LOGIN_USER",temp.data,1/24/60/60*10);
                    // 登录成功,则调用创建对象时传入的回调,由具体页面定义
                    __SERVICE__.callback();
                    // 关闭弹框
                    __SERVICE__.close();
                }else{
                    $(".web-login-account-password .web-login-error").text('账号或密码不正确,请检查');
                }
            };
            utils.send(tempCallback,'/userOpe/userLoginNew',{"userName":userName,"password":password},utils.PUT_REQUEST);
        });

    };
};


/**
 * 其他模块
 */
var otherService = function(){
    let __SERVICE__ = this;
    __SERVICE__.start = function(){

    };
};