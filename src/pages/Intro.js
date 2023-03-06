import React from "react";
import memoji from "../img/memoji.png";
import NavArrow from "../components/NavArrow";

function Intro() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Head */}
        <div className="relative flex h-[200px] w-[200px] items-center justify-center rounded-full bg-gray-300 shadow-apple">
          <img src={memoji} className="w-[55%]" alt="" />
          <div className="absolute bottom-0 right-0 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-3xl shadow-apple">
            <span>🚀</span>
          </div>
        </div>
        {/* Introdution */}
        <div className="max-w-[100%] lg:max-w-[30%] rounded-[30px] px-10 py-8 shadow-apple ">
          <h3 className="text-2xl font-semibold">I am a student 👨🏻‍💻</h3>
          <p className="my-2 font-inter text-grayed">
            I just graduated high school and now I'm super excited to be
            starting my college journey at Chulalongkorn University, studying
            computer engineering and digital technology (CEDT). Looking forward
            to what the future holds!
          </p>
          <a href="https://www.chula.ac.th/en/" className="link font-medium underline">
            Take me to the Chulalongkorn University <NavArrow />
          </a>
          
          
        </div>
      </div>
    </>
  );
}

export default Intro;
