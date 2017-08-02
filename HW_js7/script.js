
$(document).ready(function(){

    $(".btn").click(function(){
        var id = $(this).attr('id');

        switch(id) {

            case 'btn1':
                $('.btn').removeClass('btn-primary');
                $(".text").hide();
                $(".first").show();
                $(this).addClass("btn-primary"); 
                break;

            case 'btn2':
                $('.btn').removeClass('btn-primary');
                $(".text").hide();
                $(".second").show();
                $(this).addClass("btn-primary"); 
                break;

            case 'btn3':
                $('.btn').removeClass('btn-primary');
                $(".text").hide();
                $(".third").show(); 
                $(".fourth").show();
                $(this).addClass("btn-primary");
                break;
        }
    });
});

