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
var answerCheck = document.getElementById('answer-check');
// var choiceBtn = document.querySelector('.choice-btn');
// var choice2 = document.getElementById('choice2');
// var choice3 = document.getElementById('choice3');
// var choice4 = document.getElementById('choice4');
// var choiceContainer = document.querySelector('.choice-container');

var score = 0;
var index = 0;
var timeLeft = 15;

//start page
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
    var timeInterval = setInterval(function(){
        if (timeLeft > 0) {
            timer.innerHTML = 'Timer: ' + timeLeft;
            timeLeft--;
        } else {
            timer.innerHTML = 'Timer: 0';
            clearInterval(timeInterval);

            finalScore();
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
            { text: 'fried rice', correct: false},
            { text: 'tacos', correct: false},
            { text: 'hamburger', correct: false}
        ]
    }
]

//function that creates ul tag and buttons
function questionsStart(){
    question.setAttribute('style', 'font-size:30px;');
    question.innerText = questionBank[index].question;
    
    for (var i = 0; i < questionBank[index].answers.length; i++){
        var choice = document.createElement('button');
        choice.classList.add('choice-btn');
        choice.textContent = questionBank[index].answers[i].text;
        choice.setAttribute('value', questionBank[index].answers[i].correct)
        btnContainer.appendChild(choice); 
    }    
    
    var answerBtns = document.querySelectorAll('.choice-btn');
    for (var i = 0; i < answerBtns.length; i++){
        answerBtns[i].addEventListener('click', function(event) {
            if (event.target.value === 'true'){
                answerCheck.setAttribute('style', 'font-size:28px; font-style:italic')
                answerCheck.innerHTML = 'That is correct!';
                setTimeout(() => {
                    nextQuestion();
                }, 1500);
                score += 1;
            } else {
                answerCheck.setAttribute('style', 'font-size:28px; font-style:italic')
                answerCheck.innerHTML = 'That is incorrect!';
                timeLeft -= 5;
                setTimeout(() => {
                    nextQuestion();
                }, 1500);
            }
        })
    }
    index++    
}

function nextQuestion(){
    var answerBtns = document.querySelectorAll('.choice-btn');
    answerCheck.innerHTML = '';
    question.innerText = questionBank[index].question;
    for (var i = 0; i < questionBank[index].answers.length; i++){
        var choice = answerBtns[i];
        choice.textContent = questionBank[index].answers[i].text;
        choice.setAttribute('value', questionBank[index].answers[i].correct)
    }   
    
    index ++;
}

function finalScore(){
    
}

function storeHighScores(){
    
}



//event listener correct answer