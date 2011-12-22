$(document).ready(function () {
	
	//canvas variables
	var c = document.getElementById("theCanvas");
	var cxt = c.getContext("2d");
	
	
	//timer variables
	var timer_is_on;
	var isStopped;
	
	//image sources and variabels
	var images = new Array("./walking3.png", "./walking4.PNG", image3 = "./walking5.PNG",
		"./walking6.PNG", "./walking7.PNG");
	var index;
	
	//image to draw
	var displayImage;
	
	doTimer();
	
	function init(){
		timer_is_on = 0;
		isStopped = 0;
		index = 0;
		
		
		displayImage = new Image();
		
	}
	
	function runProgram(){
		swapImage();
		displayImage.onload = function(){
		drawCanvas();
	};
	}
	
	function swapImage(){
		displayImage.src = images[index];
		index++;
		if(index > 4)
			index = 0;
	}
	
	//set focus to the canvas
	document.getElementById("theCanvas").focus();
	



	function drawCanvas(){
		cxt.drawImage(displayImage, 10, 10);
		
	}
	
	//swaps the square color every second
	function animate(){
		runProgram();
		 t=setTimeout(function(){animate();}, 90);
		
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



