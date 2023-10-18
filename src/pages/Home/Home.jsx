import Navbar from "../SharedPages/Navbar/Navbar";
import HomeBanner from "./HomeBanner/HomeBanner";
import Features from "./Features/Features";
import HomeAbout from "./HomeAbout/HomeAbout";
import Brands from "./Brands/Brands";

const Home = () => {

  return (
    <div>
      <div className="bg-zinc-300">
        <Navbar></Navbar>
      </div>
      <HomeBanner></HomeBanner>
      <div className="my-10 py-10 bg-gray-100">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-5">Brands</h1>
        <div>
          <Brands></Brands>
          {/* {products.slice(0, 6).map((product) => (
            <HomeProducts key={product._id} product={product}></HomeProducts>
          ))} */}
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
