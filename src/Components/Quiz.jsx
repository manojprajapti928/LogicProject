// import React, { useState } from 'react';
// import './Quiz.css';

// const questions = [
//   // Mathematics
//   {
//     question: "What is the value of π (pi) to two decimal places?",
//     options: ["3.12", "3.14", "3.16", "3.18"],
//     correctAnswer: "3.14"
//   },
//   {
//     question: "What is the derivative of x^2 with respect to x?",
//     options: ["2x", "x^2", "x", "2"],
//     correctAnswer: "2x"
//   },
//   {
//     question: "What is the solution to the equation 2x + 3 = 7?",
//     options: ["x = 1", "x = 2", "x = 3", "x = 4"],
//     correctAnswer: "x = 2"
//   },
//   {
//     question: "What is the sum of the angles in a triangle?",
//     options: ["90°", "180°", "270°", "360°"],
//     correctAnswer: "180°"
//   }
// ];


// export default function Quiz() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [showScore, setShowScore] = useState(false);

//   const handleAnswerClick = (selectedAnswer) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = selectedAnswer;
//     setAnswers(newAnswers);
//   };

//   const handleNextQuestion = () => {
//     setCurrentQuestion((prev) => prev + 1);
//   };

//   const handlePreviousQuestion = () => {
//     setCurrentQuestion((prev) => prev - 1);
//   };

//   const handleSubmitQuiz = () => {
//     const score = answers.reduce((acc, answer, index) => {
//       return answer === questions[index].correctAnswer ? acc + 1 : acc;
//     }, 0);
//     setShowScore(true);
//     setAnswers(score);
//   };

//   return (
//     <div className="quiz-container">
//       <h1 className="quiz-title"> Quiz </h1>
//       <div>
      
//       {showScore ? (
//         <div className="score-section">
        
//           You scored {answers} out of {questions.length}
//         </div>
//       ) : (
//         <>
//           <div className="question-section">
//             <div className="question-count">
//               <span>Question {currentQuestion + 1}</span>/{questions.length}
//             </div>
//             <div className="question-text">{questions[currentQuestion].question}</div>
//           </div>
//           <div className="answer-section">
//             {questions[currentQuestion].options.map((option) => (
//               <button
//                 key={option}
//                 onClick={() => handleAnswerClick(option)}
//                 className={answers[currentQuestion] === option ? 'selected' : ''}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//           <div className="navigation-buttons">
//             <button
//               onClick={handlePreviousQuestion}
//               disabled={currentQuestion === 0}
//             >
//               Previous
//             </button>
//             {currentQuestion < questions.length - 1 ? (
//               <button
//                 onClick={handleNextQuestion}
//                 disabled={answers[currentQuestion] === null}
//               >
//                 Next
//               </button>
//             ) : (
//               <button
//                 onClick={handleSubmitQuiz}
//                 disabled={answers[currentQuestion] === null}
//               >
//                 Submit
//               </button>
//             )}
//           </div>
//         </>
//       )}
//       </div>
//     </div>
//   );
// }







import React, { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    question: "What is the value of π (pi) to two decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    correctAnswer: "3.14"
  },
  {
    question: "What is the derivative of x^2 with respect to x?",
    options: ["2x", "x^2", "x", "2"],
    correctAnswer: "2x"
  },
  {
    question: "What is the solution to the equation 2x + 3 = 7?",
    options: ["x = 1", "x = 2", "x = 3", "x = 4"],
    correctAnswer: "x = 2"
  },
  {
    question: "What is the sum of the angles in a triangle?",
    options: ["90°", "180°", "270°", "360°"],
    correctAnswer: "180°"
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedAnswer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const handleSubmitQuiz = () => {
    const calculatedScore = answers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);
    console.log('Calculated Score:', calculatedScore);
    setScore(calculatedScore);
    setShowScore(true);
  };

  return (
    <div className='quiz-main-container'>
    <div className="quiz-container">
      
      {showScore ? (
        <div className="score-section">
          <h1 className="quiz-title">Result</h1>
          <p>You scored {score} out of {questions.length}</p>
        </div>
      ) : (
        <>
          <div className="question-section">
          <h1 className="quiz-title">Quiz</h1>
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
                className={answers[currentQuestion] === option ? 'selected' : ''}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="navigation-buttons">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                disabled={answers[currentQuestion] === null}
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                disabled={answers[currentQuestion] === null}
              >
                Submit
              </button>
            )}
          </div>
        </>
      )}
    </div>
    </div>
  );
}
