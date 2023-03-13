import React from "react";
import { FaPython } from "react-icons/fa";

function Skills() {
  return (
    <>
      <h3>My Skills</h3>
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-[30px] shadow-apple">
          <FaPython size={70} className="text-grayed" />
          {/* <p className="my-2">Python</p> */}
        </div>
      </div>
    </>
  );
}

export default Skills;
