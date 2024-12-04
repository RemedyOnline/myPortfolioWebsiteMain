import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/images/RemedyOnline-Logo.png";

const LandingPage = () => {
  return (
    <section>
      <header className="flex justify-around items-center py-2 bg-slate-100">
        <div className="flex justify-center">
          <img src={logo} className="w-20 " alt="logo" />
          <div className="text-2xl font-semibold">
            <p>
              <span className="text-red-200 underline">R</span>emedy
            </p>
            <p>
              <span className="text-red-200 underline">O</span>nline
            </p>
          </div>
        </div>
        <nav className="lg:text-2xl md:text-xl sm:text-base sm:flex 2xl:gap-20 xl:gap-16 lg:gap-10 md:gap-4 sm:gap-3 hidden">
          <ScrollLink
            to="home"
            className="px-5 py-2 bg-slate-200 rounded-xl hover:cursor-pointer hover:underline"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="home"
            className="px-5 py-2 bg-slate-200 rounded-xl hover:cursor-pointer hover:underline"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="home"
            className="px-5 py-2 bg-slate-200 rounded-xl hover:cursor-pointer hover:underline"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="home"
            className="px-5 py-2 bg-slate-200 rounded-xl hover:cursor-pointer hover:underline"
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="home"
            className="px-5 py-2 bg-slate-200 rounded-xl hover:cursor-pointer hover:underline"
          >
            Contact
          </ScrollLink>
        </nav>
        <button className="px-5 py-2 lg:text-2xl md:text-xl sm:text-base bg-slate-300 rounded-md">
          Hire Me!
        </button>
      </header>
      <section id="hero" className="h-screen bg-blue-100"></section>
    </section>
  );
};

export default LandingPage;
