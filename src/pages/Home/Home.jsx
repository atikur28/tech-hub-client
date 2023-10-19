import Navbar from "../SharedPages/Navbar/Navbar";
import HomeBanner from "./HomeBanner/HomeBanner";
import Features from "./Features/Features";
import HomeAbout from "./HomeAbout/HomeAbout";
import Brands from "./Brands/Brands";
import Footer from "../SharedPages/Footer/Footer";
import { useEffect, useState } from "react";

const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="dark:bg-gray-700">
      <div className="bg-zinc-300">
        <Navbar></Navbar>
        <div className="w-max mx-auto pb-3">
          <button onClick={handleThemeChange} className=" bg-red-600 text-white px-2 py-1 rounded font-bold">Theme Change</button>
        </div>
      </div>
      <HomeBanner></HomeBanner>
      <div className="my-10 py-10 bg-gray-100">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-5">Brands</h1>
        <div>
          <Brands></Brands>
        </div>
      </div>
      <div className="mb-20">
        <Features></Features>
      </div>
      <HomeAbout></HomeAbout>
      <Footer></Footer>
    </div>
  );
};

export default Home;
