import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroTextsRef = useRef();

  useEffect(() => {
    let heros = heroTextsRef.current.querySelectorAll(".hero-wrapper");
    const total = heros.length;
    let current = 0;

    const heroSlider = () => {
      heros[(current > 0 ? current : total) - 1].classList.add("opacity-0");

      heros[current].classList.remove("opacity-0");

      current = current === total - 1 ? 0 : (current += 1);
    };

    const interval = setInterval(heroSlider, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [heroTextsRef]);

  return (
    <section className="w-full h-full bg-background-primary pr-10 pb-10">
      <div
        className="w-full h-full flex items-center pl-10 bg-hero-section bg-no-repeat bg-cover bg-left-bottom"
        ref={heroTextsRef}
      >
        <div className="absolute w-[650px] h-auto bg-color-white px-20 py-10 transition-opacity duration-500 ease-linear opacity-1 hero-wrapper">
          <p className="uppercase text-[28px] mb-2 text-gray-500 font-bold">
            75% Sale off
          </p>
          <h1 className="uppercase text-6xl font-bold leading-huge mb-4 text-color-black">
            Furniture at cost
          </h1>
          <p className="text-gray-600 text-lg mb-6 m-w-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            distinctio, voluptas quas natus architecto ex nisi magni?
          </p>
          <button className="uppercase text-xl text-color-white font-medium outline-none border-none bg-color-secondary px-6 py-4">
            Discover more
          </button>
        </div>

        <div className="absolute w-[650px] h-auto bg-color-white px-20 py-10 transition-opacity duration-500 ease-linear opacity-0 hero-wrapper">
          <p className="uppercase text-[28px] mb-2 text-gray-500 font-bold">
            Classic Shapes
          </p>
          <h1 className="uppercase text-6xl font-bold leading-huge mb-4 text-color-black">
            Classic and retro designs
          </h1>
          <p className="text-gray-600 text-lg mb-6 m-w-xs">
            Dolor sit amet consectetur adipisicing elit. Quibusdam distinctio,
            voluptas quas natus architecto gragni!
          </p>
          <button className="uppercase text-xl text-color-white font-medium outline-none border-none bg-color-secondary px-6 py-4">
            Discover more
          </button>
        </div>

        <div className=" absolute w-[650px] h-auto bg-color-white px-20 py-10 transition-opacity duration-500 ease-linear opacity-0 hero-wrapper">
          <p className="uppercase text-[28px] mb-2 text-gray-500 font-bold">
            Unique designs
          </p>
          <h1 className="uppercase text-6xl font-bold leading-huge mb-4 text-color-black">
            Amazing and heartwarming designs
          </h1>
          <p className="text-gray-600 text-lg mb-6 m-w-xs">
            Consectetur adipisicing elit. Quibusdam distinctio, voluptas quas
            natus dolor sit amet architecto ex nisi?
          </p>
          <button className="uppercase text-xl text-color-white font-medium outline-none border-none bg-color-secondary px-6 py-4">
            Discover more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
