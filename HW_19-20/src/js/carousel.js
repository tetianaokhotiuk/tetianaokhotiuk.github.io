$(document).ready(function(){

	$(".carousel-buttons").click(function(){ 
		$(".h-carousel-items .b-carousel-block").eq(0).clone().appendTo(".h-carousel-items"); // выбираем первый элемент, создаём его копию и помещаем в конец карусели
		$(".h-carousel-items .b-carousel-block").eq(0).remove(); // удаляем первый элемент карусели		
		$(".h-carousel-items").css({"left":"0px"}); // возвращаем исходное смещение набора набора элементов карусели		
	});

    $(".sq1").mouseover(function(){
            $(".sq1").css({"background-color":"#2a2d32"});
            $(this).mouseout(function() {
            	$(".sq1").css({"background-color":"#fff"});
            });
        });
    $(".sq2").mouseover(function(){
            $(".sq2").css({"background-color":"#2a2d32"});
            $(this).mouseout(function() {
        	$(".sq2").css({"background-color":"#fff"});
        });
    }); 
    $(".sq3").mouseover(function(){
            $(".sq3").css({"background-color":"#2a2d32"});
            $(this).mouseout(function() {
        	$(".sq3").css({"background-color":"#fff"});
            }); 
    });     
});