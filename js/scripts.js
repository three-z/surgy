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

	$('.catalog-thumbs__list').slick({
		autoplay: false,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		vertical: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 840,
				settings: {
					vertical: false
				}
			},
			{
				breakpoint: 560,
				settings: {
					vertical: false,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 440,
				settings: {
					vertical: false,
					slidesToShow: 1
				}
			}
		]
	});

	$('.catalog-thumbs__item').on('click', function(e) {
		e.preventDefault();
		$('.catalog-item__big-image img').attr('src', $(this).find('img').data('big'));
	});

	$('.page .range-slider').slider({
		range: true,
		min: 0,
		max: 500,
		values: [0, 400]
	});

	$('.catalog-filter__toggle').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.catalog-filter__block').toggleClass('catalog-filter__block--closed');
	});

	$('.catalog-filter__open').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.catalog-filter').find('.catalog-filter__form').toggleClass('catalog-filter__form--opened');
	});

	$('.middle-nav__button a').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.middle-nav').toggleClass('middle-nav--opened');
		if ($('.middle-nav').hasClass('middle-nav--opened')) {
			$('<div class="middle-nav__overlay" />').appendTo('.page').mousedown(function(e) {
				var clicked = $(e.target);
				if (clicked.is('.middle-nav') || clicked.parents().is('.middle-nav')) {
					return;
				}
				else {
					$('.middle-nav').toggleClass('middle-nav--opened');
					$('.middle-nav__overlay').remove();
				}
			});
		}
		else {
			$('.middle-nav__overlay').remove();
		}
	});

	$('.header-user__item--login > a').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.header-user__item--login').find('.header-login').toggleClass('header-login--opened');
		if ($('.header-login').hasClass('header-login--opened')) {
			$('<div class="header-login__overlay" />').appendTo('.page').mousedown(function(e) {
				var clicked = $(e.target);
				if (clicked.is('.header-login') || clicked.parents().is('.header-login')) {
					return;
				}
				else {
					$('.header-login').toggleClass('header-login--opened');
					$('.header-login__overlay').remove();
				}
			});
		}
		else {
			$('.header-login__overlay').remove();
		}
	});

	$('.middle-nav__item').each(function() {
		if ($(this).find('.middle-nav__list').length > 0) {
			$(this).toggleClass('middle-nav__item--has-sublist');
		}
	});

	$('.middle-nav__item--has-sublist').hover(function () {
	    $(this).parents('.middle-nav').toggleClass('middle-nav--parent-hovered');
	});

	$('.catalog-item__count input').spinner({
		min: 1,
		max: 99
	});
});