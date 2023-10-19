import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../SharedPages/Navbar/Navbar";
import Cart from "./Cart/Cart";
import Footer from "../SharedPages/Footer/Footer";

const MyCarts = () => {
  const { user } = useContext(AuthContext);
  const carts = useLoaderData();

  const userCarts = carts.filter((cart) => cart.person === user.email);

  return (
    <div>
      <div className="bg-zinc-300">
        <Navbar></Navbar>
      </div>
      <div className="py-20">
        {userCarts.length > 0 ? (
          <div className="w-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
            {userCarts.map((cart) => (
              <Cart key={cart._id} cart={cart}></Cart>
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
      <Footer></Footer>
    </div>
  );
};

export default MyCarts;
