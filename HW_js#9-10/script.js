$(document).ready(function(){
 $('.bxslider').bxSlider({
  minSlides: 2,
  maxSlides: 2,
  slideWidth: 360,
  slideMargin: 10
});
});

$(document).ready(function() {
        
        $('#example-two').hierarchySelect({
            hierarchy: false,
            width: 200
        });
       
    });

$(document).ready(function(){
$( "#check3" ).prop({
  disabled: true
});
});

$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(700);
        },

        function(){
            $(this).children('.sub-menu').slideUp(700);   
        }
    );

}); 