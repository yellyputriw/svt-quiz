import { NextPage } from "next";
import SVTthree from "../components/SVTthree";

const SVTThreePage: NextPage = () => {
  return (
    <>
      <div className="text-center mt-4 mb-6">
        <h1 className="text-4xl font-semibold mb-1">Lets Play</h1>
        <p>Pilih 3 member sesuai hint yaaa</p>
      </div>
      <SVTthree />
    </>
  );
};

export default SVTThreePage;
