$(document).ready(function() {

	$(".page select, .page input[type='file'], .page input[type='radio'], .page input[type='checkbox']").each(function () {
		if (!$(this).hasClass("no-styler")) {
			$(this).styler({
				fileBrowse: "Выбрать файл"
			});
		}
	});

	$('.home-why__box').matchHeight();

	$('.home-popular__list').slick({
		autoplay: false,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 840,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.home-partners__list').slick({
		autoplay: false,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 840,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

});