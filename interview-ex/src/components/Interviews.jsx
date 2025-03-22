import InfoCard from "@/components/InfoCard";
import React from "react";

const Interviews = () => {
  return (
    <div className="">
      <div className="bg-[#18202F] mx-32 my-8 text-white py-8 px-4 ">
        <h2 className="text-[2em] font-semibold mb-8">
          Latest Interview Experiences
        </h2>
        <div className="w-full bg-[#202c3b] h-16 rounded-md flex flex-row items-center gap-1 px-4 my-8">
          <div className="w-[70%] h-[80%] flex items-center">
            <input
              className="w-full h-[80%] rounded-md bg-[#374151] px-2 text-[1.2em]"
              placeholder="Search by company or a keywords ..."
            />
          </div>
          <div className="w-[13%] mx-[1%] h-[80%] flex justify-center items-center ">
            <select className="w-full h-[80%]  px-2 rounded-md  bg-[#374151] text-[1.1em] text-gray-400">
              <option value="">All Countries</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
            </select>
          </div>
          <div className="w-[13%] mx-[1%] h-[80%] flex justify-center items-center  ">
            <select className="w-full h-[80%] rounded-md pr-2 bg-[#374151] text-[1.1em] px-2 text-gray-400">
              <option value="">All Companies</option>
              <option value="Google">Google</option>
              <option value="Amazon">Amazon</option>
              <option value="Microsoft">Microsoft</option>
              <option value="TCS">TCS</option>
              <option value="Infosys">Infosys</option>
            </select>
          </div>
        </div>
        <hr className="w-full h-1 color-gray-400" />
        <div className="my-4 grid grid-cols-3 gap-6">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </div>
  );
};

export default Interviews;
