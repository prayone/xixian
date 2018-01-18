// 49.4.9.227:8080/xixian_war
var targetUrl = "http://xixian.xbzdxm.com";
var webName="192.168.1.189:8088"
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
var DWHZ="/a/zjkj/tjbb/yddwhz.json"



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
function zhget(url, data, callback) {
    return zhajax(url, data, 'GET', callback);
}

function zhpost(url, data, callback) {
    return zhajax(url, data, 'POST', callback);
}

function zhput(url, data, callback) {
    return zhajax(url, data, 'PUT', callback);
}

function zhdelete(url, data, callback) {
    return zhajax(url, data, 'DELETE', callback);
}

function zhajax(url, data, type,callback) {
    if(type=='GET'){
        return $.ajax({
            url: targetUrl + url,
            // data: $.extend(data, {sid: getCookie('sid')}),
            data: data,
            type: type,
            success: function (result, textStatus, jqXHR) {
                if(result.failcode=="-1000"){
                    window.location.href=webName+"/login.html"
                }
            }
        });
    }else{
        return $.ajax({
            url: targetUrl + url,
            data: data,
            type: type,
            success: function (result, textStatus, jqXHR) {
                if(result.failcode=="-1000"){
                    window.location.href="http://192.168.1.189:8088/login.html"
                }
            }
        });
    }
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
