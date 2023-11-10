const questions = [
    {
        question: "Qual o nome do jogador?",
        answers: [
            { text: "Curry", correct: true},
            { text: "Lebron", correct: false},
            { text: "Trae", correct: false},
            { text: "Tatum", correct: false},
        ]
    },
    {
        question: "Qual o nome do jogador?",
        answers: [
            { text: "Curry", correct: false},
            { text: "Lebron", correct: true},
            { text: "Trae", correct: false},
            { text: "Tatum", correct: false},
        ]
    },
    {
        question: "Qual o nome do jogador?",
        answers: [
            { text: "Curry", correct: false},
            { text: "Lebron", correct: false},
            { text: "Trae", correct: true},
            { text: "Tatum", correct: false},
        ]
    },
    {
        question: "Qual o nome do jogador?",
        answers: [
            { text: "Curry", correct: false},
            { text: "Lebron", correct: false},
            { text: "Trae", correct: false},
            { text: "Tatum", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
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
    }else{
        selectedBtn.classList.add("incorrect");
    }
}
startQuiz();
