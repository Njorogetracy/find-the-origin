// declare variables

  let introPage = document.getElementById("intro");
  let myModal = document.getElementById("button-rule");
  let ruleBtn = document.getElementById("instructions");
  let closeModal = document.getElementById("close-rules");
  let quizLoad = document.getElementsByClassName('question');
  let scoreElement = document.getElementsByClassName("scoreArea");

  myModal.addEventListener("click", function () {
    console.log("you clicked a button");
    myModal.style.display = 'none';
    introPage.style.display = 'none';
    startButton.style.display = 'none';
    ruleBtn.style.display = 'block';
    showInstructions();
    console.log('hey modal');
  });

  function showInstructions() {
    ruleBtn.style.display = 'block';
    console.log('show rules');
  }

  closeModal.addEventListener("click", function () {
    closeModal.addEventListener = 'block';
    instructions.style.display = 'block';
    introPage.style.display = 'block';
    closeRules();
  });

  function closeRules() {
    instructions.style.display = 'none';
    introPage.style.display = 'block';
    startButton.style.display = 'block';
    myModal.style.display = 'block';
  }


// start quiz

let startButton = document.getElementById("button-start");

window.onload = (event) => {
  startButton.addEventListener("click", startQuiz);
};


// start quiz
let e = 0;
function startQuiz(event) {
  let gameStart = document.getElementById("game");
  startButton.classList.add('hide');
  gameStart.innerHTML = `
    <div class="text-center text-light score-area">
    <p>
        <strong>
            Score
        </strong>
    </p>
    <h1>0</h1>
  </div>
  <div class="game-space question-container container-fluid col-6 mt-4 text-center">
    <br>
    <div class="quiz-header">
        <h2 class="text-light question" id="questions">
            ${question[e].question}
        </h2>
        <br>
        <div class="btn-group-vertical answer">
        </div>
    </div>
  </div>`;
  for (let i=0; i<4; i++) {
    let answerEd = question[e].answer[i].text;
    let answerButton = document.querySelector('.answer');
    answerButton.innerHTML+=`
    <div class="btn btn-primary btn-lg answer"id="answer">${answerEd}</div>
     <br>`;
   };

   let answers = document.querySelectorAll('.answer');
     for (let j=0; j<9; j++) {
      answers[j].addEventListener("click", answerSelect);
      e++;
   };
  
}

function answerSelect(event) {
  let correctAnswer = event.target.correct;
  if (correctAnswer) {
    console.log("correct");
    event.target.style.backgroundColor = "green";
 } else {
  console.log("wrong");
   event.target.style.backgroundColor = "red"
   };
   setTimeout(startQuiz, 1000);
   console.log(correctAnswer);
}


