
$(document).ready(function(){

    $(".btn").click(function(){
        var id = $(this).attr('id');
        var lastNum = id.slice(-1);
            $('.btn').removeClass('btn-primary');
            $(".text").hide();
            $(".text"+lastNum).show();
            $(this).addClass("btn-primary"); 
    });
});

