const questions = [
    {
        question: "Qual o nome do jogador?",
        image:"https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
        answers: [
            { text: "Stephen Curry", correct: true},
            { text: "LeBron James", correct: false},
            { text: "Trae Young", correct: false},
            { text: "Jayson Tatum", correct: false},
        ]
    },
    {
        question: "Qual o nome do jogador?",
        image:"https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
        answers: [
            { text: "Stephen Curry", correct: false},
            { text: "LeBron James", correct: true},
            { text: "Trae Young", correct: false},
            { text: "Jayson Tatum", correct: false},
        ]
    },
    {
        question: "Qual o nome do jogador?",
        image:"https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png",
        answers: [
            { text: "Stephen Curry", correct: false},
            { text: "LeBron James", correct: false},
            { text: "Trae Young", correct: true},
            { text: "Jayson Tatum", correct: false},
        ]
    },
    {
        question: "Qual o nome do jogador?",
        image:"https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png",
        answers: [
            { text: "Stephen Curry", correct: false},
            { text: "LeBron James", correct: false},
            { text: "Trae Young", correct: false},
            { text: "Jayson Tatum", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const imageElement = document.querySelector(".quiz-image");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    imageElement.style.display = "block";
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    imageElement.src = currentQuestion.image;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
     const button = document.createElement("button");
     button.innerHTML = answer.text;
     button.classList.add("btn");
     answerButtons.appendChild(button);
     if(answer.correct) {
        button.dataset.correct = answer.correct;
     }
     button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer (e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    imageElement.style.display = "none";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
