import { NextPage } from "next";
import { useEffect, useState } from "react";
import { memberName } from "../utils/member-name";
import { svtThree } from "../utils/svt-three";
import { Checkbox } from "@material-tailwind/react";
import ShowScore from "./ui/ShowScore";

const TestArray: NextPage = () => {
  const [num, setNum] = useState(0);
  const [member, setMember] = useState<{ selections: string[] }>({
    selections: [],
  });
  const [correct, setCorrect] = useState(false);
  const [result, setResult] = useState(false);

  useEffect(() => {
    setNum(Math.floor(Math.random() * svtThree.length));
  }, []);

  const answerCorrect = svtThree[num].answerChoice;
  const handleChage = (key: string) => {
    let sel = member.selections;
    let find = sel.indexOf(key);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(key);
    }

    setMember({ selections: sel });
  };

  const checkQuestion = () => {
    setResult(true);
    if (answerCorrect.every((val) => member.selections.includes(val))) {
      setCorrect(true);
      console.log(true);
    }
  };

  return (
    <div>
      {result ? (
        <>
          {correct ? (
            <ShowScore
              image="/reaction/cool.png"
              heading="Yeay!"
              text="Cie tau."
            />
          ) : (
            <ShowScore
              image="/reaction/cry.png"
              heading="Yhaa"
              text="Jawabanmu kurang tepat."
            />
          )}
        </>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h2>{svtThree[num].question}</h2>
          <form className="grid grid-cols-2 gap-2 mx-5">
            {memberName.map(({ id, name }) => (
              <div key={id}>
                <label htmlFor={name}>
                  <Checkbox
                    color="blue"
                    type="checkbox"
                    name={name}
                    id={name}
                    value={id}
                    onChange={() => handleChage(id.toString())}
                    checked={member.selections.includes(name)}
                  />
                  {name}
                </label>
              </div>
            ))}
          </form>
          <p>{member.selections.toString()}</p>
          <button
            className="bg-neutral-50/50 mb-3 shadow-mengShadow border-neutral-50 border-[1.5px] rounded-xl px-5 py-2"
            onClick={checkQuestion}>
            Check
          </button>
        </div>
      )}
    </div>
  );
};
export default TestArray;
