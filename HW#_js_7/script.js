
$(document).ready(function(){
    $(".btn1").click(function(){
        $(".first").show(1);
        $(".second").hide(1);
        $(".third").hide(1);
        $(".fourth").hide(1);
        $(this).addClass("btn-primary");
        $(".btn2").removeClass('btn-primary');
        $(".btn3").removeClass('btn-primary');
    });
});

$(document).ready(function(){
    $(".btn2").click(function(){
        $(".second").show(1);
        $(".first").hide(1);
        $(".third").hide(1);
        $(".fourth").hide(1);
        $(this).addClass("btn-primary");
        $(".btn1").removeClass('btn-primary');
        $(".btn3").removeClass('btn-primary');
    });
});

$(document).ready(function(){
    $(".btn3").click(function(){
        $(".third").show(1);
        $(".fourth").show(1);
        $(".second").hide(1);
        $(".first").hide(1);
        $(this).addClass("btn-primary");
        $(".btn1").removeClass('btn-primary');
        $(".btn2").removeClass('btn-primary');
    });
});

