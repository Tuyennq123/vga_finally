

$(document).on('ready', function() {
	$('.center').slick({
		infinite: true,
		speed: 300,
		autoplaySpeed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

});

var GUI = {};

GUI.searchFormHeader = function(){
	if ($('#search-form-btn') . length > 0) {
		var btn = $('#search-form-btn');
		var form = $('.search-form-header');
		$('#search-form-btn').click(function(e){
			e.preventDefault();
			form.slideToggle();
		});
		$(window).click(function(e){
			if($(window).width() > 991 && $(form).has(e.target).length == 0 && !$(form).is(e.target) && $(btn).has(e.target).length == 0 && !$(btn).is(e.target)){
				$(form).slideUp(200);
			}
		});
		
	}
}

GUI.mMenu = function() {
	var main_nav = $('.main-nav');
	main_nav.find("ul li").each(function() {
		if ($(this).find("ul li").length > 0) {
			$(this).prepend('<i class="fa fa-angle-down" aria-hidden="true"></i>');
		}
	});
	// $(window).scroll(function () {
	// 	var e = $(window).scrollTop();
	// 	if (e > 0) {
	// 		$("header").addClass('fixed');
	// 	} else {
	// 		$("header").removeClass('fixed');
	// 	}
	// });
	main_nav.find('li i').click(function(){
		var ul = $(this).nextAll('ul');
		ul.stop().slideToggle();
	});
}

GUI.backToTop = function(){
	if($(".back-to-top").length > 0){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 300) {
				$(".back-to-top").show();
			} else {
				$(".back-to-top").hide();
			}
		});
		$(".back-to-top").click(function () {
			$('body,html').animate({
				scrollTop: 0},500)});
	} 
}


GUI.activeMenu = function() {
	var btn = $('#open-menu');
	var menu = $('.main-nav');
	btn.click(function(){
		menu.stop().slideToggle();
		btn.children('i').toggleClass('fa-bars').toggleClass('fa-times');
	});
}


GUI.searchFformMobile = function() {
	
		var btn = $('#open-search-form');
		var form = $('#search-form-mobile');
		btn.click(function(){
			form.slideToggle();
		});
}

GUI._init = function(){
	GUI.searchFormHeader();
	GUI.mMenu();
	GUI.activeMenu();
	GUI.searchFformMobile();
}
$(function() {
	GUI._init();
}); 