
function buttonScreen () {
	var btn = $("<button id='startButton'>");
	btn.text("START GAME");
	$("#startContainer").append(btn);
	$("#startButton").click(startGame);
}

buttonScreen();
//Takes user to game page
function startGame() {
	var questionArray = [
	"Which of these players is on the Memphis Grizzlies?",
	"Which of these players is on the Phoenix Suns?",
	"Which of these players is on the Los Angeles Lakers?",
	"Which of these players is on the Cleveland Cavaliers?",
	"Which of these players is on the Boston Celtics?",
	]

	var answers = {
		Grizzlies : ["Otto Porter", "Gordon Hayward", "Lebron James", "Mario Chalmers"],
		Suns : ["Marqueese Chris", "Lavar Ball", "Willy Hernangomez", "Al Horford"],
		Lakers : ["DeShaun Watson", "Ivica Zubac", "Lavar Ball", "Marvin Williams"],
		Cavaliers : ["Kay Felder", "Ante Zizic", "Elfrid Payron", "Draymond Green"],
		Celtics : ["Goran Dragic", "Dragan Bender", "Thon Maker", "Terry Rozier"]
	}

	//Submit Button

	var submitBtn = $("<button id='submitButton'>");
	submitBtn.text("SUBMIT");
	$("#submitContainer").append(submitBtn);
	// $("#submitButton").click(answerReveal);//TODO: Make function for answer Reveal

	//Timer starts at 30 and will count down until 0
	var timer = 30;

	//TIMER
	$("#gameTimer").html("Time Remaining:" + timer)
	setInterval(count, 1000);

		function count(){
			timer--;
			$("#gameTimer").html("Time Remaining:" + timer)
			if (timer === 0){
				endGame();//end game and take them to answer page.
			}
		}
	//TIMER

	//QUESTION & ANSWER FILLER
        for (var i = 0; i < questionArray.length; i++) {
          	var newQuestion = $("<div id=question" + [i+1] +">");
          	var newAnswer = $("<div id=answer" + [i+1] + ">")
          	$("#questions").append(newQuestion);
          	$("#questions").append(newAnswer);
         	newQuestion.text(questionArray[i]);

    }

    	for (var i = 0; i <answers.Grizzlies.length; i++) {
    		var input = $("<input>");
    		input.attr("type","radio")
    		$("#answer1").append(input)
    		$("#answer1").append(answers.Grizzlies[i])
    	}

    	for (var i = 0; i <answers.Suns.length; i++) {
    		var input = $("<input>");
    		input.attr("type","radio")
    		$("#answer2").append(input)
    		$("#answer2").append(answers.Suns[i])
    	}

    	for (var i = 0; i <answers.Lakers.length; i++) {
    		var input = $("<input>");
    		input.attr("type","radio")
    		$("#answer3").append(input)
    		$("#answer3").append(answers.Lakers[i])
    	}

    	for (var i = 0; i <answers.Cavaliers.length; i++) {
    		var input = $("<input>");
    		input.attr("type","radio")
    		$("#answer4").append(input)
    		$("#answer4").append(answers.Cavaliers[i])
    	}

    	for (var i = 0; i <answers.Celtics.length; i++) {
    		var input = $("<input>");
    		input.attr("type","radio")
    		$("#answer5").append(input)
    		$("#answer5").append(answers.Celtics[i])
    	}


  }

    //write input answers



 




 

  // <input name="test" type="radio" value="inc"> A) 1
  // <input name="test" type="radio" value="ans"/> B) 2
  // <input name="test" type="radio" value="inc" /> C) 3
  // <input name="test" type="radio" value="inc" /> D) 4
  // <input name="test" type="radio" value="inc" /> E) 5