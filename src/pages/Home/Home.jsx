import { useLoaderData } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeProducts from "./HomeProducts/HomeProducts";

const Home = () => {
  const products = useLoaderData();

  return (
    <div>
      <div className="bg-zinc-300">
        <Navbar></Navbar>
      </div>
      <HomeBanner></HomeBanner>
      <div className="my-20">
        <div className="w-max mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.slice(0, 6).map((product) => (
            <HomeProducts key={product._id} product={product}></HomeProducts>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
