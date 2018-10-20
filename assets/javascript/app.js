// Setting up a questions variable that's an arrary of objects containing question, options and answers
var questions = [
		{
    	question: "The sky is blue due to the oceans algae.",
    	options: ["True", "False"],
    	answer: "False"
    },
    {
    	question: "You should go to the hospital if you're having trouble breathing.",
    	options: ["True", "False"],
    	answer: "True"
    },
    {
    	question: "When you smell bad you should shower.",
		options: ["True", "False"],
    	answer: "True"
    },
    {
    	question: "Without a hat, your head will sometimes get cold.",
		options: ["True", "False"],
    	answer: "True"
    },
    {
    	question: "When you're hungry you should brush your teeth.",
    	options: ["True", "False"],
    	answer: "False"
    },
    {
    	question: "We didn't start the fire.",
    	options: ["True", "False"],
    	answer: "True"
    },
    {
    	question: "Boston Mass. is the best city around.",
    	options: ["True", "False"],
    	answer: "True"
    },
    {
    	question: "Blue is a better than Red.",
		options: ["True", "False"],
    	answer: "True"
    },
    {
    	question: "When you grow up you can be whatever you want.",
		options: ["True", "False"],
		answer: "False"
    },
    {
    	question: "When you smell smoke, there is usually fire.",
		options: ["True", "False"],
    	answer: "True"
    },
];

// creating empty var for the timer
var timer;

// On click the the #start-button element, run the game start function on the object
$("#start-button").on("click", function() {
	game.start();
});

// On click of the submit button, run the game results function on the object
$("#question-page").on("click", "#submit", function() {
	game.results();
});

// On click of the reset button, reload the page
$("#results").on("click", "#reset", function() {
	game.reset();
});

// These lines hide the question wrapper and results on page load
// we don't want these displayed until after user starts or finishes quiz
$(".question-wrapper").hide();
$("#results").hide();


var game = {
	// setting variables to zero to be added to as user goes through quiz
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	counter: 20,
	
	countdown: function() {
		// decreases the counter
		game.counter--;
		// displays the new updated time on page
		$("#time").text(game.counter);
		// if the counter reaches 0 show the user their results
		if (game.counter === 0) {
			game.results();
		};
	},
	start: function() {
		// hides simple instructions
		$("#instructions").hide();

		// hides the start button and wrapper
		$("#start-button").hide();

		// show the dynamically created questions
		$(".question-wrapper").show();

		// creating timer triggering a countdown every second
		timer = setInterval(game.countdown, 1000);

		// for each question append the concatanated html object to the page
		for (var i = 0; i < questions.length; i++) {
			$("#question-page").append("<h2 class='question'>" + questions[i].question + "</h2>");
			
			// for each option to the questions append an input for the user to choose
			// I passed through i as the name of the input radio, so use could only select one
			// option out of the two presented
			for (var j = 0; j < questions[i].options.length; j++){
			$("#question-page").append("<span class='answer'>" + "<label>" + "<input type='radio' name='" + i + "' id='question" + i + "' value='" + questions[i].options[j] + "'>" + questions[i].options[j] + "</label>" + "</span>");
			}
		}

		// now adding a sumbit button at the end of the form
		$("#question-page").append("<br><button type='button' class='btn btn-primary' id='submit'>Submit</button>");
	},

	// function computing the results
	results: function() {
		for (var x = 0; x < questions.length; x++) {
			if (!$("input[id='question" + x + "']").is(":checked")) {
				game.unanswered++
			}
			else {
				if ($("input[id='question" + x + "']:checked").val() === questions[x].answer) {
					game.correct++
				} else {
					game.incorrect++
				}
			}
		}
		game.completed();
	},

	// reset function that reloads the page
	reset: function() {
		location.reload();
	},

	// Completed function
	completed: function() {
		// Stops the timer
		clearInterval(timer);

		// hides the timer
		$("#timer").hide();

		// hides the questions displayed to user
		$(".question-wrapper").hide();

		// show the results div
		$("#results").show();

		// Complete the calculations of correct, incorrect and unanswered questions
		$("#correct-tally").text(game.correct);
		$("#wrong-tally").text(game.incorrect);
		$("#unanswered-tally").text(game.unanswered);
	},
};