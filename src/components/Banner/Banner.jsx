import React from "react";
import bgVector from "../../assets/vector1.png";
const Banner = ({tasks,resolved}) => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center px-6 md:px-16 lg:px-24 py-14 gap-6">

    
      <div className="flex-1 h-60 w-full grid grid-cols-3 items-center mx-auto max-md:mx-2 max-md:px-2 text-center rounded-2xl border bg-linear-to-br from-[#422AD5] to-[#6D5DF6]">
        <img src={bgVector} alt="bg-vector" className="object-cover h-full "/> 
        <div className="w-full py-6">
          <h1 className="text-2xl font-medium text-white">
            In-Progress
          </h1>

          <p className="text-white text-4xl font-semibold mt-2">{tasks.length}</p>
        </div>
        <img src={bgVector} alt="bg-vector" className="object-cover h-full rotate-180 "/>
    
     

      </div>

      <div className="flex-1 h-60 grid grid-cols-3 items-center mx-auto max-md:mx-2 max-md:px-2 w-full text-center rounded-2xl border bg-linear-to-br from-[#02a53b5f] to-[#02A53B]">
        <img src={bgVector} alt="" className="object-cover h-full "/> 
        <div className="w-full py-6">
          <h1 className="text-2xl font-medium text-white">
           Resolved
          </h1>

          <p className="text-white text-4xl font-semibold mt-2">{resolved.length}</p>
        </div>
        <img src={bgVector} alt="" className="object-cover h-full rotate-180 "/>
    
     

      </div>
     
    </div>
  );
};

export default Banner;
