//Getting elements from the Dom

let introPage = document.getElementById("intro");
let openModal = document.getElementById("button-rule")
let ruleBtn = document.getElementById("instructions")
let closeModal = document.getElementById("close-btn")
let rulesText = document.getElementsByClassName("modal-header")
let startButton = document.getElementById("button-start")
let quizLoad = document.getElementsByClassName('question-container');
let answerButton1 = document.getElementById("answer1");
let answerButton2 = document.getElementById("answer2");
let answerButton3 = document.getElementById("answer3");
let answerButton4 = document.getElementById("answer4");
let scoreElement = document.getElementsByClassName("scoreArea");


// Modal with instructions

openModal.addEventListener('click', function() {
    openModal.style.display = 'none';
    introPage.style.display = 'hide';
    instructions.style.display = 'block';
    showInstructions();
    console.log('hey modal');
  });
  
  function showInstructions() {
    instructions.style.display = 'block';
    console.log('show rules');
  };

  closeModal.addEventListener('click', function() {
    closeModal.addEventListener = 'block';
    instructions.style.display = 'none';
  } )


// when starting quiz

let currentQuiz = 0
let score = 0

//function startGame() {
  //  console.log('started')
    //myModal.classList.add('active')

//}

//function startQuiz() {

//    deselectAnswers()

//    const currentQuizData = quizData[currentQuiz]

//    questions.innerText = currentQuizData.question
//    answer1.innerText = currentQuizData.answerButton1
//    answer2.innerText = currentQuizData.answerButton2
//    answer3.innerText = currentQuizData.answerButton3
//    answer4.innerText = currentQuizData.answerButton4
//}

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