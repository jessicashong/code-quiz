var timer = document.getElementById('timer');
var startPage = document.getElementById('start-page');
var title = document.querySelector('.title');
var directions = document.querySelector('.directions');
var startBtn = document.getElementById('start');
var cornerScore = document.getElementById('score');
var questionsContainer = document.getElementById('question-container');
var btnContainer = document.getElementById('btn-container');
var question = document.getElementById('question');
var answerCheck = document.getElementById('answer-check');
var scoreForm = document.getElementById('score-container');
var highScores = document.getElementById('highscore-container');

var score = 0;
var index = 0;
var timeLeft = 120;

//start page
title.textContent = 'Code Quiz';
directions.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!';
title.setAttribute('style', 'font-size:45px; text-align:center;');
directions.setAttribute('style', 'font-size:22px; text-align:center; width:80%');
startBtn.setAttribute('style', 'margin:20px');

startBtn.addEventListener('click', startGame);


function startGame(){
    //change class names to hide start container and show question container
    startPage.classList.add('hide');
    startPage.classList.remove('start-page');
    questionsContainer.classList.remove('hide');
    questionsContainer.classList.add('question-container');
    
    startTimer();
    questionsStart();
};

//start timer
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

//create array with question and answer obejcts
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
        question: 'Arrays in JavaScript can be used to store _______.',
        answers: [
            { text: 'numbers and strings', correct: false},
            { text: 'other arrays', correct: false},
            { text: 'booleans', correct: false},
            { text: 'all of the above', correct: true}
        ]
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to variables.',
        answers: [
            { text: 'commas', correct: false},
            { text: 'curly brackets', correct: false},
            { text: 'quotes', correct: true},
            { text: 'parentheses', correct: false}
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is: ',
        answers: [
            { text: 'JavaScript', correct: false},
            { text: 'terminal/bash', correct: false},
            { text: 'for loops', correct: false},
            { text: 'console log', correct: true}
        ]
    }
]

//function that creates answer choice buttons and show question text
function questionsStart(){
    question.setAttribute('style', 'font-size:30px;');
    question.innerText = questionBank[index].question;
    score.innerText = score
    
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
                }, 1000);
                score += 1;
                cornerScore.innerHTML = 'Score: ' + score;
            } else {
                answerCheck.setAttribute('style', 'font-size:28px; font-style:italic')
                answerCheck.innerHTML = 'That is incorrect!';
                timeLeft -= 10;
                setTimeout(() => {
                    nextQuestion();
                }, 1000);
            }
        })
    }
    index++    
}

//function moves on to following questions
function nextQuestion(){
    if (index > questionBank.length - 1){
        timeLeft = 0
    }else {
        var answerBtns = document.querySelectorAll('.choice-btn');
        answerCheck.innerHTML = '';
        question.innerText = questionBank[index].question;
        for (var i = 0; i < questionBank[index].answers.length; i++){
            var choice = answerBtns[i];
            choice.textContent = questionBank[index].answers[i].text;
            choice.setAttribute('value', questionBank[index].answers[i].correct);
        
        }
    }

index ++;
}


//after time runs out or end of questions, show final score
function finalScore(){
    questionsContainer.classList.add('hide');
    questionsContainer.classList.remove('question-container');
    scoreForm.classList.remove('hide');
    scoreForm.classList.add('score-container');
    
    scoreForm.innerHTML = 'Great Job!';
    scoreForm.setAttribute('style', 'font-size:40px; font-style:italic')
    
    //user input initials
    var final = document.createElement('p');
    final.textContent = 'Score: ' + score;
    final.setAttribute('style', 'font-size:24px');
    var form = document.createElement('form');
    form.setAttribute('method', 'POST');
    var label = document.createElement('label');
    label.setAttribute('style', 'font-size:24px;')
    label.textContent = 'Initials: ';
    var userInput = document.createElement('input');
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('style', 'height:50px; font-size:20px');
    var submit = document.createElement('button');
    submit.classList.add('choice-btn');
    submit.textContent = 'SUBMIT';
    submit.setAttribute('style', 'margin:10px')

    scoreForm.appendChild(final);
    scoreForm.appendChild(form);
    form.appendChild(label);
    form.appendChild(userInput);
    scoreForm.appendChild(submit);
    
    submit.addEventListener('click', function(event){
    event.preventDefault();
    var storeScore = {
        score: score.value,
        initials: userInput.value
    };
    localStorage.setItem('storeScore', JSON.stringify(storeScore));
    highScorePage();
    });
}

//high score page
function highScorePage(){
    scoreForm.classList.add('hide');
    scoreForm.classList.remove('score-container');
    highScores.classList.remove('hide');
    highScores.classList.add('highscore-container');

    highScores.textContent = 'High Scores: '
    highScores.setAttribute('style', 'font-size:40px; font-style:bolder')
    var scoreBoard = document.createElement('p');
    scoreBoard.classList.add('score-board')
    highScores.appendChild(scoreBoard);
    var lastScore = JSON.parse(localStorage.getItem('storeScore'));
    scoreBoard.setAttribute('style', 'font-size:24px;');
    if (lastScore !== null) {
        document.querySelector('.score-board').textContent = '1. ' + lastScore.initials;
    }

}

