import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../../SharedPages/Footer/Footer";
import Navbar from "../../SharedPages/Navbar/Navbar";
import Swal from "sweetalert2";

const CartDetail = () => {

    const navigate = useNavigate();
  const product = useLoaderData();
  const { _id, name, brand, type, price, image, description } =
    product || {};

  const handleCartDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tech-electro-hub-server-amsvdjd9q-atikur-rahman-sakibs-projects.vercel.app/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              navigate('/')
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="bg-zinc-300">
        <Navbar></Navbar>
      </div>
      <div className="border w-max mx-auto rounded p-2 my-10">
        <img
          className="w-[250px] md:w-[500px] lg:w-[550px] h-[150px] md:h-[250px] lg:h-[300px] mx-auto"
          src={image}
          alt=""
        />
        <h3 className="font-bold text-lg lg:text-2xl w-[250px] md:w-[500px] lg:w-[550px]">
          {name}
        </h3>
        <div className="flex flex-col md:flex-row justify-between my-1.5">
          <h4 className="font-semibold md:text-lg lg:text-xl">
            Brand: <span className="text-red-800 font-bold">{brand}</span>
          </h4>
          <p className="font-semibold md:text-lg lg:text-xl">
            Price: <span className="text-red-600">${price}</span>
          </p>
        </div>
        <h4 className="font-semibold md:text-lg lg:text-xl">
          Type: <span className="text-gray-500 font-extrabold">{type}</span>
        </h4>
        <p className="w-[250px] md:w-[400px] lg:w-[450px] grow font-semibold text-gray-600 md:text-lg my-2">
          {description}
        </p>
        <Link>
          <button
            onClick={() => handleCartDelete(_id)}
            className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 rounded mb-3"
          >
            Delete
          </button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CartDetail;
