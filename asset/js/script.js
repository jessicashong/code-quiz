//title page
var title = document.querySelector('.title');
var questionsContainer = document.querySelector('.content');
var directions = document.querySelector('.directions');
//var buttonContainer = document.querySelector('.button-container');
var choiceContainer = document.querySelector('.choice-container');
var startBtn = document.createElement('button');


title.textContent = 'Code Quiz';
directions.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!';
startBtn.textContent = "START";
title.setAttribute('style', 'font-size:40px; text-align:center;');
directions.setAttribute('style', 'font-size:20px; text-align:center');

directions.appendChild(startBtn);

startBtn.setAttribute('style', 'margin:20px');

startBtn.addEventListener('click', function(){
    //change id names and remove p tag
    title.textContent = '';
    title.removeAttribute('style', 'font-size:40px; text-align:center;');
    title.classList.replace('title', 'questions');
    directions.remove();    
    startBtn.remove();

    questionsPage();
    console.log(questionBank[0])
});

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

    questions.textContent = questionBank[0].question;
    questions.setAttribute('style', 'font-size:30px; text-align:center');
    // for (var i = 0; i < questionBank[].answers.length; i++){
    //     var choice = document.createElement('button');
    //     choice.textContent = questionBank[i].answers[n];
    // }
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


// for (var i = 0; i < questionBank.length; i++){
//     var question = document.querySelector('.questions');
//     question.textContent = questionBank[i].question;


//event listener correct answer