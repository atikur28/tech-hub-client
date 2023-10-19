import { useLoaderData } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import Swal from "sweetalert2";
import Footer from "../SharedPages/Footer/Footer";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, brand, type, rating, price, image, description } =
    product || {};

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const image = form.image.value;
    const description = form.description.value;
    const updatedProduct = { name, brand, type, rating, price, image, description };
    fetch(`https://tech-electro-hub-server.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "Product updated successfully!", "success");
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="bg-zinc-300">
        <Navbar></Navbar>
      </div>
      <div className="w-11/12 mx-auto my-10 md:my-20 py-14 bg-zinc-200">
        <h1 className="text-2xl md:text-4xl font-semibold text-center">
          Update Product
        </h1>
        <form onSubmit={handleUpdateProduct} className="px-2 md:px-5 mt-5">
          <div className="flex flex-col md:flex-row justify-center gap-4 w-11/12 mx-auto">
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Name:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                defaultValue={name}
                type="text"
                name="name"
              />
            </div>
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Brand:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                defaultValue={brand}
                type="text"
                name="brand"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 w-11/12 mx-auto mt-4">
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Type of product:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                defaultValue={type}
                type="text"
                name="type"
              />
            </div>
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Rating:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                defaultValue={rating}
                type="text"
                name="rating"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 w-11/12 mx-auto mt-4">
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Price:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                defaultValue={price}
                type="text"
                name="price"
              />
            </div>
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Image link:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                defaultValue={image}
                type="text"
                name="image"
              />
            </div>
          </div>
          <div className="w-11/12 md:w-3/4 mx-auto mt-4">
            <div className="w-full">
              <h3 className="font-bold mb-1">Description:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                defaultValue={description}
                type="text"
                name="description"
              />
            </div>
          </div>
          <div className="w-max mx-auto mt-10">
            <button className="py-1 px-10 bg-slate-700 text-white font-bold md:text-lg rounded hover:bg-slate-800">
              Update Product
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProduct;
