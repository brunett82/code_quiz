//DOM retrieval:
var highscore = document.getElementById('high-score');
var quizContainer = document.getElementById('quiz');
var start = document.getElementById('play-button');
var answers = document.getElementById('answers');
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
}

]