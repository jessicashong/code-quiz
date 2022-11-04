//title page
var timer = document.getElementById('timer');
var highScores = document.getElementById('highscores');
var startPage = document.getElementById('start-page');
var title = document.querySelector('.title');
var directions = document.querySelector('.directions');
var startBtn = document.getElementById('start');

var questionsContainer = document.getElementById('question-container');
var btnContainer = document.getElementById('btn-container');
var question = document.getElementById('question');
// var choiceBtn = document.querySelector('.choice-btn');
// var choice2 = document.getElementById('choice2');
// var choice3 = document.getElementById('choice3');
// var choice4 = document.getElementById('choice4');
// var choiceContainer = document.querySelector('.choice-container');

var score = 0;
var index = 0;


title.textContent = 'Code Quiz';
directions.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!';
title.setAttribute('style', 'font-size:45px; text-align:center;');
directions.setAttribute('style', 'font-size:20px; text-align:center');
startBtn.setAttribute('style', 'margin:20px');

startBtn.addEventListener('click', startGame);

function startGame(){
    //change id names and remove p tag
    startPage.classList.add('hide');
    startPage.classList.remove('start-page');
    questionsContainer.classList.remove('hide');
    questionsContainer.classList.add('question-container');

    questionsStart();
    startTimer();
};

function startTimer(){
    var timeLeft = 5;
    var timeInterval = setInterval(function(){
        if (timeLeft > 0) {
            timer.innerHTML = 'Timer: ' + timeLeft;
            timeLeft--;
        } else {
            timer.innerHTML = 'Timer: 0';
            clearInterval(timeInterval);

            displayScore();
        }
    }, 1000)
}
//create arrays with question and answer obejcts
var questionBank = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'strings', correct: false},
            { text: 'booleans', correct: false},
            { text: 'alerts', correct: true},
            { text: 'numbers', correct: false}
        ]
    },
    {
        question: 'how old am i?',
        answers: [
            { text: '12', correct: false},
            { text: '27', correct: true},
            { text: '22', correct: false},
            { text: '37', correct: false}
        ]
    },
    {
        question: 'what is my favorite color?',
        answers: [
            { text: 'blue', correct: false},
            { text: 'red', correct: false},
            { text: 'green', correct: false},
            { text: 'yellow', correct: true}
        ]
    },
    {
        question: 'what is my favorite food?',
        answers: [
            { text: 'poke', correct: true},
            { text: 'sushi', correct: false},
            { text: 'tacos', correct: false},
            { text: 'hamburger', correct: false}
        ]
    }
]

//function that creates ul tag and buttons
function questionsStart(){
    question.innerText = questionBank[index].question;
    
    for (var i = 0; i < questionBank[index].answers.length; i++){
        var choice = document.createElement('button');
        choice.classList.add('choice-btn');
        choice.textContent = questionBank[index].answers[i].text;
        btnContainer.appendChild(choice);
    }
    if (answer.correct) {
        choice.dataset.correct = answer.correct;
    }
    index ++;
}

function nextQuestion(){
    question.innerText = questionBank[index].question;
    
}

function displayScore(){
    
}
// var questions = document.querySelector('.questions');
// var ulEl = document.createElement('ul');
// var choice1 = document.createElement('button');
// var choice2 = document.createElement('button');
// var choice3 = document.createElement('button');
// var choice4 = document.createElement('button');

// choice1.textContent = questionBank[0].answer1;
// choice2.textContent = questionBank[0].answer1;
// choice3.textContent = questionBank[0].answer1;


// buttonContainer.appendChild(ulEl);
// ulEl.appendChild(choice1);
// ulEl.appendChild(choice2);
// ulEl.appendChild(choice3);
// ulEl.appendChild(choice4);




//event listener correct answer