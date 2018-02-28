// var targetUrl = "http://xixian.xbzdxm.com ";
// var webName="http://xxwx.xbzdxm.com"
var targetUrl = "http://192.168.1.189:8080";
var webName="http://192.168.1.189:8088";
document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\""+webName+"/css/zjkj.css\"/>");
document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\""+webName+"/css/xmList.css\"/>");
// 登录
var LOGIN="/a/login";
// 行业类别
var HYLB="/a/comm/xmlb/treeData"
// 续建
var XJLIST="/a/zjkj/xmSbk/sbkxujlist.json"
var XMK_XJLIST="/a/zjkj/xmk/xmkxujlist.json"

// 新开工列表
var XKGLIST="/a/zjkj/xmSbk/sbkxjlist.json"
var XMK_XKGLIST="/a/zjkj/xmk/xmkxjlist.json"
// 前期列表
var QQLIST="/a/zjkj/xmSbk/sbkqqlist.json"
var XMK_QQLIST="/a/zjkj/xmk/xmkqqlist.json"
// ppp申报库
var JCKLIST="/a/zjkj/ppp/list/1.json"
var YXKLIST="/a/zjkj/ppp/list/2.json"
var ZXKLIST="/a/zjkj/ppp/list/3.json"
// ppp项目库
var XMK_JCKLIST="/a/zjkj/ppp/xmklist/1.json"
var XMK_YXKLIST="/a/zjkj/ppp/xmklist/2.json"
var XMK_ZXKLIST="/a/zjkj/ppp/xmklist/3.json"
//集中开工列表
var JZKGLIST="/a/zjkj/jzkg/list.json"
var XMK_JZKGLIST="/a/zjkj/jzkg/xmklist.json"
// 领导联系列表
var XMK_LDLXLIST="/a/zjkj/xmk/ldlxlist.json"


// 续建、新开工、领导联系详情
var XJDETAIL="/a/zjkj/xmMain/xjDetail.json"
// 前期详情
var QQDETAIL="/a/zjkj/xmMain/qqDetails.json"
// 集中开工详情
var JZKGDETAIL="/a/zjkj/jzkg/xjDetail.json"
// ppp项目详情
var PPPDETAIL="/a/zjkj/ppp/pppDetail.json"
// 排行榜
var PHB="/a/zjkj/home.json"

// 项目进展
var ZDXMYDLIST="/a/zjkj/ydMain/list.json"
var JZKGXMYDLIST="/a/zjkj/jzkgydMain/list.json"
var JCKYDLIST="/a/zjkj/pppydmain/list/1.json"
var YXKYDLIST="/a/zjkj/pppydmain/list/2.json"
var ZXKYDLIST="/a/zjkj/pppydmain/list/3.json"
//项目进展详情
var YDPPPDetail="/a/zjkj/pppydmain/xmzxq.json"
var YDJZKGDetail="/a/zjkj/jzkgydMain/xmxq.json"
var YDZDXMDetail="/a/zjkj/ydMain/xmxq.json"

// 重点项目填报
var ZDXMTB="/a/zjkj/ydMain/form.json"
var ZDXMSAVE="/a/zjkj/ydMain/save.json"
var DELECTPIC="/a/zjkj/ydMain/deleteOnePic.json"
//集中开工填报
var JZKGTB="/a/zjkj/jzkgydMain/form.json"
var JZKGSAVE="/a/zjkj/jzkgydMain/save.json"
var JZDELECTPIC="/a/zjkj/jzkgydMain/deleteOnePic.json"
//基础库填报
var JCKTB="/a/zjkj/pppydmain/form/1.json"
var JCKSAVE="/a/zjkj/pppydmain/save.json"
var LJTZE="/a/zjkj/pppydmain/cxsytze.json"
// var JCKDELECTPIC="/a/zjkj/pppydmain/form/1/deleteOnePic.json"
//意向库填报
var YXKTB="/a/zjkj/pppydmain/form/2.json"
//执行库填报
var ZXKTB="/a/zjkj/pppydmain/form/3.json"
// 统计报表
var HYHZ="/a/zjkj/tjbb/ydhyhz.json"
var HYMX="/a/zjkj/tjbb/ydhymxb.json"
var DWHZ="/a/zjkj/tjbb/yddwhz.json"
var DWMX="/a/zjkj/tjbb/yddwmxb.json"
var LDXMHZ="/a/zjkj/tjbb/ldlxxmtj.json"
var YKGXM="/a/zjkj/tjbb/ykgxmb.json"
var YJGXM="/a/zjkj/tjbb/yjgxmb.json"
var YDXX="/a/zjkj/tjbb/ydxxtjb.json"
//分配领导
var FPLD="/a/zjkj/xmMain/xmfpdw.json"
//入重点项目库
var RZDXM="/a/zjkj/xmMain/xmrk.json"
//项目驳回
var XMBH="/a/zjkj/xmMain/xmht.json"
//退回申报库
var THSBK="/a/zjkj/xmMain/xmbhs.json"
//入集中开工项目库
var RJZKGXM="/a/zjkj/jzkg/xmrk.json"
//项目调出
var XMDC="/a/zjkj/xmMain/xmdc.json"
//领导联系移除
var LDLXYC="/a/zjkj/xmk/ldlxyichu.json"
//统计图表
var HYTJTB="/a/zjkj/tjbb/ydhyhzEcharsData.json"
var DWTJTB="/a/zjkj/tjbb/yddwhzEcharsData.json"
var GYFLTJTB="/a/zjkj/tjbb/gyfltjtData.json"
var DYZXTJTB="/a/zjkj/tjbb/dyzxdbtData.json"
//统计图表参数
var HYTJTB_parameter ="/a/zjkj/tjbb/ydhyhzEchars.json"
var DWTJTB_parameter="/a/zjkj/tjbb/yddwhzEchars.json"
var GYFLTJTB_parameter="/a/zjkj/tjbb/gyfltjt.json"
var DYZXTJTB_parameter="/a/zjkj/tjbb/dyzxdbt.json"



