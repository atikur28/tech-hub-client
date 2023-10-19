import { useLoaderData } from "react-router-dom";
import Navbar from "../../../SharedPages/Navbar/Navbar";
import GoogleProduct from "./GoogleProduct/GoogleProduct";
import Footer from "../../../SharedPages/Footer/Footer";
import SlideBanner from "../../../SharedPages/SlideBanner/SlideBanner";

const Google = () => {
  const products = useLoaderData();

  const googleProducts = products.filter(
    (product) => product.brand === "Google"
  );

  return (
    <div>
      <div className="bg-zinc-300">
        <Navbar></Navbar>
      </div>
      <SlideBanner></SlideBanner>
      <div className="my-10 py-10 bg-gray-100">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-5">
          Google Products
        </h1>
        <div className="w-max mx-auto">
          <div className="w-max mx-auto grid grid-cols-1">
            {googleProducts.map((google) => (
              <GoogleProduct key={google._id} google={google}></GoogleProduct>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Google;
