// DOM selectors
var quizGame = document.querySelector(".quiz")
var quizButton = document.querySelector("#start-quiz");
var highscoresRef = document.querySelector("#highscores-ref");
var timeDisplay = document.querySelector("#time-display");
var quizTitle = document.querySelector(".quiz-title");
var quizP = document.querySelector(".quiz-descrip");
var divEl = document.querySelector(".button-container")
var timerEl = document.querySelector("#time-display");

// variable to see if you're past the first question
var quizCounter = 0;

// final score holder
var score = 0;
// timer length
var timer = -1;
// Answered all questions?
var gameWin = false;

// Quiz questions
var firstQuestion = {
    title: "This is question 1",
    name: "This is the question",
    options: ["a", "b", "c"],
    correct: "unique answer for 1"

}
var secondQuestion = {
    title: "This is question 2",
    name: "Here is the question text",
    options: ["a", "b", "c"],
    correct: "unique answer for 2"
}
var thirdQuestion = {
    title: "This is question 3",
    name: "Here is the question text",
    options: ["a", "b", "c"],
    correct: "unique answer 3"
}
var fourthQuestion = {
    title: "This is question 4",
    name: "Here is the question text",
    options: ["a", "b", "c"],
    correct: "unique answer 4"
}
var fifthQuestion = {
    title: "This is question 5",
    name: "Here is the question text",
    options: ["a", "b", "c"],
    correct: "unique answer 5"
}
var sixthQuestion = {
    title: "This is question 6",
    name: "Here is the question text",
    options: ["a", "b", "c"],
    correct: "unique answer 6"
}

//combine questions into an array
var questionsArray = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion]

function startQuiz() {
    //shuffle question order
    if(quizCounter === 0) {
        timer = 75;
        shuffle(questionsArray);
        countdown();
    }
    quizQuestionsGen();
}

function countdown() {
    var timerInterval = setInterval(function() {
        if(gameWin) {
            clearInterval(timerInterval);            
            gameOver();
        }
        else if(timer >= 1) {
            timerEl.textContent = "Time: " + timer;
            timer--;
        }
        else if(timer = 0) {
            timerEl.textContent = "Game Over!"
            clearInterval(timerInterval);
            gameOver();  
        }
        else {
            clearInterval(timerInterval);
        }
        }, 1000);
}

// function to generate questions with question parameter (enter the name of the variable)
function quizQuestionsGen() {
    // use counter to determine if all questions are answered
    if (quizCounter === questionsArray.length) {
        removeChildElements(divEl);
        gameWin = true;
        countdown();
    }
    else {

    removeChildElements(divEl);

    // update question number and question
    quizTitle.textContent = questionsArray[quizCounter].title;
    quizP.textContent = questionsArray[quizCounter].name;
    
    // combine wrong answers with correct
    createOptionsArray(questionsArray[quizCounter]);

    // shuffle answers
    shuffle(questionsArray[quizCounter].options);

    // answer a
    var firstOption = document.createElement("button");
    firstOption.className = "answer-button";
    firstOption.setAttribute("id", 0);
    firstOption.textContent = questionsArray[quizCounter].options[0];
    divEl.appendChild(firstOption);
    // answer b
    var secondOption = document.createElement("button");
    secondOption.className = "answer-button";
    secondOption.setAttribute("id", 1);
    secondOption.textContent = questionsArray[quizCounter].options[1];
    divEl.appendChild(secondOption);
    // answer c
    var thirdOption = document.createElement("button");
    thirdOption.className = "answer-button";
    thirdOption.setAttribute("id", 2);
    thirdOption.textContent = questionsArray[quizCounter].options[2];
    divEl.appendChild(thirdOption);
    // correct answer
    var fourthOption = document.createElement("button");
    fourthOption.className = "answer-button"
    fourthOption.setAttribute("id", 3);
    fourthOption.textContent = questionsArray[quizCounter].options[3];
    divEl.appendChild(fourthOption);
    }
}






function clickDirect(event) {
    if(event.target.id == 0) {
        var chosenAnswer = questionsArray[quizCounter].options[event.target.id];
        answerValidation(chosenAnswer);
    }
    if(event.target.id == 1) {
        var chosenAnswer = questionsArray[quizCounter].options[event.target.id];
        answerValidation(chosenAnswer);
    }
    if(event.target.id == 2) {
        var chosenAnswer = questionsArray[quizCounter].options[event.target.id];
        answerValidation(chosenAnswer);
    }
    if(event.target.id == 3) {
        var chosenAnswer = questionsArray[quizCounter].options[event.target.id];
        answerValidation(chosenAnswer);
    }

    // game over options
    if(event.target.id == 5) {
        console.log("high score is " + score);
        createHighScore();
    }
    if(event.target.id == 6) 
        console.log("exiting!");
        return;
}

function answerValidation(choice) {
    if(choice === questionsArray[quizCounter].correct) {
        quizCounter++;
        quizQuestionsGen();
    }
    else {
        timer = timer - 15;
        quizCounter++;

        quizQuestionsGen();
    }
}

// end of game function
function gameOver() {
    gameWin = false;
    score = timer;
    if (score < 0) {
        score = 0;
    }
    timer = -1;
    console.log("Game Over!")
    timeDisplay.textContent = ""
    quizTitle.textContent = "Game Over!"
    quizP.textContent = "Your score is: " + score;
    console.log(timer);

    var highScoreSave = document.createElement("button");
    highScoreSave.setAttribute("id", 5)
    highScoreSave.className = "end-button";
    highScoreSave.textContent = "Save High Score";
    divEl.appendChild(highScoreSave);

    var exitButton = document.createElement("button");
    exitButton.setAttribute("id", 6)
    exitButton.className = "end-button";
    exitButton.textContent = "Exit";
    divEl.appendChild(exitButton);
    return;
}

function createHighScore() {
    removeChildElements(divEl);
    var labelName = document.createElement("label");
    labelName.setAttribute("for", "player-name");
    labelName.textContent = "Enter Name:";
    var nameEnter = document.createElement("input");
    nameEnter.setAttribute("type", "text") 
    nameEnter.setAttribute("id", "player-name") 
    nameEnter.setAttribute("name", "player-name");
    var submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit");
    divEl.appendChild(labelName);
    divEl.appendChild(nameEnter);
    divEl.appendChild(submitButton);
}


function createOptionsArray(answers) {
    // combine correct answer with the wrong answers
    answers.options.push(answers.correct);
}

function shuffle(array) {
    for (let i = array.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function removeChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}



// eventlisteners
quizButton.addEventListener("click", startQuiz);
divEl.addEventListener("click", clickDirect);
