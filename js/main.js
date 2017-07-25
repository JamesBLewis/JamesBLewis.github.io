$(document).ready(function(){

		$('body').removeClass('fade-out');

		$('a[href^="#about"]').on('click', function(event) {
	  $(".about").slideDown();
    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

	$(function(){
		$(".element").typed({
			strings: ["<h1>Hi! My name is James.</h1> This is my website :)"],
			typeSpeed: 0,
			cursorChar: "|",
			backDelay: 1000
		});
	});
	
});
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','js/analytics.js','ga');

  ga('create', 'UA-75010585-1', 'auto');
  ga('send', 'pageview');
