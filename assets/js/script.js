//Getting elements from the Dom

let introPage = document.getElementById("intro");
let myModal = document.getElementById("button-rule");
let ruleBtn = document.getElementById("instructions");
let closeModal = document.getElementById("close-rules");
let rulesText = document.getElementsByClassName("modal-header");
let startButton = document.getElementById("start-game");
let quizLoad = document.getElementsByClassName('question-container');
let quizQuestion = document.getElementById('question');
let answerButton1 = document.getElementById("answer1");
let answerButton2 = document.getElementById("answer2");
let answerButton3 = document.getElementById("answer3");
let answerButton4 = document.getElementById("answer4");
let scoreElement = document.getElementsByClassName("scoreArea");


startButton.addEventListener('click', function() {
    console.log("you clicked start")
    startQuiz();
    
});

function startQuiz() {
  console.log('game started')

  //deselectAnswers();

  let currentQuizQuestion = question[currentQuiz]

  quizQuestion.innerText = currentQuizQuestion.question
  answerButton1.innerText = currentQuizQuestion.answer1
  answerButton2.innerText = currentQuizQuestion.answer2
  answerButton3.innerText = currentQuizQuestion.answer3
  answerButton4.innerText = currentQuizQuestion.answer4
}


// open Modal with instructions and close modal

myModal.addEventListener("click", function() {
  console.log("you clicked a button")
  myModal.style.display = 'none';
  introPage.style.display = 'none';
  startButton.style.display = 'none'; 
  instructions.style.display = 'block';
  showInstructions();
  console.log('hey modal');
});

function showInstructions() {
  instructions.style.display = 'block';
  console.log('show rules');
};

closeModal.addEventListener("click", function() {
 closeModal.addEventListener = 'block';
 instructions.style.display = 'block';
 introPage.style.display = 'block';
 closeRules();
} )

function closeRules() {
instructions.style.display = 'none';
introPage.style.display = 'block';
startButton.style.display = 'block';
myModal.style.display = 'block';
};


// starting the game 


