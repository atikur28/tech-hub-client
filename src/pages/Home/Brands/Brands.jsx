import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <div className="w-max mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <Link to="/apple">
        <div className="border rounded p-2 bg-white">
          <img
            className="w-[250px] md:w-[320px] xl:w-[400px] h-[150px] md:h-[180px] xl:h-[250px]"
            src="https://i.ibb.co/smrbJfB/saad-chaudhry-PP1-Uk-TDYJkc-unsplash.jpg"
            alt=""
          />
          <h2 className="md:text-2xl font-semibold px-2 mb-3">
            Brand: <span className="text-gray-500">Apple</span>
          </h2>
        </div>
      </Link>
      <Link to="/samsung">
        <div className="border rounded p-2 bg-white">
          <img
            className="w-[250px] md:w-[320px] xl:w-[400px] h-[150px] md:h-[180px] xl:h-[250px]"
            src="https://i.ibb.co/BNjHLNs/1920-kostanay-kazakhstan-march-15-2022-mobile-phone-with-samsung-logo-on-screen-shot-in-studio-on-wh.jpg"
            alt=""
          />
          <h2 className="md:text-2xl font-semibold px-2 mb-3">
            Brand: <span className="text-gray-500">Samsung</span>
          </h2>
        </div>
      </Link>
      <Link to="/sony">
        <div className="border rounded p-2 bg-white">
          <img
            className="w-[250px] md:w-[320px] xl:w-[400px] h-[150px] md:h-[180px] xl:h-[250px]"
            src="https://i.ibb.co/mX6FFFb/james-feaver-cv3wn-Erx7w-unsplash.jpg"
            alt=""
          />
          <h2 className="md:text-2xl font-semibold px-2 mb-3">
            Brand: <span className="text-gray-500">Sony</span>
          </h2>
        </div>
      </Link>
      <Link to="/google">
        <div className="border rounded p-2 bg-white">
          <img
            className="w-[250px] md:w-[320px] xl:w-[400px] h-[150px] md:h-[180px] xl:h-[250px]"
            src="https://i.ibb.co/nBZD2vv/mitchell-luo-jz4ca36o-J-M-unsplash.jpg"
            alt=""
          />
          <h2 className="md:text-2xl font-semibold px-2 mb-3">
            Brand: <span className="text-gray-500">Google</span>
          </h2>
        </div>
      </Link>
      <Link to="/xiaomi">
        <div className="border rounded p-2 bg-white">
          <img
            className="w-[250px] md:w-[320px] xl:w-[400px] h-[150px] md:h-[180px] xl:h-[250px]"
            src="https://i.ibb.co/jvp5dNH/images.jpg"
            alt=""
          />
          <h2 className="md:text-2xl font-semibold px-2 mb-3">
            Brand: <span className="text-gray-500">Xiaomi</span>
          </h2>
        </div>
      </Link>
      <Link to="/dell">
        <div className="border rounded p-2 bg-white">
          <img
            className="w-[250px] md:w-[320px] xl:w-[400px] h-[150px] md:h-[180px] xl:h-[250px]"
            src="https://i.ibb.co/NK5X7R7/download.jpg"
            alt=""
          />
          <h2 className="md:text-2xl font-semibold px-2 mb-3">
            Brand: <span className="text-gray-500">Dell</span>
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Brands;
