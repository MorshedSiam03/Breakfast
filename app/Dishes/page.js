import React from "react";
import DishCard from "./DishCard/page";
import food1 from '@/image/Food1.svg'
import food2 from '@/image/Food2.svg'
import food3 from '@/image/Food3.svg'
import food4 from '@/image/Food4.svg'
import food5 from '@/image/Food5.svg'
import food6 from '@/image/Food6.svg'

const dishes = [
  {
    id: 1,
    image: food1,
    title: "Breakfast Food",
    rating: 5,
    price: 230,
  },
  {
    id: 2,
    image: food2,
    title: "Health Breakfast",
    rating: 5,
    price: 230,
  },
  {
    id: 3,
    image: food3,
    title: "Breakfast Food",
    rating: 5,
    price: 230,
  },
  {
    id: 4,
    image: food4,
    title: "Breakfast Food",
    rating: 5,
    price: 230,
  },
  {
    id: 5,
    image: food5,
    title: "Breakfast Food",
    rating: 5,
    price: 230,
  },
  {
    id: 6,
    image: food6,
    title: "Breakfast Food",
    rating: 5,
    price: 230,
  },
];

function Dishes() {
  return (
    <div className="container mx-auto py-10 px-5 md:px-40 text-center">
      <h1 className="text-4xl font-bold mb-6">Our Best Seller Dishes</h1>
      <p className="text-gray-500 mb-10">
        Our fresh garden salad is a light and refreshing option. It features a
        mix of crisp lettuce, juicy tomato all tossed in your choice of
        dressing.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            image={dish.image} 
            title={dish.title}
            rating={dish.rating}
            price={dish.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Dishes;
