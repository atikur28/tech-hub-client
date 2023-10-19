import { useLoaderData } from "react-router-dom";
import Navbar from "../../../SharedPages/Navbar/Navbar";
import AppleProduct from "./AppleProduct/AppleProduct";
import Footer from "../../../SharedPages/Footer/Footer";
import SlideBanner from "../../../SharedPages/SlideBanner/SlideBanner";

const Apple = () => {
  const products = useLoaderData();

  const appleProducts = products.filter((product) => product.brand === "Apple");

  return (
    <div>
      <div className="bg-zinc-300">
        <Navbar></Navbar>
      </div>
      <SlideBanner></SlideBanner>
      <div className="my-10 py-10 bg-gray-100">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-5">
          Apple Products
        </h1>
        <div className="w-max mx-auto">
          <div className="w-max mx-auto grid grid-cols-1">
            {appleProducts.map((oneProduct) => (
              <AppleProduct
                key={oneProduct._id}
                oneProduct={oneProduct}
              ></AppleProduct>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Apple;
