$(document).ready(function(){
	
	$(".nav a:first").addClass("navOn");
	
	$(".nav a").click(function(){
		
		$(".nav a").removeClass("navOn");		

		$(this).addClass("navOn");
		
		var goTo = $(this).attr("href");

		$("body, html").animate({scrollTop: $(goTo).offset().top},1000);
		
	});

	var navBarTop = $(".nav").offset().top;
	
	$(window).scroll(function(){
		
		console.log(navBarTop + "pixels from the top");
		
		var scrollTop = $(window).scrollTop();
		console.log(scrollTop);

		if(scrollTop > navBarTop){
			console.log("FIXED");
			
			$(".nav").addClass("fixedNav");
		}
		else{
			console.log("RESET");
			$(".nav").removeClass("fixedNav");
		}
	})

})






