import { useLoaderData } from "react-router-dom";
import Navbar from "../../../SharedPages/Navbar/Navbar";
import XiaomiProduct from "./XiaomiProduct/XiaomiProduct";
import Footer from "../../../SharedPages/Footer/Footer";
import SlideBanner from "../../../SharedPages/SlideBanner/SlideBanner";

const Xiaomi = () => {
  const products = useLoaderData();

  const xiaomiProducts = products.filter(
    (product) => product.brand === "Xiaomi"
  );

  return (
    <div>
      <div className="bg-zinc-300">
        <Navbar></Navbar>
      </div>
      <SlideBanner></SlideBanner>
      <div className="my-10 py-10 bg-gray-100">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-5">
          Xiaomi Products
        </h1>
        <div className="w-max mx-auto">
          {xiaomiProducts.length > 0 ? (
            <div className="w-max mx-auto grid grid-cols-1">
              {xiaomiProducts.map((xiaomi) => (
                <XiaomiProduct key={xiaomi._id} xiaomi={xiaomi}></XiaomiProduct>
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

export default Xiaomi;
