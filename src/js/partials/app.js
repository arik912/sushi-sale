$(document).ready(function(){
	$('.slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 3
	});

	$("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
});