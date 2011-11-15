$(document).ready(function () {
	var c = document.getElementById("theCanvas");
	var cxt = c.getContext("2d");
	var show_work = 0;
	var first_image = 1;
	
	var timer_is_on = 0;
	var isStopped = 1;
	var image1 = new Image();
	image1.src = "./smiley1.bmp";
	var image2 = new Image();
	image2.src = "./smiley2.bmp";
	image1.onload = function(){
		
		drawCanvas();
	};
	
	$("button").click(function() {
		if(first_image){
			image1.src = image2.src;
			first_image = 0;
		}
		else{
			image1.src = "./smiley1.bmp";
			first_image = 1;
		}
	});
	
	//set focus to the canvas
	 //document.getElementById("theCanvas").focus();
	
	/*
	//Get key input
	$("#theCanvas").keydown(function (event){
				//get the current position
				var newX = square1.getXPosition();
				var  newY = square1.getYPosition();
				
				//if the 'a' key has been pressed, move right 5 
				if (event.which == 39) {
					square1.setPosition(newX + 5, newY);
				}
				else if(event.which == 37){
					square1.setPosition(newX - 5, newY );
				}
				else if(event.which == 40){
					square1.setPosition(newX , newY+ 5);
				}
				else if(event.which == 38){
					square1.setPosition(newX, newY- 5 );
				}
				drawCanvas();
	});
		
	*/


	function drawCanvas(){
		cxt.drawImage(image1, 10, 10);
		
	}
	
	//swaps the square color every second
	function animate(){
		 t=setTimeout(function(){animate();}, 500);
		
	}

	//call the function to start the timer
	function doTimer()
	{
	if (!timer_is_on)
	  {
	  	timer_is_on=1;
	  	isStopped = 0;		  
	  }
	  animate();
	}
	/*
	//if the 'show work' button has been clicked
	$("#moveRight").click(function (){
		//get the current position
				var newX = square1.getXPosition();
				var  newY = square1.getYPosition();
				
				
				square1.setPosition(newX + 5, newY);
				drawCanvas();
	});
	*/
	/*
	//if the animate button has been clicked
	$("#animateWork").click(function (){
		
									//variable to check if it is currently animating
		//make sure the work is showing
		if (show_work) {
			//make sure it's not currently animating
			if (isStopped) {
				
				//change button text to 'Stop'
				$("#animateWork").html("Stop");
								
				//start the timer
				doTimer();
			}
			else{
				//change button text to 'Animate!'
				$("#animateWork").html("Animate!");
				
				//stop the timer
				clearTimeout(t);
				
				//indicate timer is stopped
				isStopped = 1;
				timer_is_on = 0;
			}
		}
			
			
			//change the button to stop animating
			
		
	});
	*/
});



