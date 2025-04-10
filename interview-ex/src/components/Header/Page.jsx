'use client';
import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter()
  return (
    <div className="h-full border-b border-gray-700 text-gray-300 flex flex-row justify-between px-20 items-center ">
      <div className="h-full ">
        <ul className="flex flex-row items-center h-full gap-10 text-[1.2em] ">
          <li className="text-[#4477CE] text-[1.6em]">InterviewXP</li>
          <li>Home</li>
          <li>Dashboard</li>
          <li>My Submissions</li>
        </ul>
      </div>
      <div className="h-full flex items-center w-20">

        <button className="bg-[#4477CE] w-full h-8 rounded-lg" onClick={()=> router.push('/signUp')} >SignIn</button>
      </div>
    </div>
  );
};

export default Header;
