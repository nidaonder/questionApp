import React from "react";

function Results({ userAnswer, correctAnswer, wrongAnswer }) {
  return (
    <div className="results">
      <div>
        <h2>Results</h2>
        <p>True = {correctAnswer}</p>
        <p>False = {wrongAnswer}</p>
      </div>
      <div>
        <h3>Answer Reviews</h3>
        <ul>
          {userAnswer.map((answer, index) => (
            <li key={index}>
              Question {answer.questionId}: Your Answer - {answer.answer} (
              {answer.isCorrect ? "True" : "False"})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Results;
