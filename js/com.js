$(function(){
	if($(window).width()<=992){
		var bodyWidth = $("body").width();
		//alert(bodyWidth);
	}
	
	$("header nav ul").css("width",bodyWidth);

	$("header a").click(function( event ) {
		event.preventDefault();
	});
	$("header .h_sale .button_h_sale").click(function() {
		$("html, body").animate({
			scrollTop : $(".s_sign_up").offset().top
		}, 1200);
	});

	$("footer #main").click(function() {
		$("html, body").animate({
			scrollTop : $("header").offset().top
		}, 2000);
	});

	$("footer #stock").click(function() {
		$("html, body").animate({
			scrollTop : $(".s_stock").offset().top
		}, 1700);
	});

	$("footer #menu").click(function() {
		$("html, body").animate({
			scrollTop : $(".s_menu").offset().top
		}, 1400);
	});

	$("footer #sign_up").click(function() {
		$("html, body").animate({
			scrollTop : $("section.s_sign_up").offset().top
		}, 1000);
	});

	$("footer #contant").click(function() {
		$("html, body").animate({
			scrollTop : $(".s_map").offset().top
		}, 500);
	});



	$("header #li_stocks").click(function() {
		$("html, body").animate({
			scrollTop : $(".s_stock").offset().top
		}, 1000);
	});

	$("header #li_menu").click(function() {
		$("html, body").animate({
			scrollTop : $(".s_menu").offset().top
		}, 1400);
	});

	$("header #li_gallery").click(function() {
		$("html, body").animate({
			scrollTop : $(".s_gallery").offset().top
		}, 1800);
	});

	$("header #li_contacnts").click(function() {
		$("html, body").animate({
			scrollTop : $(".s_map").offset().top
		}, 2300);
	});


	var stock_count = 2;
	$(function(){
		$(".wrap_gallery").swipe({
			tap:function(){
				$("#g_" + stock_count).css("opacity","0");
				if(stock_count == 3){
					stock_count = 0;
				} else {
					//////////
				}
				$("#g_" + (stock_count+1)).css("opacity","1");
				stock_count++;
			}
		});
	});


	$("#stock_right").click(function(){
		$("#g_" + stock_count).css("opacity","0");
		if(stock_count == 3){
			stock_count = 0;
		}

		$("#g_" + (stock_count+1)).css("opacity","1");
		stock_count++;

	});

	$("#stock_left").click(function(){
		$("#g_" + stock_count).css("opacity","0");
		if(stock_count == 1){
			stock_count = 4;
		}

		$("#g_" + (stock_count-1)).css("opacity","1");
		stock_count--;

	});

	$(".h_form_sign_in form .button_h_sale").click(function(){
		valid = true;
		var empty_field = "";
		if (document.form_sign_in.name.value == ""  || document.form_sign_in.phone.value == "")
		{
			if(document.form_sign_in.name.value == ""){
				empty_field = $(".h_form_sign_in form #name").attr("placeholder");
				//alert(empty_field);
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += ",  ";
			} 
			if(document.form_sign_in.phone.value == ""){
				
				empty_field += $(".h_form_sign_in form #phone").attr("placeholder");

				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
			} 
			return valid;
		}		
	});

	$(".h_form_sign_up form .button_h_sale").click(function(){
		valid = true;
		var empty_field = "";
		if(document.form_sign_up.name.value==""||document.form_sign_up.surname.value==""||document.form_sign_up.second_phone.value==""||document.form_sign_up.email.value==""||document.form_sign_up.password.value==""||document.form_sign_up.password_again.value==""){
			if(document.form_sign_up.name.value == ""){
				empty_field += $(".h_form_sign_up form #name").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += ",  ";
			} 
			if(document.form_sign_up.surname.value == ""){
				empty_field += $(".h_form_sign_up form #surname").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += ",  ";
			} 
			if(document.form_sign_up.second_phone.value == ""){				
				empty_field += $(".h_form_sign_up form #second_phone").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += ",  ";
			} 
			if(document.form_sign_up.email.value == ""){				
				empty_field += $(".h_form_sign_up form #email").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += ",  ";
			} 
			if(document.form_sign_up.password.value == ""){				
				empty_field += $(".h_form_sign_up form #password").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += ",  ";
			} 
			if(document.form_sign_up.password_again.value == ""){				
				empty_field += $(".h_form_sign_up form #password_again").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
			} 
			return valid;
		}		
	})

	$(".s_newsletter .button_h_sale").click(function(){
		valid = true;
		var empty_field = "";
		$("#popup h1").css("font-size","20px");
		if (document.newsletter.name.value == ""  || document.newsletter.email.value == "")
		{
			if(document.newsletter.name.value == ""){
				empty_field = $(".s_newsletter form #name").attr("placeholder");
				
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += " ";
			} 
			if(document.newsletter.email.value == ""){
				
				empty_field += $(".s_newsletter form #email").attr("placeholder");

				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
			} 
			return valid;
		}
		else {
			$("#popup h1").html("Cпасибо что подписались на наши обновления!");
			$("#popup").fadeIn(400);
		}


		//$("#popup").css({"width":"430px","margin-left":"-215px"})	;
		$("#popup h1").css("font-size","20px");		
	});

	$(".s_sign_up form .button_h_sale").click(function(){
		valid = true;
		var empty_field = "";
		if(document.sign_up.name.value==""||document.sign_up.surname.value==""||document.sign_up.second_phone.value==""||document.sign_up.email.value==""||document.sign_up.password.value==""||document.sign_up.password_again.value==""){
			if(document.sign_up.name.value == ""){
				empty_field += $(".s_sign_up form #name").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += ",  ";
			} 
			if(document.sign_up.surname.value == ""){
				empty_field += $(".s_sign_up form #surname").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += ",  ";
			} 
			if(document.sign_up.second_phone.value == ""){				
				empty_field += $(".s_sign_up form #second_phone").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += ",  ";
			} 
			if(document.sign_up.email.value == ""){				
				empty_field += $(".s_sign_up form #email").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += ",  ";
			} 
			if(document.sign_up.password.value == ""){				
				empty_field += $(".s_sign_up form #password").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += ",  ";
			} 
			if(document.sign_up.password_again.value == ""){				
				empty_field += $(".s_sign_up form #password_again").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
			} 
			return valid;
		}		
	});

	$(".s_invite .button_h_sale").click(function(){
		valid = true;
		var empty_field = "";
		if(document.s_invite.name.value==""||document.s_invite.members.value==""||document.s_invite.phone.value==""){
			if(document.s_invite.name.value == ""){
				empty_field += $(".s_invite form #name").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += ",  ";
			} 
			if(document.s_invite.members.value == ""){
				empty_field += $(".s_invite form #members").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += ",  ";
			} 
			if(document.s_invite.phone.value == ""){				
				empty_field += $(".s_invite form #phone").attr("placeholder");
				$("#popup h1").html("Заполните, пожалуйста, поля:<br>" + empty_field)
				$("#popup").fadeIn(400);
				valid = false;
				empty_field += ",  ";
			} 		
		} 
			return valid;		
	});

	$("#okay").click(function(){
		$("#popup").fadeOut(400);
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$("header nav ul").slideToggle();
		return false;
	});

	$(".owl-carousel").owlCarousel({
		margin: 100,
		smartSpeed: 400,
		touchDrag: true,
		startPosition: 1,
		dots: true,
		dotsEach: 2,
		loop:true,
		responsive:{
        0:{
            items:1,
            center: false,
            loop:false,
            dotsEach: 1,
            margin:0
        },
        992:{
            items:3,
            nav:false,
            center: true,
            loop:false
        },
        1200:{
            items:3,
            center: true,
            nav:true,
            loop:false
        }
    }
	});

	function hSize(){

		var h3 = $(window).width();	
		// alert(h3);
		var menu_block = $(".s_menu .button_h_sale").width();
		var width_h5_in_button = $(".s_menu .button_h_sale h5").width();

		/////////

		if ($(window).width() <= '1200'){
			var s_stock = $(window).width();	
			var height_col_md = h3
			height_col_md = height_col_md/3.81
			var height_of_image_gallery = $(".s_gallery .gallery img").height();
			$(".s_gallery .gallery").css("line-height",height_of_image_gallery + "px");
			$(".s_gallery .gallery").css("height",height_of_image_gallery + "px");

			$(".s_gallery .gallery h4").css("line-height",height_of_image_gallery + "px");
			$(".s_gallery .gallery h4").css("margin-top","-" + height_of_image_gallery + "px");

			$(".s_gallery .gallery a").css("line-height",height_of_image_gallery + "px");
			$(".s_gallery .gallery a").css("height",height_of_image_gallery + "px");
			
			$('.s_gallery .col-sm-4').css("height",h3);
			//$(".s_menu .button_h_sale").css("height","57px");
		} 

		if ($(window).width() <= '562'){
			$("#container_1 .thumbs-container img").attr("src","img/gallery/chevron.png");
			$("#container_2 .thumbs-container img").attr("src","img/gallery/chevron.png");
			$("#container_3 .thumbs-container img").attr("src","img/gallery/chevron.png");
			$("#container_4 .thumbs-container img").attr("src","img/gallery/chevron.png");
			$("#container_5 .thumbs-container img").attr("src","img/gallery/chevron.png");
			$("#container_6 .thumbs-container img").attr("src","img/gallery/chevron.png");
		} 
		if ($(window).width() > '562'){
			$("#container_1 .thumbs-container img").attr("src","img/gallery/chevron_big.png");
			$("#container_2 .thumbs-container img").attr("src","img/gallery/chevron_big.png");
			$("#container_3 .thumbs-container img").attr("src","img/gallery/chevron_big.png");
			$("#container_4 .thumbs-container img").attr("src","img/gallery/chevron_big.png");
			$("#container_5 .thumbs-container img").attr("src","img/gallery/chevron_big.png");
			$("#container_6 .thumbs-container img").attr("src","img/gallery/chevron_big.png");
		} 
		
		///////////////

		if ($(window).width() <= '815'){
			$('.s_stock h3').css("width",h3);
			$('.owl-carousel .owl-controls .owl-dots').css("width", h3 + "px");				
		} 
		if ($(window).width() >= '816'){
			$('.s_stock h3').css("width","100%");
			$('.owl-carousel .owl-controls .owl-dots').css("width","100%");				
		} 
		else {
			//
		}
	}
	$(window).load(hSize); 
	$(window).resize(hSize);

	



	// Регистрация на маленький экран Регистрация
	$('button.small_window#h_sign_up').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault(); 

		$("body").css("overflow","hidden");
		$(".wrap_this_shit").css("display","none");
	
		$('#overlay_head').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
			function(){ // пoсле выпoлнения предъидущей aнимaции
				$('#modal_form') 
			.css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
			.animate({opacity: 1, top: '0'}, 200);
			 // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close, #overlay_head').click( function(){ 
		$("#popup").fadeOut(400);// лoвим клик пo крестику или пoдлoжке
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
			function(){ // пoсле aнимaции
				$(this).css('display', 'none'); // делaем ему display: none;
				$('#overlay_head').fadeOut(400); // скрывaем пoдлoжку
			}
		);
		$("body").css("overflow-y","auto");
		$("body").css("overflow-x","hidden");
		$(".wrap_this_shit").css("display","block");
	});  	













	// Регистрация Регистрация
	$('#h_sign_in').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault();

		$("body").css("overflow","hidden");
		$(".wrap_this_shit").css("display","none");

		$("body").css("overflow-y","hidden");
		$("body").css("overflow-x","hidden"); // выключaем стaндaртную рoль элементa
		$('#overlay_head').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
			function(){ // пoсле выпoлнения предъидущей aнимaции
				$('#modal_form_sign_in') 
			.css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
			.animate({opacity: 1, top: '0'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
		
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close, #overlay_head').click( function(){ 
		$("#popup").fadeOut(400);
		$('#modal_form_sign_in')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
			function(){ // пoсле aнимaции
				$(this).css('display', 'none'); // делaем ему display: none;
				$('#overlay_head').fadeOut(400); // скрывaем пoдлoжку
			}
		);
		$("body").css("overflow-y","auto");
		$("body").css("overflow-x","hidden");
		$(".wrap_this_shit").css("display","block");
	});  
	//Вход Вход
	$('#h_sign_up').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault();
		$("body").css("overflow","hidden");
		$(".wrap_this_shit").css("display","none");
		$('#overlay_head').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
			function(){ // пoсле выпoлнения предъидущей aнимaции
				$('#modal_form') 
			.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
			.animate({opacity: 1, top: '0'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
		//$("body").css("overflow-y","hidden");
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close, #overlay_head').click( function(){ 
		$("#popup").fadeOut(400);// лoвим клик пo крестику или пoдлoжке
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
			function(){ // пoсле aнимaции
				$(this).css('display', 'none'); // делaем ему display: none;
				$('#overlay_head').fadeOut(400); // скрывaем пoдлoжку
			}
		);
		$("body").css("overflow-y","auto");
		$("body").css("overflow-x","hidden");
		$(".wrap_this_shit").css("display","block");
		//$("body").css("overflow-y","auto");
	});




	var counter = 1;
	var counterRight = 2;
	var counterLeft = 0;
	var counterThumbLeft = 0;
	var counterThumbRight = 2;
	var alt = "";
	var counterInt = 0;


	$('#menu_galleria').click( function(event){ // лoвим клик пo ссылки с id="go"
			event.preventDefault(); // выключaем стaндaртную рoль элементa
			$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
 			function(){ // пoсле выпoлнения предъидущей aнимaции
 				$("body").css("overflow-y","hidden");
 				$('#container_1') 
				.css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
				.animate({opacity: 1, top: '0'}, 200); 
				var maxCountImg = $("#container_1 .wrap img").length;
				var alt = $("#container_1 .wrap img.active").attr("alt");		
				if($(window).width() <= '768') {			
					$( "#container_1 .wrap h3").remove();	
					$( "#container_1 .wrap").append( '<h3>"' + alt + '"</h3>');	
					$( "#container_1 .wrap h6").remove();						
					$( "#container_1 .wrap").append( '<h6>1 / '+ maxCountImg +'</h6>' );
				} else {
					alt = $("#container_1 .wrap img.active").attr("alt");	
					$( "#container_1 .wrap h4").remove();	
					$( "#container_1 .wrap").append( '<h4>"' + alt + '"</h4>' );	
					$( "#container_1 .wrap h5").remove();						
					$( "#container_1 .wrap").append( '<h5>1 / '+ maxCountImg +'</h5>' );
				}
			});
	});
		/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close_slide_show, #overlay').click( function(){ 
		$("body").css("overflow-y","auto");// лoвим клик пo крестику или пoдлoжке
		$('#container_1')			
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
			function(){ // пoсле aнимaции
				$(this).css('display', 'none'); // делaем ему display: none;
				$('#overlay').fadeOut(400); 
				var imgIdActive = $("#container_1 .wrap img.active").attr("data-img-id");
				//alert(oo);
				$("#img-" + imgIdActive).removeClass("active"); 
				$("#img-1").addClass("active");
				$("#img-1").removeClass("right");
				$("#img-1").removeClass("left");

				$('#container_1 ul.thumbs li.active').removeClass("active");
				$('#container_1 ul.thumbs li#thumb-1').addClass("active");

				var k = $("#container_1 .wrap img").length;

				for(var i = 2; i <= k; i++){
					$("#container_1 #img-" + i).removeClass("right");
					$("#container_1 #img-" + i).removeClass("active");
					$("#container_1 #img-" + i).addClass("left");
				}
				counter = 1;
				counterRight = 2;
				counterLeft = 0;
				counterThumbLeft = 0;
				counterThumbRight = 2;// скрывaем пoдлoжку
			}
		);
	});

	$(function() {
		$("#container_1 .thumbs-container ul li").on("click", function(){
			var counterPre = counter;
			$("#container_1 #img-" + counter).removeClass("active");
			$('#container_1 ul.thumbs li.active').removeClass("active");

			counter = $(this).attr("data-thumb-id");
	   	counterRight = parseInt(counter)+1;
			counterLeft = parseInt(counter)-1;
			counterThumbLeft = parseInt(counter)-1;
			counterThumbRight = parseInt(counter)+1;
			var maxCountImg = $("#container_1 .wrap img").length;	
			$(this).addClass("active");
			var k = $("#container_1 .wrap img").length;

			for(var i = 1; i <= k; i++){
				$("#container_1 #img-" + i).css("opacity","0");
				if(i < counter){
					$("#container_1 #img-" + i).removeClass("right");
					$("#container_1 #img-" + i).removeClass("left");
					$("#container_1 #img-" + i).addClass("right");
				} 
				if (i > counter) {
					$("#container_1 #img-" + i).removeClass("right");
					$("#container_1 #img-" + i).removeClass("left");
					$("#container_1 #img-" + i).addClass("left");
				} 
				if(i == counter){
					$("#container_1 #img-" + i).removeClass("right");
					$("#container_1 #img-" + i).removeClass("left");
				}
				// if(i == 1){
				// 	$("#container_1 #img-" + i).removeClass("right");
				// 	$("#container_1 #img-" + i).removeClass("left");
				// }
			}
			for(var i = 1; i <= k; i++){
				$("#container_1 #img-" + i).css("opacity","1");
			}
			$("#container_1 #img-" + counter).addClass("active");


			if($(window).width() <= '768') {
				alt = $("#container_1 .wrap img.active").attr("alt");
				$( "#container_1 .wrap h3").remove();	
				$( "#container_1 .wrap").append( '<h3>"' + alt + '"</h3>');	
				$( "#container_1 .wrap h6").remove();						
				$( "#container_1 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
			} else {
				alt = $("#container_1 .wrap img.active").attr("alt");	
				$( "#container_1 .wrap h4").remove();	
				$( "#container_1 .wrap").append( '<h4>"' + alt + '"</h4>' );	
				$( "#container_1 .wrap h5").remove();						
				$( "#container_1 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
			}
		});
		$("#container_1").swipe( {    	
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			var maxCountImg = $("#container_1 .wrap img").length;

			if(direction == "left") {		
				if(counter == maxCountImg) {

					$("#container_1 #img-" + counter).addClass("active");				
					$('#container_1 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_1 .wrap img.active").attr("alt");
						$( "#container_1 .wrap h3").remove();					
						$( "#container_1 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_1 .wrap h6").remove();	
						$( "#container_1 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_1 .wrap img.active").attr("alt");	
						$( "#container_1 .wrap h4").remove();					
						$( "#container_1 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_1 .wrap h5").remove();	
						$( "#container_1 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = maxCountImg;
					counterThumbRight = maxCountImg+1;
					counterLeft = maxCountImg-1; 	
					counterRight = maxCountImg+1;
					counterThumbLeft = maxCountImg-1;

				} 
				else {	
					$("#container_1 #img-" + counter).addClass("right");
					$("#container_1 #img-" + counter).removeClass("left");
					$("#container_1 #img-" + counter).removeClass("active");
					$("#container_1 #img-" + counterRight).removeClass("left");
					$("#container_1 #img-" + counterRight).removeClass("right");
					$("#container_1 #img-" + counterRight).addClass("active");


					if($(window).width() <= '768') {
						alt = $("#container_1 .wrap img.active").attr("alt");
						$( "#container_1 .wrap h3").remove();						
						$( "#container_1 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_1 .wrap h6").remove();	
						counterInt = parseInt(counter)+1;
						$( "#container_1 .wrap").append( '<h6>' + counterInt + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_1 .wrap img.active").attr("alt");
						$( "#container_1 .wrap h4").remove();	
						$( "#container_1 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_1 .wrap h5").remove();
						counterInt = parseInt(counter)+1;
						$( "#container_1 .wrap").append( '<h5>' + counterInt + " / " + maxCountImg + '</h5>' );
					}
					$('#container_1 ul.thumbs li.active').removeClass("active");
					$('#container_1 ul.thumbs li#thumb-'+counterThumbRight).addClass("active");

					counter++;
					counterLeft++;
					counterRight++;
					counterThumbRight++;
					counterThumbLeft++;
				}
			} else if(direction == "right") {
				if(counter == 1) {
					$("#container_1 #img-" + counter).addClass("active");
					$('#container_1 ul.thumbs li#thumb-' + counter).addClass("active");
					if($(window).width() <= '768') {
						alt = $("#container_1 .wrap img.active").attr("alt");
						$( "#container_1 .wrap h3").remove();	
						$( "#container_1 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_1 .wrap h6").remove();						
						$( "#container_1 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					}	else {
						alt = $("#container_1 .wrap img.active").attr("alt");	
						$( "#container_1 .wrap h4").remove();	
						$( "#container_1 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_1 .wrap h5").remove();						
						$( "#container_1 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}


					counter = 1;
					counterThumbRight = 2;
					counterLeft = 0;
					counterRight = 2;
					counterThumbLeft = 0;		

				}	else  if(counter == 2) { //////////////////////////////////////

					$("#container_1 #img-" + counter).removeClass("right");
					$("#container_1 #img-" + counter).addClass("left");
					$("#container_1 #img-" + counter).removeClass("active");
					$("#container_1 #img-" + counterLeft).removeClass("right"); 
					$("#container_1 #img-" + counterLeft).removeClass("left"); 
					$("#container_1 #img-" + counterLeft).addClass("active");

					$('#container_1 ul.thumbs li.active').removeClass("active");
					$('#container_1 ul.thumbs li#thumb-' + counterThumbLeft).addClass("active");	

					if($(window).width() <= '768') {
						alt = $("#container_1 .wrap img.active").attr("alt");
						$( "#container_1 .wrap h3").remove();	
						$( "#container_1 .wrap").append('<h3>"' + alt + '"</h3>' );
						$( "#container_1 .wrap h6").remove();						
						$( "#container_1 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );	
					} else {
						alt = $("#container_1 .wrap img.active").attr("alt");	
						$( "#container_1 .wrap h4").remove();	
						$( "#container_1 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_1 .wrap h5").remove();						
						$( "#container_1 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				} 
				else {  				

					$("#container_1 #img-" + counter).removeClass("right");
					$("#container_1 #img-" + counter).addClass("left");
					$("#container_1 #img-" + counter).removeClass("active");
					$("#container_1 #img-" + counterLeft).removeClass("right"); 
					$("#container_1 #img-" + counterLeft).removeClass("left"); 
					$("#container_1 #img-" + counterLeft).addClass("active");

					$('#container_1 ul.thumbs li.active').removeClass("active");
					$('#container_1 ul.thumbs li#thumb-'+counterThumbLeft).addClass("active");		
					if($(window).width() <= '768') {
						alt = $("#container_1 .wrap img.active").attr("alt");
						$( "#container_1 .wrap h3").remove();	
						$( "#container_1 .wrap").append( '<h3>"' + alt + '"</h3>');	
						$( "#container_1 .wrap h6").remove();						
						$( "#container_1 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_1 .wrap img.active").attr("alt");	
						$( "#container_1 .wrap h4").remove();	
						$( "#container_1 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_1 .wrap h5").remove();						
						$( "#container_1 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				}
			};
		}
		});

		$("#container_1 #next-btn img").click( function(){    	
			var maxCountImg = $("#container_1 .wrap img").length;
			var x = $("#container_1 .wrap img.active").attr("data-img-id");
				if(counter == maxCountImg) {

					$("#container_1 #img-" + counter).addClass("active");				
					$('#container_1 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_1 .wrap img.active").attr("alt");
						$( "#container_1 .wrap h3").remove();	
						$( "#container_1 .wrap h6").remove();	
						$( "#container_1 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_1 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_1 .wrap img.active").attr("alt");	
						$( "#container_1 .wrap h4").remove();
						$( "#container_1 .wrap h5").remove();	
						$( "#container_1 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_1 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = maxCountImg;
					counterThumbRight = maxCountImg+1;
					counterLeft = maxCountImg-1; 	
					counterRight = maxCountImg+1;
					counterThumbLeft = maxCountImg-1;

				} 
				else {
					$("#container_1 #img-" + counter).addClass("right");
					$("#container_1 #img-" + counter).removeClass("left");
					$("#container_1 #img-" + counter).removeClass("active");
					$("#container_1 #img-" + counterRight).removeClass("left");
					$("#container_1 #img-" + counterRight).removeClass("right");
					$("#container_1 #img-" + counterRight).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_1 .wrap img.active").attr("alt");
						$( "#container_1 .wrap h3").remove();	
						$( "#container_1 .wrap h6").remove();	
						$( "#container_1 .wrap").append( '<h3>"' + alt + '"</h3>' );	
						counterInt = parseInt(counter)+1;
						$( "#container_1 .wrap").append( '<h6>' + counterInt + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_1 .wrap img.active").attr("alt");
						$( "#container_1 .wrap h4").remove();	
						$( "#container_1 .wrap h5").remove();	
						$( "#container_1 .wrap").append( '<h4>"' + alt + '"</h4>' );
						counterInt = parseInt(counter)+1;
						$( "#container_1 .wrap").append( '<h5>' + counterInt + " / " + maxCountImg + '</h5>' );
					}


					$('#container_1 ul.thumbs li.active').removeClass("active");
					$('#container_1 ul.thumbs li#thumb-'+counterThumbRight).addClass("active");
					counter++;
					counterLeft++;
					counterRight++;
					counterThumbRight++;
					counterThumbLeft++;
				}
				x = $("#container_1 .wrap img.active").attr("data-img-id");
				x = $("#container_1 .wrap img.active").attr("data-img-id");
		});

		$("#container_1 #prev-btn img").click( function(){    	
			var maxCountImg = $("#container_1 .wrap img").length;
			var x = $("#container_1 .wrap img.active").attr("data-img-id");
				if(counter == 1) {
					$("#container_1 #img-" + counter).addClass("active");
					$('#container_1 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_1 .wrap img.active").attr("alt");
						$( "#container_1 .wrap h3").remove();	
						$( "#container_1 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_1 .wrap h6").remove();						
						$( "#container_1 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					}	else {
						alt = $("#container_1 .wrap img.active").attr("alt");	
						$( "#container_1 .wrap h4").remove();	
						$( "#container_1 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_1 .wrap h5").remove();						
						$( "#container_1 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = 1;
					counterThumbRight = 2;
					counterLeft = 0;
					counterRight = 2;
					counterThumbLeft = 0;		

				}	else  if(counter == 2) { //////////////////////////////////////				

					$("#container_1 #img-" + counter).removeClass("right");
					$("#container_1 #img-" + counter).addClass("left");
					$("#container_1 #img-" + counter).removeClass("active");
					$("#container_1 #img-" + counterLeft).removeClass("right"); 
					$("#container_1 #img-" + counterLeft).removeClass("left"); 
					$("#container_1 #img-" + counterLeft).addClass("active");

					$('#container_1 ul.thumbs li.active').removeClass("active");
					$('#container_1 ul.thumbs li#thumb-' + counterThumbLeft).addClass("active");	

					if($(window).width() <= '768') {
						alt = $("#container_1 .wrap img.active").attr("alt");
						$( "#container_1 .wrap h3").remove();	
						$( "#container_1 .wrap").append('<h3>"' + alt + '"</h3>' );
						$( "#container_1 .wrap h6").remove();						
						$( "#container_1 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );	
					} else {
						alt = $("#container_1 .wrap img.active").attr("alt");	
						$( "#container_1 .wrap h4").remove();	
						$( "#container_1 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_1 .wrap h5").remove();						
						$( "#container_1 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				} 
				else {  
					p = $("#container_1 .thumbs-container ul li.active");
					position = p.position();

					if(position.left <= 40 && $(window).width() >= '768'){
						// var marginLeft = (position.left - 100);
						$("#container_1 .thumbs-container ul li#thumb-1").css("marginLeft", 0);
					}

					
					$("#container_1 #img-" + counter).removeClass("right");
					$("#container_1 #img-" + counter).addClass("left");
					$("#container_1 #img-" + counter).removeClass("active");
					$("#container_1 #img-" + counterLeft).removeClass("right"); 
					$("#container_1 #img-" + counterLeft).removeClass("left"); 
					$("#container_1 #img-" + counterLeft).addClass("active");

					$('#container_1 ul.thumbs li.active').removeClass("active");
					$('#container_1 ul.thumbs li#thumb-'+counterThumbLeft).addClass("active");		
					if($(window).width() <= '768') {
						alt = $("#container_1 .wrap img.active").attr("alt");
						$( "#container_1 .wrap h3").remove();	
						$( "#container_1 .wrap").append( '<h3>"' + alt + '"</h3>');	
						$( "#container_1 .wrap h6").remove();						
						$( "#container_1 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_1 .wrap img.active").attr("alt");	
						$( "#container_1 .wrap h4").remove();	
						$( "#container_1 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_1 .wrap h5").remove();						
						$( "#container_1 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				}
		});
		
		$("#container_1").swipe({fingers:1});
	});

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
	$('#map_galleria').click( function(event){ // лoвим клик пo ссылки с id="go"
			event.preventDefault(); // выключaем стaндaртную рoль элементa
			$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
 			function(){ // пoсле выпoлнения предъидущей aнимaции
 				$("body").css("overflow-y","hidden");
 				$('#container_2') 
				.css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
				.animate({opacity: 1, top: '0'}, 200); 
				var maxCountImg = $("#container_2 .wrap img").length;
				var alt = $("#container_2 .wrap img.active").attr("alt");	
				if($(window).width() <= '768') {	
					$( "#container_2 .wrap h3").remove();	
					$( "#container_2 .wrap").append( '<h3>"' + alt + '"</h3>');	
					$( "#container_2 .wrap h6").remove();						
					$( "#container_2 .wrap").append( '<h6>1 / '+ maxCountImg +'</h6>' );
				} else {
					alt = $("#container_2 .wrap img.active").attr("alt");	
					$( "#container_2 .wrap h4").remove();	
					$( "#container_2 .wrap").append( '<h4>"' + alt + '"</h4>' );	
					$( "#container_2 .wrap h5").remove();						
					$( "#container_2 .wrap").append( '<h5>1 / '+ maxCountImg +'</h5>' );
				}
			});
		});
		/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close_slide_show, #overlay').click( function(){ 
		$("body").css("overflow-y","auto");// лoвим клик пo крестику или пoдлoжке
		$('#container_2')			
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
			function(){ // пoсле aнимaции
				$(this).css('display', 'none'); // делaем ему display: none;
				$('#overlay').fadeOut(400); 
				var imgIdActive = $("#container_2 .wrap img.active").attr("data-img-id");
				//alert(oo);
				$("#container_2 #img-" + imgIdActive).removeClass("active"); 
				$("#container_2 #img-1").addClass("active");
				$("#container_2 #img-1").removeClass("right");
				$("#container_2 #img-1").removeClass("left");

				$('#container_2 ul.thumbs li.active').removeClass("active");
				$('#container_2 ul.thumbs li#thumb-1').addClass("active");

				var k = $("#container_2 .wrap img").length;

				for(var i = 2; i <= k; i++){
					$("#container_2 #img-" + i).removeClass("right");
					$("#container_2 #img-" + i).removeClass("active");
					$("#container_2 #img-" + i).addClass("left");
				}
				counter = 1;
				counterRight = 2;
				counterLeft = 0;
				counterThumbLeft = 0;
				counterThumbRight = 2;// скрывaем пoдлoжку
			}
			);
		});

	$(function() {
		$("#container_2 .thumbs-container ul li").on("click", function(){
			var counterPre = counter;
			$("#container_2 #img-" + counter).removeClass("active");
			$('#container_2 ul.thumbs li.active').removeClass("active");

			counter = $(this).attr("data-thumb-id");
	   	counterRight = parseInt(counter)+1;
			counterLeft = parseInt(counter)-1;
			counterThumbLeft = parseInt(counter)-1;
			counterThumbRight = parseInt(counter)+1;
			var maxCountImg = $("#container_2 .wrap img").length;	
			$(this).addClass("active");
			var k = $("#container_2 .wrap img").length;

			for(var i = 1; i <= k; i++){
				$("#container_2 #img-" + i).css("opacity","0");
				if(i < counter){
					$("#container_2 #img-" + i).removeClass("right");
					$("#container_2 #img-" + i).removeClass("left");
					$("#container_2 #img-" + i).addClass("right");
				} 
				if (i > counter) {
					$("#container_2 #img-" + i).removeClass("right");
					$("#container_2 #img-" + i).removeClass("left");
					$("#container_2 #img-" + i).addClass("left");
				} 
				if(i == counter){
					$("#container_2 #img-" + i).removeClass("right");
					$("#container_2 #img-" + i).removeClass("left");
				}
			}
			for(var i = 1; i <= k; i++){
				$("#container_2 #img-" + i).css("opacity","1");
			}
			$("#container_2 #img-" + counter).addClass("active");

			if($(window).width() <= '768') {
				alt = $("#container_2 .wrap img.active").attr("alt");
				$( "#container_2 .wrap h3").remove();	
				$( "#container_2 .wrap").append( '<h3>"' + alt + '"</h3>');	
				$( "#container_2 .wrap h6").remove();						
				$( "#container_2 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
			} else {
				alt = $("#container_2 .wrap img.active").attr("alt");	
				$( "#container_2 .wrap h4").remove();	
				$( "#container_2 .wrap").append( '<h4>"' + alt + '"</h4>' );	
				$( "#container_2 .wrap h5").remove();						
				$( "#container_2 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
			}
		});
		$("#container_2").swipe( {    	
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			var maxCountImg = $("#container_2 .wrap img").length;

			if(direction == "left") {		
				if(counter == maxCountImg) {

					$("#container_2 #img-" + counter).addClass("active");				
					$('#container_2 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_2 .wrap img.active").attr("alt");
						$( "#container_2 .wrap h3").remove();					
						$( "#container_2 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_2 .wrap h6").remove();	
						$( "#container_2 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_2 .wrap img.active").attr("alt");	
						$( "#container_2 .wrap h4").remove();					
						$( "#container_2 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_2 .wrap h5").remove();	
						$( "#container_2 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = maxCountImg;
					counterThumbRight = maxCountImg+1;
					counterLeft = maxCountImg-1; 	
					counterRight = maxCountImg+1;
					counterThumbLeft = maxCountImg-1;

				} 
				else {	
					$("#container_2 #img-" + counter).addClass("right");
					$("#container_2 #img-" + counter).removeClass("left");
					$("#container_2 #img-" + counter).removeClass("active");
					$("#container_2 #img-" + counterRight).removeClass("left");
					$("#container_2 #img-" + counterRight).removeClass("right");
					$("#container_2 #img-" + counterRight).addClass("active");


					if($(window).width() <= '768') {
						alt = $("#container_2 .wrap img.active").attr("alt");
						$( "#container_2 .wrap h3").remove();						
						$( "#container_2 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_2 .wrap h6").remove();	
						counterInt = parseInt(counter)+1;
						$( "#container_2 .wrap").append( '<h6>' + counterInt + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_2 .wrap img.active").attr("alt");
						$( "#container_2 .wrap h4").remove();	
						$( "#container_2 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_2 .wrap h5").remove();
						counterInt = parseInt(counter)+1;
						$( "#container_2 .wrap").append( '<h5>' + counterInt + " / " + maxCountImg + '</h5>' );
					}
					$('#container_2 ul.thumbs li.active').removeClass("active");
					$('#container_2 ul.thumbs li#thumb-'+counterThumbRight).addClass("active");

					counter++;
					counterLeft++;
					counterRight++;
					counterThumbRight++;
					counterThumbLeft++;
				}
			} else if(direction == "right") {
				if(counter == 1) {
					$("#container_2 #img-" + counter).addClass("active");
					$('#container_2 ul.thumbs li#thumb-' + counter).addClass("active");
					if($(window).width() <= '768') {
						alt = $("#container_2 .wrap img.active").attr("alt");
						$( "#container_2 .wrap h3").remove();	
						$( "#container_2 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_2 .wrap h6").remove();						
						$( "#container_2 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					}	else {
						alt = $("#container_2 .wrap img.active").attr("alt");	
						$( "#container_2 .wrap h4").remove();	
						$( "#container_2 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_2 .wrap h5").remove();						
						$( "#container_2 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}


					counter = 1;
					counterThumbRight = 2;
					counterLeft = 0;
					counterRight = 2;
					counterThumbLeft = 0;		

				}	else  if(counter == 2) { //////////////////////////////////////

					$("#container_2 #img-" + counter).removeClass("right");
					$("#container_2 #img-" + counter).addClass("left");
					$("#container_2 #img-" + counter).removeClass("active");
					$("#container_2 #img-" + counterLeft).removeClass("right"); 
					$("#container_2 #img-" + counterLeft).removeClass("left"); 
					$("#container_2 #img-" + counterLeft).addClass("active");

					$('#container_2 ul.thumbs li.active').removeClass("active");
					$('#container_2 ul.thumbs li#thumb-' + counterThumbLeft).addClass("active");	

					if($(window).width() <= '768') {
						alt = $("#container_2 .wrap img.active").attr("alt");
						$( "#container_2 .wrap h3").remove();	
						$( "#container_2 .wrap").append('<h3>"' + alt + '"</h3>' );
						$( "#container_2 .wrap h6").remove();						
						$( "#container_2 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );	
					} else {
						alt = $("#container_2 .wrap img.active").attr("alt");	
						$( "#container_2 .wrap h4").remove();	
						$( "#container_2 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_2 .wrap h5").remove();						
						$( "#container_2 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				} 
				else {  				

					$("#container_2 #img-" + counter).removeClass("right");
					$("#container_2 #img-" + counter).addClass("left");
					$("#container_2 #img-" + counter).removeClass("active");
					$("#container_2 #img-" + counterLeft).removeClass("right"); 
					$("#container_2 #img-" + counterLeft).removeClass("left"); 
					$("#container_2 #img-" + counterLeft).addClass("active");

					$('#container_2 ul.thumbs li.active').removeClass("active");
					$('#container_2 ul.thumbs li#thumb-'+counterThumbLeft).addClass("active");		
					if($(window).width() <= '768') {
						alt = $("#container_2 .wrap img.active").attr("alt");
						$( "#container_2 .wrap h3").remove();	
						$( "#container_2 .wrap").append( '<h3>"' + alt + '"</h3>');	
						$( "#container_2 .wrap h6").remove();						
						$( "#container_2 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_2 .wrap img.active").attr("alt");	
						$( "#container_2 .wrap h4").remove();	
						$( "#container_2 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_2 .wrap h5").remove();						
						$( "#container_2 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				}
			};
		}
		});

		$("#container_2 #next-btn img").click( function(){    	
			var maxCountImg = $("#container_2 .wrap img").length;
			var x = $("#container_2 .wrap img.active").attr("data-img-id");
				if(counter == maxCountImg) {

					$("#container_2 #img-" + counter).addClass("active");				
					$('#container_2 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_2 .wrap img.active").attr("alt");
						$( "#container_2 .wrap h3").remove();	
						$( "#container_2 .wrap h6").remove();	
						$( "#container_2 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_2 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_2 .wrap img.active").attr("alt");	
						$( "#container_2 .wrap h4").remove();
						$( "#container_2 .wrap h5").remove();	
						$( "#container_2 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_2 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = maxCountImg;
					counterThumbRight = maxCountImg+1;
					counterLeft = maxCountImg-1; 	
					counterRight = maxCountImg+1;
					counterThumbLeft = maxCountImg-1;

				} 
				else {
					$("#container_2 #img-" + counter).addClass("right");
					$("#container_2 #img-" + counter).removeClass("left");
					$("#container_2 #img-" + counter).removeClass("active");
					$("#container_2 #img-" + counterRight).removeClass("left");
					$("#container_2 #img-" + counterRight).removeClass("right");
					$("#container_2 #img-" + counterRight).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_2 .wrap img.active").attr("alt");
						$( "#container_2 .wrap h3").remove();	
						$( "#container_2 .wrap h6").remove();	
						$( "#container_2 .wrap").append( '<h3>"' + alt + '"</h3>' );	
						counterInt = parseInt(counter)+1;
						$( "#container_2 .wrap").append( '<h6>' + counterInt + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_2 .wrap img.active").attr("alt");
						$( "#container_2 .wrap h4").remove();	
						$( "#container_2 .wrap h5").remove();	
						$( "#container_2 .wrap").append( '<h4>"' + alt + '"</h4>' );
						counterInt = parseInt(counter)+1;
						$( "#container_2 .wrap").append( '<h5>' + counterInt + " / " + maxCountImg + '</h5>' );
					}


					$('#container_2 ul.thumbs li.active').removeClass("active");
					$('#container_2 ul.thumbs li#thumb-'+counterThumbRight).addClass("active");
					counter++;
					counterLeft++;
					counterRight++;
					counterThumbRight++;
					counterThumbLeft++;
				}
				x = $("#container_2 .wrap img.active").attr("data-img-id");
				x = $("#container_2 .wrap img.active").attr("data-img-id");
		});

		$("#container_2 #prev-btn img").click( function(){    	
			var maxCountImg = $("#container_2 .wrap img").length;
			var x = $("#container_2 .wrap img.active").attr("data-img-id");
				if(counter == 1) {
					$("#container_2 #img-" + counter).addClass("active");
					$('#container_2 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_2 .wrap img.active").attr("alt");
						$( "#container_2 .wrap h3").remove();	
						$( "#container_2 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_2 .wrap h6").remove();						
						$( "#container_2 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					}	else {
						alt = $("#container_2 .wrap img.active").attr("alt");	
						$( "#container_2 .wrap h4").remove();	
						$( "#container_2 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_2 .wrap h5").remove();						
						$( "#container_2 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = 1;
					counterThumbRight = 2;
					counterLeft = 0;
					counterRight = 2;
					counterThumbLeft = 0;		

				}	else  if(counter == 2) { //////////////////////////////////////				

					$("#container_2 #img-" + counter).removeClass("right");
					$("#container_2 #img-" + counter).addClass("left");
					$("#container_2 #img-" + counter).removeClass("active");
					$("#container_2 #img-" + counterLeft).removeClass("right"); 
					$("#container_2 #img-" + counterLeft).removeClass("left"); 
					$("#container_2 #img-" + counterLeft).addClass("active");

					$('#container_2 ul.thumbs li.active').removeClass("active");
					$('#container_2 ul.thumbs li#thumb-' + counterThumbLeft).addClass("active");	

					if($(window).width() <= '768') {
						alt = $("#container_2 .wrap img.active").attr("alt");
						$( "#container_2 .wrap h3").remove();	
						$( "#container_2 .wrap").append('<h3>"' + alt + '"</h3>' );
						$( "#container_2 .wrap h6").remove();						
						$( "#container_2 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );	
					} else {
						alt = $("#container_2 .wrap img.active").attr("alt");	
						$( "#container_2 .wrap h4").remove();	
						$( "#container_2 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_2 .wrap h5").remove();						
						$( "#container_2 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				} 
				else {  
					p = $("#container_2 .thumbs-container ul li.active");
					position = p.position();

					if(position.left <= 40 && $(window).width() >= '768'){
						$("#container_2 .thumbs-container ul li#thumb-1").css("marginLeft", 0);
					}

					
					$("#container_2 #img-" + counter).removeClass("right");
					$("#container_2 #img-" + counter).addClass("left");
					$("#container_2 #img-" + counter).removeClass("active");
					$("#container_2 #img-" + counterLeft).removeClass("right"); 
					$("#container_2 #img-" + counterLeft).removeClass("left"); 
					$("#container_2 #img-" + counterLeft).addClass("active");

					$('#container_2 ul.thumbs li.active').removeClass("active");
					$('#container_2 ul.thumbs li#thumb-'+counterThumbLeft).addClass("active");		
					if($(window).width() <= '768') {
						alt = $("#container_2 .wrap img.active").attr("alt");
						$( "#container_2 .wrap h3").remove();	
						$( "#container_2 .wrap").append( '<h3>"' + alt + '"</h3>');	
						$( "#container_2 .wrap h6").remove();						
						$( "#container_2 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_2 .wrap img.active").attr("alt");	
						$( "#container_2 .wrap h4").remove();	
						$( "#container_2 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_2 .wrap h5").remove();						
						$( "#container_2 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				}
		});
		
		$("#container_2").swipe({fingers:1});
	});

//////////////////////////////////
///////////////////////////////////
/////////////////////////////////
/////////////////////////////////
//////////////////////////////////
	$('#banket_galleria').click( function(event){ // лoвим клик пo ссылки с id="go"
			event.preventDefault(); // выключaем стaндaртную рoль элементa
			$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
 			function(){ // пoсле выпoлнения предъидущей aнимaции
 				$("body").css("overflow-y","hidden");
 				$('#container_3') 
				.css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
				.animate({opacity: 1, top: '0'}, 200); 
				var maxCountImg = $("#container_3 .wrap img").length;
				var alt = $("#container_3 .wrap img.active").attr("alt");
				if($(window).width() <= '768') {	
					$( "#container_3 .wrap h3").remove();	
					$( "#container_3 .wrap").append( '<h3>"' + alt + '"</h3>');	
					$( "#container_3 .wrap h6").remove();						
					$( "#container_3 .wrap").append( '<h6>1 / '+ maxCountImg +'</h6>' );
				} else {
					alt = $("#container_3 .wrap img.active").attr("alt");	
					$( "#container_3 .wrap h4").remove();	
					$( "#container_3 .wrap").append( '<h4>"' + alt + '"</h4>' );	
					$( "#container_3 .wrap h5").remove();						
					$( "#container_3 .wrap").append( '<h5>1 / '+ maxCountImg +'</h5>' );
				}
			});
		});
		/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close_slide_show, #overlay').click( function(){ 
		$("body").css("overflow-y","auto");// лoвим клик пo крестику или пoдлoжке
		$('#container_3')			
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
			function(){ // пoсле aнимaции
				$(this).css('display', 'none'); // делaем ему display: none;
				$('#overlay').fadeOut(400); 
				var imgIdActive = $("#container_3 .wrap img.active").attr("data-img-id");
				//alert(oo);
				$("#container_3 #img-" + imgIdActive).removeClass("active"); 
				$("#container_3 #img-1").addClass("active");
				$("#container_3 #img-1").removeClass("right");

				$('#container_3 ul.thumbs li.active').removeClass("active");
				$('#container_3 ul.thumbs li#thumb-1').addClass("active");

				var k = $("#container_3 .wrap img").length;

				for(var i = 2; i <= k; i++){
					$("#container_3 #img-" + i).removeClass("right");
					$("#container_3 #img-" + i).removeClass("active");
					$("#container_3 #img-" + i).addClass("left");
				}
				counter = 1;
				counterRight = 2;
				counterLeft = 0;
				counterThumbLeft = 0;
				counterThumbRight = 2;// скрывaем пoдлoжку
			}
			);
		});

	$(function() {
		$("#container_3 .thumbs-container ul li").on("click", function(){
			var counterPre = counter;
			$("#container_3 #img-" + counter).removeClass("active");
			$('#container_3 ul.thumbs li.active').removeClass("active");

			counter = $(this).attr("data-thumb-id");
	   	counterRight = parseInt(counter)+1;
			counterLeft = parseInt(counter)-1;
			counterThumbLeft = parseInt(counter)-1;
			counterThumbRight = parseInt(counter)+1;
			var maxCountImg = $("#container_3 .wrap img").length;	
			$(this).addClass("active");
			var k = $("#container_3 .wrap img").length;

			for(var i = 1; i <= k; i++){
				$("#container_3 #img-" + i).css("opacity","0");
				if(i < counter){
					$("#container_3 #img-" + i).removeClass("right");
					$("#container_3 #img-" + i).removeClass("left");
					$("#container_3 #img-" + i).addClass("right");
				} 
				if (i > counter) {
					$("#container_3 #img-" + i).removeClass("right");
					$("#container_3 #img-" + i).removeClass("left");
					$("#container_3 #img-" + i).addClass("left");
				} 
				if(i == counter){
					$("#container_3 #img-" + i).removeClass("right");
					$("#container_3 #img-" + i).removeClass("left");
				}
			}
			for(var i = 1; i <= k; i++){
				$("#container_3 #img-" + i).css("opacity","1");
			}
			$("#container_3 #img-" + counter).addClass("active");

			if($(window).width() <= '768') {
				alt = $("#container_3 .wrap img.active").attr("alt");
				$( "#container_3 .wrap h3").remove();	
				$( "#container_3 .wrap").append( '<h3>"' + alt + '"</h3>');	
				$( "#container_3 .wrap h6").remove();						
				$( "#container_3 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
			} else {
				alt = $("#container_3 .wrap img.active").attr("alt");	
				$( "#container_3 .wrap h4").remove();	
				$( "#container_3 .wrap").append( '<h4>"' + alt + '"</h4>' );	
				$( "#container_3 .wrap h5").remove();						
				$( "#container_3 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
			}
		});
		$("#container_3").swipe( {    	
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			var maxCountImg = $("#container_3 .wrap img").length;

			if(direction == "left") {		
				if(counter == maxCountImg) {

					$("#container_3 #img-" + counter).addClass("active");				
					$('#container_3 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_3 .wrap img.active").attr("alt");
						$( "#container_3 .wrap h3").remove();					
						$( "#container_3 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_3 .wrap h6").remove();	
						$( "#container_3 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_3 .wrap img.active").attr("alt");	
						$( "#container_3 .wrap h4").remove();					
						$( "#container_3 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_3 .wrap h5").remove();	
						$( "#container_3 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = maxCountImg;
					counterThumbRight = maxCountImg+1;
					counterLeft = maxCountImg-1; 	
					counterRight = maxCountImg+1;
					counterThumbLeft = maxCountImg-1;

				} 
				else {	
					$("#container_3 #img-" + counter).addClass("right");
					$("#container_3 #img-" + counter).removeClass("left");
					$("#container_3 #img-" + counter).removeClass("active");
					$("#container_3 #img-" + counterRight).removeClass("left");
					$("#container_3 #img-" + counterRight).removeClass("right");
					$("#container_3 #img-" + counterRight).addClass("active");


					if($(window).width() <= '768') {
						alt = $("#container_3 .wrap img.active").attr("alt");
						$( "#container_3 .wrap h3").remove();						
						$( "#container_3 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_3 .wrap h6").remove();	
						counterInt = parseInt(counter)+1;
						$( "#container_3 .wrap").append( '<h6>' + counterInt + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_3 .wrap img.active").attr("alt");
						$( "#container_3 .wrap h4").remove();	
						$( "#container_3 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_3 .wrap h5").remove();
						counterInt = parseInt(counter)+1;
						$( "#container_3 .wrap").append( '<h5>' + counterInt + " / " + maxCountImg + '</h5>' );
					}
					$('#container_3 ul.thumbs li.active').removeClass("active");
					$('#container_3 ul.thumbs li#thumb-'+counterThumbRight).addClass("active");

					counter++;
					counterLeft++;
					counterRight++;
					counterThumbRight++;
					counterThumbLeft++;
				}

			} else if(direction == "right") {
				if(counter == 1) {
					$("#container_3 #img-" + counter).addClass("active");
					$('#container_3 ul.thumbs li#thumb-' + counter).addClass("active");
					if($(window).width() <= '768') {
						alt = $("#container_3 .wrap img.active").attr("alt");
						$( "#container_3 .wrap h3").remove();	
						$( "#container_3 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_3 .wrap h6").remove();						
						$( "#container_3 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					}	else {
						alt = $("#container_3 .wrap img.active").attr("alt");	
						$( "#container_3 .wrap h4").remove();	
						$( "#container_3 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_3 .wrap h5").remove();						
						$( "#container_3 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}


					counter = 1;
					counterThumbRight = 2;
					counterLeft = 0;
					counterRight = 2;
					counterThumbLeft = 0;		

				}	else  if(counter == 2) { //////////////////////////////////////

					$("#container_3 #img-" + counter).removeClass("right");
					$("#container_3 #img-" + counter).addClass("left");
					$("#container_3 #img-" + counter).removeClass("active");
					$("#container_3 #img-" + counterLeft).removeClass("right"); 
					$("#container_3 #img-" + counterLeft).removeClass("left"); 
					$("#container_3 #img-" + counterLeft).addClass("active");

					$('#container_3 ul.thumbs li.active').removeClass("active");
					$('#container_3 ul.thumbs li#thumb-' + counterThumbLeft).addClass("active");	

					if($(window).width() <= '768') {
						alt = $("#container_3 .wrap img.active").attr("alt");
						$( "#container_3 .wrap h3").remove();	
						$( "#container_3 .wrap").append('<h3>"' + alt + '"</h3>' );
						$( "#container_3 .wrap h6").remove();						
						$( "#container_3 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );	
					} else {
						alt = $("#container_3 .wrap img.active").attr("alt");	
						$( "#container_3 .wrap h4").remove();	
						$( "#container_3 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_3 .wrap h5").remove();						
						$( "#container_3 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				} 
				else {  				

					$("#container_3 #img-" + counter).removeClass("right");
					$("#container_3 #img-" + counter).addClass("left");
					$("#container_3 #img-" + counter).removeClass("active");
					$("#container_3 #img-" + counterLeft).removeClass("right"); 
					$("#container_3 #img-" + counterLeft).removeClass("left"); 
					$("#container_3 #img-" + counterLeft).addClass("active");

					$('#container_3 ul.thumbs li.active').removeClass("active");
					$('#container_3 ul.thumbs li#thumb-'+counterThumbLeft).addClass("active");		
					if($(window).width() <= '768') {
						alt = $("#container_3 .wrap img.active").attr("alt");
						$( "#container_3 .wrap h3").remove();	
						$( "#container_3 .wrap").append( '<h3>"' + alt + '"</h3>');	
						$( "#container_3 .wrap h6").remove();						
						$( "#container_3 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_3 .wrap img.active").attr("alt");	
						$( "#container_3 .wrap h4").remove();	
						$( "#container_3 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_3 .wrap h5").remove();						
						$( "#container_3 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				}
			};
		}
		});

		$("#container_3 #next-btn img").click( function(){    	
			var maxCountImg = $("#container_3 .wrap img").length;
			var x = $("#container_3 .wrap img.active").attr("data-img-id");
				if(counter == maxCountImg) {

					$("#container_3 #img-" + counter).addClass("active");				
					$('#container_3 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_3 .wrap img.active").attr("alt");
						$( "#container_3 .wrap h3").remove();	
						$( "#container_3 .wrap h6").remove();	
						$( "#container_3 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_3 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_3 .wrap img.active").attr("alt");	
						$( "#container_3 .wrap h4").remove();
						$( "#container_3 .wrap h5").remove();	
						$( "#container_3 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_3 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = maxCountImg;
					counterThumbRight = maxCountImg+1;
					counterLeft = maxCountImg-1; 	
					counterRight = maxCountImg+1;
					counterThumbLeft = maxCountImg-1;

				} 
				else {
					$("#container_3 #img-" + counter).addClass("right");
					$("#container_3 #img-" + counter).removeClass("left");
					$("#container_3 #img-" + counter).removeClass("active");
					$("#container_3 #img-" + counterRight).removeClass("left");
					$("#container_3 #img-" + counterRight).removeClass("right");
					$("#container_3 #img-" + counterRight).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_3 .wrap img.active").attr("alt");
						$( "#container_3 .wrap h3").remove();	
						$( "#container_3 .wrap h6").remove();	
						$( "#container_3 .wrap").append( '<h3>"' + alt + '"</h3>' );	
						counterInt = parseInt(counter)+1;
						$( "#container_3 .wrap").append( '<h6>' + counterInt + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_3 .wrap img.active").attr("alt");
						$( "#container_3 .wrap h4").remove();	
						$( "#container_3 .wrap h5").remove();	
						$( "#container_3 .wrap").append( '<h4>"' + alt + '"</h4>' );
						counterInt = parseInt(counter)+1;
						$( "#container_3 .wrap").append( '<h5>' + counterInt + " / " + maxCountImg + '</h5>' );
					}


					$('#container_3 ul.thumbs li.active').removeClass("active");
					$('#container_3 ul.thumbs li#thumb-'+counterThumbRight).addClass("active");
					counter++;
					counterLeft++;
					counterRight++;
					counterThumbRight++;
					counterThumbLeft++;
				}
				x = $("#container_3 .wrap img.active").attr("data-img-id");
				x = $("#container_3 .wrap img.active").attr("data-img-id");
		});

		$("#container_3 #prev-btn img").click( function(){    	
			var maxCountImg = $("#container_3 .wrap img").length;
			var x = $("#container_3 .wrap img.active").attr("data-img-id");
				if(counter == 1) {
					$("#container_3 #img-" + counter).addClass("active");
					$('#container_3 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_3 .wrap img.active").attr("alt");
						$( "#container_3 .wrap h3").remove();	
						$( "#container_3 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_3 .wrap h6").remove();						
						$( "#container_3 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					}	else {
						alt = $("#container_3 .wrap img.active").attr("alt");	
						$( "#container_3 .wrap h4").remove();	
						$( "#container_3 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_3 .wrap h5").remove();						
						$( "#container_3 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = 1;
					counterThumbRight = 2;
					counterLeft = 0;
					counterRight = 2;
					counterThumbLeft = 0;		

				}	else  if(counter == 2) { //////////////////////////////////////				

					$("#container_3 #img-" + counter).removeClass("right");
					$("#container_3 #img-" + counter).addClass("left");
					$("#container_3 #img-" + counter).removeClass("active");
					$("#container_3 #img-" + counterLeft).removeClass("right"); 
					$("#container_3 #img-" + counterLeft).removeClass("left"); 
					$("#container_3 #img-" + counterLeft).addClass("active");

					$('#container_3 ul.thumbs li.active').removeClass("active");
					$('#container_3 ul.thumbs li#thumb-' + counterThumbLeft).addClass("active");	

					if($(window).width() <= '768') {
						alt = $("#container_3 .wrap img.active").attr("alt");
						$( "#container_3 .wrap h3").remove();	
						$( "#container_3 .wrap").append('<h3>"' + alt + '"</h3>' );
						$( "#container_3 .wrap h6").remove();						
						$( "#container_3 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );	
					} else {
						alt = $("#container_3 .wrap img.active").attr("alt");	
						$( "#container_3 .wrap h4").remove();	
						$( "#container_3 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_3 .wrap h5").remove();						
						$( "#container_3 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				} 
				else {  
					p = $("#container_3 .thumbs-container ul li.active");
					position = p.position();

					if(position.left <= 40 && $(window).width() >= '768'){
						// var marginLeft = (position.left - 100);
						$("#container_3 .thumbs-container ul li#thumb-1").css("marginLeft", 0);
					}

					
					$("#container_3 #img-" + counter).removeClass("right");
					$("#container_3 #img-" + counter).addClass("left");
					$("#container_3 #img-" + counter).removeClass("active");
					$("#container_3 #img-" + counterLeft).removeClass("right"); 
					$("#container_3 #img-" + counterLeft).removeClass("left"); 
					$("#container_3 #img-" + counterLeft).addClass("active");

					$('#container_3 ul.thumbs li.active').removeClass("active");
					$('#container_3 ul.thumbs li#thumb-'+counterThumbLeft).addClass("active");		
					if($(window).width() <= '768') {
						alt = $("#container_3 .wrap img.active").attr("alt");
						$( "#container_3 .wrap h3").remove();	
						$( "#container_3 .wrap").append( '<h3>"' + alt + '"</h3>');	
						$( "#container_3 .wrap h6").remove();						
						$( "#container_3 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_3 .wrap img.active").attr("alt");	
						$( "#container_3 .wrap h4").remove();	
						$( "#container_3 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_3 .wrap h5").remove();						
						$( "#container_3 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				}
		});
		
		$("#container_3").swipe({fingers:1});
	});
//////////////////////////////////
///////////////////////////////////
/////////////////////////////////
/////////////////////////////////
//////////////////////////////////
	$('.popup-gallery_1').click( function(event){ // лoвим клик пo ссылки с id="go"
			event.preventDefault(); // выключaем стaндaртную рoль элементa
			$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
 			function(){ // пoсле выпoлнения предъидущей aнимaции
 				$("body").css("overflow-y","hidden");
 				$('#container_4') 
				.css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
				.animate({opacity: 1, top: '0'}, 200); 
				var maxCountImg = $("#container_4 .wrap img").length;
				var alt = $("#container_4 .wrap img.active").attr("alt");
				if($(window).width() <= '768') {	
					$( "#container_4 .wrap h3").remove();	
					$( "#container_4 .wrap").append( '<h3>"' + alt + '"</h3>');	
					$( "#container_4 .wrap h6").remove();						
					$( "#container_4 .wrap").append( '<h6>1 / '+ maxCountImg +'</h6>' );
				} else {
					alt = $("#container_4 .wrap img.active").attr("alt");	
					$( "#container_4 .wrap h4").remove();	
					$( "#container_4 .wrap").append( '<h4>"' + alt + '"</h4>' );	
					$( "#container_4 .wrap h5").remove();						
					$( "#container_4 .wrap").append( '<h5>1 / '+ maxCountImg +'</h5>' );
				}
			});
		});
		/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close_slide_show, #overlay').click( function(){ 
		$("body").css("overflow-y","auto");// лoвим клик пo крестику или пoдлoжке
		$('#container_4')			
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
			function(){ // пoсле aнимaции
				$(this).css('display', 'none'); // делaем ему display: none;
				$('#overlay').fadeOut(400); 
				var imgIdActive = $("#container_4 .wrap img.active").attr("data-img-id");
				//alert(oo);
				$("#container_4 #img-" + imgIdActive).removeClass("active"); 
				$("#container_4 #img-1").addClass("active");
				$("#container_4 #img-1").removeClass("right");

				$('#container_4 ul.thumbs li.active').removeClass("active");
				$('#container_4 ul.thumbs li#thumb-1').addClass("active");

				var k = $("#container_4 .wrap img").length;

				for(var i = 2; i <= k; i++){
					$("#container_4 #img-" + i).removeClass("right");
					$("#container_4 #img-" + i).removeClass("active");
					$("#container_4 #img-" + i).addClass("left");
				}
				counter = 1;
				counterRight = 2;
				counterLeft = 0;
				counterThumbLeft = 0;
				counterThumbRight = 2;// скрывaем пoдлoжку
			}
			);
		});

	$(function() {
		$("#container_4 .thumbs-container ul li").on("click", function(){
			var counterPre = counter;
			$("#container_4 #img-" + counter).removeClass("active");
			$('#container_4 ul.thumbs li.active').removeClass("active");

			counter = $(this).attr("data-thumb-id");
	   	counterRight = parseInt(counter)+1;
			counterLeft = parseInt(counter)-1;
			counterThumbLeft = parseInt(counter)-1;
			counterThumbRight = parseInt(counter)+1;
			var maxCountImg = $("#container_4 .wrap img").length;	
			$(this).addClass("active");
			var k = $("#container_4 .wrap img").length;

			for(var i = 1; i <= k; i++){
				$("#container_4 #img-" + i).css("opacity","0");
				if(i < counter){
					$("#container_4 #img-" + i).removeClass("right");
					$("#container_4 #img-" + i).removeClass("left");
					$("#container_4 #img-" + i).addClass("right");
				} 
				if (i > counter) {
					$("#container_4 #img-" + i).removeClass("right");
					$("#container_4 #img-" + i).removeClass("left");
					$("#container_4 #img-" + i).addClass("left");
				}
				if(i == counter){
					$("#container_4 #img-" + i).removeClass("right");
					$("#container_4 #img-" + i).removeClass("left");
				} 
			}
			for(var i = 1; i <= k; i++){
				$("#container_4 #img-" + i).css("opacity","1");
			}
			$("#container_4 #img-" + counter).addClass("active");

			if($(window).width() <= '768') {
				alt = $("#container_4 .wrap img.active").attr("alt");
				$( "#container_4 .wrap h3").remove();	
				$( "#container_4 .wrap").append( '<h3>"' + alt + '"</h3>');	
				$( "#container_4 .wrap h6").remove();						
				$( "#container_4 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
			} else {
				alt = $("#container_4 .wrap img.active").attr("alt");	
				$( "#container_4 .wrap h4").remove();	
				$( "#container_4 .wrap").append( '<h4>"' + alt + '"</h4>' );	
				$( "#container_4 .wrap h5").remove();						
				$( "#container_4 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
			}
		});

		$("#container_4").swipe( {    	
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			var maxCountImg = $("#container_4 .wrap img").length;

			if(direction == "left") {		
				if(counter == maxCountImg) {

					$("#container_4 #img-" + counter).addClass("active");				
					$('#container_4 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_4 .wrap img.active").attr("alt");
						$( "#container_4 .wrap h3").remove();					
						$( "#container_4 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_4 .wrap h6").remove();	
						$( "#container_4 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_4 .wrap img.active").attr("alt");	
						$( "#container_4 .wrap h4").remove();					
						$( "#container_4 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_4 .wrap h5").remove();	
						$( "#container_4 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = maxCountImg;
					counterThumbRight = maxCountImg+1;
					counterLeft = maxCountImg-1; 	
					counterRight = maxCountImg+1;
					counterThumbLeft = maxCountImg-1;

				} 
				else {	
					$("#container_4 #img-" + counter).addClass("right");
					$("#container_4 #img-" + counter).removeClass("left");
					$("#container_4 #img-" + counter).removeClass("active");
					$("#container_4 #img-" + counterRight).removeClass("left");
					$("#container_4 #img-" + counterRight).removeClass("right");
					$("#container_4 #img-" + counterRight).addClass("active");


					if($(window).width() <= '768') {
						alt = $("#container_4 .wrap img.active").attr("alt");
						$( "#container_4 .wrap h3").remove();						
						$( "#container_4 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_4 .wrap h6").remove();	
						counterInt = parseInt(counter)+1;
						$( "#container_4 .wrap").append( '<h6>' + counterInt + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_4 .wrap img.active").attr("alt");
						$( "#container_4 .wrap h4").remove();	
						$( "#container_4 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_4 .wrap h5").remove();
						counterInt = parseInt(counter)+1;
						$( "#container_4 .wrap").append( '<h5>' + counterInt + " / " + maxCountImg + '</h5>' );
					}
					$('#container_4 ul.thumbs li.active').removeClass("active");
					$('#container_4 ul.thumbs li#thumb-'+counterThumbRight).addClass("active");

					counter++;
					counterLeft++;
					counterRight++;
					counterThumbRight++;
					counterThumbLeft++;
				}

			} else if(direction == "right") {
				if(counter == 1) {
					$("#container_4 #img-" + counter).addClass("active");
					$('#container_4 ul.thumbs li#thumb-' + counter).addClass("active");
					if($(window).width() <= '768') {
						alt = $("#container_4 .wrap img.active").attr("alt");
						$( "#container_4 .wrap h3").remove();	
						$( "#container_4 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_4 .wrap h6").remove();						
						$( "#container_4 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					}	else {
						alt = $("#container_4 .wrap img.active").attr("alt");	
						$( "#container_4 .wrap h4").remove();	
						$( "#container_4 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_4 .wrap h5").remove();						
						$( "#container_4 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}


					counter = 1;
					counterThumbRight = 2;
					counterLeft = 0;
					counterRight = 2;
					counterThumbLeft = 0;		

				}	else  if(counter == 2) { //////////////////////////////////////

					$("#container_4 #img-" + counter).removeClass("right");
					$("#container_4 #img-" + counter).addClass("left");
					$("#container_4 #img-" + counter).removeClass("active");
					$("#container_4 #img-" + counterLeft).removeClass("right"); 
					$("#container_4 #img-" + counterLeft).removeClass("left"); 
					$("#container_4 #img-" + counterLeft).addClass("active");

					$('#container_4 ul.thumbs li.active').removeClass("active");
					$('#container_4 ul.thumbs li#thumb-' + counterThumbLeft).addClass("active");	

					if($(window).width() <= '768') {
						alt = $("#container_4 .wrap img.active").attr("alt");
						$( "#container_4 .wrap h3").remove();	
						$( "#container_4 .wrap").append('<h3>"' + alt + '"</h3>' );
						$( "#container_4 .wrap h6").remove();						
						$( "#container_4 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );	
					} else {
						alt = $("#container_4 .wrap img.active").attr("alt");	
						$( "#container_4 .wrap h4").remove();	
						$( "#container_4 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_4 .wrap h5").remove();						
						$( "#container_4 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				} 
				else {  				

					$("#container_4 #img-" + counter).removeClass("right");
					$("#container_4 #img-" + counter).addClass("left");
					$("#container_4 #img-" + counter).removeClass("active");
					$("#container_4 #img-" + counterLeft).removeClass("right"); 
					$("#container_4 #img-" + counterLeft).removeClass("left"); 
					$("#container_4 #img-" + counterLeft).addClass("active");

					$('#container_4 ul.thumbs li.active').removeClass("active");
					$('#container_4 ul.thumbs li#thumb-'+counterThumbLeft).addClass("active");		
					if($(window).width() <= '768') {
						alt = $("#container_4 .wrap img.active").attr("alt");
						$( "#container_4 .wrap h3").remove();	
						$( "#container_4 .wrap").append( '<h3>"' + alt + '"</h3>');	
						$( "#container_4 .wrap h6").remove();						
						$( "#container_4 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_4 .wrap img.active").attr("alt");	
						$( "#container_4 .wrap h4").remove();	
						$( "#container_4 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_4 .wrap h5").remove();						
						$( "#container_4 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				}
			};
		}
		});

		$("#container_4 #next-btn img").click( function(){    	
			var maxCountImg = $("#container_4 .wrap img").length;
			var x = $("#container_4 .wrap img.active").attr("data-img-id");
				if(counter == maxCountImg) {

					$("#container_4 #img-" + counter).addClass("active");				
					$('#container_4 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_4 .wrap img.active").attr("alt");
						$( "#container_4 .wrap h3").remove();	
						$( "#container_4 .wrap h6").remove();	
						$( "#container_4 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_4 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_4 .wrap img.active").attr("alt");	
						$( "#container_4 .wrap h4").remove();
						$( "#container_4 .wrap h5").remove();	
						$( "#container_4 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_4 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = maxCountImg;
					counterThumbRight = maxCountImg+1;
					counterLeft = maxCountImg-1; 	
					counterRight = maxCountImg+1;
					counterThumbLeft = maxCountImg-1;

				} 
				else {
					$("#container_4 #img-" + counter).addClass("right");
					$("#container_4 #img-" + counter).removeClass("left");
					$("#container_4 #img-" + counter).removeClass("active");
					$("#container_4 #img-" + counterRight).removeClass("left");
					$("#container_4 #img-" + counterRight).removeClass("right");
					$("#container_4 #img-" + counterRight).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_4 .wrap img.active").attr("alt");
						$( "#container_4 .wrap h3").remove();	
						$( "#container_4 .wrap h6").remove();	
						$( "#container_4 .wrap").append( '<h3>"' + alt + '"</h3>' );	
						counterInt = parseInt(counter)+1;
						$( "#container_4 .wrap").append( '<h6>' + counterInt + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_4 .wrap img.active").attr("alt");
						$( "#container_4 .wrap h4").remove();	
						$( "#container_4 .wrap h5").remove();	
						$( "#container_4 .wrap").append( '<h4>"' + alt + '"</h4>' );
						counterInt = parseInt(counter)+1;
						$( "#container_4 .wrap").append( '<h5>' + counterInt + " / " + maxCountImg + '</h5>' );
					}


					$('#container_4 ul.thumbs li.active').removeClass("active");
					$('#container_4 ul.thumbs li#thumb-'+counterThumbRight).addClass("active");
					counter++;
					counterLeft++;
					counterRight++;
					counterThumbRight++;
					counterThumbLeft++;
				}
				x = $("#container_4 .wrap img.active").attr("data-img-id");
				x = $("#container_4 .wrap img.active").attr("data-img-id");
		});

		$("#container_4 #prev-btn img").click( function(){    	
			var maxCountImg = $("#container_4 .wrap img").length;
			var x = $("#container_4 .wrap img.active").attr("data-img-id");
				if(counter == 1) {
					$("#container_4 #img-" + counter).addClass("active");
					$('#container_4 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_4 .wrap img.active").attr("alt");
						$( "#container_4 .wrap h3").remove();	
						$( "#container_4 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_4 .wrap h6").remove();						
						$( "#container_4 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					}	else {
						alt = $("#container_4 .wrap img.active").attr("alt");	
						$( "#container_4 .wrap h4").remove();	
						$( "#container_4 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_4 .wrap h5").remove();						
						$( "#container_4 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = 1;
					counterThumbRight = 2;
					counterLeft = 0;
					counterRight = 2;
					counterThumbLeft = 0;		

				}	else  if(counter == 2) { //////////////////////////////////////				

					$("#container_4 #img-" + counter).removeClass("right");
					$("#container_4 #img-" + counter).addClass("left");
					$("#container_4 #img-" + counter).removeClass("active");
					$("#container_4 #img-" + counterLeft).removeClass("right"); 
					$("#container_4 #img-" + counterLeft).removeClass("left"); 
					$("#container_4 #img-" + counterLeft).addClass("active");

					$('#container_4 ul.thumbs li.active').removeClass("active");
					$('#container_4 ul.thumbs li#thumb-' + counterThumbLeft).addClass("active");	

					if($(window).width() <= '768') {
						alt = $("#container_4 .wrap img.active").attr("alt");
						$( "#container_4 .wrap h3").remove();	
						$( "#container_4 .wrap").append('<h3>"' + alt + '"</h3>' );
						$( "#container_4 .wrap h6").remove();						
						$( "#container_4 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );	
					} else {
						alt = $("#container_4 .wrap img.active").attr("alt");	
						$( "#container_4 .wrap h4").remove();	
						$( "#container_4 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_4 .wrap h5").remove();						
						$( "#container_4 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				} 
				else {  
					p = $("#container_4 .thumbs-container ul li.active");
					position = p.position();	

					if(position.left <= 40 && $(window).width() >= '768'){
						// var marginLeft = (position.left - 100);
						$("#container_4 .thumbs-container ul li#thumb-1").css("marginLeft", 0);
					}

					
					$("#container_4 #img-" + counter).removeClass("right");
					$("#container_4 #img-" + counter).addClass("left");
					$("#container_4 #img-" + counter).removeClass("active");
					$("#container_4 #img-" + counterLeft).removeClass("right"); 
					$("#container_4 #img-" + counterLeft).removeClass("left"); 
					$("#container_4 #img-" + counterLeft).addClass("active");

					$('#container_4 ul.thumbs li.active').removeClass("active");
					$('#container_4 ul.thumbs li#thumb-'+counterThumbLeft).addClass("active");		
					if($(window).width() <= '768') {
						alt = $("#container_4 .wrap img.active").attr("alt");
						$( "#container_4 .wrap h3").remove();	
						$( "#container_4 .wrap").append( '<h3>"' + alt + '"</h3>');	
						$( "#container_4 .wrap h6").remove();						
						$( "#container_4 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_4 .wrap img.active").attr("alt");	
						$( "#container_4 .wrap h4").remove();	
						$( "#container_4 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_4 .wrap h5").remove();						
						$( "#container_4 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				}
		});
		
		$("#container_4").swipe({fingers:1});
	});

//////////////////////////////////
///////////////////////////////////
/////////////////////////////////
/////////////////////////////////
//////////////////////////////////
	$('.popup-gallery_2').click( function(event){ // лoвим клик пo ссылки с id="go"
			event.preventDefault(); // выключaем стaндaртную рoль элементa
			$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
 			function(){ // пoсле выпoлнения предъидущей aнимaции
 				$("body").css("overflow-y","hidden");
 				$('#container_5') 
				.css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
				.animate({opacity: 1, top: '0'}, 200); 
				var maxCountImg = $("#container_5 .wrap img").length;
				var alt = $("#container_5 .wrap img.active").attr("alt");
				if($(window).width() <= '768') {
					$( "#container_5 .wrap h3").remove();	
					$( "#container_5 .wrap").append( '<h3>"' + alt + '"</h3>');	
					$( "#container_5 .wrap h6").remove();						
					$( "#container_5 .wrap").append( '<h6>1 / '+ maxCountImg +'</h6>' );
				} else {
					alt = $("#container_5 .wrap img.active").attr("alt");	
					$( "#container_5 .wrap h4").remove();	
					$( "#container_5 .wrap").append( '<h4>"' + alt + '"</h4>' );	
					$( "#container_5 .wrap h5").remove();						
					$( "#container_5 .wrap").append( '<h5>1 / '+ maxCountImg +'</h5>' );
				}
			});
		});
		/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close_slide_show, #overlay').click( function(){ 
		$("body").css("overflow-y","auto");// лoвим клик пo крестику или пoдлoжке
		$('#container_5')			
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
			function(){ // пoсле aнимaции
				$(this).css('display', 'none'); // делaем ему display: none;
				$('#overlay').fadeOut(400); 
				var imgIdActive = $("#container_5 .wrap img.active").attr("data-img-id");
				//alert(oo);
				$("#container_5 #img-" + imgIdActive).removeClass("active"); 
				$("#container_5 #img-1").addClass("active");
				$("#container_5 #img-1").removeClass("right");

				$('#container_5 ul.thumbs li.active').removeClass("active");
				$('#container_5 ul.thumbs li#thumb-1').addClass("active");

				var k = $("#container_5 .wrap img").length;

				for(var i = 2; i <= k; i++){
					$("#container_5 #img-" + i).removeClass("right");
					$("#container_5 #img-" + i).removeClass("active");
					$("#container_5 #img-" + i).addClass("left");
				}
				counter = 1;
				counterRight = 2;
				counterLeft = 0;
				counterThumbLeft = 0;
				counterThumbRight = 2;// скрывaем пoдлoжку
			}
			);
		});

	$(function() {
		$("#container_5 .thumbs-container ul li").on("click", function(){
			var counterPre = counter;
			$("#container_5 #img-" + counter).removeClass("active");
			$('#container_5 ul.thumbs li.active').removeClass("active");

			counter = $(this).attr("data-thumb-id");
	   	counterRight = parseInt(counter)+1;
			counterLeft = parseInt(counter)-1;
			counterThumbLeft = parseInt(counter)-1;
			counterThumbRight = parseInt(counter)+1;
			var maxCountImg = $("#container_5 .wrap img").length;	
			$(this).addClass("active");
			var k = $("#container_5 .wrap img").length;

			for(var i = 1; i <= k; i++){
				$("#container_5 #img-" + i).css("opacity","0");
				if(i < counter){
					$("#container_5 #img-" + i).removeClass("right");
					$("#container_5 #img-" + i).removeClass("left");
					$("#container_5 #img-" + i).addClass("right");
				} 
				if (i > counter) {
					$("#container_5 #img-" + i).removeClass("right");
					$("#container_5 #img-" + i).removeClass("left");
					$("#container_5 #img-" + i).addClass("left");
				} 
				if(i == counter){
					$("#container_5 #img-" + i).removeClass("right");
					$("#container_5 #img-" + i).removeClass("left");
				}
			}
			for(var i = 1; i <= k; i++){
				$("#container_5 #img-" + i).css("opacity","1");
			}
			$("#container_5 #img-" + counter).addClass("active");
			if($(window).width() <= '768') {
				alt = $("#container_5 .wrap img.active").attr("alt");
				$( "#container_5 .wrap h3").remove();	
				$( "#container_5 .wrap").append( '<h3>"' + alt + '"</h3>');	
				$( "#container_5 .wrap h6").remove();						
				$( "#container_5 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
			} else {
				alt = $("#container_5 .wrap img.active").attr("alt");	
				$( "#container_5 .wrap h4").remove();	
				$( "#container_5 .wrap").append( '<h4>"' + alt + '"</h4>' );	
				$( "#container_5 .wrap h5").remove();						
				$( "#container_5 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
			}
		});
		
		$("#container_5").swipe( {    	
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			var maxCountImg = $("#container_5 .wrap img").length;

			if(direction == "left") {		
				if(counter == maxCountImg) {

					$("#container_5 #img-" + counter).addClass("active");				
					$('#container_5 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_5 .wrap img.active").attr("alt");
						$( "#container_5 .wrap h3").remove();					
						$( "#container_5 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_5 .wrap h6").remove();	
						$( "#container_5 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_5 .wrap img.active").attr("alt");	
						$( "#container_5 .wrap h4").remove();					
						$( "#container_5 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_5 .wrap h5").remove();	
						$( "#container_5 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = maxCountImg;
					counterThumbRight = maxCountImg+1;
					counterLeft = maxCountImg-1; 	
					counterRight = maxCountImg+1;
					counterThumbLeft = maxCountImg-1;

				} 
				else {	
					$("#container_5 #img-" + counter).addClass("right");
					$("#container_5 #img-" + counter).removeClass("left");
					$("#container_5 #img-" + counter).removeClass("active");
					$("#container_5 #img-" + counterRight).removeClass("left");
					$("#container_5 #img-" + counterRight).removeClass("right");
					$("#container_5 #img-" + counterRight).addClass("active");


					if($(window).width() <= '768') {
						alt = $("#container_5 .wrap img.active").attr("alt");
						$( "#container_5 .wrap h3").remove();						
						$( "#container_5 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_5 .wrap h6").remove();	
						counterInt = parseInt(counter)+1;
						$( "#container_5 .wrap").append( '<h6>' + counterInt + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_5 .wrap img.active").attr("alt");
						$( "#container_5 .wrap h4").remove();	
							
						$( "#container_5 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_5 .wrap h5").remove();
						counterInt = parseInt(counter)+1;
						$( "#container_5 .wrap").append( '<h5>' + counterInt + " / " + maxCountImg + '</h5>' );
					}
					$('#container_5 ul.thumbs li.active').removeClass("active");
					$('#container_5 ul.thumbs li#thumb-'+counterThumbRight).addClass("active");

					counter++;
					counterLeft++;
					counterRight++;
					counterThumbRight++;
					counterThumbLeft++;
				}

			} else if(direction == "right") {
				if(counter == 1) {
					$("#container_5 #img-" + counter).addClass("active");
					$('#container_5 ul.thumbs li#thumb-' + counter).addClass("active");
					if($(window).width() <= '768') {
						alt = $("#container_5 .wrap img.active").attr("alt");
						$( "#container_5 .wrap h3").remove();	
						$( "#container_5 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_5 .wrap h6").remove();						
						$( "#container_5 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					}	else {
						alt = $("#container_5 .wrap img.active").attr("alt");	
						$( "#container_5 .wrap h4").remove();	
						$( "#container_5 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_5 .wrap h5").remove();						
						$( "#container_5 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}


					counter = 1;
					counterThumbRight = 2;
					counterLeft = 0;
					counterRight = 2;
					counterThumbLeft = 0;		

				}	else  if(counter == 2) { //////////////////////////////////////

					$("#container_5 #img-" + counter).removeClass("right");
					$("#container_5 #img-" + counter).addClass("left");
					$("#container_5 #img-" + counter).removeClass("active");
					$("#container_5 #img-" + counterLeft).removeClass("right"); 
					$("#container_5 #img-" + counterLeft).removeClass("left"); 
					$("#container_5 #img-" + counterLeft).addClass("active");

					$('#container_5 ul.thumbs li.active').removeClass("active");
					$('#container_5 ul.thumbs li#thumb-' + counterThumbLeft).addClass("active");	

					if($(window).width() <= '768') {
						alt = $("#container_5 .wrap img.active").attr("alt");
						$( "#container_5 .wrap h3").remove();	
						$( "#container_5 .wrap").append('<h3>"' + alt + '"</h3>' );
						$( "#container_5 .wrap h6").remove();						
						$( "#container_5 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );	
					} else {
						alt = $("#container_5 .wrap img.active").attr("alt");	
						$( "#container_5 .wrap h4").remove();	
						$( "#container_5 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_5 .wrap h5").remove();						
						$( "#container_5 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				} 
				else {  				

					$("#container_5 #img-" + counter).removeClass("right");
					$("#container_5 #img-" + counter).addClass("left");
					$("#container_5 #img-" + counter).removeClass("active");
					$("#container_5 #img-" + counterLeft).removeClass("right"); 
					$("#container_5 #img-" + counterLeft).removeClass("left"); 
					$("#container_5 #img-" + counterLeft).addClass("active");

					$('#container_5 ul.thumbs li.active').removeClass("active");
					$('#container_5 ul.thumbs li#thumb-'+counterThumbLeft).addClass("active");		
					if($(window).width() <= '768') {
						alt = $("#container_5 .wrap img.active").attr("alt");
						$( "#container_5 .wrap h3").remove();	
						$( "#container_5 .wrap").append( '<h3>"' + alt + '"</h3>');	
						$( "#container_5 .wrap h6").remove();						
						$( "#container_5 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_5 .wrap img.active").attr("alt");	
						$( "#container_5 .wrap h4").remove();	
						$( "#container_5 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_5 .wrap h5").remove();						
						$( "#container_5 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				}
			};
		}
		});

		$("#container_5 #next-btn img").click( function(){    	
			var maxCountImg = $("#container_5 .wrap img").length;
			var x = $("#container_5 .wrap img.active").attr("data-img-id");
				if(counter == maxCountImg) {

					$("#container_5 #img-" + counter).addClass("active");				
					$('#container_5 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_5 .wrap img.active").attr("alt");
						$( "#container_5 .wrap h3").remove();	
						$( "#container_5 .wrap h6").remove();	
						$( "#container_5 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_5 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_5 .wrap img.active").attr("alt");	
						$( "#container_5 .wrap h4").remove();
						$( "#container_5 .wrap h5").remove();	
						$( "#container_5 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_5 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = maxCountImg;
					counterThumbRight = maxCountImg+1;
					counterLeft = maxCountImg-1; 	
					counterRight = maxCountImg+1;
					counterThumbLeft = maxCountImg-1;

				} 
				else {
					$("#container_5 #img-" + counter).addClass("right");
					$("#container_5 #img-" + counter).removeClass("left");
					$("#container_5 #img-" + counter).removeClass("active");
					$("#container_5 #img-" + counterRight).removeClass("left");
					$("#container_5 #img-" + counterRight).removeClass("right");
					$("#container_5 #img-" + counterRight).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_5 .wrap img.active").attr("alt");
						$( "#container_5 .wrap h3").remove();	
						$( "#container_5 .wrap h6").remove();	
						$( "#container_5 .wrap").append( '<h3>"' + alt + '"</h3>' );	
						counterInt = parseInt(counter)+1;
						$( "#container_5 .wrap").append( '<h6>' + counterInt + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_5 .wrap img.active").attr("alt");
						$( "#container_5 .wrap h4").remove();	
						$( "#container_5 .wrap h5").remove();	
						$( "#container_5 .wrap").append( '<h4>"' + alt + '"</h4>' );
						counterInt = parseInt(counter)+1;
						$( "#container_5 .wrap").append( '<h5>' + counterInt + " / " + maxCountImg + '</h5>' );
					}


					$('#container_5 ul.thumbs li.active').removeClass("active");
					$('#container_5 ul.thumbs li#thumb-'+counterThumbRight).addClass("active");
					counter++;
					counterLeft++;
					counterRight++;
					counterThumbRight++;
					counterThumbLeft++;
				}
				x = $("#container_5 .wrap img.active").attr("data-img-id");
				x = $("#container_5 .wrap img.active").attr("data-img-id");
		});

		$("#container_5 #prev-btn img").click( function(){    	
			var maxCountImg = $("#container_5 .wrap img").length;
			var x = $("#container_5 .wrap img.active").attr("data-img-id");
				if(counter == 1) {
					$("#container_5 #img-" + counter).addClass("active");
					$('#container_5 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_5 .wrap img.active").attr("alt");
						$( "#container_5 .wrap h3").remove();	
						$( "#container_5 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_5 .wrap h6").remove();						
						$( "#container_5 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					}	else {
						alt = $("#container_5 .wrap img.active").attr("alt");	
						$( "#container_5 .wrap h4").remove();	
						$( "#container_5 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_5 .wrap h5").remove();						
						$( "#container_5 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = 1;
					counterThumbRight = 2;
					counterLeft = 0;
					counterRight = 2;
					counterThumbLeft = 0;		

				}	else  if(counter == 2) { //////////////////////////////////////				

					$("#container_5 #img-" + counter).removeClass("right");
					$("#container_5 #img-" + counter).addClass("left");
					$("#container_5 #img-" + counter).removeClass("active");
					$("#container_5 #img-" + counterLeft).removeClass("right"); 
					$("#container_5 #img-" + counterLeft).removeClass("left"); 
					$("#container_5 #img-" + counterLeft).addClass("active");

					$('#container_5 ul.thumbs li.active').removeClass("active");
					$('#container_5 ul.thumbs li#thumb-' + counterThumbLeft).addClass("active");	

					if($(window).width() <= '768') {
						alt = $("#container_5 .wrap img.active").attr("alt");
						$( "#container_5 .wrap h3").remove();	
						$( "#container_5 .wrap").append('<h3>"' + alt + '"</h3>' );
						$( "#container_5 .wrap h6").remove();						
						$( "#container_5 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );	
					} else {
						alt = $("#container_5 .wrap img.active").attr("alt");	
						$( "#container_5 .wrap h4").remove();	
						$( "#container_5 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_5 .wrap h5").remove();						
						$( "#container_5 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				} 
				else {  
					p = $("#container_5 .thumbs-container ul li.active");
					position = p.position();

					if(position.left <= 40 && $(window).width() >= '768'){
						$("#container_5 .thumbs-container ul li#thumb-1").css("marginLeft", 0);
					}

					
					$("#container_5 #img-" + counter).removeClass("right");
					$("#container_5 #img-" + counter).addClass("left");
					$("#container_5 #img-" + counter).removeClass("active");
					$("#container_5 #img-" + counterLeft).removeClass("right"); 
					$("#container_5 #img-" + counterLeft).removeClass("left"); 
					$("#container_5 #img-" + counterLeft).addClass("active");

					$('#container_5 ul.thumbs li.active').removeClass("active");
					$('#container_5 ul.thumbs li#thumb-'+counterThumbLeft).addClass("active");		
					if($(window).width() <= '768') {
						alt = $("#container_5 .wrap img.active").attr("alt");
						$( "#container_5 .wrap h3").remove();	
						$( "#container_5 .wrap").append( '<h3>"' + alt + '"</h3>');	
						$( "#container_5 .wrap h6").remove();						
						$( "#container_5 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_5 .wrap img.active").attr("alt");	
						$( "#container_5 .wrap h4").remove();	
						$( "#container_5 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_5 .wrap h5").remove();						
						$( "#container_5 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				}
		});
		
		$("#container_5").swipe({fingers:1});
	});



//////////////////////////////////
///////////////////////////////////
/////////////////////////////////
/////////////////////////////////
//////////////////////////////////
	$('.popup-gallery_3').click( function(event){ // лoвим клик пo ссылки с id="go"
			event.preventDefault(); // выключaем стaндaртную рoль элементa
			$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
 			function(){ // пoсле выпoлнения предъидущей aнимaции
 				$("body").css("overflow-y","hidden");
 				$('#container_6') 
				.css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
				.animate({opacity: 1, top: '0'}, 200); 
				var maxCountImg = $("#container_6 .wrap img").length;
				var alt = $("#container_6 .wrap img.active").attr("alt");
				if($(window).width() <= '768') {	
					$( "#container_6 .wrap h3").remove();	
					$( "#container_6 .wrap").append( '<h3>"' + alt + '"</h3>');	
					$( "#container_6 .wrap h6").remove();						
					$( "#container_6 .wrap").append( '<h6>1 / '+ maxCountImg +'</h6>' );
				} else {
					alt = $("#container_6 .wrap img.active").attr("alt");	
					$( "#container_6 .wrap h4").remove();	
					$( "#container_6 .wrap").append( '<h4>"' + alt + '"</h4>' );	
					$( "#container_6 .wrap h5").remove();						
					$( "#container_6 .wrap").append( '<h5>1 / '+ maxCountImg +'</h5>' );
				}
			});
		});
		/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close_slide_show, #overlay').click( function(){ 
		$("body").css("overflow-y","auto");// лoвим клик пo крестику или пoдлoжке
		$('#container_6')			
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
			function(){ // пoсле aнимaции
				$(this).css('display', 'none'); // делaем ему display: none;
				$('#overlay').fadeOut(400); 
				var imgIdActive = $("#container_6 .wrap img.active").attr("data-img-id");
				//alert(oo);
				$("#container_6 #img-" + imgIdActive).removeClass("active"); 
				$("#container_6 #img-1").addClass("active");
				$("#container_6 #img-1").removeClass("right");

				$('#container_6 ul.thumbs li.active').removeClass("active");
				$('#container_6 ul.thumbs li#thumb-1').addClass("active");

				var k = $("#container_6 .wrap img").length;

				for(var i = 2; i <= k; i++){
					$("#container_6 #img-" + i).removeClass("right");
					$("#container_6 #img-" + i).removeClass("active");
					$("#container_6 #img-" + i).addClass("left");
				}
				counter = 1;
				counterRight = 2;
				counterLeft = 0;
				counterThumbLeft = 0;
				counterThumbRight = 2;// скрывaем пoдлoжку
			}
			);
		});

	$(function() {
		$("#container_6 .thumbs-container ul li").on("click", function(){
			var counterPre = counter;
			$("#container_6 #img-" + counter).removeClass("active");
			$('#container_6 ul.thumbs li.active').removeClass("active");

			counter = $(this).attr("data-thumb-id");
	   	counterRight = parseInt(counter)+1;
			counterLeft = parseInt(counter)-1;
			counterThumbLeft = parseInt(counter)-1;
			counterThumbRight = parseInt(counter)+1;
			var maxCountImg = $("#container_6 .wrap img").length;	
			$(this).addClass("active");
			var k = $("#container_6 .wrap img").length;

			for(var i = 1; i <= k; i++){
				$("#container_6 #img-" + i).css("opacity","0");
				if(i < counter){
					$("#container_6 #img-" + i).removeClass("right");
					$("#container_6 #img-" + i).removeClass("left");
					$("#container_6 #img-" + i).addClass("right");
				} 
				if (i > counter) {
					$("#container_6 #img-" + i).removeClass("right");
					$("#container_6 #img-" + i).removeClass("left");
					$("#container_6 #img-" + i).addClass("left");
				} 
				if(i == counter){
					$("#container_6 #img-" + i).removeClass("right");
					$("#container_6 #img-" + i).removeClass("left");
				}
			}
			for(var i = 1; i <= k; i++){
				$("#container_6 #img-" + i).css("opacity","1");
			}
			$("#container_6 #img-" + counter).addClass("active");

			if($(window).width() <= '768') {
				alt = $("#container_6 .wrap img.active").attr("alt");
				$( "#container_6 .wrap h3").remove();	
				$( "#container_6 .wrap").append( '<h3>"' + alt + '"</h3>');	
				$( "#container_6 .wrap h6").remove();						
				$( "#container_6 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
			} else {
				alt = $("#container_6 .wrap img.active").attr("alt");	
				$( "#container_6 .wrap h4").remove();	
				$( "#container_6 .wrap").append( '<h4>"' + alt + '"</h4>' );	
				$( "#container_6 .wrap h5").remove();						
				$( "#container_6 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
			}
		});
		
		$("#container_6").swipe( {    	
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			var maxCountImg = $("#container_6 .wrap img").length;

			if(direction == "left") {		
				if(counter == maxCountImg) {

					$("#container_6 #img-" + counter).addClass("active");				
					$('#container_6 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_6 .wrap img.active").attr("alt");	
						$( "#container_6 .wrap h3").remove();					
						$( "#container_6 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_6 .wrap h6").remove();	
						$( "#container_6 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_6 .wrap img.active").attr("alt");	
						$( "#container_6 .wrap h4").remove();					
						$( "#container_6 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_6 .wrap h5").remove();	
						$( "#container_6 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = maxCountImg;
					counterThumbRight = maxCountImg+1;
					counterLeft = maxCountImg-1; 	
					counterRight = maxCountImg+1;
					counterThumbLeft = maxCountImg-1;

				} 
				else {	
					$("#container_6 #img-" + counter).addClass("right");
					$("#container_6 #img-" + counter).removeClass("left");
					$("#container_6 #img-" + counter).removeClass("active");
					$("#container_6 #img-" + counterRight).removeClass("left");
					$("#container_6 #img-" + counterRight).removeClass("right");
					$("#container_6 #img-" + counterRight).addClass("active");


					if($(window).width() <= '768') {
						alt = $("#container_6 .wrap img.active").attr("alt");
						$( "#container_6 .wrap h3").remove();						
						$( "#container_6 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_6 .wrap h6").remove();	
						counterInt = parseInt(counter)+1;
						$( "#container_6 .wrap").append( '<h6>' + counterInt + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_6 .wrap img.active").attr("alt");
						$( "#container_6 .wrap h4").remove();	
						$( "#container_6 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_6 .wrap h5").remove();
						counterInt = parseInt(counter)+1;
						$( "#container_6 .wrap").append( '<h5>' + counterInt + " / " + maxCountImg + '</h5>' );
					}
					$('#container_6 ul.thumbs li.active').removeClass("active");
					$('#container_6 ul.thumbs li#thumb-'+counterThumbRight).addClass("active");

					counter++;
					counterLeft++;
					counterRight++;
					counterThumbRight++;
					counterThumbLeft++;
				}

			} else if(direction == "right") {
				if(counter == 1) {
					$("#container_6 #img-" + counter).addClass("active");
					$('#container_6 ul.thumbs li#thumb-' + counter).addClass("active");
					if($(window).width() <= '768') {
						alt = $("#container_6 .wrap img.active").attr("alt");
						$( "#container_6 .wrap h3").remove();	
						$( "#container_6 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_6 .wrap h6").remove();						
						$( "#container_6 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					}	else {
						alt = $("#container_6 .wrap img.active").attr("alt");	
						$( "#container_6 .wrap h4").remove();	
						$( "#container_6 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_6 .wrap h5").remove();						
						$( "#container_6 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}


					counter = 1;
					counterThumbRight = 2;
					counterLeft = 0;
					counterRight = 2;
					counterThumbLeft = 0;		

				}	else  if(counter == 2) { //////////////////////////////////////

					$("#container_6 #img-" + counter).removeClass("right");
					$("#container_6 #img-" + counter).addClass("left");
					$("#container_6 #img-" + counter).removeClass("active");
					$("#container_6 #img-" + counterLeft).removeClass("right"); 
					$("#container_6 #img-" + counterLeft).removeClass("left"); 
					$("#container_6 #img-" + counterLeft).addClass("active");

					$('#container_6 ul.thumbs li.active').removeClass("active");
					$('#container_6 ul.thumbs li#thumb-' + counterThumbLeft).addClass("active");	

					if($(window).width() <= '768') {
						alt = $("#container_6 .wrap img.active").attr("alt");
						$( "#container_6 .wrap h3").remove();	
						$( "#container_6 .wrap").append('<h3>"' + alt + '"</h3>' );
						$( "#container_6 .wrap h6").remove();						
						$( "#container_6 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );	
					} else {
						alt = $("#container_6 .wrap img.active").attr("alt");	
						$( "#container_6 .wrap h4").remove();	
						$( "#container_6 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_6 .wrap h5").remove();						
						$( "#container_6 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				} 
				else {  				

					$("#container_6 #img-" + counter).removeClass("right");
					$("#container_6 #img-" + counter).addClass("left");
					$("#container_6 #img-" + counter).removeClass("active");
					$("#container_6 #img-" + counterLeft).removeClass("right"); 
					$("#container_6 #img-" + counterLeft).removeClass("left"); 
					$("#container_6 #img-" + counterLeft).addClass("active");

					$('#container_6 ul.thumbs li.active').removeClass("active");
					$('#container_6 ul.thumbs li#thumb-'+counterThumbLeft).addClass("active");		
					if($(window).width() <= '768') {
						alt = $("#container_6 .wrap img.active").attr("alt");	
						$( "#container_6 .wrap h3").remove();	
						$( "#container_6 .wrap").append( '<h3>"' + alt + '"</h3>');	
						$( "#container_6 .wrap h6").remove();						
						$( "#container_6 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_6 .wrap img.active").attr("alt");	
						$( "#container_6 .wrap h4").remove();	
						$( "#container_6 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_6 .wrap h5").remove();						
						$( "#container_6 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				}
			};
		}
		});

		$("#container_6 #next-btn img").click( function(){    	
			var maxCountImg = $("#container_6 .wrap img").length;
			var x = $("#container_6 .wrap img.active").attr("data-img-id");
				if(counter == maxCountImg) {

					$("#container_6 #img-" + counter).addClass("active");				
					$('#container_6 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_6 .wrap img.active").attr("alt");
						$( "#container_6 .wrap h3").remove();	
						$( "#container_6 .wrap h6").remove();	
						$( "#container_6 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_6 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_6 .wrap img.active").attr("alt");	
						$( "#container_6 .wrap h4").remove();
						$( "#container_6 .wrap h5").remove();	
						$( "#container_6 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_6 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = maxCountImg;
					counterThumbRight = maxCountImg+1;
					counterLeft = maxCountImg-1; 	
					counterRight = maxCountImg+1;
					counterThumbLeft = maxCountImg-1;

				} 
				else {
					$("#container_6 #img-" + counter).addClass("right");
					$("#container_6 #img-" + counter).removeClass("left");
					$("#container_6 #img-" + counter).removeClass("active");
					$("#container_6 #img-" + counterRight).removeClass("left");
					$("#container_6 #img-" + counterRight).removeClass("right");
					$("#container_6 #img-" + counterRight).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_6 .wrap img.active").attr("alt");
						$( "#container_6 .wrap h3").remove();	
						$( "#container_6 .wrap h6").remove();	
						$( "#container_6 .wrap").append( '<h3>"' + alt + '"</h3>' );	
						counterInt = parseInt(counter)+1;
						$( "#container_6 .wrap").append( '<h6>' + counterInt + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_6 .wrap img.active").attr("alt");
						$( "#container_6 .wrap h4").remove();	
						$( "#container_6 .wrap h5").remove();	
						$( "#container_6 .wrap").append( '<h4>"' + alt + '"</h4>' );
						counterInt = parseInt(counter)+1;
						$( "#container_6 .wrap").append( '<h5>' + counterInt + " / " + maxCountImg + '</h5>' );
					}


					$('#container_6 ul.thumbs li.active').removeClass("active");
					$('#container_6 ul.thumbs li#thumb-'+counterThumbRight).addClass("active");
					counter++;
					counterLeft++;
					counterRight++;
					counterThumbRight++;
					counterThumbLeft++;
				}
				x = $("#container_6 .wrap img.active").attr("data-img-id");
				x = $("#container_6 .wrap img.active").attr("data-img-id");
		});

		$("#container_6 #prev-btn img").click( function(){    	
			var maxCountImg = $("#container_6 .wrap img").length;
			var x = $("#container_6 .wrap img.active").attr("data-img-id");
				if(counter == 1) {
					$("#container_6 #img-" + counter).addClass("active");
					$('#container_6 ul.thumbs li#thumb-' + counter).addClass("active");

					if($(window).width() <= '768') {
						alt = $("#container_6 .wrap img.active").attr("alt");
						$( "#container_6 .wrap h3").remove();	
						$( "#container_6 .wrap").append( '<h3>"' + alt + '"</h3>' );
						$( "#container_6 .wrap h6").remove();						
						$( "#container_6 .wrap").append( '<h6>' + counter + " / " + maxCountImg + '</h6>' );
					}	else {
						alt = $("#container_6 .wrap img.active").attr("alt");	
						$( "#container_6 .wrap h4").remove();	
						$( "#container_6 .wrap").append( '<h4>"' + alt + '"</h4>' );
						$( "#container_6 .wrap h5").remove();						
						$( "#container_6 .wrap").append( '<h5>' + counter + " / " + maxCountImg + '</h5>' );
					}
					counter = 1;
					counterThumbRight = 2;
					counterLeft = 0;
					counterRight = 2;
					counterThumbLeft = 0;		

				}	else  if(counter == 2) { //////////////////////////////////////				

					$("#container_6 #img-" + counter).removeClass("right");
					$("#container_6 #img-" + counter).addClass("left");
					$("#container_6 #img-" + counter).removeClass("active");
					$("#container_6 #img-" + counterLeft).removeClass("right"); 
					$("#container_6 #img-" + counterLeft).removeClass("left"); 
					$("#container_6 #img-" + counterLeft).addClass("active");

					$('#container_6 ul.thumbs li.active').removeClass("active");
					$('#container_6 ul.thumbs li#thumb-' + counterThumbLeft).addClass("active");	

					if($(window).width() <= '768') {
						alt = $("#container_6 .wrap img.active").attr("alt");
						$( "#container_6 .wrap h3").remove();	
						$( "#container_6 .wrap").append('<h3>"' + alt + '"</h3>' );
						$( "#container_6 .wrap h6").remove();						
						$( "#container_6 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );	
					} else {
						alt = $("#container_6 .wrap img.active").attr("alt");	
						$( "#container_6 .wrap h4").remove();	
						$( "#container_6 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_6 .wrap h5").remove();						
						$( "#container_6 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				} 
				else {  
					p = $("#container_6 .thumbs-container ul li.active");
					position = p.position();

					if(position.left <= 40 && $(window).width() >= '768'){
						// var marginLeft = (position.left - 100);
						$("#container_6 .thumbs-container ul li#thumb-1").css("marginLeft", 0);
					}

					
					$("#container_6 #img-" + counter).removeClass("right");
					$("#container_6 #img-" + counter).addClass("left");
					$("#container_6 #img-" + counter).removeClass("active");
					$("#container_6 #img-" + counterLeft).removeClass("right"); 
					$("#container_6 #img-" + counterLeft).removeClass("left"); 
					$("#container_6 #img-" + counterLeft).addClass("active");

					$('#container_6 ul.thumbs li.active').removeClass("active");
					$('#container_6 ul.thumbs li#thumb-'+counterThumbLeft).addClass("active");		
					if($(window).width() <= '768') {
						alt = $("#container_6 .wrap img.active").attr("alt");
						$( "#container_6 .wrap h3").remove();	
						$( "#container_6 .wrap").append( '<h3>"' + alt + '"</h3>');	
						$( "#container_6 .wrap h6").remove();						
						$( "#container_6 .wrap").append( '<h6>' + (counter-1) + " / " + maxCountImg + '</h6>' );
					} else {
						alt = $("#container_6 .wrap img.active").attr("alt");	
						$( "#container_6 .wrap h4").remove();	
						$( "#container_6 .wrap").append( '<h4>"' + alt + '"</h4>' );	
						$( "#container_6 .wrap h5").remove();						
						$( "#container_6 .wrap").append( '<h5>' + (counter-1) + " / " + maxCountImg + '</h5>' );
					}
					counter--;
					counterLeft--;
					counterRight--;
					counterThumbLeft--;
					counterThumbRight--;
				}
		});
		
		$("#container_6").swipe({fingers:1});
	});

	$("body").css("overflow-x","hidden")
/////// don't touch it!!! final parenthesis
});
/////////////////////////// FINAL!!! 
