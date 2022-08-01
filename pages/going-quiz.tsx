import type { NextPage } from "next";
import Footer from "../components/Footer";
import GoingQuiz from "../components/GoingQuiz";

const Going: NextPage = () => {
  return (
    <>
      <div className="text-center mt-4 mb-6">
        <h1 className="text-4xl font-semibold mb-1">Lets Play</h1>
        <p>Pilih Jawaban sesuai hint yaaa</p>
      </div>
      <GoingQuiz />
      <Footer />
    </>
  );
};

export default Going;
