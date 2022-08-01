import { useState } from "react";
import { going } from "../../utils/going";

const Equiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuestionOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < going.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          <p>
            Kamu benar {score} dari {going.length} soal
          </p>
        </div>
      ) : (
        <div>
          <p>
            <span>Pertanyaan ke {currentQuestion + 1}</span> dari {going.length}
          </p>
          <p>{going[currentQuestion].question}</p>
          <div>
            {going[currentQuestion].answerOptions.map((answerOption) => (
              <button
                key={Math.random()}
                onClick={() =>
                  handleQuestionOptionClick(answerOption.isCorrect)
                }>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Equiz;
