// declare variables

  let introPage = document.getElementById("intro");
  let myModal = document.getElementById("button-rule")
  let ruleBtn = document.getElementById("instructions")
  let closeModal = document.getElementById("close-rules")
  let quizLoad = document.getElementsByClassName('question');
  //let answerButton1 = document.getElementById("answer1");
  //let answerButton2 = document.getElementById("answer2");
  //let answerButton3 = document.getElementById("answer3");
  //let answerButton4 = document.getElementById("answer4");
  let scoreElement = document.getElementsByClassName("scoreArea");

  myModal.addEventListener("click", function () {
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

  closeModal.addEventListener("click", function () {
    closeModal.addEventListener = 'block';
    instructions.style.display = 'block';
    introPage.style.display = 'block';
    closeRules();
  })

  function closeRules() {
    instructions.style.display = 'none';
    introPage.style.display = 'block';
    startButton.style.display = 'block';
    myModal.style.display = 'block';
  };


// start quiz

let startButton = document.getElementById("button-start")

window.onload = (event) => {
  startButton.addEventListener("click", startQuiz)
}

// start quiz
let e = 0;
function startQuiz(event) {
  let gameStart = document.getElementById("game")
  startButton.classList.add('hide')
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
        `
          for (let i=0; i<4; i++) {
           let answerEd = question[e].answer[i].text;
           gameStart.innerHTML+=`
           <button class="btn btn-lg text-light btn-primary"id="answer1">${answerEd}</button>
            <br>`
        }
           gameStart.innerHTML+= `
        </div>
    </div>
  </div>`

  let answers = document.getElementsByClassName('btn');
 //listener for answer button 
   for (let j=0; j<4; j++) {
      answers[j].addEventListener('click', answerSelect);
       e++;
   }
}

function answerSelect(event) {
   setTimeout(startQuiz, 3000);

}

// shuffle questions

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let randomNumber = [];
  for (let i = 0; i<9; i++) {
    let randomIndex = Math.floor(Math.random()* numbers.length);
    randomNumber.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }
