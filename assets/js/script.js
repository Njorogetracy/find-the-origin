//Getting elements from the Dom
let introPage = document.getElementById("intro");
let openModal = document.getElementById("myModal");
let startButton = document.getElementsByTagName("continue");
let rules = document.getElementById("instructions");
let quizLoad = document.getElementsByClassName('question-container');
let answerButton1 = document.getElementById("answer1");
let answerButton2 = document.getElementById("answer2");
let answerButton3 = document.getElementById("answer3");
let answerButton4 = document.getElementById("answer4");
let scoreElement = document.getElementsByClassName("scoreArea");


// Eventlisteners

openModal.addEventListener('click', startGame)

// when starting quiz

let currentQuiz = 0
let score = 0

function startGame() {
    console.log('started')
    myModal.classList.add('active')

}

function startQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questions.innerText = currentQuizData.question
    answer1.innerText = currentQuizData.answerButton1
    answer2.innerText = currentQuizData.answerButton2
    answer3.innerText = currentQuizData.answerButton3
    answer4.innerText = currentQuizData.answerButton4
}

function deselectAnswers() {

}

function  checkAnswer() {

}

function increementCorrectAnswer() {

}

function increementWrongAnswer() {

}

function setNextQuestion() {

}

function endQuiz() {

}