import React from "react";

const Center = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-[90vh] gap-4">
      <h1 className="text-[3em] font-bold ">
        Share Your Interview Experience
      </h1>
      
      <div className="flex flex-col items-center mx-4">
        <h2 className="text-[1.3em] leading-none font-sans tracking-widest">
          Help others prepare better by sharing your experiences.
        </h2>
        <h2 className="text-[1.3em] leading-none font-sans tracking-widest ">
          Learn from real experiences shared by the community.
        </h2>
      </div>
      <button className="bg-[#4477CE] px-6 py-3 rounded-lg text-[1.2em] mt-8">Submit your experience</button>
    </div>
  );
};

export default Center;
