$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });

  $(window).resize(function() {
	   if (  $(window).width() > 700 ) {
		$('nav ul').removeAttr('style');
	 }
	});
});

$(document).ready(function() {
  $('.submenu-trigger').click(function() {
    $('#submenu').slideToggle(500);
  });

  $(window).resize(function() {
	   if (  $(window).width() > 700 ) {
		$('#submenu').removeAttr('style');
	 }
	});
});
