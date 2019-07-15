// super taco -- how does it work?
// what happens after you win?
// what menu pages?

/////////////////////////////////////////////////////////////////
///// SET VARIABLES ///// SET VARIABLES ///// SET VARIABLES /////
/////////////////////////////////////////////////////////////////

var superChance = 10; 	// 1 in 10 chance of getting a Super Taco
var randomIndex;	
var answerArray = [];
var count = 0;
var correctAnswer = [];
var difficultyCount = 0;
var subArray = [];

/////////////////////////////////////////////////////////////////
///// DOG IMAGES ///// DOG IMAGES ///// DOG IMAGES //////////////
/////////////////////////////////////////////////////////////////

// EASY
var easy = [

	["chihuahua.jpg","Chihuahua"],
	["dachshund.jpg","Dachshund"],
	["goldenRetriever.jpg","Golden Retriever"],
	["frenchBulldog.jpg","French Bulldog"],
	["beagle.jpg","Beagle"],
	["bostonTerrier.jpg","Boston Terrier"],
	["boxer.jpg","Boxer"],
	["australianShepherd.jpg","Australian Shepherd"],
	["americanStaffordshireTerrier.jpg","American Staffordshire Terrier"],
	["dalmatian.jpg","Dalmatian"],
	["doberman.jpg","Doberman"],
	["germanShepherd.jpg","German Shepherd"],
	["italianGreyhound.jpg","Italian Greyhound"],
	["labradorRetriever.jpg","Labrador Retriever"],
	["pomeranian.jpg","Pomeranian"],
	["poodle.jpg","Poodle"],
	["pug.jpg","Pug"],
	["shihTzu.jpg","Shih Tzu"],
	["siberianHusky.jpg","Siberian Husky"],
	["yorkie.jpg","Yorkshire Terrier"]
];

// MEDIUM
var medium = [

	["chowChow.jpg","Chow Chow"],
	["maltese.jpg","Maltese"],
	["bullTerrier.jpg","Bull Terrier"],
	["papillon.jpg","Papillon"],
	["chineseCrested.jpg","Chinese Crested"],
	["basenji.jpg","Basenji"],
	["bichonFrise.jpg","Bichon Frise"],
	["afghanHound.jpg","Afghan Hound"],
	["brittany.jpg","Brittany"],
	["bolognese.jpg","Bolognese"],
	["japaneseChin.jpg","Japanese Chin"],
	["gordonSetter.jpg","Gordon Setter"],
	["bullmastiff.jpg","Bullmastiff"],
	["newfoundland.jpg","Newfoundland"],
	["miniatureSchnauzer.jpg","Miniature Schnauzer"],
	["pekingese.jpg","Pekingese"],
	["norwichTerrier.jpg","Norwich Terrier"],
	["brusselsGriffon.jpg","Brussels Griffon"],
	["ratTerrier.jpg","Rat Terrier"],
	["havanese.jpg","Havanese"]

];

// HARD
var hard = [

	["saluki.jpg","Saluki"],
	["affenpinscher.jpg","Affenpinscher"],
	["catahoulaLeopardDog.jpg","Catahoula Leopard Dog"],
	["finnishLapphund.jpg","Finnish Lapphund"],
	["manchesterTerrier.jpg","Manchester Terrier"],
	["bedlingtonTerrier.jpg","Bedlington Terrier"],
	["cotonDeTulear.jpg","Coton de Tulear"],
	["finnishSpitz.jpg","Finnish Spitz"],
	["germanSpitz.jpg","German Spitz"],
	["keeshond.jpg","Keeshond"],
	["pharoahHound.jpg","Pharoah Hound"],
	["schipperke.jpg","Schipperke"],
	["samoyed.jpg","Samoyed"],
	["tibetanSpaniel.jpg","Tibetan Spaniel"],
	["kerryBlueTerrier.jpg","Kerry Blue Terrier"],
	["lhasaApso.jpg","Lhasa Apso"],
	["irishSetter.jpg","Irish Setter"],
	["weimaraner.jpg","Weimaraner"],
	["caneCorso.jpg","Cane Corso"],
	["biewerTerrier.jpg","Biewer Terrier"]


];

// ULTRA
var ultra = [

	["kuvasz.jpg","Kuvasz"],
	["mudi.jpg","Mudi"],
	["russianToy.jpg","Russian Toy"],
	["shikoku.jpg","Shikoku"],
	["azawakh.jpg","Azawakh"],
	["barbet.jpg","Barbet"],
	["ceskyTerrier.jpg","Cesky Terrier"],
	["chinook.jpg","Chinook"],
	["dandieDinmontTerrier.jpg","Dandie Dinmont Terrier"],
	["drever.jpg","Drever"],
	["eurasier.jpg","Eurasier"],
	["hokkaido.jpg","Hokkaido"],
	["ibizanHound.jpg","Ibizan Hound"],
	["jindo.jpg","Jindo"],
	["lowchen.jpg","Lowchen"],
	["plott.jpg","Plott"],
	["skyeTerrier.jpg","Skye Terrier"],
	["sloughi.jpg","Sloughi"],
	["vizsla.jpg","Vizsla"],
	["xoloitzcuintli.jpg","Xoloitzcuintli"]

];

