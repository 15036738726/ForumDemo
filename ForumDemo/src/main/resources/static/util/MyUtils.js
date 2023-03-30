/**
 * 工具对象
 * @param option
 * @constructor
 */
var MyUtils = function(option){
    __THIS__ = this;

    /**
     * restful请求风格 请求方式枚举
     * @type {string}
     */
    //获取资源 xxx/xxx/{},URL传参 使用此方式,sendData=null 参数挂在url后
    __THIS__.GET_REQUEST = "GET";
    //更新资源
    __THIS__.POST_REQUEST = "POST";
    //创建资源
    __THIS__.PUT_REQUEST = "PUT";
    // 删除资源
    __THIS__.DELETE_REQUEST = "DELETE";

    /**
     * 必填相关
     * @type {string}
     */
    // 必填警告属性
    __THIS__.myRequiredWaring  = "myRequiredWaringClass";
    // 必填属性
    __THIS__.myRequired = "myRequired"

    /**
     * 弹框相关
     * @type {number}
     */
    // 系统默认弹框关闭时间,毫秒值
    __THIS__.closeMilliSecond = 500;// 默认500
    // 弹框颜色
    __THIS__.dialogColorMap = {"DEFAULT":"#000","WARNING":"#f0ad4e","ERR":"#d9534f"};
    // 对外提供颜色枚举
    __THIS__.DIALOG_WARNING = "WARNING";// 黄色警告
    __THIS__.DIALOG_DEFAULT = "DEFAULT";// 黑色弹框
    __THIS__.DIALOG_ERR = "ERR"; // 红色,系统级错误
    __THIS__.dialogFontSize = "14"; // 弹框字体大小

    /**
     * 初始化方法,组价的所有前置控制,可定义在这个方法中
     */
    __THIS__.init = function () {
        // dialog弹框所依赖的样式表 初始化
        __THIS__.insertPageStyleSheet();
    };

    /**
     * 通用请求方法 如果需要返回值,则需要指定调用方式为 同步async = false
     */
    __THIS__.send = function(callback,url,sendData,type,async){
        let resultData;
        $.ajax({
            url: url,   // 请求地址,
            data: JSON.stringify(sendData),
            type: type?type:'POST',   // 请求方式
            async: async==undefined?true:async,// 默认就是异步可以不设置
            contentType: 'application/json', //发送的数据类型
            //dataType: 'json',// 接受的数据类型,可不写
            success: function (result) {
                if(callback){
                    callback(result);
                }else{
                    resultData = result;
                }
            },
            error: function (result) {
                console.log('Send Request Fail..'); // 请求失败时的回调函数
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
    __THIS__.getFormData = function(ele,arr){
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
    __THIS__.pageRequire = function(ele,arr){
        if(!arr) return true;
        for(var temp of arr){
            let currentEle = $("."+ele).find("#"+temp);
            // 当前元素设置的必填属性
            if(currentEle.attr(__THIS__.myRequired)!=undefined&&currentEle.attr(__THIS__.myRequired)==''){
                // 并且没有填入值
                if(currentEle.val().trim()==''){
                    // 则校验不通过 这里拦截  并提供样式
                    currentEle.addClass(__THIS__.myRequiredWaring);
                    return true;
                }else{
                    // 移除样式
                    currentEle.removeClass(__THIS__.myRequiredWaring);
                }
            }
        }
        return false;
    };

    /**
     * 弹框反馈 请求之后的反馈消息弹框提醒
     * @param data
     */
    __THIS__.feedback = function(data,millisecond,fontSize){
        let map = {200:__THIS__.DIALOG_DEFAULT,400:__THIS__.DIALOG_WARNING,500:__THIS__.DIALOG_ERR};
        __THIS__.msgDialog(data.message,map[data.code],millisecond,fontSize);
    };

    /**
     * 弹框
     * @param msg  消息
     * @param type 弹框类型
     * @param millisecond 毫秒值
     * @param fontSize 文字大小
     */
    __THIS__.msgDialog = function(msg,type,millisecond,fontSize){
        let dialogColor = __THIS__.dialogColorMap[type?type:__THIS__.DIALOG_DEFAULT];
        fontSize = fontSize?fontSize:__THIS__.dialogFontSize;
        var subhtml='<button type="button" class="myTip">'+msg+'</button>';
        $("body").append(subhtml);
        // 对默认的样式进行覆盖,设置颜色和字体大小
        $(".myTip").css("background-color",dialogColor).css("font-size",fontSize);
        var msgDialogStop = setInterval(autoCloseAlert,millisecond?millisecond:__THIS__.closeMilliSecond);
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
    __THIS__.insertPageStyleSheet = function(){
        let style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'my_utils_style_sheet';
        style.innerHTML='.myTip{' +
            'margin-top: 5px;margin-bottom: 5px;' +
            'color: #fff;background-color: '+__THIS__.dialogColorMap["DEFAULT"]+';' +
            'display: inline-block;font-weight: 400;' +
            'text-align: center;white-space: nowrap;' +
            'vertical-align: middle;touch-action: manipulation;' +
            'cursor: auto;background-image: none;' +
            'border: 1px solid transparent;padding: 6px 12px;font-size: '+__THIS__.dialogFontSize+'px;line-height: 1.42857143;' +
            'border-radius: 4px;user-select: none;' +
            'opacity:0.8;z-index: 2000;' +
            'position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);' +//屏幕水平垂直居中
            '}';
        // 把当前样式添加到 当前引用页面的head标签中
        $('head').append(style);
    };

};
var utils = new MyUtils();
// 执行组价初始化
utils.init();

