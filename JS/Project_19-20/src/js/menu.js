$(function () {
    var location = window.location.href;
    var cur_url = '#' + location.split('#').pop();
 
    $('.top-panel li').each(function () {
        var link = $(this).find('a').attr('href');
 
        if (cur_url == link)
        {
            $(this).addClass('current');
        }
    });

    $(".btn").click(function(){   
            $('.btn').removeClass('btn-primary');
            $(this).addClass("btn-primary"); 
    });
});