$(function () {

  var $modal, $parent, $elem;
  var $body = $('body');

  function callAPI(inputValue) {
    $.ajax({
      url:
      'https://pixabay.com/api/?key=5857784-9fcfd09b6b8da3aa719f05782&q=' + inputValue + '&image_type=photo&callback=callbackFunc&orientation=vertical&per_page=9&min_width=50px&context=?',
      dataType: 'jsonp'
    });
  }

  var $input = $('.form-control');
  
  $input.on('keypress', function(e) {
	  	   if (e.keyCode == 13) {
			     e.preventDefault();
           $('.wrapper').empty();
    	     callAPI($input.val());
	   };
  });

  var $submit = $('.search-submit');
  $submit.on('click', function(e) {
		        e.preventDefault();
            $('.wrapper').empty();
      			callAPI($input.val());
  });
});

function callbackFunc(data) {
  $.each(data.hits, function(i, hit) {
      $parent = $('.wrapper');
      $elem = $('<a class="link-item" href="' + hit.webformatURL + '"></a>');
      $parent.append($elem);   

      $parent = $('.link-item');
      $elem = $('<img class="img-item" src="' + hit.previewURL + '" alt="' + hit.tags + '" >');
      $parent.last().append($elem);   
    });
}

