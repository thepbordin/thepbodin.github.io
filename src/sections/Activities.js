import React from "react";
import NavArrow from "../components/NavArrow";
import streamlit from "../img/streamlit.png";
function Activities() {
  const Activity_card = ({ title, date, desc, repo, img }) => {
    return (
      <div className="flex-col sm:flex-row flex items-center justify-between gap-10 rounded-[30px] px-10 py-8 shadow-apple">
        <div className="lg:w-1/2">
          <h5 className="text-grayed">{date}</h5>
          <h4 className="text-xl font-medium">{title}</h4>
          <p className="my-2 text-grayed">{desc}</p>
          <a
            href={repo}
            rel="noreferrer noopener"
            target="_blank"
            className="link font-medium hover:underline"
          >
            Github Repository <NavArrow />
          </a>
        </div>
        <div className="grid aspect-square h-[160px] place-items-center rounded-[30px] bg-gray-300 object-cover shadow-apple">
          <img src={img} className="scale-90" alt="" />
        </div>
      </div>
    );
  };
  return (
    <>
      <h3 className="my-5 text-2xl font-medium">My Recent Activities</h3>
      {/* Activities Cards Container */}
      <div className="flex max-w-full flex-col gap-5">
        {/* Cards */}
        <Activity_card
          date="June 2023"
          title="Streamlit Template for YOLOv5 Model Deploying"
          desc="A streamlit framework template for YOLOv5 model deploying."
          repo="https://github.com/thepbordin/YOLOv5-Streamlit-Deployment"
          img={streamlit}
        />
        <Activity_card
          date="June 2023"
          title="Streamlit Template for YOLOv5 Model Deploying"
          desc="A streamlit framework template for YOLOv5 model deploying."
          repo="https://github.com/thepbordin/YOLOv5-Streamlit-Deployment"
          img={streamlit}
        />
      </div>
    </>
  );
}

export default Activities;
