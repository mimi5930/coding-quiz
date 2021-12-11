// DOM selectors
var quizGame = document.querySelector(".quiz")
var quizButton = document.querySelector("#start-quiz");
var highscoresRef = document.querySelector("#highscores-ref");
var timeDisplay = document.querySelector("#time-display");
var quizTitle = document.querySelector(".quiz-title");
var quizP = document.querySelector(".quiz-descrip");

// Quiz questions
var firstQuestion = {
    title: "This is question 1",
    name: "This is the question",
    optionA: "a",
    optionB: "b",
    optionC: "c",
    optionCorrect: "correct",
}

function startQuiz() {
   console.log("the quiz has started!");
   quizQustions();
}

function quizQustions() {
    quizTitle.textContent = firstQuestion.title;
    quizP.textContent = firstQuestion.name;
    quizGame.removeChild(quizButton);

    // create answer elements
    // answer a
    var firstOption = document.createElement("button");
    firstOption.textContent = firstQuestion.optionA;
    quizGame.appendChild(firstOption)
    // answer b
    var secondOption = document.createElement("button");
    secondOption.textContent = firstQuestion.optionB;
    quizGame.appendChild(secondOption);
    // answer c
    var thirdOption = document.createElement("button");
    thirdOption.textContent = firstQuestion.optionC;
    quizGame.appendChild(thirdOption);
    // correct answer
    var correctOption = document.createElement("button");
    correctOption.textContent = firstQuestion.optionCorrect;
    quizGame.appendChild(correctOption);
    return;
}

// eventlistener for start quiz button
quizButton.addEventListener("click", startQuiz);