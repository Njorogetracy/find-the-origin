// declare variables

  let introPage = document.getElementById("intro");
  let myModal = document.getElementById("button-rule");
  let ruleBtn = document.getElementById("instructions");
  let closeModal = document.getElementById("close-rules");
  let restartGame = document.getElementById('button-restart');

  myModal.addEventListener("click", function () {
    console.log("you clicked a button");
    myModal.style.display = 'none';
    introPage.style.display = 'none';
    startButton.style.display = 'none';
    ruleBtn.style.display = 'block';
    restartGame.style.display ="none";
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

// load window on game start  
let startButton = document.getElementById("button-start");

window.onload = (event) => {
  startButton.addEventListener("click", startQuiz);
};

/**
 * This functions shuffles the questions in the array
 * and removes the question displayed after user plays
 */
function shuffleNum(){
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  let randomNumber = [];
  for (let i = 0; i<=9; i++) {
    let randomIndex = Math.floor(Math.random()* numbers.length);
    randomNumber.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }
return randomNumber;
 }
let shuffled = shuffleNum();
console.log(shuffled);

// start quiz
let e = 0;
let score = 0;
let countdown = 10;

/**
 * This function starts the quiz, 
 * on clicking the start button.
 * Displays the score area and the countdown timer for the quiz.
 * Increements the question. 
 */
function startQuiz(event) {
  let f = shuffled[e];
  let gameStart = document.getElementById("game");
    // game timer 
    if (e === 0 || countdown === 0) {
      const countdownInterval = setInterval(() => {
        console.log(countdown);
        countdown--;
        const timerDisplay = document.querySelector("h1#timer");
        timerDisplay.textContent = `Timer: ${countdown}`;
        if (countdown === 0) {
          clearInterval(countdownInterval);
          console.log("Countdown is over!");
          endGame(score);
        }
      }, 1000);
    }
  startButton.classList.add('hide');
  gameStart.innerHTML = `
    <div class="text-center text-light score-area">
      <strong>
    <h1>Score:${score}/10 </h1>
    <h1 id="timer">Timer: ${countdown} </h1>
    </strong>
  </div>
  <div class="game-space question-container container-fluid mt-4 text-center">
    <br>
    <div class="quiz-header">
        <h2 class="text-light question" id="questions">
            ${question[f].question}
        </h2>
        <br>
        <div class="btn-grp-vertical answer">
        </div>
    </div>
  </div>`;
  for (let i=0; i<4; i++) {
    let answerEd = question[f].answer[i].text;
    let answerButton = document.querySelector('.answer');
    if (question[f].answer[i].correct === "true") {
      answerButton.innerHTML+=`
    <button class="btn text-light btn-primary correct">${answerEd}</button>
     <br>`;
     console.log(answerEd);
    } else {
    answerButton.innerHTML+=`
    <button class="btn text-light btn-primary">${answerEd}</button>
     <br>`;
     console.log(answerEd);
  }
   } 
   e++;
   let answers = document.querySelectorAll('.btn');
     for (let j=0; j<4; j++) {
      answers[j].addEventListener("click", answerSelect);
   }
}

/**
 * This functions displays the correct answer 
 * after user selects and answer
 */
function answerSelect(event) {
  let selected = event.target;
  if (selected.classList.contains("correct")) {
    console.log("Correct!");
    score+=1;
    selected.style.backgroundColor = "green";
  } else {
    console.log("Wrong");
    selected.style.backgroundColor = "red";
    let correctAns = document.getElementsByClassName("correct")[0];
    console.log(correctAns);
    correctAns.style.backgroundColor = "green";
  }
  if (e != 0 || countdown != 0) {
    setTimeout(startQuiz, 1000); 
  } else {
   endGame(score);
  }
  
}

/**
 * This functions displays score anfter game ends
 */
function endGame(score) {
  let restartGame = document.querySelector('#button-restart');
  let gameStart = document.getElementById("game");
  gameStart.innerHTML = `
  <h1 class="heading text-center display-1 text-light">
    Lets get Quizycall!
  </h1>
  <div class="game-space question-container container-fluid mt-4  text-light text-center">
  <h1>THE END</h1>
  <h2> You're score is ${score}</h2>
  <button onclick="location.href='index.html'" type="button" class="btn btn-primary btn-lg" id="restart-game">Restart</button>
  </div>`;
  console.log(restartGame);

}






