import { useLoaderData } from "react-router-dom";
import Navbar from "../../../SharedPages/Navbar/Navbar";
import GoogleProduct from "./GoogleProduct/GoogleProduct";

const Google = () => {
  const products = useLoaderData();

  const googleProducts = products.filter((product) => product.brand === "Google");

  return (
    <div>
      <div className="bg-zinc-300">
        <Navbar></Navbar>
      </div>
      <div className="my-10 py-10 bg-gray-100">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-5">
          Google Products
        </h1>
        <div className="w-max mx-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
          <div className="col-span-2">
            <div className="w-max mx-auto grid grid-cols-1">
              {
                googleProducts.map(google => <GoogleProduct key={google._id} google={google}></GoogleProduct>)
              }
            </div>
          </div>
          <div className="border h-max">
            <h3 className="text-xl font-semibold text-center">Advertisement</h3>
            <div className="carousel w-[310px] mt-5">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/S78WT9C/digital-marketing-1725340-640.jpg"
                  className="w-[300px] mx-auto"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/ZYLDrst/macbook-624707-640.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/c1320xd/education-1651259-640.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Google;
