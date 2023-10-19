import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../SharedPages/Navbar/Navbar";
import Swal from "sweetalert2";
import Footer from "../../SharedPages/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Rating from "react-rating";

const ProductDetail = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();

  const navigate = useNavigate();

  const { _id, name, brand, type, rating, price, image, description } =
    product || {};

  const handleAddToCart = () => {
    const person = user.email;
    const cart = {
      person,
      name,
      brand,
      type,
      rating,
      price,
      image,
      description,
    };
    fetch(
      "https://tech-electro-hub-server-amsvdjd9q-atikur-rahman-sakibs-projects.vercel.app/carts",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cart),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Good job!",
            "Product added to Carts successfully!",
            "success"
          );
        }
      });
  };

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
        fetch(
          `https://tech-electro-hub-server-amsvdjd9q-atikur-rahman-sakibs-projects.vercel.app/products/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              navigate("/");
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
          <h3 className="font-bold text-xl lg:text-2xl w-[250px] md:w-fit">
            {name}
          </h3>
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
        <Rating
          emptySymbol={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          }
          fullSymbol={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          }
          initialRating={rating}
          readonly
        />
        <div className="mx-2 my-4">
          <Link>
            <button
              onClick={handleAddToCart}
              className="w-full bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 rounded mb-3"
            >
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
            <button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 rounded">
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
