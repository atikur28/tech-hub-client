import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeProducts = ({ product }) => {
  const { _id, name, brand, image, description } = product || {};
  return (
    <div className="flex flex-col w-[250px] md:w-[320px] xl:w-[400px] border p-1.5 bg-white">
      <img
        className="w-[250px] md:w-[320px] xl:w-[400px] h-[150px] md:h-[180px] xl:h-[250px]"
        src={image}
        alt=""
      />
      <div className="grow pl-2 my-3">
        <h3 className="md:text-xl font-bold">{name}</h3>
        <p className="text-lg font-medium text-gray-500 my-1">Brand: {brand}</p>
        <p className="font-medium">{description}</p>
      </div>
      <Link to= {`/products/${_id}`}>
        <button className="bg-slate-700 text-white w-full rounded py-1.5 font-bold md:text-lg">
          Details
        </button>
      </Link>
    </div>
  );
};

HomeProducts.propTypes = {
  product: PropTypes.object,
};

export default HomeProducts;
