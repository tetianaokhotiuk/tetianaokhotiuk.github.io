$(document).ready(function(){

    $(".button").click(function(){
        $(".prompt").show();
    });

    $(".input").mouseover(function(){
        var id = $(this).attr('id');

        switch(id) {

            case 'first_name':
                $(".prompt1").show();                 
                break;

            case 'last_name':
                $(".prompt2").show();                 
                break;

            case 'address':
                $(".prompt3").show();                 
                break;
            }
    });
           
    $(this).mouseout(function() {
        $(".prompt").hide();
    });
   
});