import React from "react";

const Interviews = () => {
  return (
    <div className="">
      <div className="bg-[#18202F] mx-32 my-8 text-white py-8 px-4">
        <h2 className="text-[2em] font-semibold mb-8">
          Latest Interview Experiences
        </h2>
        <div className="w-full bg-[#202c3b] h-16 rounded-md flex flex-row items-center px-4">
          <div className="w-[70%] h-[80%] flex items-center">
            <input className="w-full h-[80%] rounded-md bg-[#374151]" />
          </div>
          <div className="w-[13%] mx-[1%] h-[80%] flex justify-center items-center rounded-md bg-[#374151]">
            <select className="w-full h-[80%]  text-white rounded-md pl-2 mr-8 bg-[#374151]">
              <option value="">All Countries</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
            </select>
          </div>
          <div className="w-[13%] mx-[1%] h-[80%] flex justify-center items-center rounded-md bg-[#374151]">
            <select className="w-full h-[80%]  text-white rounded-md px-2 bg-[#374151]">
              <option value="">All Companies</option>
              <option value="Google">Google</option>
              <option value="Amazon">Amazon</option>
              <option value="Microsoft">Microsoft</option>
              <option value="TCS">TCS</option>
              <option value="Infosys">Infosys</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interviews;
