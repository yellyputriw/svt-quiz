import { NextPage } from "next";
import { useState } from "react";
import { memberName } from "../../utils/member-name";
import { svtThree } from "../../utils/svt-three";

const TestArray: NextPage = () => {
  const [member, setMember] = useState<{ selections: string[] }>({
    selections: [],
  });
  const [correct, setCorrect] = useState(false);

  const answerCorrect = svtThree[0].answerChoice;
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
    if (
      answerCorrect[0] === member.selections[0] &&
      answerCorrect[1] === member.selections[1] &&
      answerCorrect[2] === member.selections[2]
    ) {
      setCorrect(true);
    }

    console.log(member.selections);
    console.log(answerCorrect);
  };

  return (
    <div>
      <form>
        {memberName.map(({ id, name }) => (
          <div key={id}>
            <input
              type="checkbox"
              name="SVT"
              id={name}
              value={id}
              onChange={() => handleChage(id.toString())}
              checked={member.selections.includes(name)}
            />
            <label htmlFor={name}>{name}</label>
          </div>
        ))}
      </form>
      <p>{member.selections.toString()}</p>
      <button
        className="bg-neutral-50/50 mb-3 shadow-mengShadow border-neutral-50 border-[1.5px] rounded-xl px-5 py-2"
        onClick={checkQuestion}>
        Next
      </button>
      <p>{correct ? "Betul" : "Salah"}</p>
    </div>
  );
};
export default TestArray;
