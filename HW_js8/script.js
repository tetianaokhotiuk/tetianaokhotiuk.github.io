$(document).ready(function(){

    $(".button").click(function(){
        $(".prompt").show();
    });

    $(".input").mouseover(function(){
        var id = $(this).attr('id');
        var lastNum = id.slice(-1);
        $(".prompt"+lastNum).show();
        $(this).mouseout(function() {
                $(".prompt").hide();
        });


    });
             
   
});