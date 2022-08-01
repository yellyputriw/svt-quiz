import React, { useState, useEffect } from "react";
import { DUMMY_DATA } from "../utils/dummy-data";

const RandomQuiz = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [num, setNum] = useState(0);

  const changeQuestion = () => {
    const randomNumber = Math.floor(Math.random() * DUMMY_DATA.length);
    setNum(randomNumber);
    setQuestion(DUMMY_DATA[num].question);
  };

  useEffect(() => {
    setQuestion(DUMMY_DATA[num].question);
  }, [num, question]);

  const checkAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (DUMMY_DATA[num].answer === answer) {
      alert("Jawaban Benar");
    } else {
      alert("Jawaban Salah!");
    }
  };

  return (
    <div>
      <form onSubmit={checkAnswer}>
        <label>{question}</label>
        <input
          type="text"
          value={answer}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.target.value.toLowerCase();
          }}
        />
        <button type="submit">Check</button>
      </form>
      <button onClick={changeQuestion}>Change Question</button>
    </div>
  );
};

export default RandomQuiz;
