
$(document).ready(function(){
    
    // --------1.下拉选项
    $("#btn_select_1").click(function(){
        console.log("set b");
        $("#select_abc_1").val(3);
    });

    $("#select_abc_1").val("b");

    // 选项改变触发动作
    $("#select_abc_1").change(function () { 
        console.log("select changed");
        
    });
    
    // --------------2.输入框赋值
    $("#name").val("yin wen feng");

    $("#btn_applay_2").click(function () {
        console.log("content:%s", $("#name").val());
    });

    //----------------3.jq显示和隐藏div
    $("#btn_show_3").click(function () {
        $("#show_and_hidden_3").show();
    });

    $("#btn_hide_3").click(function () { 
        $("#show_and_hidden_3").hide();
    });
});


