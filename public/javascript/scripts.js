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
					} else{
						var n=0;
					}

					$('#arrow-1').delay(0).animate({'opacity':'1'}, 1000, 'swing').delay(0).animate({'opacity':'0'}, 1000, 'swing');


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
	// Landing Icons
	//=====================================================

		var landingIconText = {
			'resume-icon': 'Click to download my resume.',
			'twitter-icon': '@ryanjyost',
			'phone-icon': '412-841-1697',
			'email-icon': 'ryanjyost@gmail.com',
			'github-icon': 'github.com/ryanjyost'
		}

	$('.contact-icon-cont').click(function(){
		var currentId = $(this).find(".landing-icon")[0].id;
		$('#landing-contact-info h4').text(landingIconText[currentId]);
	});

	$('.contact-icon-cont').hover(function(){
		var currentId = $(this).find(".landing-icon")[0].id;
		$('#landing-contact-info h4').text(landingIconText[currentId]);
	});

	$('.contact-icon-cont').mouseleave(function(){
		$('#landing-contact-info h4').text("");
	});


//=====================================================
// Read more project expand
//=====================================================

$('.project-desc-expand').click(function(){
	$(this).closest(".project").find(".project-desc-more").slideToggle('slow');

	var text = $('.project-desc-expand').text();

	var buttonText = (text == 'Click to read more...') ? 'Click to read less...' : 'Click to read more...' ;

	$('.project-desc-expand').text(buttonText);

});


//=====================================================
// Functions
//=====================================================











});
