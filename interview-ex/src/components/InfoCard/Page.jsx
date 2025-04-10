import React from "react";
import Image from "next/image";
const data = {
  name: "Ayush Sahu",
  role: "Software Developer",
  company: "XYZ",
  description:
    "I interviewed for a software role where I was tested on React.js, Node.js, and problem-solving. The technical round focused on DSA, system design, and backend concepts like APIs and databases.",
  location: "Faridabad",
  country: "India",
  time: "2 hours ago",
};

const InfoCard = () => {
  return (
    <div className="w-[400px] bg-[#202c3b] text-white rounded-lg p-4 shadow-lg relative">
      <div className="flex items-center gap-3 my-4">
        <Image
          src="/assets/AyushSahuImg.jpg"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{data.name}</h2>
          <p className="text-sm text-gray-400">
            {data.role} at {data.company}
          </p>
        </div>
        <span className="ml-auto bg-green-500 text-black text-xs px-3 py-1 rounded-full">
          New
        </span>
      </div>
      <p className=" text-gray-300 mt-2 line-clamp-2 leading-1 overflow-hidden my-4">
        {data.description}
      </p>
      <div className="flex items-center justify-between text-gray-400 text-[0.9em] mt-8">
        <span>⏳ {data.time}</span>
        <span>
          📍 {data.location}, {data.country}{" "}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
