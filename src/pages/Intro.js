import React from "react";
import memoji from "../img/memoji.png";
import NavArrow from "../components/NavArrow";

function Intro() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
        {/* Head */}
        <div className="relative flex h-[250px] w-[250px] items-center justify-center rounded-full bg-gray-300 shadow-apple">
          <img src={memoji} className="w-[60%]" alt="" />
          <div className="absolute bottom-0 right-0 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white text-5xl shadow-apple">
            <span>🚀</span>
          </div>
        </div>
        {/* Introdution */}
        <div className="max-w-[100%] rounded-[30px] px-10 py-8 shadow-apple lg:max-w-[30%] ">
          <h3 className="text-2xl font-semibold">I am a student 👨🏻‍💻</h3>
          <p className="my-2 font-inter text-grayed">
            I just graduated high school and now I'm super excited to be
            starting my college journey at Chulalongkorn University, studying
            computer engineering and digital technology (CEDT). Looking forward
            to what the future holds!
          </p>
          <a
            href="https://www.chula.ac.th/en/"
            rel="noreferrer noopener"
            target="_blank"
            className="link font-medium underline"
          >
            Take me to the Chulalongkorn University <NavArrow />
          </a>
        </div>
      </div>
    </>
  );
}

export default Intro;
