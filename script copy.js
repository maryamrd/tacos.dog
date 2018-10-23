/////////////////////////////////////////////////////////////////
///// SET VARIABLES ///// SET VARIABLES ///// SET VARIABLES /////
/////////////////////////////////////////////////////////////////

var randomIndex;	
var answerArray = [];
count = 0;
correctAnswer = [];
var difficultyCount = 0;
var subArray = [];

/////////////////////////////////////////////////////////////////
///// DOG IMAGES ///// DOG IMAGES ///// DOG IMAGES //////////////
/////////////////////////////////////////////////////////////////

// EASY
var easy = [

	["chihuahua.jpg","chihuahua"],
	["dachshund.jpg","dachshund"],
	["goldenRetriever.jpg","golden retriever"],
	["frenchBulldog.jpg","french bulldog"],
	["easydog1.jpg","easydog1"],
	["easydog2.jpg","easydog2"],
	["easydog3.jpg","easydog3"],
	["easydog4.jpg","easydog4"],
	["easydog5.jpg","easydog5"],
	["easydog6.jpg","easydog6"],
	["easydog7.jpg","easydog7"],
	["easydog8.jpg","easydog8"],
	["easydog9.jpg","easydog9"],
	["easydog10.jpg","easydog10"],
	["easydog11.jpg","easydog11"],
	["easydog12.jpg","easydog12"],
	["easydog13.jpg","easydog13"],
	["easydog14.jpg","easydog14"],
	["easydog15.jpg","easydog15"],
	["easydog16.jpg","easydog16"]
];

// MEDIUM
var medium = [

	["chowChow.jpg","chow chow"],
	["maltese.jpg","maltese"],
	["bullTerrier.jpg","bull terrier"],
	["papillon.jpg","papillon"],
	["meddog1.jpg","meddog1"],
	["meddog2.jpg","meddog2"],
	["meddog3.jpg","meddog3"],
	["meddog4.jpg","meddog4"],
	["meddog5.jpg","meddog5"],
	["meddog6.jpg","meddog6"],
	["meddog7.jpg","meddog7"],
	["meddog8.jpg","meddog8"],
	["meddog9.jpg","meddog9"],
	["meddog10.jpg","meddog10"],
	["meddog11.jpg","meddog11"],
	["meddog12.jpg","meddog12"],
	["meddog13.jpg","meddog13"],
	["meddog14.jpg","meddog14"],
	["meddog15.jpg","meddog15"],
	["meddog16.jpg","meddog16"]

];

// HARD
var hard = [

	["saluki.jpg","saluki"],
	["affenpinscher.jpg","affenpinscher"],
	["catahoulaLeopardDog.jpg","catahoula leopard dog"],
	["finnishLapphund.jpg","finnish lapphund"],
	["harddog1.jpg","harddog1"],
	["harddog2.jpg","harddog2"],
	["harddog3.jpg","harddog3"],
	["harddog4.jpg","harddog4"],
	["harddog5.jpg","harddog5"],
	["harddog6.jpg","harddog6"],
	["harddog7.jpg","harddog7"],
	["harddog8.jpg","harddog8"],
	["harddog9.jpg","harddog9"],
	["harddog10.jpg","harddog10"],
	["harddog11.jpg","harddog11"],
	["harddog12.jpg","harddog12"],
	["harddog13.jpg","harddog13"],
	["harddog14.jpg","harddog14"],
	["harddog15.jpg","harddog15"],
	["harddog16.jpg","harddog16"]

];

// ULTRA
var ultra = [

	["kuvasz.jpg","kuvasz"],
	["mudi.jpg","mudi"],
	["russianToy.jpg","russian toy"],
	["shikoku.jpg","shikoku"],
	["ultradog1.jpg","ultradog1"],
	["ultradog2.jpg","ultradog2"],
	["ultradog3.jpg","ultradog3"],
	["ultradog4.jpg","ultradog4"],
	["ultradog5.jpg","ultradog5"],
	["ultradog6.jpg","ultradog6"],
	["ultradog7.jpg","ultradog7"],
	["ultradog8.jpg","ultradog8"],
	["ultradog9.jpg","ultradog9"],
	["ultradog10.jpg","ultradog10"],
	["ultradog11.jpg","ultradog11"],
	["ultradog12.jpg","ultradog12"],
	["ultradog13.jpg","ultradog13"],
	["ultradog14.jpg","ultradog14"],
	["ultradog15.jpg","ultradog15"],
	["ultradog16.jpg","ultradog16"]

];

var dogsLevel1Backup = easy.slice(0);		// Creates backup of array
var dogsLevel2Backup = medium.slice(0);		// Creates backup of array
var dogsLevel3Backup = hard.slice(0);		// Creates backup of array
var dogsLevel4Backup = ultra.slice(0);		// Creates backup of array

