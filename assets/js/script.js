// DOM selectors
var quizButton = document.querySelector("#start-quiz");
var highscoresRef = document.querySelector("#highscores-ref");
var timeDisplay = document.querySelector("#time-display");

// Quiz questions
var firstQuestion = {
    name: "This is the question",
    optionA: "a",
    optionB: "b",
    optionC: "c",
    optionCorrect: "correct",
}

function startQuiz() {
    console.log("The quiz has successfully started!");
}

// eventlistener for start quiz button
quizButton.addEventListener("click", startQuiz);