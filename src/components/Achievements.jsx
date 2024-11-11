import React from "react";
import winners3 from "../assets/winners3.jpg";

function Achievements({ isDarkMode }) {
  const linkedinLink =
    "https://www.linkedin.com/in/athul-d-bhandary-0b1912247/";

return (
    <div
        className={`text-center pt-10 ${isDarkMode ? "dark" : ""}`}
        id="contact"
    >
        <p className={`text-4xl ${isDarkMode ? "dark-green" : "text-slate-700"}`}>
            Discover My
        </p>
        <p className="text-5xl font-bold">Achievements</p>
        <div className="relative w-fit m-auto group py-10 hover:cursor-pointer">
            <img
                src={winners3}
                alt="image"
                className="m-auto h-[230px] md:h-[300px] lg:h-[500px] group-hover:opacity-50 transition-opacity duration-300"
            />
            <p className="absolute top-[50%] left-[50%] transform text-sm sm:text-base md:text-xl lg:text-2xl font-bold -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                Won 3rd place at DevHost Hacknight 2024, conducted by SOSC -
                Sahyadri Open Source Community!
            </p>
        </div>
    </div>
);
}

export default Achievements;
