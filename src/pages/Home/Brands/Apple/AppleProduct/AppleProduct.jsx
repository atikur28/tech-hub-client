import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AppleProduct = ({ oneProduct }) => {
  const { _id, name, brand, price, type, image } =
    oneProduct || {};
  return (
    <div className="w-max mx-auto mb-10 border rounded bg-white p-2">
      <img
        className="w-[250px] md:w-[500px] md:h-[300px] lg:w-[650px] lg:h-[350px]"
        src={image}
        alt=""
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
      <div className="mx-2 my-4">
        <Link to={`/products/${_id}`}>
          <button className="bg-slate-700 text-white w-full rounded py-1.5 font-bold md:text-lg mb-3">
            Details
          </button>
        </Link>
        <Link to={`/updateproduct/${_id}`}>
          <button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 rounded">
            Update Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

AppleProduct.propTypes = {
  oneProduct: PropTypes.object,
};

export default AppleProduct;