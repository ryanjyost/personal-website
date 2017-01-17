$(document).ready(function(){

	//=====================================================
	// Initial Page Load
	//=====================================================

	//disable scrolling for now
	$('body').bind('touchmove', (e)=> {e.preventDefault()});
	$('body').addClass('disable-scroll');


	$('#me-intro-1').delay(1000).slideUp(400);
	$('#me-intro-2').delay(1000).slideDown(400);

	$('.menu-item').delay(1050).fadeTo(700, .3);
	$('#icons8').delay(1050).fadeTo(700, 1);
	$('.play-btn-cont').delay(1250).fadeTo(700, .8);

	let game = false;

	//=====================================================
	// Play Tic-Tac-Toe
	//=====================================================

	$('#thumbs-up-icon').click(function(){

	})













});
