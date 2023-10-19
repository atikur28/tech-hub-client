import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  const { _id, name, type, image, description } = cart || {};

  return (
    <div className="border flex flex-col rounded p-2">
      <img
        className="w-[250px] md:w-[400px] lg:w-[450px] h-[150px] md:h-[200px] lg:h-[250px] mx-auto"
        src={image}
        alt=""
      />
      <h3 className="font-bold text-lg lg:text-2xl w-[250px] md:w-[400px]">
        {name}
      </h3>
      <h4 className="font-semibold md:text-lg lg:text-xl">
        Type: <span className="text-gray-500 font-extrabold">{type}</span>
      </h4>
      <p className="w-[250px] md:w-[400px] lg:w-[450px] grow font-semibold text-gray-600 md:text-lg my-2">
        {description}
      </p>
      <Link to={`/carts/${_id}`}>
        <button className="w-full bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 rounded mb-3">
          Details
        </button>
      </Link>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object,
};

export default Cart;
