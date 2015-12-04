// JavaScript Document
$( document ).ready(function() {
	"use strict";
	var saverValue = 0;
	var skiSchool = 2.5;
	var gearRental = 1.5;
	var liftTicket = 0.25;
	var dinnerReservation = 0.5;
	
	//sticky header
	function sticky_relocate() {
		var window_top = $(window).scrollTop();
		var div_top = $('.saver-anchor').offset().top;
		if (window_top > div_top) {
			$('.saver-counter').addClass('stick');
		} else {
			$('.saver-counter').removeClass('stick');
		}
	}
	
	$(function () {
		$(window).scroll(sticky_relocate);
		sticky_relocate();
	});
	
	//logic for adding and removing time to clock
	$('.saver-btn').click(function(){
		if ($(".clock-value").filter(':animated').length > 0) {
			return false;
		}
			$(this).toggleClass('active');
			
			//swap text
			var $span = $(this).find('span');
            if($span.text() === "Add To Time Saved"){
               $span.text("Remove");
            } else {
               $span.text("Add To Time Saved");
           }
		   
			var currentValue = Number($(".saver-counter .clock-value").text());
			if ($(this).hasClass('ski-school')){
				if($(this).hasClass('active')){
					saverValue = currentValue + skiSchool;
				}else{
					saverValue = currentValue - skiSchool;
				}
				$('.skiSchool').toggleClass('active');
			}
			
			if ($(this).hasClass('gear-rental')){
				if($(this).hasClass('active')){
					saverValue = currentValue + gearRental;
				}else{
					saverValue = currentValue - gearRental;
				}
				$('.rentals').toggleClass('active');
			}
			
			if ($(this).hasClass('lift-ticket')){
				if($(this).hasClass('active')){
					saverValue = currentValue + liftTicket;
				}else{
					saverValue = currentValue - liftTicket;
				}
				$('.liftTickets').toggleClass('active');
			}
			
			if ($(this).hasClass('dinner-reservation')){
				if($(this).hasClass('active')){
					saverValue = currentValue + dinnerReservation;
				}else{
					saverValue = currentValue - dinnerReservation;
				}
				$('.dinner').toggleClass('active');
			}
			timeSaved();
			return false;
	});
	
	//update the saver counter
	function timeSaved() {
		//$('.clock-value').html(saverValue);	
		var currentValue = Number($(".saver-counter .clock-value").text());		
		$('.clock-value').each(function () {
			$(this).prop('Counter', currentValue).animate({
				Counter: saverValue
			}, {
				duration: 1000,
				easing: 'swing',
				step: function (now) {
					$(this).text(now.toFixed(2));
				}
			});
		});
		
		if( saverValue > 0){
			$('.book-btn').addClass('active');
		}else{
			$('.book-btn').removeClass('active');
		}
		
		if( saverValue > -0.1 && saverValue < 0.99){
			$('.saver-results h4').html('Why don&#39;t you use that time to explore our Apr&#233;s');
			$('.saver-results p').html('There are countless reasons Vail consistently ranks among the best resorts for <a href="http://www.vail.com/activities/nightlife.aspx#/Apres">apr&#232;s</a> in the world. Why not spend the time you&#39;ve saved getting to know a few of them.');
		}
		
		else if ( saverValue > 1 && saverValue < 2.01){
			$('.saver-results h4').html('Why don&#39;t you use that time to go Tubing');
			$('.saver-results p').html('With an extra hour or two, why not head to <a href="http://www.vail.com/activitiesdetail/vail+-+tubing+at+adventure+ridge.axd">Adventure Ridge</a> for some tubing. Our multi-lane tubing hilldelivers the downhill excitement you remember from your childhood, while our new, covered lift whisks you back up the hill in all the comfort you&#39;ve come to want as an adult.');
		}
		
		else if( saverValue > 2.02 && saverValue < 6){
			$('.saver-results h4').html('Why don&#39;t you use that time to visit the Spa');
			$('.saver-results p').html('While very little compares to the fun of skiing and riding, it can take a toll on your body. Why not use the extra hours you saved planning ahead and pamper yourself at one of our <a href="http://www.vail.com/activities/spas.aspx">world-class spas.</a>');
		}
		
	}
	timeSaved();
	
	// show the results section
	$('.book-btn').click(function(){
		$('.saver-results').addClass('active');
		$('html, body').animate({
			scrollTop: $(".saver-results").offset().top - 80
		}, 750);
		
	});
	
});