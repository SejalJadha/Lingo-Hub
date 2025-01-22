const questions = [
  {
    question: "Comment dit-on Au revoir en français ?",
    choices: ["Au revoir", "Adieu", "Salut"],
    correct: 0
  },
  {
    question: "Combien de voyelles y a-t-il dans l'alphabet français?",
    choices: ["5", "6", "7"],
    correct: 1
  },
  {
    question: "Quel est le nombre qui suit immédiatement 20 en français?",
    choices: ["21", "22", "23"],
    correct: 0
  },
  {
    question: "Comment écrit-on le chiffre 100 en lettres en français?",
    choices: ["Cent", "Deux cents", "Mille"],
    correct: 0
  },
  {
    question: "Quelle est la quatrième lettre de l'alphabet français?",
    choices: ["D", "E", "F"],
    correct: 1
  }
];

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
  const questionText = document.getElementById("question-text");
  questionText.textContent = questions[currentQuestion].question;

  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice, index) => {
    choice.textContent = questions[currentQuestion].choices[index];
  });

  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
}

function checkAnswer(selected) {
  const feedback = document.getElementById("feedback");
  if (selected === questions[currentQuestion].correct) {
    feedback.textContent = "Correct!";
    correctAnswers++;
  } else {
    feedback.textContent = "Incorrect!";
  }

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      // Display final score
      const quizContainer = document.querySelector(".quiz-container");
      quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
      
      // Redirect to Falpha.html after displaying final score
      setTimeout(() => {
        window.location.href = "Falpha.html";
      }, 2000); // Redirect after 2 seconds (adjust as needed)
    }
  }, 1000);
}

showQuestion();
