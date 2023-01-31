//Getting elements from the Dom

let introPage = document.getElementById("intro");
let ruleModal = document.getElementById("button-rule")
let ruleBtn = document.getElementById("instructions")
let closeModal = document.getElementById("close-rules")
let rulesText = document.getElementsByClassName("modal-header")
let startButton = document.getElementById("button-start")
let quizLoad = document.getElementsByClassName('question-container');
let answerButton1 = document.getElementById("answer1");
let answerButton2 = document.getElementById("answer2");
let answerButton3 = document.getElementById("answer3");
let answerButton4 = document.getElementById("answer4");
let scoreElement = document.getElementsByClassName("scoreArea");


// Modal with instructions
ruleModal.addEventListener('click', function() {
  ruleModal.style.display = 'none';
  introPage.style.display = 'none';
  startButton.style.display = 'none'
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
 instructions.style.display = 'block';
 introPage.style.display = 'block';
 closeRules();
} )

function closeRules() {
instructions.style.display = 'none';
introPage.style.display = 'block';
startButton.style.display = 'block';
ruleModal.style.display = 'block';
};