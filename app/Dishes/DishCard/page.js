import Image from 'next/image';

function DishCard({ image, title, rating, price }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Specify width and height explicitly with Next.js Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title} 
          placeholder="blur"
          quality={100}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      
      <div className="flex justify-between md:px-4 px-1 mt-4">
        <h3 className="md:text-lg font-semibold">{title}</h3>
        <button className="bg-[#F03328] text-white md:py-2 md:px-4 px-1 text-sm md:text-md  rounded-full hover:bg-red-600">
          Buy Now
        </button>
      </div>
      
      <div className="flex justify-between px-4 pb-4">
        <div className="text-yellow-500 text-sm md:text-md mt-2">
          {'⭐'.repeat(rating)}
        </div>
        <p className="lg:text-2xl font-bold mt-2">${price}</p>
      </div>
    </div>
  );
}

export default DishCard;
