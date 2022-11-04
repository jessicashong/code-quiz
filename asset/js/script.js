//title page
var timer = document.getElementById('timer');
var highScores = document.getElementById('highscores');
var title = document.querySelector('.title');
var directions = document.querySelector('.directions');
var startBtn = document.getElementById('start');

var questionsContainer = document.getElementById('question-container');
var btnContainer = document.getElementById('btn-container');
var question = document.getElementById('question');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
// var choiceContainer = document.querySelector('.choice-container');

var score = 0;


title.textContent = 'Code Quiz';
directions.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!';
title.setAttribute('style', 'font-size:40px; text-align:center;');
directions.setAttribute('style', 'font-size:20px; text-align:center');
startBtn.setAttribute('style', 'margin:20px');
startBtn.addEventListener('click', startGame());

function startGame(){
    //change id names and remove p tag
    startBtn.classList.add('hide');
    title.classList.add('hide');
    directions.classList.add('hide');    
};

//create arrays with question and answer obejcts
var questionBank = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: ['strings', 'booleans', 'alerts', 'numbers']
    },
    {
        question: 'are you hungry?',
        answers: ['no', 'yes', 'kinda']
    },
]

//function that creates ul tag and buttons
function questionsPage(){
    var questions = document.querySelector('.questions');
    var ulEl = document.createElement('ul');
    choiceContainer.appendChild(ulEl);
    
    // for (var i = 0; i < questionBank.length; i++){
    //     question.textContent = questionBank[i].question;
    //     var response = 
    //     //if (question ==
    // }
    questions.textContent = questionBank[0].question;
    questions.setAttribute('style', 'font-size:30px; text-align:center');
    // for (var i = 0; i < questionBank[].answers.length; i++){
    //     var choice = document.createElement('button');
    //     choice.textContent = questionBank[i].answers[n];
    // }
}

function selectAnswer(){

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