//时间戳转换为时间格式
function formatDate(date, format) {
    if (!date) return;
    if (!format) format = "yyyy-MM-dd";
    switch (typeof date) {
        case "string":
        date = new Date(date.replace(/-/, "/"));
        break;
        case "number":
        date = new Date(date);
        break;
    }
    if (!date instanceof Date) return;
    var dict = {
        "yyyy": date.getFullYear(),
        "M": date.getMonth() + 1,
        "d": date.getDate(),
        "H": date.getHours(),
        "m": date.getMinutes(),
        "s": date.getSeconds(),
        "MM": ("" + (date.getMonth() + 101)).substr(1),
        "dd": ("" + (date.getDate() + 100)).substr(1),
        "HH": ("" + (date.getHours() + 100)).substr(1),
        "mm": ("" + (date.getMinutes() + 100)).substr(1),
        "ss": ("" + (date.getSeconds() + 100)).substr(1)
    };
    return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function () {
        return dict[arguments[0]];
    });
}
// 获取location.href的参数
function getQueryString(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
   var r = window.location.search.substr(1).match(reg);
   if (r != null) return unescape(r[2]); return null;
}
function logout(){
    localStorage.removeItem('username');
    location.href='../index.html'
}
function zhget(url, data) {
    return zhajax(url, data, 'GET');
}

function zhpost(url, data) {
    return zhajax(url, data, 'POST');
}

function zhput(url, data) {
    return zhajax(url, data, 'PUT');
}

function zhdelete(url, data) {
    return zhajax(url, data, 'DELETE');
}

function zhajax(url, data, type) {
    var ajaxTimeOut;
    if(type=='GET'){
        ajaxTimeOut= $.ajax({
            url: targetUrl + url+";JSESSIONID="+localStorage.getItem("sessionid"),
            timeout : 30000, //超时时间设置，单位毫秒
            data: data,
            type: type,
            success: function (result, textStatus) {
                if(result.failcode=="-1000"){
                    var user_name=localStorage.getItem("user_name");
                    var pass_word=localStorage.getItem("pass_word"); 
                    login_fun(user_name,pass_word).then(function(result){
                        if(result.message){
                            $.toast(result.message, "forbidden");
                        }else{
                            window.location.reload();
                        }
                    });
                }
            },
            complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
        　　　　if(status!='success'){//超时,status还有success,error等值的情况
           　　　　　 $.toast("网络超时，请刷新", "cancel");
       　　　　}
   　　}
});
    }else{
        ajaxTimeOut= $.ajax({
            url: targetUrl + url+";JSESSIONID="+localStorage.getItem("sessionid"),
            timeout : 30000, //超时时间设置，单位毫秒
            data: data,
            type: type,
            success: function (result, textStatus) {
                if(result.failcode=="-1000"){
                 var user_name=localStorage.getItem("user_name");
                 var pass_word=localStorage.getItem("pass_word"); 
                 login_fun(user_name,pass_word).then(function(result){
                    if(result.message){
                        $.toast(result.message, "forbidden");
                    }else{
                     window.location.reload();
                 }
             });
             }
         },
            complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
        　　　　if(status!='success'){//超时,status还有success,error等值的情况
           　　　　　 $.toast("网络超时，请刷新", "cancel");
       　　　　}
   　　}
});
    }
    return ajaxTimeOut;
}

function ajaxSynGet(url, callback) {   //同步GET请求
    $.ajax({
        url: url,
        data: {},
        async: false,
        type: 'GET',
        success: function (result, textStatus, jqXHR) {
            if (callback) {
                callback(result);
            }
        }
    });
}

function ajaxInitSession(url, callback) {   //专用于session初始调用
    $.ajax({
        url: targetUrl + url,
        data: {sid: getCookie('sid')},
        type: 'POST',
        success: function (result, textStatus, jqXHR) {
            if (callback) {
                callback(result);
            }
        }
    });
}
function upajax(url, data, callback) {
    return $.ajax({
        url: targetUrl + url,
        data: data,
        type: 'POST',
        processData: false,        //必须false才会避开jQuery对 formdata 的默认处理;XMLHttpRequest会对 formdata 进行正确的处理
        contentType: false,        //必须false才会自动加上正确的Content-Type
        success: function (result, textStatus, jqXHR) {
            if (callback) {
                callback(result);
            }
        }
    });
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            var c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}
function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
    ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString())
}
function showSuccess(message) {
    Messenger().post({
        message: message,
        type: 'success',
        hideAfter: 1.5,//多长时间消失
        showCloseButton: true
    });
}

