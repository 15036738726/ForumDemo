/**
 * 工具对象
 * @param option
 * @constructor
 */
var MyUtils = function(option){
    //this.ID = option.ID;

    /**
     * 通用请求方法
     */
    this.send = function(callback,url,sendData,type,async){
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
};

var utils = new MyUtils();