/**
 * 工具对象
 * @param option
 * @constructor
 */
var MyUtils = function(option){
    let __ROOT__ = this;

    /**
     * restful请求风格 请求方式枚举
     * @type {string}
     */
    //获取资源 xxx/xxx/{},URL传参 使用此方式,sendData=null 参数挂在url后
    __ROOT__.GET_REQUEST = "GET";
    //更新资源
    __ROOT__.POST_REQUEST = "POST";
    //创建资源
    __ROOT__.PUT_REQUEST = "PUT";
    // 删除资源
    __ROOT__.DELETE_REQUEST = "DELETE";

    /**
     * 必填相关
     * @type {string}
     */
    // 必填警告属性
    __ROOT__.myRequiredWaring  = "myRequiredWaringClass";
    // 必填属性
    __ROOT__.myRequired = "myRequired";

    /**
     * 弹框相关
     * @type {number}
     */
    // 系统默认弹框关闭时间,毫秒值
    __ROOT__.closeMilliSecond = 500;// 默认500
    // 弹框颜色
    __ROOT__.dialogColorMap = {"DEFAULT":"#000","WARNING":"#f0ad4e","ERR":"#d9534f"};
    // 对外提供颜色枚举
    __ROOT__.DIALOG_WARNING = "WARNING";// 黄色警告
    __ROOT__.DIALOG_DEFAULT = "DEFAULT";// 黑色弹框
    __ROOT__.DIALOG_ERR = "ERR"; // 红色,系统级错误
    __ROOT__.dialogFontSize = "14"; // 弹框字体大小


    /**
     * 初始化方法,组价的所有前置控制,可定义在这个方法中
     */
    __ROOT__.init = function () {
        // 主题设置
        __ROOT__.applyPageTheme();
        // dialog弹框所依赖的样式表 初始化
        __ROOT__.insertPageStyleSheet();
        // 页面通用事件处理
        __ROOT__.pageEventHandel();
    };

    /**
     * 设置页面端缓存
     * @param key
     * @param value
     * @param num 失效时间 单位天  限制为整数
     * 说明:expire<=0 则认为永久有效
     * 设计思路:存值时间戳 +  有效时间 = 过期时间戳
     * 时间戳：是指从格林威治时间1970年01月01日00时00分00秒（UTC/GMT的午夜，即北京时间1970年01月01日08时00分00秒）起至现在的总秒数
     * 比如设置有效时间为1天 此刻时间戳假设为 A 那么  B = A+(1*一天内的毫秒数) 就是将来过期时刻的 时间戳毫秒数
     * 那么取值的时候,通过Date.now()获取取值时的时间戳毫秒数> B 就表示过期了,就返回null,并且把对应的数据对象给手动删除掉
     */
    __ROOT__.setCache = function(key,value,num){
        // isNaN是js的内置函数，用于判断一个值是否为NaN（非数值），
        // 非数值返回true，数值返回false
        // Number.isInteger 用于整数判断,这里不加,可以设置0.1天有效期 也就是1个小时
        // 例如设置10秒钟:__ROOT__.setCache("x1",123,1/24/60/60*10)
        if (isNaN(num)) {
            throw new Error('有效期天数应为一个整数');
        };
        // 86_400_000一天时间的毫秒数，_是数值分隔符 写成86400000也一样
        let expire = num<=0?0:num * 86_400_000;
        let obj = {
            data: value, //存储的数据
            time: Date.now(), //存值时间戳
            expire: expire, //num天的累计毫秒值
        };
        // 注意，localStorage不能直接存储对象类型，sessionStorage也一样
        // 需要先用JSON.stringify()将其转换成字符串，取值时再通过JSON.parse()转换回来
        localStorage.setItem(key,JSON.stringify(obj));
    };

    /**
     * 从页面端缓存获取数据 如果没有就返回null
     * @param key
     */
    __ROOT__.getCache = function(key){
        let val = localStorage.getItem(key);
        // 如果没有值就直接返回null
        if (!val)  return null;
        // 存的时候转换成了字符串，现在转回来
        val = JSON.parse(val);

        // ==0 则不用判断有效期
        if(val.expire==0){
            return val.data;
        }
        if(Date.now() > val.time + val.expire){
            // 存值时间戳 +  有效时间 = 过期时间戳
            // 如果当前时间戳大于过期时间戳说明过期了，删除值并返回提示
            localStorage.removeItem(key)
            return null;
        }
        return val.data;
    };

    /**
     * 通用请求方法 如果需要返回值,则需要指定调用方式为 同步async = false
     */
    __ROOT__.send = function(callback,url,sendData,type,async){
        let resultData;
        $.ajax({
            url: url,   // 请求地址,
            data: JSON.stringify(sendData),
            type: type?type:'POST',   // 请求方式
            async: async==undefined?true:async,// 默认就是异步可以不设置
            contentType: 'application/json', //发送的数据类型
            //dataType: 'json',// 接受的数据类型,可不写
            success: function (result) {
                console.log(result);
                if(callback){
                    callback(result);
                }else{
                    resultData = result;
                }
            },
            error: function (result) {
                console.log('Send Request Fail..'); // 请求失败时的回调函数
                console.log(result);
                if(callback){
                    callback(result);
                }else{
                    resultData = result;
                }
            }
        });
        // 使用同步方式时,才能正确返回,这种为了解决调用处获取返回值问题
        return resultData;
    };

    /**
     * 封装参数
     */
    __ROOT__.getFormData = function(ele,arr){
        if(!arr) return undefined;
        let pageData = {};
        for(var temp of arr){
            pageData[temp] = $("."+ele).find("#"+temp).val().trim();
        }
        return pageData;
    };

    /**
     * 页面参数必填校验  按照元素顺序进行校验
     * @param ele
     * @param arr
     */
    __ROOT__.pageRequire = function(ele,arr){
        if(!arr) return true;
        for(var temp of arr){
            let currentEle = $("."+ele).find("#"+temp);
            // 当前元素设置的必填属性
            if(currentEle.attr(__ROOT__.myRequired)!=undefined&&currentEle.attr(__ROOT__.myRequired)==''){
                // 并且没有填入值
                if(currentEle.val().trim()==''){
                    // 则校验不通过 这里拦截  并提供样式
                    currentEle.addClass(__ROOT__.myRequiredWaring);
                    return true;
                }else{
                    // 移除样式
                    currentEle.removeClass(__ROOT__.myRequiredWaring);
                }
            }
        }
        return false;
    };

    /**
     * 弹框反馈 请求之后的反馈消息弹框提醒
     * @param data
     */
    __ROOT__.feedback = function(data,millisecond,fontSize){
        let map = {200:__ROOT__.DIALOG_DEFAULT,400:__ROOT__.DIALOG_WARNING,500:__ROOT__.DIALOG_ERR};
        __ROOT__.msgDialog(data.message,map[data.code],millisecond,fontSize);
    };

    /**
     * 弹框
     * @param msg  消息
     * @param type 弹框类型
     * @param millisecond 毫秒值
     * @param fontSize 文字大小
     */
    __ROOT__.msgDialog = function(msg,type,millisecond,fontSize){
        let dialogColor = __ROOT__.dialogColorMap[type?type:__ROOT__.DIALOG_DEFAULT];
        fontSize = fontSize?fontSize:__ROOT__.dialogFontSize;
        var subhtml='<button type="button" class="myTip">'+msg+'</button>';
        $("body").append(subhtml);
        // 对默认的样式进行覆盖,设置颜色和字体大小
        $(".myTip").css("background-color",dialogColor).css("font-size",fontSize);
        var msgDialogStop = setInterval(autoCloseAlert,millisecond?millisecond:__ROOT__.closeMilliSecond);
        //关闭弹框
        function autoCloseAlert(){
            // 加上淡出效果
            $('.myTip').fadeOut(700,'linear',function(){
                $('.myTip').remove();
                clearInterval(msgDialogStop);
            });
        }
    };

    /**
     * 往页面中增加组件所需要的样式表
     */
    __ROOT__.insertPageStyleSheet = function(){
        let style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'my_utils_style_sheet';
        style.innerHTML='.myTip{' +
            'margin-top: 5px;margin-bottom: 5px;' +
            'color: #fff;background-color: '+__ROOT__.dialogColorMap["DEFAULT"]+';' +
            'display: inline-block;font-weight: 400;' +
            'text-align: center;white-space: nowrap;' +
            'vertical-align: middle;touch-action: manipulation;' +
            'cursor: auto;background-image: none;' +
            'border: 1px solid transparent;padding: 6px 12px;font-size: '+__ROOT__.dialogFontSize+'px;line-height: 1.42857143;' +
            'border-radius: 4px;user-select: none;' +
            'opacity:0.8;z-index: 2000;' +
            'position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);' +//屏幕水平垂直居中
            '}';
        // 把当前样式添加到 当前引用页面的head标签中
        $('head').append(style);
    };

    /**
     * 页面通用事件绑定
     * 1.目前只处理了主题切换
     */
    __ROOT__.pageEventHandel = function(){
        /**
         * 1.主题切换事件
         */
        $(".themeChange").unbind("click").bind("click",function(e){
            // 主题参数toogle
            __ROOT__.toogleTheme();
            // 应用主题
            __ROOT__.applyPageTheme();
        });
    };

    /**
     * 主题参数toogle 只负责设置主题的boolean值
     */
    __ROOT__.toogleTheme = function(){
        /**
         * 页面主题 true 即为默认 false 则为暗黑模式
         */
        let val = true;
        let cacheVal = __ROOT__.getCache("PAGE_THEME");
        if(cacheVal){
            val= !cacheVal;
        }
        __ROOT__.setCache("PAGE_THEME",val,-1);
    };

    /**
     * 传入参数,改变用户主题, 只临时切换,不存在后台数据交互
     * @param val true:则默认为白色   false:则默认为暗黑模式
     */
    __ROOT__.applyPageTheme = function () {
        let val = true;
        let cacheVal = __ROOT__.getCache("PAGE_THEME");
        if(cacheVal!=null){
            val = cacheVal;
        }else{
            // 如果没有,则主题初始化设置
            __ROOT__.setCache("PAGE_THEME",val,-1);
        }
        if (val) {
            // 浅色外观
            $("html").removeAttr("dark");
            $(".themeChangeText").text('切换深色外观');
            // 图标样式
            $('.themeChange').find('svg').remove();
            $('.themeChange').append('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"\n' +
                '                     role="img">\n' +
                '                    <path fill-rule="evenodd" clip-rule="evenodd"\n' +
                '                          d="M10.314 2.546a.75.75 0 0 1 .11.789 7.75 7.75 0 0 0 10.241 10.242.75.75 0 0 1 1.034.867C20.609 18.785 16.681 22 12 22 6.477 22 2 17.523 2 12c0-4.68 3.215-8.608 7.556-9.7a.75.75 0 0 1 .758.246ZM8.529 4.24A8.502 8.502 0 0 0 12 20.5a8.502 8.502 0 0 0 7.761-5.028A9.25 9.25 0 0 1 8.528 4.239Z"\n' +
                '                          fill="#0C0D0F"></path>\n' +
                '                </svg>');
        } else {
            // 深色外观
            $("html").attr("dark", true);
            $(".themeChangeText").text('切换浅色外观');
            // 图标样式
            $('.themeChange').find('svg').remove();
            $('.themeChange').append('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"\n' +
                '                     role="img">\n' +
                '                    <path d="M12 .75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 12 .75Z"\n' +
                '                          fill="#000"></path>\n' +
                '                    <path fill-rule="evenodd" clip-rule="evenodd"\n' +
                '                          d="M6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0ZM12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Z"\n' +
                '                          fill="#000"></path>\n' +
                '                    <path d="M12.75 20.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2ZM23.25 12a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75ZM3.5 12.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2ZM19.955 19.955a.75.75 0 0 1-1.06 0l-1.415-1.414a.75.75 0 1 1 1.06-1.06l1.415 1.413a.75.75 0 0 1 0 1.061ZM5.46 6.52a.75.75 0 0 0 1.06-1.06L5.106 4.044a.75.75 0 0 0-1.06 1.06L5.458 6.52ZM4.045 19.955a.75.75 0 0 1 0-1.06L5.46 17.48a.75.75 0 0 1 1.06 1.06l-1.414 1.415a.75.75 0 0 1-1.06 0ZM17.48 5.46a.75.75 0 1 0 1.061 1.06l1.414-1.414a.75.75 0 1 0-1.06-1.06L17.48 5.458Z"\n' +
                '                          fill="#000"></path>\n' +
                '                </svg>');
        }
    };

    /**
     * 获取url上的参数
     */
    __ROOT__.getUrlParam = function(){
        var query = location.search.substring(1);
        var values= query.split("&");
        let paramMap = {};
        for(var i = 0; i < values.length; i++) {
            var pos = values[i].indexOf('=');
            if (pos == -1) continue;
            var paramname = values[i].substring(0,pos);
            var value = values[i].substring(pos+1);
            paramMap[paramname] = value;
            //alert(paramname +","+value );
        }
        return paramMap;
    };

    /**
     * 系统登录模块 通过util工具类调用,util往页面写入对应的js
     * @param callback
     */
    __ROOT__.userLoginService = function(callback){
        $('body').append('<script src="../util/ModuleApi.js"><\/script>');
        new userLoginService(callback).start();
    };

};

// 控制只初始化一次 这里使用var  var全局,let局部
// 不过对于新的tab页面,还是会进行初始化,即每个tab都会产生一个utils
if(!utils){
    var utils = new MyUtils();
    // 执行组价初始化
    utils.init();
}



