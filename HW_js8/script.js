$(document).ready(function(){
    $(".button").click(function(){
        $(".prompt").show(1);
    });
});

$(document).ready(function(){
    $(".input1").mouseover(function(){
        $(".prompt1").show(1);
        $(this).mouseout(function() {
        	$(".prompt1").hide(1);
        });
    });
});

$(document).ready(function(){
    $(".input2").mouseover( function(){
        $(".prompt2").show(1);
    });
});

$(document).ready(function(){
    $(".input2").mouseout( function(){
        $(".prompt2").hide(1);
    });
});


$(document).ready(function(){
    $(".input3").mouseover(function(){
        $(".prompt3").show(1);
        $(this).mouseout(function() {
        	$(".prompt3").hide(3);
        });
    });
});