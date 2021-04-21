/*Psuedo Code:
- Create a timer that starts when the start button is clicked.
- move page to first question when start button is clicked.
- present potential answers.
- when answer is clicked
    -if correct proceed to next question.
    -if NOT correct deduct 10 seconds from timer and proceed to next question
- end game when all questions are answered or timer equals 0
- move page to initials capture form.
- save initials and final timer reading for high score.*/

//DOM retrieval:
var highscore = document.getElementById('high-score');
var welcome = document.getElementById('welcome');
var start = document.getElementById('play-button');
var questionsDiv = document.querySelector('#questions');
var nextQuestion = document.getElementById('next-question');
var a1 = document.getElementById('button1');
var a2 = document.getElementById('button2');
var a3 = document.getElementById('button3');
var a4 = document.getElementById('button4');
var answerButton = document.getElementById('answer-button');
var record = document.getElementById('record');
var initials = document.getElementById('initials');
var submit = document.getElementById('submit');
var timerContainer = document.getElementById('timer-container');
var timeKeeping = document.getElementById('timekeeping');
var timer = document.getElementById('timer');

//Starting variables:
var timeRemain = 0;
var score = 0;
var questionCount = 0;

//Questions:
var questions = [ {
    nextQuestion : 'What is the name of the default JavaScript behavior of moving variables and declarative functions to the top?',
    a1 :'Trebuche',
    a2 :'Hoisting',
    a3 :'Lift-Off',
    a4 :'Bumping',
    answer : 'Hoisting',
},{
    nextQuestion :'What is NaN?',
    a1 :'Not-a-Number', 
    a2 :'New-article-Next', 
    a3 :'Never-a-Numeral', 
    a4 :'Noting-a-Number',
    answer: 'Not-a-Number',
},{
    nextQuestion : 'Inside which HTML element do you put JavaScript?',
    a1 :'<javascript>', 
    a2 :'<code>', 
    a3 :'<script>', 
    a4 :'<js>',
    answer : '<script>',
},{
    nextQuestion : 'Which operator is used to declare a variable?',
    a1 :'*', 
    a2 :'-', 
    a3 :'===',
    a4 : '=',
    answer : '=',
},{
    nextQuestion : 'What is the correct syntax for displaying a console log?',
    a1 :'console.log;',
    a2 :'log.console()',
    a3 :'console.log[]',
    a4 :'console.log()',
    answer :'console.log',
},]

welcome.style.display ="block";
questionsDiv.style.display ="none";
record.style.display = "none";

//Starts game and begins timer
function startGame() {
    timeRemain = 60;
    welcome.style.display = "none";
    questionsDiv.style.display = "block";

    var countdown = setInterval(function() {
        timeRemain--;
        timer.textContent = timeRemain;
        if (timeRemain === 0 || questions.length === questionCount){
            clearInterval(countdown);
            score();
        }
    }, 1000);
    showQuestions();
}

//Move page to first question when 
function showQuestions() {
    var quest = questions[questionCount];
    nextQuestion.innerHTML = quest.nextQuestion;
    a1.textContent = quest.a1;
    a2.textContent = quest.a2;
    a3.textContent = quest.a3;
    a4.textContent = quest.a4;
};


//Start game on click 
start.addEventListener('click', function (){
    startGame()
})