var dogsLevel1Backup = easy.slice(0);		// Creates backup of array
var dogsLevel2Backup = medium.slice(0);		// Creates backup of array
var dogsLevel3Backup = hard.slice(0);		// Creates backup of array
var dogsLevel4Backup = ultra.slice(0);		// Creates backup of array

$(document).ready(function() {

	/* ANIMATE UI */
	$("#div_frame").css("opacity","1");
	setTimeout(animateButtons,100);
	function animateButtons(){
		$("#div_buttons").css("margin-top","0vh");
	}

	/* CONTROLS HAMBURGER MENU */
    $(".div_menuIcon").on("click touchstart", function() {
        $("#div_menu").slideToggle(150);
        return false;
    });

    /* CONTROLS HAMBURGER MENU */
    $(".div_menuIcon2").on("click touchstart", function() {
        $("#div_menu").slideToggle(150);
        return false;
    });

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
		var dogName = "assets/dogs/" + correctAnswer[0];
		setTimeout(booger,500);
		$("#div_dog").css("opacity","0");
		$("#div_dog").css("background-size","200%");
		function booger() {
			$("#div_dog").css("opacity","1");
			$("#div_dog").css("background-size","100%");
			$("#div_dog").css("background-image","url(" + dogName + ")");
		}
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
			superTaco();
			$("#div_side1").css("opacity","1");
			$("#div_side1").css("background-size","100% 100%");
			generateAnswerArray(easy);
		}
		if (difficultyCount == 2) {
			superTaco();
			$("#div_side2").css("opacity","1");
			$("#div_side2").css("background-size","100% 100%");
			generateAnswerArray(easy);
		}
		if (difficultyCount == 3) {
			superTaco();
			$("#div_side3").css("opacity","1");
			$("#div_side3").css("background-size","100% 100%");
			generateAnswerArray(easy);
		}
		if (difficultyCount == 4) {
			superTaco();
			$("#div_side4").css("opacity","1");
			$("#div_side4").css("background-size","100% 100%");
			generateAnswerArray(medium);
		}
		if (difficultyCount == 5) {
			superTaco();
			$("#div_side5").css("opacity","1");
			$("#div_side5").css("background-size","100% 100%");
			generateAnswerArray(medium);
		}
		if (difficultyCount == 6) {
			superTaco();
			$("#div_side6").css("opacity","1");
			$("#div_side6").css("background-size","100% 100%");
			generateAnswerArray(medium);
		}
		if (difficultyCount == 7) {
			superTaco();
			$("#div_side7").css("opacity","1");
			$("#div_side7").css("background-size","100% 100%");
			generateAnswerArray(medium);
		}
		if (difficultyCount == 8) {
			superTaco();
			$("#div_side8").css("opacity","1");
			$("#div_side8").css("background-size","100% 100%");
			generateAnswerArray(hard);
		}
		if (difficultyCount == 9) {
			superTaco();
			$("#div_side9").css("opacity","1");
			$("#div_side9").css("background-size","100% 100%");
			generateAnswerArray(hard);
		}
		if (difficultyCount == 10) {
			superTaco();
			$("#div_side10").css("opacity","1");
			$("#div_side10").css("background-size","100% 100%");
			generateAnswerArray(hard);
		}
		if (difficultyCount == 11) {
			superTaco();
			$("#div_side11").css("opacity","1");
			$("#div_side11").css("background-size","100% 100%");
			generateAnswerArray(hard);
		}
		if (difficultyCount == 12) {
			superTaco();
			$("#div_side12").css("opacity","1");
			$("#div_side12").css("background-size","100% 100%");
			generateAnswerArray(ultra);
		}
		if (difficultyCount == 13) {
			superTaco();
			$("#div_side13").css("opacity","1");
			$("#div_side13").css("background-size","100% 100%");
			generateAnswerArray(ultra);
		}
		if (difficultyCount == 14) {
			$("#div_side14").css("opacity","1");
			$("#div_side14").css("background-size","100% 100%");
			generateAnswerArray(ultra);
		}
		if (difficultyCount == 15) {
			$("#div_side15").css("opacity","1");
			$("#div_side15").css("background-size","100% 100%");
			generateAnswerArray(ultra);
		}
		if (difficultyCount == 16) {
			$("#div_side16").css("opacity","1");
			$("#div_side16").css("background-size","100% 100%");
			setTimeout(timerRight, 1000);
			function timerRight() {
				right();
			} 
		}

	}

	function superTaco() {
	//	var randomNumber = Math.floor(Math.random() * superChance);
	//	if (randomNumber == 0) {
	//		evaluate();
	//	}
	//	else {
	//		return false;
	//	}
	}

	function wrong() {
		setTimeout(wrongSlider,100);
		function wrongSlider(){
			$("#div_wrongModal").slideDown(150);
			$(".p_modalTextSmall").html("The correct answer is " + correctAnswer[1] + ".");
		}
	}

	function right() {
		setTimeout(rightSlider,100);
		function rightSlider(){
			$("#div_rightModal").slideDown(150);
		}
	}

	$("#button_restart").on("click touchleave", function() {
		location.reload();
	});

	$("#button_playAgain").on("click touchleave", function() {
		location.reload();
	});

	generateAnswerArray(easy);

});
