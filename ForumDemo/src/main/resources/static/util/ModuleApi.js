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
     * 登录弹框打开
     * @param temp
     */
    __SERVICE__.open = function(temp){
        $("body").append(templateUtils.getLoginDialogDom(temp));
        $("body").attr("class","Dialog-lockscroll").attr("style","border-right: 17px solid transparent;");
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
                    utils.setCache("LOGIN_USER",temp.data,1/24/60*30);// 1/24/60/60*10 10秒钟  目前是30分钟
                    // 登录成功,则调用创建对象时传入的回调,由具体页面定义
                    if(__SERVICE__.callback)__SERVICE__.callback();
                    // 关闭弹框
                    __SERVICE__.close();
                    // 登录成功之后,则调用刷新页面方法  强制刷新
                    utils.refreshCurrentPage(true);
                }else{
                    $(".web-login-account-password .web-login-error").text('账号或密码不正确,请检查');
                }
            };
            utils.send(tempCallback,'/userOpe/userLoginNew',{"userName":userName,"password":password},utils.PUT_REQUEST);
        });

    };
};

/**
 * 插入内容到textarea中的光标位置 组件 光标拼接
 */
var cursorAppendService = function(callback,dom,val){
    let __SERVICE__ = this;
    // 回调函数
    __SERVICE__.callback = callback;
    // 目标DOM
    __SERVICE__.target = dom;
    // 拼接的内容
    __SERVICE__.val = val;

    /**
     * 拼接函数
     */
    __SERVICE__.start = function(){
        // 执行绑定
        __SERVICE__.bindEvent();
        // 执行内容追加
        __SERVICE__.appendExe();
    };

    /**
     * 目标事件绑定
     */
    __SERVICE__.bindEvent = function(){
        __SERVICE__.target.on('select',function () {
            __SERVICE__.setCaret(this);
        }).on('click',function () {
            __SERVICE__.setCaret(this);
        }).on('keyup',function () {
            __SERVICE__.setCaret(this);
        });
    };

    /**
     * 执行追加
     */
    __SERVICE__.appendExe = function(){
        __SERVICE__.insertAtCaret(__SERVICE__.target[0],__SERVICE__.val);
    };

    __SERVICE__.setCaret =  function (textObj) {
        if (textObj.createTextRange) {
            textObj.caretPos = document.selection.createRange().duplicate();
        }
    };

    __SERVICE__.insertAtCaret =  function (textObj, textFeildValue) {
        if (document.all) {
            if (textObj.createTextRange && textObj.caretPos) {
                var caretPos = textObj.caretPos;
                caretPos.text = caretPos.text.charAt(caretPos.text.length - 1) == ' ' ? textFeildValue + ' ' : textFeildValue;
            } else {
                textObj.value = textFeildValue;
            }
        } else {
            if (textObj.setSelectionRange) {
                var rangeStart = textObj.selectionStart;
                var rangeEnd = textObj.selectionEnd;
                var tempStr1 = textObj.value.substring(0, rangeStart);
                var tempStr2 = textObj.value.substring(rangeEnd);
                textObj.value = tempStr1 + textFeildValue + tempStr2;
            } else {
                alert("此版本的Mozilla浏览器不支持setSelectionRange");
            }
        }
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