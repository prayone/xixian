


 //zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
 $(function(){

    $(".hylbinit").each(function(){
     var documentID = $(this).attr("id");
     var myModalID = "myModal"+documentID;
     var treeID = "tree"+documentID;
     var divModal='<div class="modal fade" id="'+myModalID+'" tabindex="-1" role="dialog" >';
     divModal+='<div class="modal-dialog" role="document"><div class="modal-content">';
     divModal+='<div class="modal-header">';
     divModal+='<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
     divModal+='<span aria-hidden="true">&times;</span></button>';
     divModal+='<h4 class="modal-title" id="myModalLabel">请选择行业类别</h4></div><div class="modal-body">';
     divModal+='<ul id="'+treeID+'" class="ztree" style="width:250px;"></ul></div><div class="modal-footer">';
     divModal+='<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>';
     divModal+='<button type="button" class="btn btn-primary" data-dismiss="modal" inputID="'+documentID+'" onclick="hylbClear(this)">清除</button>';
     divModal+='<button type="button" class="btn btn-primary" data-dismiss="modal" inputID="'+documentID+'" treeID="'+treeID+'" onclick="hylbAdd(this)">确定</button>';
     divModal+='</div>';
     divModal+='</div>';
     divModal+='</div>';
     divModal+='</div>';
     $("body").parent().append(divModal);
     $(this).attr("data-toggle","modal");
     $(this).attr("data-target",'#'+myModalID);

     var setting = {
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdKey: "pId",
                rootPId: 0
            }
        },
        view: {
                dblClickExpand: false//屏蔽掉双击事件
            }
        };
        zhpost(HYLB, {}).then( function(result) {
            $.fn.zTree.init($("#"+treeID), setting, result);
        });
    });
    
});
 function hylbClear(obj){
    var inputID =$(obj).attr("inputID");
    $("#"+inputID).val('');
    $("#"+inputID).attr("name",'');
}
function hylbAdd(obj){
    var objID =$(obj).attr("treeID");
     var treeObj = $.fn.zTree.getZTreeObj(objID);
    var treeNode = treeObj.getSelectedNodes();
    var inputID =$(obj).attr("inputID");
    for(var i=0; i<treeNode.length; i++) {
        $("#"+inputID).val(treeNode[i].name);
        $("#"+inputID).attr("name",treeNode[i].id);
        break;
    }
}
 /*var zTreeObj;
        // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
        var setting = {
            data: {
                simpleData: {
                    enable: true,
                    idKey: "id",
                    pIdKey: "pId",
                    rootPId: 0
                }
            },
            view: {
                dblClickExpand: false//屏蔽掉双击事件
            }
        };

        function hylbClear(){
            $("#hylb").val('');
            $("#hylb").attr("name",'');
        }
        function hylbAdd(){
            var treeNode = zTreeObj.getSelectedNodes();
            for(var i=0; i<treeNode.length; i++) {
                $("#hylb").val(treeNode[i].name);
                $("#hylb").attr("name",treeNode[i].id);
                break;
            }
        }*/