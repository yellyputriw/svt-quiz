import React, { useState } from "react";
import { memberName } from "../utils/member-name";
import { svtThree } from "../utils/svt-three";

export interface IMember {
  languages: string;
  value: string;
}

const SVTthree = () => {
  const [member, setMember] = useState<string[]>([]);
  const [correct, setCorrect] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (e.target.checked) {
      setMember([...member, value]);
      console.log(member);
    } else {
      setMember(member.filter((m) => m !== value));
    }
  };

  const checkQuestion = () => {
    if (svtThree[0].answerChoice === member) {
      setCorrect(true);
    }
    console.log(correct);
  };

  return (
    <div>
      <form>
        {memberName.map((member) => (
          <div key={Math.random()}>
            <input
              type="checkbox"
              name="SVT"
              id={member.name}
              value={member.id}
              onChange={handleChange}
            />
            <label htmlFor={member.name}>{member.name}</label>
          </div>
        ))}
      </form>
      <p>{member}</p>
      <button
        className="bg-neutral-50/50 mb-3 shadow-mengShadow border-neutral-50 border-[1.5px] rounded-xl px-5 py-2"
        onClick={checkQuestion}>
        Next
      </button>
    </div>
  );
};

export default SVTthree;
