import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../SharedPages/Navbar/Navbar";
import Swal from "sweetalert2";
import Footer from "../../SharedPages/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const ProductDetail = () => {

  const {user} = useContext(AuthContext);
  const product = useLoaderData();

  const navigate = useNavigate();

  const { _id, name, brand, type, price, image, description } = product || {};

  const handleDelete = (_id) => {
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
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              navigate('/');
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
      <div className="w-max mx-auto my-10 border rounded">
        <img
          className="w-[250px] md:w-[500px] md:h-[300px] lg:w-[650px] lg:h-[350px] mx-auto"
          src={image}
          alt="product-image"
        />
        <div className="md:flex items-center justify-between mt-2 px-2">
          <h3 className="font-bold text-xl lg:text-2xl w-[250px] md:w-fit">{name}</h3>
          <h3 className="font-semibold md:text-lg lg:text-xl">
            Brand: <span className="text-red-800 font-bold">{brand}</span>
          </h3>
        </div>
        <div className="md:flex items-center justify-between mt-2 px-2">
          <h3 className="font-semibold md:text-lg lg:text-xl">
            Type: <span className="text-gray-500 font-extrabold">{type}</span>
          </h3>
          <p className="font-semibold md:text-lg lg:text-xl mt-3">
            Price: <span className="text-red-600">${price}</span>
          </p>
        </div>
        <p className="w-[250px] md:w-[500px] lg:w-[650px] font-semibold text-gray-600 md:text-lg px-2 mt-2">
          {description}
        </p>
        <div className="mx-2 my-4">
          <Link>
            <button className="w-full bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 rounded mb-3">
              Add to Cart
            </button>
          </Link>
          <Link>
            <button
              onClick={() => handleDelete(_id)}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 rounded mb-3"
            >
              Delete
            </button>
          </Link>
          <Link to={`/updateproduct/${_id}`}>
            <button
              className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 rounded"
            >
              Update Detail
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetail;
