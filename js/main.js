$(document).ready(function(){

	//check the existence of an element
	jQuery.exists = function(selector) {
		return ($(selector).length > 0);
	}

	//Preloader:
	$(window).load(function () {
		o = $('#preloader');
		if(o.length){
			o.fadeOut(300);
		}
	});
    //Preloader end;

	//Message:
	function Message(){
		h = $(window).height();
		min_h = 400;
		if(h < min_h){
			$('#message').addClass('show');
		}
		else{
			$('#message').removeClass('show');
		}
	}
	Message();
	$(window).resize(function(){
		Message();
	});
	//Message end;

	$(window).bind('scroll',function(e){
		ParallaxScroll();

		Header();
	});

	function Header(){
		scrolled = $(window).scrollTop();
		if(scrolled > 10){
			$('#header_top').addClass('add_bg');
		}
		else{
			$('#header_top').removeClass('add_bg');
		}
	}

	//Show navigation:
	$('#get_nav, #header_nav_close').click(function(){
		$('#header_nav').toggleClass('open');
		$('#get_nav').toggleClass('hide');
	});

	//Show search:
	$('#get_search, #header_search_close').click(function(){
		$('#header_search').toggleClass('open');
		$('#get_search').toggleClass('hide');
	});

	//Owl carousel:
	if ($.exists('.owl_carousel')) {
		$(".owl_carousel").owlCarousel({
			items: 1,
			nav: true,
			loop:true,
			navText: []
		});
	}

	 //Scroll to:
	 $("#go_to1").click(function() {
	 	$('html, body').animate({
	 		scrollTop: $("#scroll1").offset().top - 80
	 	}, 500);
	 });
	//Scroll to end;

	//Parallax:

	function ParallaxScroll(){
		var scrolled = $(window).scrollTop();
		$('#header_bg').css('top',(0-(scrolled*1.5))+'px');
	}
	//Parallax end;

	//phone mask:
	if ($.exists('#tel1')) {
		$("#tel1").mask("+38 (9 9 9)   9 9 9   9 9   9 9",{placeholder:"+38 (- - -)   - - -   - -   - -"});
	}
	//Phone mask end;

	//Pop up:
	$('#all').on('click', function(){
		$('#all').removeClass('all_show');
		$('.pop_up').removeClass('pop_up_show');
	});
	
	$('#get_gegistration1').on('click', function(){

        $('#get_login').modal('hide').one(
                'hidden.bs.modal',
                function() {$('#get_registration').modal('show');});
        return false;		
	});

	$('#get_forgot').on('click', function(){

        $('#get_login').modal('hide').one(
                'hidden.bs.modal',
                function() {$('#set_forgot').modal('show');});
        return false;		
	});

	$('#get_login1').on('click', function(){

        $('#set_forgot').modal('hide').one(
                'hidden.bs.modal',
                function() {$('#get_login').modal('show');});
        return false;		
	});

	//Pop up end;

	//Galery:


 if ($.exists('#carousel')) {
 	$('#carousel').flexslider({
 		animation: "slide",
        controlNav: false,
        animationLoop: true,
        directionNav: true,
        slideshow: false,       
        slideshowSpeed: 7500,
        animationSpeed: 400,   
        itemWidth: 203,
    	itemMargin: 39,
        startAt: 0, 
        move : 0,             
        asNavFor: '#slider',
        prevText: '',
    	nextText: ''
});

 	$('#slider').flexslider({
 		animation: "slide",
        controlNav: false,
        animationLoop: true,
        slideshowSpeed: 7500,
        animationSpeed: 400,
        pauseOnAction: false,
        slideshow: false,
        startAt: 0, 
        sync: "#carousel",
        prevText: '',
    	nextText: '',
    	start: function(slider){
    		$('#carousel .slides li').eq(0).addClass('flex-active-slide1');
    	},
    	before: function(slider){
    		count = slider.currentSlide;
    		$('#carousel .slides li').removeClass('flex-active-slide1');
    	},
    	after: function(slider){
    		count = slider.currentSlide;
    		console.log(count);
    		$('#carousel .slides li').eq(count).addClass('flex-active-slide1');

    	} 
});
 }

	//galery end;



});

