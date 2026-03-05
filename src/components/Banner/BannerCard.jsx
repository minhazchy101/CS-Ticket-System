import React from "react";

const BannerCard = ({ bgVector }) => {
  return (
    <div className="w-full">
      <section
        style={{
          backgroundImage: `url(${bgVector})`,
        }}
        className="relative flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-2xl py-20 md:py-24 bg-linear-to-br from-[#422AD5] to-[#6D5DF6] bg-cover bg-center bg-no-repeat overflow-hidden"
      >
        {/* overlay for better vector blending */}
        <div className="absolute inset-0 bg-linear-to-br from-[#422AD5]/90 to-[#6D5DF6]/90"></div>

        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-medium text-white max-w-2xl">
            In-Progress
          </h1>

          <p className="text-white text-4xl font-semibold mt-2">0</p>
        </div>
      </section>
    </div>
  );
};

export default BannerCard;
