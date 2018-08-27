
jQuery(document).ready(function($) {
	$("#playTruckHorn").click(function(){
		var sound = document.getElementById("TruckHorn");
		sound.play();
	});
	
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});

	$('#searchButton').click(function(event){
		event.preventDefault();
		$("#searchTabBody").empty();
		var truck = document.getElementById("trucksearch").value;
		document.getElementById("trucksearch").value = "";
		//console.log(truck);	
		var namesearch = "/api/food_truck/foodtruck_name/" + truck;

		console.log(namesearch);
		$.ajax(namesearch , {
			type: "GET"
			}).then(
			function(data) {
				console.log(data);

				if(data.length > 0){

				 for(let i=0; i<data.length; i++){

					var twitterButton = `<button data_val=${data[i].twitter} class="PageBtn btn btn-secondary truck_twitter">View ${data[i].twitter} Tweets</button>`;

					$("#searchTabBody").append(`<tr><th>${data[i].foodtruck_name}</th></tr><td><a href="http://${data[i].website}" target = "_blank">${data[i].website}</a></td></tr><br><br><hr>`);
					
					$("#searchTabBody").append(twitterButton);
				}

				}else{

					$("#searchTabBody").text("No Food Truck Found");
				}	  	

		}).fail(function(err){
			throw(err);

		});
	});

	$(document).on('click', '.truck_twitter', function(event){
		console.log($(this).attr('data_val'));

		twitterhandle = $(this).attr('data_val');
		twittersearch = "/api/twitter/" + twitterhandle;

		$.ajax(twittersearch , {
			type: "GET"
			}).then(
			function(data) {
				
				console.log(data);
			
			}).fail(function(err){
				throw(err);
	
		});
	

});

	$('#trucksearch').click(function(event){
		return event.keyCode != 13;
	});
	
		$('.accordion').on('show', function (e) {
		
			$(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
			$(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
			$(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
		});
		
		$('.accordion').on('hide', function (e) {
			$(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
			$(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
			$(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
		});	

	$('.navigation').onePageNav({
		begin: function() {
			console.log('start');
		},
		end: function() {
			console.log('stop');
		},
			scrollOffset: 0		
	});
	
	// prettyPhoto
	$("a[data-pretty^='prettyPhoto']").prettyPhoto();		

    // Localscrolling 
	$('#menu-main, .brand').localScroll();
	
	$('#menu-main li a').click(function(){
		var links = $('#menu-main li a');
		links.removeClass('selected');
		$(this).addClass('selected');
	});

    var iOS = false,
        p = navigator.platform;

    if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
        iOS = true;
    }	
	
    if (iOS === false) {

        $('.flyIn').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInUp');
            }
        });

        $('.flyLeft').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInLeftBig');
            }
        });

        $('.flyRight').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInRightBig');
            }
        });

    }
	
	// add animation on hover
		$(".service-box").hover(
			function () {
			$(this).find('img').addClass("animated pulse");
			$(this).find('h2').addClass("animated fadeInUp");
			},
			function () {
			$(this).find('img').removeClass("animated pulse");
			$(this).find('h2').removeClass("animated fadeInUp");
			}
		);
		
	
	// cache container
	var $container = $('#portfolio-wrap');
	$.browser.safari = ($.browser.webkit && !(/chrome/.test(navigator.userAgent.toLowerCase())));	
	
	if($.browser.safari){ 	
	// initialize isotope
	$container.isotope({
		animationEngine : 'jquery',
		animationOptions: {
			duration: 200,
			queue: false
		},
		layoutMode: 'fitRows'
	});
	} else {	
	$container.isotope({
		animationEngine : 'best-available',
		animationOptions: {
			duration: 200,
			queue: false
		},
		layoutMode: 'fitRows'
	});	
	
	$(window).resize(function() {
		$container.isotope('reLayout');
	});
	}
	// filter items when filter link is clicked
	$('#filters a').click(function(){
		$('#filters a').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$container.isotope({ filter: selector });
		return false;
	});

	// flexslider main
	$('#main-flexslider').flexslider({						
		animation: "swing",
		direction: "vertical", 
		slideshow: true,
		slideshowSpeed: 3500,
		animationDuration: 1000,
		directionNav: true,
		prevText: '<i class="icon-angle-up icon-2x"></i>',       
		nextText: '<i class="icon-angle-down icon-2x active"></i>', 
		controlNav: false,
		smootheHeight:true,						
		useCSS: false
	});
});
