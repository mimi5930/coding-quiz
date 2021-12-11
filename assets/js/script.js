// DOM selectors
var quizButton = document.querySelector("#start-quiz");
var highscoresRef = document.querySelector("#highscores-ref");
var timeDisplay = document.querySelector("#time-display");

function startQuiz() {
    console.log("The quiz has successfully started!");
}

// eventlistener for start quiz button
quizButton.addEventListener("click", startQuiz);