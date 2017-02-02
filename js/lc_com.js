$(function(){
	var stock_count = 1;

	function hSize(){
		if($(window).width()>=769) {
			$( ".lc_main .promocods h6").remove();	
		} else {
			var maxLenght = $(".gallery_less_580 .wrap_gallery div").length;
			$( ".lc_main .promocods h6").remove();
			$( ".lc_main .promocods").prepend( '<h6>' + stock_count + " / " + maxLenght + '</h6>' );
		}
	}
	$(window).resize(hSize);


	
	$(function(){
		$(".lc_main .wrap_gallery").swipe({
			tap:function(){

				var maxLenght = $(".gallery_less_580 .wrap_gallery div").length;
				$("#g_" + stock_count).css("opacity","0");
				if(stock_count == 0){
					$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text("1%");
					$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №1");
				} if(stock_count == 1){
					$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text("2%");
					$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №2");
				} if(stock_count == 2){
					$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text("3%");
					$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №3");
				} if(stock_count == 3){
					$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text("4%");
					$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №4");
				} if(stock_count == 4){
					$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text(maxLenght+"%");
					$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №" + maxLenght);
				} if(stock_count == maxLenght){
					stock_count = 0;
					$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text("1%");
					$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №1");
				}
									
				
				$("#g_" + (stock_count+1)).css("opacity","1");
				stock_count++;
				if($(window).width()<=768) {
					$( ".lc_main .promocods h6").remove();	
					$( ".lc_main .promocods").prepend( '<h6>' + stock_count + " / " + maxLenght + '</h6>' );
				}
				
			}
		});
	});


	$("#stock_right").click(function(){
		var maxLenght = $(".gallery_less_580 .wrap_gallery div").length;
		$("#g_" + stock_count).css("opacity","0");

			if(stock_count == 0){
				$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text("1%");
				$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №1");
			} if(stock_count == 1){
				$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text("2%");
				$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №2");
			} if(stock_count == 2){
				$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text("3%");
				$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №3");
			} if(stock_count == 3){
				$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text("4%");
				$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №4");
			} if(stock_count == 4){
				$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text(maxLenght+"%");
				$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №" + maxLenght);
			} if(stock_count == maxLenght){
				stock_count = 0;
				$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text("1%");
				$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №1");
			}

		$("#g_" + (stock_count+1)).css("opacity","1");
		stock_count++;
		if($(window).width()<=768) {
			$( ".lc_main .promocods h6").remove();	
			$( ".lc_main .promocods").prepend( '<h6>' + stock_count + " / " + maxLenght + '</h6>' );
		}		
	});

	$("#stock_left").click(function(){
		var maxLenght = $(".gallery_less_580 .wrap_gallery div").length;
		$("#g_" + stock_count).css("opacity","0");

		 if(stock_count == 2){
		 	$("#g_" + (stock_count-1)).css("opacity","1");
			$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text("1%");
			$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №1");
		} if(stock_count == 3){
			$("#g_" + (stock_count-1)).css("opacity","1");
			$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text("2%");
			$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №2");
		} if(stock_count == 4){
			$("#g_" + (stock_count-1)).css("opacity","1");
			$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text("3%");
			$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №3");
		} if(stock_count == maxLenght){
			$("#g_" + (stock_count-1)).css("opacity","1");
			$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text("4%");
			$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №4");
		} if (stock_count == 1){
			$("#g_" + maxLenght).css("opacity","1");
			stock_count = (maxLenght+1);
			$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h2").text(maxLenght+"%");
			$( ".lc_main .promocods .gallery_less_580 .wrap_gallery h3").text("Промокод №" + maxLenght);
		}




		
		
		if($(window).width()<=768) {
			$( ".lc_main .promocods h6").remove();	
			$( ".lc_main .promocods").prepend( '<h6>' + (stock_count-1) + " / " + maxLenght + '</h6>' );
		}
		stock_count--;
	});





	if($(window).width() <= 778){
		$("#name_input").attr("placeholder","Им'я");
		$("#sur_name_input").attr("placeholder","Фамилия");
		$("#phone_input").attr("placeholder","Телефон");
		$("#birthday_input").attr("placeholder","День рождения");
		$("#city_input").attr("placeholder","Город");
		$("#hobby_input").attr("placeholder","Хобби");

	}
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".nav .wrap_nav ul").slideToggle();
		return false;
	});


	$("#piggy-bank").removeClass("piggy-bank_special");
	$("#table").removeClass("table_special");
	$("#history").removeClass("history_special");
	document.getElementById("accept_info_about_u").onclick = function(){accept_info_about_u()};
	function accept_info_about_u(){
		$("#user_finish").fadeIn(400);
		$("#user_start").fadeOut(0);
	};
	document.getElementById("user").onclick = function(){user()};
	function user(){
		$("#piggy-bank").removeClass("piggy-bank_special");
		$("#table").removeClass("table_special");
		$("#history").removeClass("history_special");
		$("#user_content").fadeIn(400);
		$("#user").addClass("user_special");
		$("#user").css("background-color","rgba(0,0,0,0.35)");
		$("#piggy-bank").css("background-color","rgba(0,0,0,0)");
		$("#table").css("background-color","rgba(0,0,0,0)");
		$("#history").css("background-color","rgba(0,0,0,0)");
	
		$("#piggy-bank_content").fadeOut(0);
		$("#table_content").fadeOut(0);
		$("#history_content").fadeOut(0);
	};
	document.getElementById("piggy-bank").onclick = function(){piggyBank()};
	function piggyBank(){
		$("#user_content").fadeOut(0);
		$("#piggy-bank_content").fadeIn(400);
		$("#table_content").fadeOut(0);
		$("#history_content").fadeOut(0);

		$("#table").removeClass("table_special");
		$("#history").removeClass("history_special");
		$("#user").removeClass("user_special");
		$("#user").css("background-color","rgba(0,0,0,0)");
		$("#piggy-bank").css("background-color","rgba(0,0,0,0.35)");
		$("#table").css("background-color","rgba(0,0,0,0)");
		$("#history").css("background-color","rgba(0,0,0,0)");
		$("#piggy-bank").addClass("piggy-bank_special");
		
	};
	document.getElementById("table").onclick = function(){table()};
	function table(){
		$("#piggy-bank").removeClass("piggy-bank_special");
		$("#user").removeClass("user_special");
		$("#history").removeClass("history_special");
		$("#table").addClass("table_special");
		$("#user").css("background-color","rgba(0,0,0,0)");
		$("#piggy-bank").css("background-color","rgba(0,0,0,0)");
		$("#table").css("background-color","rgba(0,0,0,0.35");
		$("#history").css("background-color","rgba(0,0,0,0)");
		$("#user_content").fadeOut(0);
		$("#piggy-bank_content").fadeOut(0);
		$("#table_content").fadeIn(400);
		$("#history_content").fadeOut(0);
	};
	document.getElementById("history").onclick = function(){history()};
	function history(){
		$("#piggy-bank").removeClass("piggy-bank_special");
		$("#table").removeClass("table_special");
		$("#user").removeClass("user_special");
		$("#history").addClass("history_special");
		$("#user").css("background-color","rgba(0,0,0,0)");
		$("#piggy-bank").css("background-color","rgba(0,0,0,0)");
		$("#table").css("background-color","rgba(0,0,0,0)");
		$("#history").css("background-color","rgba(0,0,0,0.35");
		$("#user_content").fadeOut(0);
		$("#piggy-bank_content").fadeOut(0);
		$("#table_content").fadeOut(0);
		$("#history_content").fadeIn(400);
	};
	///////////////////
	/////////////////////////////
	////////////////////
	//////////////////////
	///// for small window

	$("#user_li_mini").css({"border-bottom":"2px solid #d33732","background-color":"rgba(0,0,0,0.1)"});

	document.getElementById("user_mini").onclick = function(){userMini()};
	function userMini(){
		$("#table_li_mini").css({"border-bottom":"none","background":"transparent"});
		$("#piggy-bank_li_mini").css({"border-bottom":"none","background":"transparent"});
		$("#history_li_mini").css({"border-bottom":"none","background":"transparent"});
		$("#user_li_mini").css({"border-bottom":"2px solid #d33732","background-color":"rgba(0,0,0,0.1)"});

		$("#user_content").fadeIn(400);
		$("#piggy-bank_content").fadeOut(0);
		$("#table_content").fadeOut(0);
		$("#history_content").fadeOut(0);
	};
	document.getElementById("piggy-bank_mini").onclick = function(){piggyBankMini()};
	function piggyBankMini(){
		$("#table_li_mini").css({"border-bottom":"none","background":"transparent"});
		$("#piggy-bank_li_mini").css({"border-bottom":"2px solid #d33732","background":"rgba(0,0,0,0.1)"})
		$("#history_li_mini").css({"border-bottom":"none","background":"transparent"});
		$("#user_li_mini").css({"border-bottom":"none","background-color":"transparent"});	

		$("#user_content").fadeOut(0);
		$("#piggy-bank_content").fadeIn(400);
		$("#table_content").fadeOut(0);
		$("#history_content").fadeOut(0);
	};
	document.getElementById("table_mini").onclick = function(){tableMini()};
	function tableMini(){
		$("#table_li_mini").css({"border-bottom":"2px solid #d33732","background":"rgba(0,0,0,0.1)"})
		$("#piggy-bank_li_mini").css({"border-bottom":"none","background":"transparent"});
		$("#history_li_mini").css({"border-bottom":"none","background":"transparent"});
		$("#user_li_mini").css({"border-bottom":"none","background-color":"transparent"});

		$("#user_content").fadeOut(0);
		$("#piggy-bank_content").fadeOut(0);
		$("#table_content").fadeIn(400);
		$("#history_content").fadeOut(0);
	};
	document.getElementById("history_mini").onclick = function(){historyMini()};
	function historyMini(){
		$("#table_li_mini").css({"border-bottom":"none","background":"transparent"});
		$("#piggy-bank_li_mini").css({"border-bottom":"none","background":"transparent"});
		$("#history_li_mini").css({"border-bottom":"2px solid #d33732","background":"rgba(0,0,0,0.1)"})
		$("#user_li_mini").css({"border-bottom":"none","background-color":"transparent"});

		$("#user_content").fadeOut(0);
		$("#piggy-bank_content").fadeOut(0);
		$("#table_content").fadeOut(0);
		$("#history_content").fadeIn(400);
		var x = $(".history ul").height();
		if((x+61) >= 440){
			$(".history ul").css("overflow-y","scroll");
			$(".history ul").css("overflow-x","hidden")
		}
	};
	/////////////
	///////////////////
	////////////// 
	/// end small window
	document.getElementById("sale").onclick = function(){sale()};
	function sale(){
		$(".sale").fadeIn(400);
		$("#sale").css({"border-bottom":"2px solid #D33732","background":"rgba(0,0,0,0.1)"});
		$("#promocods").css({"border-bottom":"none","background":"transparent"});
		$("#referal_system").css({"border-bottom":"none","background":"transparent"});
		$(".promocods").fadeOut(0);
		$(".referal_system").fadeOut(0);
	};
	document.getElementById("promocods").onclick = function(){promocods()};
	function promocods(){
		$(".promocods").fadeIn(400);
		$("#promocods").css({"border-bottom":"2px solid #D33732","background":"rgba(0,0,0,0.1)"});
		$("#sale").css({"border-bottom":"none","background":"transparent"});
		$("#referal_system").css({"border-bottom":"none","background":"transparent"});
		$(".sale").fadeOut(0);
		$(".referal_system").fadeOut(0);
		var maxLenght = $(".gallery_less_580 .wrap_gallery div").length;
		for(var i = 1; i <= maxLenght; i++ ){

			$("#g_" + i).css("opacity","0");
			$("#g_1").css("opacity","1");
		}
		if($(window).width()<=768) {
			$( ".lc_main .promocods h6").remove();	
			$( ".lc_main .promocods").prepend( '<h6> 1 / ' + maxLenght + ' </h6>' );
		}
	};
	document.getElementById("referal_system").onclick = function(){referal_system()};
	function referal_system(){
		$("#referal_system").css({"border-bottom":"2px solid #D33732","background":"rgba(0,0,0,0.1)"});
		$("#sale").css({"border-bottom":"none","background":"transparent"});
		$("#promocods").css({"border-bottom":"none","background":"transparent"});
		$(".referal_system").fadeIn(400);
		$(".promocods").fadeOut(0);
		$(".sale").fadeOut(0);
	};




	$(".promocods_gallery h1").fadeIn("slow");
	$(".promocods_gallery h2").fadeIn("slow");
	$(".promocods_gallery h3").fadeIn("slow");
	$(".promocods_gallery h4").fadeIn("slow");
	$(".promocods_gallery h5").fadeIn("slow");
	$("#a_1").removeClass("after_1");

	var counter = 1, lenghtPromods;
	document.getElementById("right").onclick = function(){right()};
	function right(){
		lenghtPromods = $(".content .promocods_gallery div").length;
		if(counter != lenghtPromods) {
			if(counter == 1) {
				$(".promocods_gallery h1").fadeOut(0);
				$(".promocods_gallery h2").fadeOut(0);
				$(".promocods_gallery h3").fadeOut(0);
				$(".promocods_gallery h4").fadeOut(0);
				$(".promocods_gallery h5").fadeOut(0);
				$("#a_" + counter).css({"transform":"scale(0.84)","margin-left":"50px","z-index":"1"});
				$("#a_" + (counter + 1)).removeClass("after_" + (counter+1));
				$("#a_" + counter).addClass("after_" + counter);
				$("#a_" + (counter + 1)).css({"transform":"scale(1.19)","margin-left":"149px","z-index":"2"});
				counter++;

				$( ".promocods_gallery h2").text("2%");
				$( ".promocods_gallery h3").text("Промокод №2");

				$(".promocods_gallery h1").delay(400).fadeIn(400);
				$(".promocods_gallery h2").delay(400).fadeIn(400);
				$(".promocods_gallery h3").delay(400).fadeIn(400);
				$(".promocods_gallery h4").delay(400).fadeIn(400);
				$(".promocods_gallery h5").delay(400).fadeIn(400);		
			} else {
				$(".promocods_gallery h1").fadeOut(0);
				$(".promocods_gallery h2").fadeOut(0);
				$(".promocods_gallery h3").fadeOut(0);
				$(".promocods_gallery h4").fadeOut(0);
				$(".promocods_gallery h5").fadeOut(0);
				$("#a_" + counter).css({"transform":"scale(1)","margin-left":"72px","z-index":"1"});
				$("#a_" + (counter + 1)).removeClass("after_" + (counter+1));
				$("#a_" + counter).addClass("after_" + counter);
				$("#a_" + (counter + 1)).css({"transform":"scale(1.19)","margin-left":"149px","z-index":"2"});
				counter++;
				if(counter==3) {
					$( ".promocods_gallery h2").text("3%");
					$( ".promocods_gallery h3").text("Промокод №3");
				} if(counter==4) {
					$( ".promocods_gallery h2").text("4%");
					$( ".promocods_gallery h3").text("Промокод №4");
				} if(counter == lenghtPromods) {
					$( ".promocods_gallery h2").text(lenghtPromods + "%");
					$( ".promocods_gallery h3").text("Промокод №" + lenghtPromods);
				}
				$(".promocods_gallery h1").delay(400).fadeIn(400);
				$(".promocods_gallery h2").delay(400).fadeIn(400);
				$(".promocods_gallery h3").delay(400).fadeIn(400);
				$(".promocods_gallery h4").delay(400).fadeIn(400);
				$(".promocods_gallery h5").delay(400).fadeIn(400);
			}
		} else {
			//////////
		}
	};
	document.getElementById("left").onclick = function(){left()};
	function left(){
		lenghtPromods = $(".content .promocods_gallery div").length;
		if(counter != 1) {
			if(counter == 2){
				$(".promocods_gallery h1").fadeOut(0);
				$(".promocods_gallery h2").fadeOut(0);
				$(".promocods_gallery h3").fadeOut(0);
				$(".promocods_gallery h4").fadeOut(0);
				$(".promocods_gallery h5").fadeOut(0);
				$("#a_" + counter).css({"transform":"scale(1)","margin-left":"220px","z-index":"1"});
				$("#a_" + (counter - 1)).removeClass("after_" + (counter-1));
				$("#a_" + counter).addClass("after_" + counter);
				$("#a_" + (counter - 1)).css({"transform":"scale(1)","margin-left":"124px","z-index":"2"});
				counter--;

				$( ".promocods_gallery h2").text("1%");
				$( ".promocods_gallery h3").text("Промокод №1");

				$(".promocods_gallery h1").delay(400).fadeIn(400);
				$(".promocods_gallery h2").delay(400).fadeIn(400);
				$(".promocods_gallery h3").delay(400).fadeIn(400);
				$(".promocods_gallery h4").delay(400).fadeIn(400);
				$(".promocods_gallery h5").delay(400).fadeIn(400);
			} else {
				$(".promocods_gallery h1").fadeOut(0);
				$(".promocods_gallery h2").fadeOut(0);
				$(".promocods_gallery h3").fadeOut(0);
				$(".promocods_gallery h4").fadeOut(0);
				$(".promocods_gallery h5").fadeOut(0);
				$("#a_" + counter).css({"transform":"scale(1)","margin-left":"220px","z-index":"1"});
				$("#a_" + (counter - 1)).removeClass("after_" + (counter-1));
				$("#a_" + counter).addClass("after_" + counter);
				$("#a_" + (counter - 1)).css({"transform":"scale(1.19)","margin-left":"149px","z-index":"2"});

				counter--;
				if (counter==2) {
					$( ".promocods_gallery h2").text("2%");
					$( ".promocods_gallery h3").text("Промокод №2");
				} if(counter==3) {
					$( ".promocods_gallery h2").text("3%");
					$( ".promocods_gallery h3").text("Промокод №3");
				} if(counter==4) {
					$(".promocods_gallery h2").text("4%");
					$(".promocods_gallery h3").text("Промокод №4");
				} 

				$(".promocods_gallery h1").delay(400).fadeIn(400);
				$(".promocods_gallery h2").delay(400).fadeIn(400);
				$(".promocods_gallery h3").delay(400).fadeIn(400);
				$(".promocods_gallery h4").delay(400).fadeIn(400);
				$(".promocods_gallery h5").delay(400).fadeIn(400);
			}
		} else {
			//////
		}
	};
});