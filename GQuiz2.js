const questions = [
    {
      question: "How do you say Hello in German?",
      
      choices: ["Guten Tag",
      "Auf Wiedersehen",
      "Hallo",
      " Bitte"],
  
      correct: 2
    },
    {
      question:
        "What is the word for yes in German?",
      choices: ["Nein", "Jaa", "Bitte","Entschuldigung"],
      correct: 2
    },
    {
      question: "Lückentext (Fill in the Blank): Ich spreche __ Deutsch?",
      choices: ["ein bisschen (a little)",
      "kein (no)",
      "gerne (gladly)"],
      
      correct: 0
    },
    {
      question:
        "Was ist die Vergangenheitsform von essen (to eat)?",
      choices: ["gefrühstückt (had breakfast)",
      " gemacht (made)",
      " gegessen (eaten)"],
      
      correct: 2
    },
    {
      question:
        "Lückentext: Wähle die passende Präposition für den Satz: Der Stift liegt __ dem Tisch. (Choose the appropriate preposition for the sentence: The pen is on the table.)?",
   
      choices: ["in (in)",
      "auf (on)", "neben (next to)"
      ],
      correct: 1
    },
    {
      question:
        ".Richtig oder Falsch (True or False): Apfel bedeutet Apfel auf Deutsch. (Apple means apple in German.?",
       
      choices: ["Richtig (True)",
      "Falsch (False)",
       "None"],
      correct: 0
    }
    // Add more questions here...
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
            window.location.href = "GL1.html";
          }, 2000); // Redirect after 2 seconds (adjust as needed)
        }
      }, 1000);
    }
  
  showQuestion();
  