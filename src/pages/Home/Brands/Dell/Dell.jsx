import { useLoaderData } from "react-router-dom";
import Navbar from "../../../SharedPages/Navbar/Navbar";
import DellProduct from "./DellProduct/DellProduct";
import Footer from "../../../SharedPages/Footer/Footer";

const Dell = () => {
  const products = useLoaderData();

  const dellProducts = products.filter((product) => product.brand === "Dell");

  return (
    <div>
      <div className="bg-zinc-300">
        <Navbar></Navbar>
      </div>
      <div className="my-10 py-10 bg-gray-100">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-5">
          Dell Products
        </h1>
        <div className="w-max mx-auto">
          <div className="w-max mx-auto grid grid-cols-1">
            {dellProducts.map((dell) => (
              <DellProduct key={dell._id} dell={dell}></DellProduct>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dell;
