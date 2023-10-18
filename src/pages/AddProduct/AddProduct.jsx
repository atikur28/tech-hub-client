import Swal from "sweetalert2";
import Navbar from "../SharedPages/Navbar/Navbar";

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;
        const newProduct = {name, brand, type, rating, price, image, description};
        console.log(newProduct);
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Product added successfully!',
                    'success'
                  )
                  form.reset();
            }
          })
    }

  return (
    <div>
      <div className="bg-zinc-300">
        <Navbar></Navbar>
      </div>
      <div className="w-11/12 mx-auto my-10 md:my-20 py-14 bg-zinc-200">
        <h1 className="text-2xl md:text-4xl font-semibold text-center">
          Add Product
        </h1>
        <form onSubmit={handleAddProduct} className="px-2 md:px-5 mt-5">
          <div className="flex flex-col md:flex-row justify-center gap-4 w-11/12 mx-auto">
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Name:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                placeholder="Product's name"
                type="text"
                name="name"
              />
            </div>
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Brand:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                placeholder="Product's brand"
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
                placeholder="Product's type"
                type="text"
                name="type"
              />
            </div>
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Rating:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                placeholder="Product's rating"
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
                placeholder="Product's price"
                type="text"
                name="price"
              />
            </div>
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Image link:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                placeholder="Product's image link"
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
                placeholder="Product's description"
                type="text"
                name="description"
              />
            </div>
          </div>
          <div className="w-max mx-auto mt-10">
            <button className="py-1 px-10 bg-slate-700 text-white font-bold md:text-lg rounded hover:bg-slate-800">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
