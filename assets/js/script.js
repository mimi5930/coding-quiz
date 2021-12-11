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
    options: ["a", "b", "c", "correct"]
}

var secondQuestion = {
    title: "This is question 2",
    name: "Here is the question text",
    options: ["a", "b", "c", "correct"]
}

function startQuiz() {
   console.log("the quiz has started!");
   quizQustions();
}

function quizQustions() {
    quizTitle.textContent = firstQuestion.title;
    quizP.textContent = firstQuestion.name;
    quizGame.removeChild(quizButton);

    // shuffle answers
    shuffle(firstQuestion.options)

    // create answer elements
    // answer a
    var firstOption = document.createElement("button");
    firstOption.textContent = firstQuestion.options[0];
    quizGame.appendChild(firstOption)
    // answer b
    var secondOption = document.createElement("button");
    secondOption.textContent = firstQuestion.options[1];
    quizGame.appendChild(secondOption);
    // answer c
    var thirdOption = document.createElement("button");
    thirdOption.textContent = firstQuestion.options[2];
    quizGame.appendChild(thirdOption);
    // correct answer
    var fourthOption = document.createElement("button");
    fourthOption.textContent = firstQuestion.options[3];
    quizGame.appendChild(fourthOption);

    // randomize answers
    return;

}


function shuffle(array) {
    for (let i = array.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// eventlistener for start quiz button
quizButton.addEventListener("click", startQuiz);