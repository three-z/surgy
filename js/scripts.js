$(document).ready(function() {

	$(".page select, .page input[type='file'], .page input[type='radio'], .page input[type='checkbox']").each(function () {
		if (!$(this).hasClass("no-styler")) {
			$(this).styler({
				fileBrowse: "Выбрать файл"
			});
		}
	});

	$('.home-why__box').matchHeight();

	$('.home-popular__list, .catalog-viewed__list, .catalog-recommend__list').slick({
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

	$('.page .range-slider').slider({
		range: true,
		min: 0,
		max: 500,
		values: [0, 400]
	});

	$('.catalog-filter__toggle').on('click', function() {
		$(this).parents('.catalog-filter__block').toggleClass('catalog-filter__block--closed');
	});

	$('.catalog-filter__open').on('click', function() {
		$(this).parents('.catalog-filter').find('.catalog-filter__form').toggleClass('catalog-filter__form--opened');
	});
});