const questions = [
    {
      question: "Comment dit-on Au revoir en français ?",
      choices: ["Bonjour (Hello)",
     " Au revoir (Goodbye)",
   " Merci (Thank you)"],
      correct: 1
    },
    {
      question:
        "Complétez la phrase (Fill in the Blank): Je m'appelle ___",
      choices: [" Comment (How)",
       "David (David)",
        "s'il vous plait (please)"],
      correct: 1
    },
    {
      question: "Correspondance (Matching): Associez les couleurs à leurs mots français. (Match the colors with their French words.)?", 
      choices: ["Red (rouge)",
     " Yellow (jaune)",
     "Blue (bleu), Green (vert), Red (rouge)"],
      correct: 2
    },
    {
      question:
        "Quel est le féminin de grand (big) ?",
        
      choices: ["dpetit ", "grande", "jolie"],
      correct: 1
    },
    {
      question:
        "Complétez la phrase: Je voudrais __ une pomme.?",
        
      choices: ["commander", "acheter", "parler "],
      correct: 1
    },
    // {
    //   question:
    //     "What is the most common way to order the alphabet in German?",
    //   choices: ["Alphabetisch ", "Von A bis Z ", " Nach Reihenfolge "],
    //   correct: 0
    // }
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
            window.location.href = "index.html";
          }, 2000); // Redirect after 2 seconds (adjust as needed)
        }
      }, 1000);
    }
  
  showQuestion();
  