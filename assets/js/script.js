// DOM selectors
var quizGame = document.querySelector(".quiz")
var quizButton = document.querySelector("#start-quiz");
var highscoresRef = document.querySelector("#highscores-ref");
var timeDisplay = document.querySelector("#time-display");
var quizTitle = document.querySelector(".quiz-title");
var quizP = document.querySelector(".quiz-descrip");

// variable to see if you're past the first question
var quizCounter = 0;

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
    console.log("the quiz has started!");
    //shuffle questoin order
    if(quizCounter === 0) {
        shuffle(questionsArray);
        console.log(questionsArray);
    }
    quizQuestionsGen(questionsArray[0]);

    return;

    quizQuestionsGen(questionsArray[1]);

    quizQuestionsGen(questionsArray[2]);

    quizQuestionsGen(questionsArray[3]);

    quizQuestionsGen(questionsArray[4]);

    quizQuestionsGen(questionsArray[5]);

}

// function to generate questions with question parameter (enter the name of the variable)
function quizQuestionsGen(question) {
    // use a counter to stop removeChild from happening more than once
    if (quizCounter === 0) {
     quizGame.removeChild(quizButton);   
    }
    quizCounter++;

    // update question number and question
    quizTitle.textContent = question.title;
    quizP.textContent = question.name;
    
    // combine wrong answers with correct
    createOptionsArray(question);

    // shuffle answers
    shuffle(question.options);

    // create answer elements container
    var buttonContainer = document.createElement("div")
    // answer a
    var firstOption = document.createElement("button");
    firstOption.setAttribute("id", 1)
    firstOption.textContent = question.options[0];
    quizGame.appendChild(firstOption)
    // answer b
    var secondOption = document.createElement("button");
    secondOption.setAttribute("id", 2)
    secondOption.textContent = question.options[1];
    quizGame.appendChild(secondOption);
    // answer c
    var thirdOption = document.createElement("button");
    thirdOption.setAttribute("id", 3)
    thirdOption.textContent = question.options[2];
    quizGame.appendChild(thirdOption);
    // correct answer
    var fourthOption = document.createElement("button");
    fourthOption.setAttribute("id", 4)
    fourthOption.textContent = question.options[3];
    quizGame.appendChild(fourthOption);
}

function clickDirect(event) {
    if(event.target.id == 1) {
        var answer = 1;
        answerValidation(answer);
    }
    if(event.target.id == 2) {
        var answer = 2;
        answerValidation(answer);
    }
    if(event.target.id == 3) {
        var answer = 3;
        answerValidation(answer);
    }
    if(event.target.id == 4) {
        var answer = 4;
        answerValidation(answer);
    }
}

function answerValidation(answer) {
    console.log("it worked! your answer was option " + answer);
    console.log("the right answer is " + questionsArray[0].correct)

    // start here

    // if (question.options[answer] = question.correct) {
    //     console.log("that was correct!");
    // }
}

function createOptionsArray(answers) {
    answers.options.push(answers.correct);
    console.log(answers.options);
}

function shuffle(array) {
    for (let i = array.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



// eventlisteners
quizButton.addEventListener("click", startQuiz);
quizGame.addEventListener("click", clickDirect);
