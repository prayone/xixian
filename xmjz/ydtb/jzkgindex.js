var imgArr=[];
setTimeout(function(){
    document.querySelector('#imgInput').addEventListener('change', function () {
    var that = this;
    lrz(that.files[0], {
        width: 800
    })
        .then(function (rst) {
            var img = new Image(),
                div = document.createElement('div'),
                p = document.createElement('p'),
                sourceSize = toFixed2(that.files[0].size / 1024),
                resultSize = toFixed2(rst.fileLen / 1024),
                scale = parseInt(100 - (resultSize / sourceSize * 100));

            p.style.fontSize = 13 + 'px';
            p.innerHTML      = '源文件：<span class="text-danger">' +
                sourceSize + 'KB' +
                '</span> <br />' +
                '压缩后传输大小：<span class="text-success">' +
                resultSize + 'KB (省' + scale + '%)' +
                '</span> ';

            div.className = 'col-sm-6 z_addImg';
            div.appendChild(img);
            div.appendChild(p);
            img.onclick=function(){
                imgRemove(this);
            };
            img.onload = function () {
                document.querySelector('#upload-container').appendChild(div);
            };
            img.src = rst.base64;
            imgArr.push(rst.base64)

        });
});
},2000)

// ajax提交后台
function submit(){
    console.log(imgArr)
    // debugger
    var data={}
    data.id=$(".xmmc").attr("xgid");
    data.xmid=$(".xmmc").attr("xmid");
    data.rklb=$(".xmmc").attr("rklb");
    data.sgzt = $(".sgzt").is(":checked")?2:"";
    $(".item").each(function(){
            data[$(this).attr('name')] = $(this).val()
        })
    data.jztp1=imgArr
    zhpost(JZKGSAVE+";JSESSIONID=" + sessionid, data).then( function(result) {
                 console.log(result)   
                 if(result=="success"){
                        window.location.href="../jzkgydList.html"
                 }else{
                    alert("保存失败")
                 }
        });
}
//删除数组里面的指定元素
Array.prototype.removeByValue = function(val) {
  for(var i=0; i<this.length; i++) {
    if(this[i] == val) {
      this.splice(i, 1);
      break;
    }
  }
}
function imgDelect(obj){
    var sctplj = $(obj).attr("data_href");
    var data={
        sctplj:sctplj
    }
    hui.confirm('您确定要删除吗？', ['取消','确定'], function(){
        zhpost(JZDELECTPIC+";JSESSIONID=" + sessionid, data).then( function(result) {
             if(result=="删除成功"){
                $(obj).remove();
                hui.upToast('删除成功!')
             }else{
                alert("删除失败")
             }
        });
    });
}
// 删除图片
function imgRemove(info){
    var src=$(info).attr("src")
        hui.confirm('您确定要删除吗？', ['取消','确定'], function(){
            imgArr.removeByValue(src);
            $(info).parent().remove();
        });
}
function toFixed2 (num) {
    return parseFloat(+num.toFixed(2));
}



