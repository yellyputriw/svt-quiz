// Quiz berurutan dengan 1 pertanyaan

import React, { useState, useEffect } from "react";
import { DUMMY_DATA } from "../../utils/dummy-data";

const Quiz = () => {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [index, setIndex] = useState(0);

  const changeQuestion = () => {
    setIndex((prev) => prev + 1);
    setQuestion(DUMMY_DATA[index].question);
  };

  useEffect(() => {
    setQuestion(DUMMY_DATA[index].question);
  }, [question, index]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (DUMMY_DATA[index].answer === answer) {
      alert("Jawaban benar");
    } else {
      alert("jawaban salah");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>{question}</label>
        <input
          type="text"
          value={answer}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAnswer(e.target.value.toLowerCase())
          }
        />
        <button type="submit">Cek</button>
      </form>
      <button onClick={changeQuestion}>Ganti Pertanyaan</button>
    </div>
  );
};

export default Quiz;
