// DOM selectors
var quizGame = document.querySelector(".quiz")
var quizButton = document.querySelector("#start-quiz");
var highscoresRef = document.querySelector("#highscores-ref");
var timeDisplay = document.querySelector("#time-display");
var quizTitle = document.querySelector(".quiz-title");
var quizP = document.querySelector(".quiz-descrip");

// variable to see if you're past the first question
var firstComplete = 0;

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
var thirdQuestion = {
    title: "This is question 3",
    name: "Here is the question text",
    options: ["a", "b", "c", "correct"]
}
var fourthQuestion = {
    title: "This is question 4",
    name: "Here is the question text",
    options: ["a", "b", "c", "correct"]
}
var fifthQuestion = {
    title: "This is question 5",
    name: "Here is the question text",
    options: ["a", "b", "c", "correct"]
}
var sixthQuestion = {
    title: "This is question 6",
    name: "Here is the question text",
    options: ["a", "b", "c", "correct"]
}

//combine questions into an array
var questionsArray = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion]

function startQuiz() {
    console.log("the quiz has started!");
    //shuffle questoin order
    shuffle(questionsArray);
    console.log(questionsArray);
    quizQuestions(questionsArray[0]);

    quizQuestions(questionsArray[1]);

    quizQuestions(questionsArray[2]);

    quizQuestions(questionsArray[3]);

    quizQuestions(questionsArray[4]);

    quizQuestions(questionsArray[5]);

}

// function to generate questions with question parameter (enter the name of the variable)
function quizQuestions(question) {
    // use a counter to stop removeChild from happening more than once
    firstComplete++;
    if (firstComplete === 1) {
     quizGame.removeChild(quizButton);   
    }
    quizTitle.textContent = question.title;
    quizP.textContent = question.name;
    

    // shuffle answers
    shuffle(question.options)

    // create answer elements
    // answer a
    var firstOption = document.createElement("button");
    firstOption.textContent = question.options[0];
    quizGame.appendChild(firstOption)
    // answer b
    var secondOption = document.createElement("button");
    secondOption.textContent = question.options[1];
    quizGame.appendChild(secondOption);
    // answer c
    var thirdOption = document.createElement("button");
    thirdOption.textContent = question.options[2];
    quizGame.appendChild(thirdOption);
    // correct answer
    var fourthOption = document.createElement("button");
    fourthOption.textContent = question.options[3];
    quizGame.appendChild(fourthOption);
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