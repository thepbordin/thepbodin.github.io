import React from "react";
import NavArrow from "../components/NavArrow";
import codekathon from "../img/codekathon.jpg";
import hackathailand from "../img/hackathailand.jpg";
function Awards() {
  const Award_Card = ({ title, date, desc, web, img, sty }) => {
    return (
      <div className="flex flex-col items-center justify-between gap-10 rounded-[30px] px-10 py-8 shadow-apple sm:flex-row">
        <div className="">
          <h5 className="text-grayed">{date}</h5>
          <h4 className="text-xl font-medium">{title}</h4>
          <p className="mb-2 text-grayed">{desc}</p>
          <a
            href={web}
            rel="noreferrer noopener"
            target="_blank"
            className="link font-medium hover:underline hover:cursor-pointer"
          >
            Read More<NavArrow />
          </a>
        </div>
        <div className="grid aspect-square h-[160px] place-items-center rounded-[30px] bg-gray-200 object shadow-apple overflow-hidden">
          <img src={img} className={`scale-100 object-cover ${sty}`} alt="" />{" "}
          {/*hover:scale-105 transition-all duration-150 ease-out */}
        </div>
      </div>
    );
  };
  return (
    <>
      <h3 className="my-5 text-2xl font-medium">My Recent Awards</h3>
      {/* Activities Cards Container */}
      <div className="flex max-w-full flex-col gap-5">
        {/* Cards */}
        <Award_Card
          date="Aug · 2023"
          title="Winner award HACKaThailand 2023 (Digital Youth Network)"
          desc="by depa (Digital Economy Promotion Agency), MDES Thailand"
          repo="https://github.com/thepbordin/YOLOv5-Streamlit-Deployment"
          img={hackathailand}
          sty=""
        />
        <Award_Card
          date="Aug · 2022"
          title="Winner (Best of the Best) Award CODEKATHON 2022"
          desc="by depa, Mahasarakham University · Aug 2020"
          repo="https://github.com/thepbordin/Obstacle-Detection-for-Blind-people"
          img={codekathon}
          sty="h-full"
        />
      </div>
    </>
  );
}

export default Awards;
