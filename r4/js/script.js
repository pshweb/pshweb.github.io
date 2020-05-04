
$(function(){

	new WOW().init();
	$('body').addClass('onload');

	$(window).resize(function(){
		wowOffsetReset();
	});
	function wowOffsetReset(){
		var tw = $(window).width();
		if(tw<600){
			$('.wow').each(function() {
				var moffset = $(this).attr('data-wow-moffset');
				if(moffset){
					$(this).attr('data-wow-offset',moffset);
				}
			});
		}
	}
	wowOffsetReset();


	
	$(window).scroll(function(){
		scrollFn();
	});
	var scrollOffsetY = 0;	
	var preScrollTop; // 
	function scrollFn(){
		scrollTop = $(document).scrollTop();
		if (scrollTop > scrollOffsetY) {
			$('#header').addClass('fixed_top');
		} else {
			$('#header').removeClass('fixed_top');
		}
		if(preScrollTop > scrollTop ){
			$('body').removeClass('scroll_down');
		}else{
			$('body').addClass('scroll_down');
		}
		preScrollTop = scrollTop;
	}
	scrollFn();

	var mswiper = new Swiper('#partners_nav .swiper-container', {      	 
	  loop: false,	
	  slidesPerView: 'auto',
	  navigation: {
			nextEl: '#partners_nav .swiper-button-next',
			prevEl: '#partners_nav .swiper-button-prev',
		},
	});
	
	
	$('#partners_nav a').on('click',function(e){
		e.preventDefault();
		var id = $(this).attr('href');
		var currentScrollTop = $(window).scrollTop();
		var scrollTo = $(id).offset().top-$('#partners_nav').height()-10;
		if(currentScrollTop>scrollTo){
			scrollTo-= $('#header').height();
		}
		var posDiff = Math.max(currentScrollTop, scrollTo) - Math.min(currentScrollTop, scrollTo);
		 $('html, body').stop().animate({ scrollTop: scrollTo+'px'}, 1000);
	});
	$('#partners_nav a').on('mouseenter focus',function(){		
		$('#partners_nav').addClass('on');
		$('#partners_nav li').removeClass('on');
		$(this).parents('li').addClass('on');
	});
	$('#partners_nav').on('mouseleave',function(){		
		$('#partners_nav').removeClass('on');
		$('#partners_nav li').removeClass('on');
	});
	$('#gnb a').on('mouseenter focus',function(){		
		$('#gnb').addClass('on');
		$('#gnb li').removeClass('on');
		$(this).parents('li').addClass('on');
	});
	$('#gnb').on('mouseleave',function(){		
		$('#gnb').removeClass('on');
		$('#gnb li').removeClass('on');
	});
	

	
	$('.btn_menu_open').on('click',function(){
		$('#gnb_mobile').addClass('open');
		$('.dimmed_bg').show();
	});
	$('.btn_menu_close').on('click',function(){
		$('#gnb_mobile').removeClass('open');
		$('.dimmed_bg').hide();
	});

	$('.btn_contact').on('click',function(e){
		e.preventDefault();
		$('#contact_pop').show();
		$('.dimmed_bg').show();
	});
	$('#contact_pop .btn_close').on('click',function(e){
		e.preventDefault();
		$('#contact_pop').hide();
		$('.dimmed_bg').hide();
	});

	var fileTarget = $('.filebox .upload_hidden'); 
	fileTarget.on('change', function(){ // 
		if ($("#attach").val() == '') {
			var filename = "";
		} else if (window.FileReader) { // modern browser 
			var filename = $(this)[0].files[0].name; 
		} else { // old IE 
			var filename = $(this).val().split('/').pop().split('\\').pop(); //
		} // 
		$(this).siblings('.upload_name').val(filename); 
	});


	/* 제품소개 */
	var pInterval;
	$('.pc .product .btn_info').on('mouseenter focus',function(){
		$('.balloon').removeClass('on');
		$(this).parents('.info_box').find('.balloon').addClass('on');
		clearInterval(pInterval);
	});
	$('.pc .product .btn_info').on('mouseleave',function(){		
		clearInterval(pInterval);
		pInterval = setTimeout(outBalloon,1000,$(this).parents('.info_box').find('.balloon'));			
	});
	$('.mo .product .btn_info').on('click',function(){
		$(this).parents('.info_box').find('.balloon').addClass('on');
		clearInterval(pInterval);
		pInterval = setTimeout(outBalloon,3000,$(this).parents('.info_box').find('.balloon'));
	});
	function outBalloon($this){
		$this.removeClass('on');
	}


	var timer1,timer2,timer3,timer4;
	
	$('.txt_fade_motion.first').each(function() {
		$(this).txtFadeMotion(true);
	});
	$('.txt_fade_motion:not(.first)').each(function() {
		$(this).txtFadeMotion(false);
	});
	$('.txt_fade_motion').on('inview', function(event, isInView) {
		if (isInView) {
			$(this).addClass('animated');
			$(this).addClass('play');
		}
	});
	function playFn2($this){
		if($this){
			console.log($this.attr('class'));
			$this.addClass('play');
		}
	}
	

	
	
	$('.pc #main_look .txt').on('inview', function(event, isInView) {
		if (isInView) {	
			var $this = $(this);
			setTimeout(function(){
				$this.addClass('play');
			},1000);
			// setTimeout(playFn2,1000,$(this));
		}
	});
	/*
	$('.pc #main_look .box').on('inview', function(event, isInView) {
		if (isInView) {
			var $this = $(this);
			setTimeout(function(){
				$this.addClass('play');
			},300);
			// setTimeout(playFn2,300,$(this));
		}
	});
	*/

	$('#dear_women').on('inview', function(event, isInView) {
		if (isInView) {
			$('.txt_fade_motion02').each(function() {
				$(this).txtFadeMotion02();
			});
			$(this).addClass('play');
		}
	});

	
});

(function( $ ) {
	$.fn.txtFadeMotion = function(isAuto) {
		
		var $this = this;
		var max;
		var delay = $this.attr('data-delay');
		var interval;

		function init(){
			$this.find('em').each(function() {
				var ary = $(this).text().split('');
				var str = '';
				for(var i=0; i<ary.length; i++){
					str += '<span class="t'+i+'">'+ary[i]+'</span>';
				}
				$(this).empty();
				$(this).append(str);
			});
			if(isAuto){
				$this.addClass('play');
			}
		}					
		init();

    };

	$.fn.txtFadeMotion02 = function(option) {
		
		var $this = this;
		var delay = $this.attr('data-delay-gap');
		var max;
		var interval;

		function init(){
			var count = 0;
			$this.find('em').each(function() {
				var ary = $(this).text().split('');
				var str = '';
				for(var i=0; i<ary.length; i++){
					str += '<span class="t'+count+'">'+ary[i]+'</span>';
					count++;
				}
				$(this).empty();
				$(this).append(str);				
			});

			for(var i=0; i<=count; i++){
				var t = i*delay+0.4;
				$this.find('.t'+i).css({'-webkit-transition-delay':t+'s','transition-delay':t+'s'});
			}
			clearInterval(interval);
			interval = setTimeout(function(){
				$this.addClass('play');
			},100);
		}			
		
		init();

    };
})( jQuery );