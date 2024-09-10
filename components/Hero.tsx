import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="bg-green text-black">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-yellow text-4xl font-bold mb-4">Little Lemon</h1>
          <h2 className="text-white text-2xl mb-4">Chicago</h2>
          <p className="text-white mb-6">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="bg-yellow font-bold text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300">
            Reserve a Table
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/restauranfood.jpg"
            alt="Little Lemon Dishes"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
