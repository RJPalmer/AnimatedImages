$(document).ready(function () {
	
	//canvas variables
	var c = document.getElementById("theCanvas");
	var cxt = c.getContext("2d");
	
	
	//timer variables
	var timer_is_on;
	var isStopped;
	
	//image sources and variabels
	var image1;
	var image2;
	var first_image;
	
	//image to draw
	var displayImage;
	
	doTimer();
	
	function init(){
		timer_is_on = 0;
		isStopped = 0;
		first_image = 1;
		
		image1 = "./smiley1.bmp";
		image2 = "./smiley2.bmp";
		
		displayImage = new Image();
		
	}
	
	function runProgram(){
		swapImage();
		displayImage.onload = function(){
		drawCanvas();
	};
	}
	
	function swapImage(){
		if(first_image){
			displayImage.src = image1;
			first_image = 0;
		}
		else{
			displayImage.src = image2;
			first_image = 1;
		}
	}
	
	//set focus to the canvas
	document.getElementById("theCanvas").focus();
	
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
		cxt.drawImage(displayImage, 10, 10);
		
	}
	
	//swaps the square color every second
	function animate(){
		runProgram();
		 t=setTimeout(function(){animate();}, 900);
		
	}

	//call the function to start the timer
	function doTimer()
	{
	init();
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



