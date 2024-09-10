import React from "react";
import Image from "next/image";

interface SpecialItem {
  name: string;
  price: number;
  description?: string;
  image: string;
}

const specialItems: SpecialItem[] = [
  {
    name: "Greek salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: "/greek salad.jpg",
  },
  {
    name: "Bruschetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: "/bruchetta.svg",
  },
  {
    name: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "/lemon dessert.jpg",
  },
];

const Highlights: React.FC = () => {
  return (
    <div className="bg-[#ffffff] container mx-auto px-4 py-16">
      <div className="flex justify-between py-8">
        <h2 className="text-3xl font-bold mb-8 text-left text-black">
          This week&apos;s specials!
        </h2>
        <button className="bg-yellow font-bold text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300">
          Online Menu
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <span className="text-orange-500">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-300">
                Order a delivery
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
