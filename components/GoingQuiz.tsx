import { useEffect, useState } from "react";
import Image from "next/image";
import { going } from "../utils/going";
import { useRouter } from "next/router";

const GoingQuiz = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    let interval: any = null;
    interval = setInterval(() => {
      if (seconds === 0) {
        clearInterval(interval);
      } else {
        setSeconds((seconds) => seconds - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

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
        <div className="h-80 w-full flex flex-col items-center justify-center">
          <Image
            src={
              score === going.length
                ? "/reaction/cool.png"
                : score >= going.length - 3
                ? "/reaction/yeay.png"
                : "/reaction/cry.png"
            }
            alt="Emoji"
            width={100}
            height={100}
          />
          <h2 className="text-4xl mt-6 mb-2">
            {score === going.length
              ? "Idih keren!!!"
              : score >= going.length - 2
              ? "Selamat!!!"
              : "Yhaa ..."}
          </h2>
          <p className="text-xl mb-6">Kamu betul : {score}</p>
          <button
            className="bg-neutral-50/50 mb-3 shadow-mengShadow border-neutral-50 border-[1.5px] rounded-xl px-5 py-2"
            onClick={() => router.push("/")}>
            Kembali ke Menu
          </button>
        </div>
      ) : (
        <div>
          {seconds > 0 ? (
            <div>
              <div className="ml-4 mb-2">
                <p>Sisa Waktu : {seconds}s</p>
                <span>Soal ke {currentQuestion + 1}</span> dari {going.length}
              </div>
              <p className="ml-4 mb-2 text-xl font-semibold text-center">
                &quot;{going[currentQuestion].question}&quot;
              </p>
              <div className="grid grid-cols-2 gap-2 mx-5">
                {going[currentQuestion].answerOptions.map((answerOption) => (
                  <button
                    key={Math.random()}
                    className="bg-neutral-50/50 mb-3 shadow-mengShadow border-neutral-50 border-[1.5px] rounded-xl px-5 py-2"
                    onClick={() =>
                      handleQuestionOptionClick(answerOption.isCorrect)
                    }>
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p>Times Up!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GoingQuiz;
