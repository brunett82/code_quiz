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
var answerA = document.getElementById('button1');
var answerB= document.getElementById('button2');
var answerC= document.getElementById('button3');
var answerD = document.getElementById('button4');
var answerButton = document.getElementById('answer-button');
var record = document.getElementById('record');
var initials = document.getElementById('initials');
var submit = document.getElementById('submit');
var timerContainer = document.getElementById('timer-container');
var timeKeeping = document.getElementById('timekeeping');
var timer = document.getElementById('timer');
var finalScore = document.getElementById('final-score');

//Starting variables:
var timeRemain = 0;
var score = 0;
var questionCount = 0;


//Questions:
var questions = [{
    nextQuestion : 'What is the name of the default JavaScript behavior of moving variables and declarative functions to the top?',
    answerA :'Trebuche',
    answerB :'Hoisting',
    answerC :'Lift-Off',
    answerD :'Bumping',
    correct : 'Hoisting',
},{
    nextQuestion :'What is NaN?',
    answerA :'Not-a-Number', 
    answerB :'New-article-Next', 
    answerC :'Never-a-Numeral', 
    answerD :'Noting-a-Number',
    correct: 'Not-a-Number',
},{
    nextQuestion : 'Inside which HTML element do you put JavaScript?',
    answerA :'<javascript>', 
    answerB :'<code>', 
    answerC :'<script>', 
    answerD :'<js>',
    correct : '<script>',
},{
    nextQuestion : 'Which operator is used to declare a variable?',
    answerA :'*', 
    answerB :'-', 
    answerC :'===',
    answerD : '=',
    correct : '=',
},{
    nextQuestion : 'What is the correct syntax for displaying a console log?',
    answerA :'console.log;',
    answerB :'log.console()',
    answerC :'console.log[]',
    answerD :'console.log()',
    correct :'console.log',
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
            
        }
    }, 1000);
    showQuestions();
}

//Move page to first question when 
function showQuestions() {
    var questObjects = questions.length - 1;
    var quest = questions[questionCount];
    if (questionCount <= questObjects){
        nextQuestion.innerHTML = quest.nextQuestion;
        answerA.textContent = quest.answerA;
        answerB.textContent = quest.answerB;
        answerC.textContent = quest.answerC;
        answerD.textContent = quest.answerD;
    }
    
};

//check if the answer is correct
//Ask why all answers are showing as incorrect??????
function answerCheck(correct){
    var right = questions[questionCount].correct;
    if (correct == right){
        questionCount++;
        showQuestions();
    }
    else {
        questionCount++;
        timeRemain = timeRemain - 10;
        console.log('incorrect');
        showQuestions();
    }
    return gameOver();
};

//end of game
function gameOver(){
    if (questionCount >= 5 || timeRemain <= 0) {
        questionsDiv.style.display = "none";
        record.style.display = "block";
        document.getElementById('final-score').innerHTML = 'You scored ' + timeRemain + ' points!';
        timerContainer.style.display = "none";
    }
}
//Start game on click 
start.addEventListener('click', startGame);