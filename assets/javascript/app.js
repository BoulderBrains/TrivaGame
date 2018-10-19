// create countdown timer that counts down from 30seconds
// create if statements around counter running out
// create an object that holds questions and answers
// Create win/lose variables
// create correct/incorrect variables

$(document).ready(function() {
	//When the page is ready, trigger the startScreen
	function startWindow() {
		startWindow = "<h3>Ready for a Trivia challenge?</h3><a class='btn btn-primary' id='startButton' href='#'>Start</a>";
		$(".body-container").html(startWindow);
	}

	startWindow();

	// On click of the start-button, run the following code
	$("body").on("click", "#startButton", function(event){

	});
})