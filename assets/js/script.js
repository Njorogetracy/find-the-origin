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
    ruleBtn.style.display = 'block';
    introPage.style.display = 'block';
    closeRules();
  });

  function closeRules() {
    ruleBtn.style.display = 'none';
    introPage.style.display = 'block';
    startButton.style.display = 'block';
    myModal.style.display = 'block';
  }

let startButton = document.getElementById("button-start");

window.onload = (event) => {
  startButton.addEventListener("click", startQuiz);
};

function shuffleNum(){
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  let randomNumber = [];
  for (let i = 0; i<=9; i++) {
    let randomIndex = Math.floor(Math.random()* numbers.length);
    randomNumber.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }
return randomNumber
 }
let shuffled = shuffleNum()
console.log(shuffled)

// start quiz
let e = 0;
let score = 0;
function startQuiz(event) {
  let f = shuffled[e]
  let gameStart = document.getElementById("game");
  if (e === 10) {
    gameStart.innerHTML = `
    <h1> Game Over </h1>
    <h2> Your score is ${score}</h2>
    `
  } 
  startButton.classList.add('hide');
  gameStart.innerHTML = `
    <div class="text-center text-light score-area">
    <p>
        <strong>
            Score
        </strong>
    </p>
    <h1>${score}</h1>
  </div>
  <div class="game-space question-container container-fluid col-6 mt-4 text-center">
    <br>
    <div class="quiz-header">
        <h2 class="text-light question" id="questions">
            ${question[f].question}
        </h2>
        <br>
        <div class="btn-group-vertical answer">
        </div>
    </div>
  </div>`;
  for (let i=0; i<4; i++) {
    let answerEd = question[f].answer[i].text;
    let answerButton = document.querySelector('.answer');
    if (question[f].answer[i].correct === "true") {
      answerButton.innerHTML+=`
    <button class="btn btn-lg text-light btn-primary correct">${answerEd}</button>
     <br>`;
     console.log(answerEd)
    } else {
    answerButton.innerHTML+=`
    <button class="btn btn-lg text-light btn-primary">${answerEd}</button>
     <br>`;
     console.log(answerEd) }
   };
   let answers = document.querySelectorAll('.btn');
     for (let j=0; j<4; j++) {
      answers[j].addEventListener("click", answerSelect);
   };
   e++;
}

function answerSelect(event) {
  let selected = event.target;
  if (selected.classList.contains("correct")) {
    console.log("Correct!");
    score+=1;
    selected.style.backgroundColor = "green";
  } else {
    console.log("Wrong");
    selected.style.backgroundColor = "red";
  }
  setTimeout(startQuiz, 1000);
}





