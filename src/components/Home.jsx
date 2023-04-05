import React from "react";
import myself from "../assets/myself.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          <img
            src={myself}
            alt="profile"
            className="rounded-2xl mx-auto w-1/4 md:w-2/3 transform scale-80"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a  Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 3 years of experience building websites and designing software using technologies such as ReactJS, JavaScript, GraphQL, Python, Django, etc.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={myself}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-half"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
