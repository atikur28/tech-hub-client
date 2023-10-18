const HomeBanner = () => {
  return (
    <div
      className="h-[75vh] flex justify-center items-center"
      style={{
        background:
          "url(https://i.ibb.co/yQczDnT/home-banner-2.jpg), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))",

        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <div>
        <h1 className="text-xl md:text-4xl lg:text-6xl text-center font-bold text-white">
          Welcome to TechElectroHub
        </h1>
        <p className="text-white font-medium md:text-lg px-2 mt-4 text-center w-4/6 mx-auto">Your Gateway to All Things Tech and Electronics. Explore, Discover, and Experience Innovation! Embark on a Journey of Discovery and Experience the Latest in Technological Marvels!</p>
      </div>
    </div>
  );
};

export default HomeBanner;
