import { useLoaderData } from "react-router-dom";
import Navbar from "../../../SharedPages/Navbar/Navbar";
import SonyProduct from "./SonyProduct/SonyProduct";
import Footer from "../../../SharedPages/Footer/Footer";
import SlideBanner from "../../../SharedPages/SlideBanner/SlideBanner";

const Sony = () => {
  const products = useLoaderData();

  const sonyProducts = products.filter((product) => product.brand === "Sony");

  return (
    <div>
      <div className="bg-zinc-300">
        <Navbar></Navbar>
      </div>
      <SlideBanner></SlideBanner>
      <div className="my-10 py-10 bg-gray-100">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-5">
          Sony Products
        </h1>
        <div className="w-max mx-auto">
          {sonyProducts.length > 0 ? (
            <div className="w-max mx-auto grid grid-cols-1">
              {sonyProducts.map((sony) => (
                <SonyProduct key={sony._id} sony={sony}></SonyProduct>
              ))}
            </div>
          ) : (
            <div className="h-[20vh] flex justify-center items-center">
              <div>
                <h2 className="text-xl font-bold">No data</h2>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Sony;
