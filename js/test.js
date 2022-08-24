
$(document).ready(function(){
    
    $("#btn_select").click(function(){
        console.log("set b");
        $("#select_abc").val(3);
    });

    $("#select_abc").val("b");

    // --------------2.输入框赋值
    $("#name").val("yin wen feng");

    $("#btn_applay_2").click(function () {
        console.log("content:%s", $("#name").val());
    });
});


