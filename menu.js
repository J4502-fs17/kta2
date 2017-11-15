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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
