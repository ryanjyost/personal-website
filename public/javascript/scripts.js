$(document).ready(function(){

	//=====================================================
	// Initial Page Load
	//=====================================================

	//greeting and message
	$('#landing-title').delay(200).fadeIn(800)
	$('#landing-subtitle').delay(1000).fadeIn(800);

	// contact info
	$('#contact-info').delay(700).fadeIn(600).delay(600);

	const delaySidebar = 2000;

	//bring in sidebar
	$('#panel-1').delay(delaySidebar).slideDown(500);
	$('#panel-2').delay(delaySidebar+200).slideDown(500);
	$('#panel-3').delay(delaySidebar+300).slideDown(500);
	$('#panel-4').delay(delaySidebar+400).slideDown(500);
	$('#panel-5').delay(delaySidebar+500).slideDown(500);
	$('#icons8').delay(delaySidebar+600).slideDown(500);

	//bring in "Scroll to see" and arrow animation
	$('#landing-contact-info').delay(delaySidebar+1000).fadeIn();
	$('.arrow-cont').delay(delaySidebar+900).fadeIn();

			//==============================
			// Scroll Down Arrow Animations

			function animateScrollArrow() {

				for(var i=1; i>-101;i--){
					if(i === 1){
						var n=1;
					} else {
						var n=0;
					}

					$('#arrow').delay(0).animate({'opacity':'.6'}, 1200, 'swing').delay(0).animate({'opacity':'0'}, 1200, 'swing');
				}
			}

			animateScrollArrow();


	//=====================================================
	// Rotate Dropdown Button
	//=====================================================

	var $expanded=0;

	$('#dropdown-btn').click(function(){
		if($expanded==0){
			$(this).removeClass('up');
			$(this).addClass('down');
			$expanded = 1;
		} else{
			$(this).removeClass('down');
			$(this).addClass('up');
			$expanded = 0;
		}
	});

	//=====================================================
	// Contact Icons
	//=====================================================

		var iconText = {
			'twitter-icon': '@ryanjyost',
			'email-icon': 'ryanjyost@gmail.com',
			'github-icon': 'github.com/ryanjyost',
			'medium-icon': 'Blog',
			'linkedin-icon': 'LinkedIn',
			'codepen-icon': 'codepen.io/ryanjyost'

		};

	$('.contact-single').hover(function(){
		var currentId = $(this).find(".contact-icon")[0].id;
		$('#contact-info').text(iconText[currentId]);
	});

	$('.contact-single').mouseleave(function(){
		$('#contact-info').text("Find & Contact");
	});


});
