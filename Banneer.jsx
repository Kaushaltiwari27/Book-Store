import React from "react";
import BannerCard from "../home/BannerCard";

const Banneer = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side  */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books <span className="text-blue-700">for the Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam atque
            voluptatibus blanditiis quaerat perspiciatis quo quis repellendus
            repellat cum a labore laborum soluta sapiente sequi ut, culpa
            
            <div className="space-y-5 ">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search a book"
                className="py-2 px-2 runded-s-sm outline-none"
              />
              <button className="bg-blue-700  px-6 py-2 text-white font-medium hover:bg-black">
                Search
              </button>
            </div>
          </p>
        </div>
        {/* right side */}
        <div><BannerCard/></div>
      </div>
    </div>
  );
};

export default Banneer;