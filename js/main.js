jQuery(document).ready(function($) {


	$( window ).scroll( function(){
		let wScroll = $(this).scrollTop();
		let landingPos = $('.landing').offset().top;
		$('.landing').css('background-position', '50%' + (landingPos - wScroll) * 0.1 + 'px');
		let nav = $('.header-nav');
		let logo = $('.logo');
		let pos = nav.position().top;
		let before = $('.nav-i-link-selected:before');
		let h2 = $('.welcome h2').position().top
		if ( wScroll >= pos ) {
			nav.addClass('nav-line');
			logo.addClass('logo-fixed');
		}
		else {
			nav.removeClass('nav-line');
			logo.removeClass('logo-fixed');
		}		
		if ( wScroll >= h2-200 ) {
			$('.scroll-top').css({'opacity': 1, 'display': 'block'})
		}
		if ( wScroll <= h2-200 ) {
			$('.scroll-top').css({'opacity': 0, 'display': 'none'})
		}
	});



	let left = 0;
	let figCont = $('.offer-fig-container');
	let carWidth = $('.offer-carousel').width();
	let carVal = -1740 + carWidth;
	let changeLeft = (leftVal) => figCont.animate({left: leftVal + 'px'}, 500);
	$('.fig-right').click( function(){
		if (left > carVal) left -= 290;
		else left = 0;
		changeLeft(left);
	});
	$('.fig-left').click( function(){
		if (left < 0) left += 290;
		else left = carVal;
		changeLeft(left);
	});

	

	$('.scroll-top').click(function(event) {
		$("html").animate({ scrollTop: 0 }, 600);
    return false;
	});


	// Menu togglers
	$('.menu-toggle-cont').click(function(event) {
		$('.header-nav-list').toggleClass('hidden');
		$('body').toggleClass('no-scroll');
		$('.wrapper').toggleClass('wrapper-hidden');
	});
	$('.wrapper').click(function(event) {
		$('.header-nav-list').toggleClass('hidden');
		$('body').toggleClass('no-scroll');
		$(this).toggleClass('wrapper-hidden');
	});

	$('.header-nav-i').click(function(e) {
		if($(this).children('.nav-i-plus').hasClass('nav-i-plus-m')){
			$(this).children('.nav-i-list').addClass('hidden');
			$(this).children('.nav-i-plus').removeClass('nav-i-plus-m');
		}
		else {
			$('.nav-i-list').each(function(index, val) {
				$(this).addClass('hidden');
			});
			$('.nav-i-plus').each(function(index, val) {
				$(this).removeClass('nav-i-plus-m');
			});		
			$(this).children('.nav-i-list').toggleClass('hidden');
			$(this).children('.nav-i-plus').toggleClass('nav-i-plus-m');
		}
	})




});