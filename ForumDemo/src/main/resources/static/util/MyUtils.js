/**
 * 工具对象
 * @param option
 * @constructor
 */
var MyUtils = function(option){
    __THIS__ = this;
    // 警告属性
    __THIS__.myRequiredWaring  = "myRequiredWaringClass";
    // 必填属性
    __THIS__.myRequired = "myRequired"
    /**
     * 弹框相关
     * @type {null}
     */
    __THIS__.alertStop = null;
    __THIS__.alertTime = 1;// 默认1  可不给

    /**
     * 通用请求方法
     */
    __THIS__.send = function(callback,url,sendData,type,async){
        $.ajax({
            url: url,   // 请求地址,
            data: JSON.stringify(sendData),
            type: type?type:'POST',   // 请求方式
            async: async?async:true,// 默认就是异步可以不设置
            contentType: 'application/json', //发送的数据类型
            //dataType: 'json',// 接受的数据类型,可不写
            success: function (result) {
                callback(result);
            },
            error: function (result) {
                console.log('Send Request Fail..'); // 请求失败时的回调函数
                callback(result);
            }
        });
    };
    /**
     * 封装参数
     */
    __THIS__.getFormData = function(ele,arr){
        console.log($("."+ele));
        if(!arr) return undefined;
        let pageData = {};
        for(var temp of arr){
            // console.log(temp);
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
                }
            }
        }
        return false;
    };

    /**
     * 消息提示
     * @param msg
     * @param time
     */
    __THIS__.msgDialog = function(msg,time){
        var subhtml='<div id="msgDialog" style=" overflow:hidden;"><div id="alert_show_3" class="time1" style="height:100px; width:200px; background-color:#000; color:#fff; opacity:0.8;  border-radius:8px;font-size:24px; text-align:center;z-index: 2000; position:fixed;top:20%;left:45%;"><p style="padding-top:30px;">'+msg+'</p></div></div>';
        $("body").append(subhtml);
        // 给全局对象赋值
        __THIS__.alertTime = time;
        // setInterval每间隔1000毫秒 执行一次 __THIS__.autoCloseAlert(time)函数
        __THIS__.alertStop = setInterval(__THIS__.autoCloseAlert(),1000)
    };

    //3s关闭弹出框
    __THIS__.autoCloseAlert = function(time){
        __THIS__.time = __THIS__.time-1;
        if(__THIS__.time==0){
            $('#msgDialog').remove();
            clearInterval(__THIS__.alertStop);
        }
    }
};

var utils = new MyUtils();