$(function(){
	$(window).resize(function(){
		resizeFn();
	});
	function resizeFn(){
		var tw = $(window).width();
		var th = $(window).height()+2;
		$('#main_visual').css({'height':th+'px'});
	}
	resizeFn();
	
	setTimeout(playMotion,500);
	function playMotion(){
		$('#main_visual').addClass('play');
	}


	
});