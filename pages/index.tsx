import type { NextPage } from "next";
import Equiz from "../components/example/Equiz";
import MenuList from "../components/MenuList";

const Home: NextPage = () => {
  return (
    <>
      <div className="text-center mt-4 mb-6">
        <h1 className="text-4xl font-semibold mb-1">Lets Play</h1>
        <p>Silahkan Pilih tema kuis</p>
      </div>
      <MenuList />
    </>
  );
};

export default Home;