function showError(message) {
    Messenger().post({
        message: message,
        type: 'error',
        hideAfter: 1.5,//多长时间消失
        showCloseButton: true
    });
}


function buildTable(datas, template, placeholder) {
    var temp = Handlebars.compile($("#" + template).html());
    $("#" + placeholder).html(temp({
        datas: datas.rows
    }));
    if (datas.count > 0) {
        buildPaginator('paginator', datas.count);
    }
}

function buildPaginator(paginator, total) {
    var options = {
        currentPage: currentPageNo,
        totalPages: total,
        bootstrapMajorVersion: 3,
        onPageClicked: function (e, originalEvent, type, page) {
            currentPageNo = page;
            queryList();
        }
    };
    $('#' + paginator).bootstrapPaginator(options);
}

function templateRender(data, id) {
    var temp = Handlebars.compile($("#" + id).html());
    $("#" + id).html(temp(data));

}
function showTemplate(datas, templateId, placeholder) {
    var temp = template(templateId,datas);
    $("#" + placeholder).html(temp);
}
function info(){
  if(!isLogin()){
   window.location.href=webName+"/login.html";
}else{
   window.location.href=webName+"/person_info.html";
} 
}
// 登陆接口
function login_fun(user_name,pass_word){
    var ajaxTimeOut= $.ajax({
        type:"POST",
        url:targetUrl+LOGIN+"?login",
        data: {
            username:user_name, 
            password:pass_word,
            mobileLogin : 'true',
            entrance:"611100",
            rememberMe :true
        },
        dataType: "json",
        success:function (data) {
            if(data.user){
               for(var i=0;i<data.config.length;i++){
                if(data.config[i].identification=="con_year"){
                    localStorage.setItem("tbnd",data.config[i].paraValue);
                }
            }
            localStorage.setItem("user_name",user_name);
            localStorage.setItem("pass_word",pass_word);
            localStorage.setItem("sessionid",data.sessionid);
            localStorage.setItem("user",JSON.stringify(data.user));
            localStorage.setItem("user_level",data.user.company.code);
            localStorage.setItem("user_zrdw",data.user.company.name);
        }
        var permission=[];
        if(data.menu){
            for(var j=0;j<data.menu.length;j++){
               if(data.menu[j].permission){
                permission.push(data.menu[j].permission)
            }
        }
        console.log(permission)
        localStorage.setItem("permission",permission);
    }

},
    complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
　　　　if(status!='success'){//超时,status还有success,error等值的情况
 $.hideLoading();
 　　　　　 $.toast("网络超时，请刷新", "cancel");
　　　　}
　　}
});
    return ajaxTimeOut;
}


function getUser(){
    var user_Str=localStorage.getItem("user");
    //重新转换为对象 
    var obj = JSON.parse(user_Str);
    return obj;
}
function clearlocalStorage(){
    localStorage.clear();
}

function isLogin(){
    var user=localStorage.getItem("user");
    if(user){
        return true;
    }else{
        return false;
    }
}

$(function(){
    $(".login").click(function(){
       if(!isLogin()){
        window.location.href=webName+"/login.html";
        return false;
    }        
});
});

function initDate(defaultdate){
     // date time picker
     if ($(".iDate.full").length > 0) {
        $(".iDate.full").datetimepicker({
            locale : "zh-cn",
            format : "YYYY",
            dayViewHeaderFormat : "YYYY",
            defaultDate:defaultdate 
        });
    }
    if ($(".iDate.date").length > 0) {
        $(".iDate.date").datetimepicker({
            locale : "zh-cn",
            format : "YYYY",
            dayViewHeaderFormat : "YYYY",
            defaultDate: defaultdate  
        });
    }
                            //时间控件结束
}
function initDateMoth(defaultdate){
     // date time picker
     if ($(".MDate.full").length > 0) {
        $(".MDate.full").datetimepicker({
            locale : "zh-cn",
            format : "MM",
            minView: "month",
            dayViewHeaderFormat : "MMMM",
            defaultDate:defaultdate 
        });
    }
    
                            //时间控件结束
}
function initDateTime(defaultdate){
      // date time picker
      if ($(".iDate.full").length > 0) {
        $(".iDate.full").datetimepicker({
            locale : "zh-cn",
            format : "YYYY-MM",

            dayViewHeaderFormat : "YYYY年 MMMM",
            defaultDate:defaultdate 

        });
    }
    if ($(".iDate.date").length > 0) {
        $(".iDate.date").datetimepicker({
            locale : "zh-cn",
            format : "YYYY-MM",
            dayViewHeaderFormat : "YYYY年 MMMM",
            defaultDate: defaultdate  
        });
    }
}
