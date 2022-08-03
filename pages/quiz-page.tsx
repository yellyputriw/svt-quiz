import { NextPage } from "next";
import Quiz from "../components/example/Quiz";
import RandomQuiz from "../components/RandomQuiz";

const QuizPage: NextPage = () => {
  return (
    <>
      <Quiz />
      <RandomQuiz />
    </>
  );
};

export default QuizPage;
