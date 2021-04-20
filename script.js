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
var questions = document.getElementById('questions');
var nextQuestion = document.getElementById('next-question');
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
    question: 'What is the name of the default JavaScript behavior of moving variables and declarative functions to the top?',
    options:['Trebuche', 'Hoisting', 'Lift-Off', 'Bumping' ],
    answer: 'Hoisting'
},{
    question:'What is NaN?',
    options: ['Not-a-Number', 'New-article-Next', 'Never-a-Numeral', 'Noting-a-Number'],
    answer: 'Not-a-Number',
},{
    question: 'Inside which HTML element do you put JavaScript?',
    options:['<javascript>', '<code>', '<script>', '<js>'],
    answer: '<script>',
},{
    question: 'Which operator is used to declare a variable?',
    options:['*', '-', '===', '='],
    answer: '=',
},{
    question: 'What is the correct syntax for displaying a console log?',
    options:['console.log;','log.console()','console.log[]','console.log()'],
    answer:'console.log',
}]

//Starts game and begins timer
function startGame() {
    timeRemain = 60;
    welcome.style.display = 'none';
    questions.style.display = 'block';
    var countdown = setInterval(function() {
        timeRemain--;
        timer.textContent = timeRemain;
        if (timeRemain === 0 || questions.length === questionCount){
            clearInterval(countdown);
            score();
        }
    }, 1000);
}

//Start game on click 
start.addEventListener('click', function (){
    startGame()
})