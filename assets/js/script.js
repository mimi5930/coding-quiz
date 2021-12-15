// DOM selectors
var quizGame = document.querySelector(".quiz")
var quizButton = document.querySelector("#start-quiz");
var highscoresRef = document.querySelector("#highscores-ref");
var timeDisplay = document.querySelector("#time-display");
var quizTitle = document.querySelector(".quiz-title");
var quizP = document.querySelector(".quiz-descrip");
var divEl = document.querySelector(".button-container")
var timerEl = document.querySelector("#time-display");

// sets what round/question to give
var quizCounter = 0;

// timer length
var timer = -1;
// Answered all questions?
var gameWin = false;

// Object for local Storage:
var user = {
    initials: [],
    score: []
};

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
        retrieveHighscores();
    }
    quizQuestionsGen();
}

function countdown() {
    var timerInterval = setInterval(function() {
        if(gameWin) {
            clearInterval(timerInterval);            
            gameOver();
        }
        else if(timer > 0) {
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
        console.log("high score is " + user.score);
        createHighScore();
    }
    if(event.target.id == 6) 
        location.reload();

    if(event.target.id == 7) {
        console.log("submit high scores!");
        setInitials();
    }
}

function answerValidation(choice) {
    if(choice === questionsArray[quizCounter].correct) {
        quizCounter++;
        if (quizCounter > 0) {
            removeLastChild(quizGame);
        }
        correct();
        quizQuestionsGen();
    }
    else {
        timer = timer - 15;
        quizCounter++;
        if (quizCounter > 0) {
            removeLastChild(quizGame);
        }
        incorrect();
        quizQuestionsGen();
    }
}

// end of game function
function gameOver() {
    gameWin = false;
    if (quizCounter > 0) {
        removeLastChild(quizGame);
    }
    scoreText = timer
    if (scoreText < 0) {
        scoreText = 0;
    }
    user.score.push(timer);
    checkNegative(user.score);
    timer = -1;
    console.log("Game Over!")
    timeDisplay.textContent = ""
    quizTitle.textContent = "Game Over!"
    quizP.textContent = "Your score is: " + scoreText;
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

function setInitials() {
    var userInput = document.getElementById("player-name").value;
    user.initials.push(userInput);
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    location.reload();
}

function retrieveHighscores () {
    var oldUser = localStorage.getItem("user");
    if (!oldUser) {
        return false;
    }
    oldUser = JSON.parse(oldUser);
    user.initials = user.initials.concat(oldUser.initials);
    user.score = user.score.concat(oldUser.score);
}

// add correct display function
function correct() {
    var correctH = document.createElement("h2")
    correctH.className = ""
    correctH.textContent = "Correct!"

    // append to main section
    quizGame.appendChild(correctH);
}

// add incorrect display function
function incorrect() {
    var incorrectH = document.createElement("h2");
    incorrectH.className = "";
    incorrectH.textContent = "Incorrect!";

    // append to main section
    quizGame.appendChild(incorrectH);
}

//remove last child function
function removeLastChild(element) {
    element.removeChild(element.lastChild);
}


// add display high scores function
function createHighscoreEl() {
    // retrieve local data for save highscores
    retrieveHighscores();

    // check if any information is stored as highscores
    if (user.initials === [] || user.score === []) {
        return false;
    }

    // create an array that combines scores and initials together to be sorted
    var combinedInitScore = Array(user.score[0] + user.initials[0]);
    for (i = 1; i < user.score.length; i++) {
        var concatArray = user.score[i] + user.initials[i];
        combinedInitScore.push(concatArray);
    }
    
    //sort combined score in ascending order
    combinedInitScore.sort().reverse();

    console.log(combinedInitScore);


    //break apart

    // put together into logical reading fashion
    
    // for loop to turn data into individual li items
    
    var highscoreContainerEl = document.createElement("div");
    highscoreContainerEl.className = "highscore-container"
    
    // title for high scores
    var highscoreTitleEl = document.createElement("h2");
    highscoreTitleEl.className = "";
    highscoreTitleEl.textContent = "High Scores:"

    // ordered list element
    var highscoreListEl = document.createElement("ul");
    highscoreListEl.className = "";


    return;

    // function to create various high score elements
    function createHighscoreEls() {
        if (!user) {
            return false;
        }
        // organize from highest to lowest
        // for loop to create li items
        // delete div
        

        for (i = 0; i > user.initals.length; i++);
        var createHighScores = document.createElement("li");

    }
}

function checkNegative (array) {
    for ( i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
}

function createHighScore() {
    // reset the button-container div
    removeChildElements(divEl);

    // create the input elements for submitting initials 
    var labelName = document.createElement("label");
    labelName.setAttribute("for", "player-name");
    labelName.textContent = "Enter Initials:";
    var nameEnter = document.createElement("input");
    nameEnter.setAttribute("type", "text") 
    nameEnter.setAttribute("id", "player-name") 
    nameEnter.setAttribute("name", "player-name");
    nameEnter.setAttribute("maxlength", 2);
    var submitButton = document.createElement("input");
    submitButton.setAttribute("id", 7);
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit");

    // append all created elements
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
highscoresRef.addEventListener("click", createHighscoreEl);
