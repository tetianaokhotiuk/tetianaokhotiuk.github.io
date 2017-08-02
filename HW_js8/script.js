$(document).ready(function(){

    $(".button").click(function(){
        $(".prompt").show();
    });

    $(".input").mouseover(function(){
var id = $(this).attr('id');

    switch(id) {

    case 'first_name':
        $(".prompt1").show(); 
        $(this).mouseout(function() {
        $(".prompt1").hide();
        });
        break;

    case 'last_name':
        $(".prompt2").show(); 
        $(this).mouseout(function() {
        $(".prompt2").hide();
        });
        break;

    case 'address':
        $(".prompt3").show(); 
        $(this).mouseout(function() {
        $(".prompt3").hide();
        });
        break;
    }
    });
});