$(document).ready(function() {

	////////////////////////////////////////////////////////
	///// GENERATE QUESTION ///// GENERATE QUESTION ////////
	////////////////////////////////////////////////////////

	// Generates answer array
	function generateAnswerArray(difficultyLevel) {

		if (count < 4) {

			// Gets random index value of sub-array
			randomIndex = Math.floor(Math.random()*difficultyLevel.length);

			// Gets contents of sub-array
			subArray = difficultyLevel[randomIndex];

			// pushes sub-array to temporary answer array
			answerArray.push(subArray);

			// Removes sub-array from main array
			difficultyLevel.splice(randomIndex, 1);	

			count = count + 1;
			generateAnswerArray(difficultyLevel);
		}

		else {
			count = 0;
			selectAnswer();
		}
	}

	// Select correct answer sub-array
	function selectAnswer() {
		correctAnswer = answerArray[0];
		shuffle(answerArray);
	}

	// Shuffles array of answers
	function shuffle(array) {
		let counter = array.length;
		// While there are elements in the array
		while (counter > 0) {
		    // Pick a random index
		    let index = Math.floor(Math.random() * counter);
		    // Decrease counter by 1
		    counter--;
		    // And swap the last element with it
		    let temp = array[counter];
		    array[counter] = array[index];
		    array[index] = temp;
		}
		// Assigns shuffled array back to regular array variable
		answerArray = array;
		populateScreen();
	}

	// Populates screen with image and buttons
	function populateScreen() {
		$("#div_dog").html(correctAnswer[0]);
		$("#button_1").html(answerArray[0][1]);
		$("#button_2").html(answerArray[1][1]);
		$("#button_3").html(answerArray[2][1]);
		$("#button_4").html(answerArray[3][1]);
	}

	// When user presses a button
	$("#button_1").on("click touchleave", function() {
		if (answerArray[0][1] == correctAnswer[1]) {
			evaluate();
		}
		else {
			wrong();
		}
	});
	// When user presses a button
	$("#button_2").on("click touchleave", function() {
		if (answerArray[1][1] == correctAnswer[1]) {
			evaluate();
		}
		else {
			wrong();
		}
	});
	// When user presses a button
	$("#button_3").on("click touchleave", function() {
		if (answerArray[2][1] == correctAnswer[1]) {
			evaluate();
		}
		else {
			wrong();
		}
	});
	// When user presses a button
	$("#button_4").on("click touchleave", function() {
		if (answerArray[3][1] == correctAnswer[1]) {
			evaluate();
		}
		else {
			wrong();
		}
	});

	function evaluate() {

		answerArray = [];
		difficultyCount = difficultyCount + 1;

		if (difficultyCount == 1) {
			$("#div_side1").css("opacity","1");
			generateAnswerArray(easy);
		}
		if (difficultyCount == 2) {
			$("#div_side2").css("opacity","1");
			generateAnswerArray(easy);
		}
		if (difficultyCount == 3) {
			$("#div_side3").css("opacity","1");
			generateAnswerArray(easy);
		}
		if (difficultyCount == 4) {
			$("#div_side4").css("opacity","1");
			generateAnswerArray(medium);
		}
		if (difficultyCount == 5) {
			$("#div_side5").css("opacity","1");
			generateAnswerArray(medium);
		}
		if (difficultyCount == 6) {
			$("#div_side6").css("opacity","1");
			generateAnswerArray(medium);
		}
		if (difficultyCount == 7) {
			$("#div_side7").css("opacity","1");
			generateAnswerArray(medium);
		}
		if (difficultyCount == 8) {
			$("#div_side8").css("opacity","1");
			generateAnswerArray(hard);
		}
		if (difficultyCount == 9) {
			$("#div_side9").css("opacity","1");
			generateAnswerArray(hard);
		}
		if (difficultyCount == 10) {
			$("#div_side10").css("opacity","1");
			generateAnswerArray(hard);
		}
		if (difficultyCount == 11) {
			$("#div_side11").css("opacity","1");
			generateAnswerArray(hard);
		}
		if (difficultyCount == 12) {
			$("#div_side12").css("opacity","1");
			generateAnswerArray(ultra);
		}
		if (difficultyCount == 13) {
			$("#div_side13").css("opacity","1");
			generateAnswerArray(ultra);
		}
		if (difficultyCount == 14) {
			$("#div_side14").css("opacity","1");
			generateAnswerArray(ultra);
		}
		if (difficultyCount == 15) {
			$("#div_side15").css("opacity","1");
			generateAnswerArray(ultra);
		}
		if (difficultyCount == 16) {
			$("#div_side16").css("opacity","1");
		}

	}

	function wrong() {
		$("#div_wrongModal").slideDown(200);
		$(".p_modalTextSmall").html("The correct answer is " + correctAnswer[1] + ".");
	}

	// When user presses a button
	$("#button_restart").on("click touchleave", function() {
		location.reload();
	});

	generateAnswerArray(easy);

});