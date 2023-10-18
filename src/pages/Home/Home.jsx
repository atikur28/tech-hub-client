import { useLoaderData } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeProducts from "./HomeProducts/HomeProducts";
import Features from "./Features/Features";
import HomeAbout from "./HomeAbout/HomeAbout";

const Home = () => {
  const products = useLoaderData();

  return (
    <div>
      <div className="bg-zinc-300">
        <Navbar></Navbar>
      </div>
      <HomeBanner></HomeBanner>
      <div className="my-10 py-10 bg-gray-100">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-5">Our Products</h1>
        <div className="w-max mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.slice(0, 6).map((product) => (
            <HomeProducts key={product._id} product={product}></HomeProducts>
          ))}
        </div>
      </div>
      <div className="mb-20">
        <Features></Features>
      </div>
      <HomeAbout></HomeAbout>
    </div>
  );
};

export default Home;
