$(document).ready(function(){
			let status = 0;
		  $("#home-mobile").click(function(){
		    $("#home-sub").slideToggle(500);
		  });
		  $("#project-mobile").click(function(){
		    $("#project-sub").slideToggle(500);
		  });
		  $("#mobile-button").click(function(){
		  	
		  	if (status == 0) {
		  		$(".mobile-menu").slideDown(500);
		  		status = 1;	
		  	}else{
		  		$(".mobile-menu").slideUp(500);
		  		status = 0;
		  	}
		    
		  });
		});