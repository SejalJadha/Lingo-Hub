const questions = [
    {
      question: "How many letters does the German alphabet have??",
      choices: ["26 (same as English)", "24", "30"],
      correct: 0
    },
    {
      question:
        "How is the letter 'ß' (Eszett) pronounced in German??",
      choices: [" Like s in sun", "Like ss in miss ", "Like sh in ship"],
      correct: 1
    },
    {
      question: "What are the three Umlaute (diacritic vowels) found in the German alphabet?",
      choices: ["Ä, Ö, Ü", " À, É, Ï", "Â, Ê, Ô"],
      correct: 0
    },
    {
      question:
        "Which German word refers to a single letter of the alphabet?",
      choices: ["der Buchstabe", "das Wort", " die Silbe "],
      correct: 0
    },
    {
      question:
        "What is the German word for alphabet?",
      choices: ["die Buchstaben", "der Satz", "das Wort"],
      correct: 0
    },
    {
      question:
        "What is the most common way to order the alphabet in German?",
      choices: ["Alphabetisch ", "Von A bis Z ", " Nach Reihenfolge "],
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
  