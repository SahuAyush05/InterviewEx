import React from "react";

const Footer = () => {
  return (
    <div className="h-full px-24 py-4 flex flex-col text-white justify-between w-full ">
      <div className="flex flex-row  justify-center w-full gap-4 mb-4">
        <div className="flex flex-col gap-1w-[25%] mr-8">
          <p className="font-bold text-[1.1em]">Interview XP</p>
          <p className="text-gray-400">Share and learn from real interview experiences</p>
        </div>
        <ul className="flex flex-col gap-1 w-[25%]">
          <li className="font-bold text-[1.1em]">Quick Links</li>
          <li className="text-gray-400">Home</li>
          <li className="text-gray-400">Dashboard</li>
          <li className="text-gray-400">Submit Experience</li>
        </ul>
        <ul className="flex flex-col gap-1 w-[25%]">
          <li className="font-bold text-[1.1em]">Resources</li>
          <li className="text-gray-400">FAQ</li>
          <li className="text-gray-400">Support</li>
        </ul>
        <div className="flex flex-col gap-1 w-[25%]">
          <p className="font-bold text-[1.1em]">Follow us</p>
        </div>
      </div>
      <hr className="w-full"/>
      <div className="flex items-center justify-center mt-4">
        <p className="text-gray-400">2025 Interview XP. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
