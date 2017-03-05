$(document).ready(function(){

	//=====================================================
	// Initial Page Load
	//=====================================================

	//greeting and message
	$('#landing-title').delay(200).fadeIn(600)
	$('#landing-subtitle').delay(600).fadeIn(1000)

	const delaySidebar = 1700;

	//bring in sidebar
	$('#panel-1').delay(delaySidebar).animate({height:'show'}, 500);
	$('#panel-2').delay(delaySidebar+200).animate({height:'show'}, 500);
	$('#panel-3').delay(delaySidebar+400).animate({height:'show'}, 500);
	$('#panel-4').delay(delaySidebar+600).animate({height:'show'}, 500);
	$('#panel-5').delay(delaySidebar+800).animate({height:'show'}, 500);
	$('#icons8').delay(delaySidebar+1000).animate({height:'show'}, 500);

	//bring in "Scroll to see" and arrow animation
	$('#scroll-below').delay(delaySidebar+1500).fadeIn();
	$('.arrow-cont').delay(delaySidebar+2000).fadeIn();

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
			$(this).addClass('down');
			$expanded = 1;
		} else{
			$(this).removeClass('down');
			$expanded = 0;
		}
	});








	//=====================================================
	// Functions
	//=====================================================











});
