
$(document).ready(function(){

    $(".btn").click(function(){
        var id = $(this).attr('id');
            $('.btn').removeClass('btn-primary');
            $(".text").hide();
            $(this).addClass("btn-primary"); 

        switch(id) {

            case 'btn1':                
                $(".first").show();                
                break;

            case 'btn2':                
                $(".second").show();               
                break;

            case 'btn3':                
                $(".third").show(); 
                $(".fourth").show();               
                break;
        }
    });
});

