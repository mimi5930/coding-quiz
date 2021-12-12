// DOM selectors
var quizGame = document.querySelector(".quiz")
var quizButton = document.querySelector("#start-quiz");
var highscoresRef = document.querySelector("#highscores-ref");
var timeDisplay = document.querySelector("#time-display");
var quizTitle = document.querySelector(".quiz-title");
var quizP = document.querySelector(".quiz-descrip");
var divEl = document.querySelector(".button-container")

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
    //shuffle question order
    if(quizCounter === 0) {
        shuffle(questionsArray);
        console.log(questionsArray);
    }
    quizQuestionsGen();
}

// function to generate questions with question parameter (enter the name of the variable)
function quizQuestionsGen() {
    // use counter to determine if all questions are answered
    if (quizCounter === questionsArray.length) {
        alert('all done!');
        removeChildElements(divEl);
        return;
    }
    console.log("this is the " + (quizCounter + 1) + " round!");

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






function clickDirect(event) {
    if(event.target.id == 0) {
        console.log("you've chosen option 1")
        var chosenAnswer = questionsArray[quizCounter].options[event.target.id]
        answerValidation(chosenAnswer);
    }
    if(event.target.id == 1) {
        console.log("you've chosen option 2 ")
        var chosenAnswer = questionsArray[quizCounter].options[event.target.id]
        answerValidation(chosenAnswer);
    }
    if(event.target.id == 2) {
        console.log("you've chosen option 3")
        var chosenAnswer = questionsArray[quizCounter].options[event.target.id]
        answerValidation(chosenAnswer);
    }
    if(event.target.id == 3) {
        console.log("you've chosen option 4")
        var chosenAnswer = questionsArray[quizCounter].options[event.target.id]
        answerValidation(chosenAnswer);
    }
}

function answerValidation(choice) {
    if(choice === questionsArray[quizCounter].correct) {
        console.log("you got it right!");
        quizCounter++;
        quizQuestionsGen();
    }
    else {
        console.log("WRONG!");
        quizCounter++;
        quizQuestionsGen();
    }
}

function createOptionsArray(answers) {
    // combine correct answer with the wrong answers
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

function removeChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}



// eventlisteners
quizButton.addEventListener("click", startQuiz);
quizGame.addEventListener("click", clickDirect);
