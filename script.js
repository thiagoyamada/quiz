const quizQuestions = [
  {
    question: "Que país tem o formato de uma bota?",
    options: ["Portugal", "Itália", "México", "Butão"],
    correctAnswer: "Itália"
  },
  {
    question: "Em que país foi inventado o chuveiro elétrico?",
    options: ["França", "Inglaterra", "Brasil", "Austrália"],
    correctAnswer: "Brasil"
  },
  {
    question: "Quanto tempo a luz do Sol demora para chegar à Terra?",
    options: ["12 minutos", "12 horas", "8 minutos", "12 segundos"],
    correctAnswer: "8 minutos"
  },
  {
    question: "Qual a montanha mais alta do Brasil",
    options: ["Pico da Neblina", "Pico Paraná", "Pico da Bandeira", "Monte Roraima"],
    correctAnswer: "Pico da Neblina"
  },
  {
    question: "As pessoas de qual tipo sanguíneo são consideradas doadores universais?",
    options: ["A", "B", "O", "AB"],
    correctAnswer: "O"
  },
  {
    question: "Quantos planetas Terra cabem dentro do Sol?",
    options: ["Um milhão", "Cem", "Seiscentos", "Cento e cinquenta"],
    correctAnswer: "Um milhão"
  },
  {
    question: "Quantos dias, aproximadamente, a Lua demora para dar uma volta à Terra?",
    options: ["365 dias", "28 dias", "31 dias", "1 dia"],
    correctAnswer: "28 dias"
  },
  {
    question: "Quantos fusos horários existem na Rússia?",
    options: ["8", "9", "10", "11"],
    correctAnswer: "11"
  },
  {
    question: "Que país sediará as Olimpíadas de 2024",
    options: ["França", "EUA", "Catar", "Austrália"],
    correctAnswer: "França"
  },
  {
    question: "Normalmente, quantos litros de sangue uma pessoa tem?",
    options: ["2 a 4 litros", "4 a 6 litros", "10 litros", "7 litros"],
    correctAnswer: "4 a 6 litros"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

function startQuiz() {
  document.getElementById("start-button").style.display = "none";
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");

  questionText.innerHTML = "";
  answerButtons.innerHTML = "";

  questionText.innerHTML = currentQuestion.question;

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

    button.addEventListener("click", function () {
      checkAnswer(option);
    });
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timerInterval = setInterval(function () {
    timeLeft--;

    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);

  const scorePercentage = (score / quizQuestions.length) * 100;

  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h2>Quiz Completo!</h2>
    <p>Seu placar: ${score} de ${quizQuestions.length}</p>
    <p>Porcentagem de acerto: ${scorePercentage}%</p>
  `;
}

document.getElementById("start-button").addEventListener("click", startQuiz);