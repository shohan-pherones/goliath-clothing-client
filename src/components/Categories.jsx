import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories py-20 px-5 grid grid-cols-4 grid-rows-2 gap-5 h-screen">
      <div className="category-men relative">
        <img
          src="https://images.pexels.com/photos/7622226/pexels-photo-7622226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Man in Black Leather Jacket Riding a Black Horse"
          className="w-full h-full object-cover"
        />
        <Link
          to="/products/1"
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full uppercase text-white text-5xl font-bold slide-headline bg-black/0 hover:bg-black/50 duration-500 flex justify-center items-center"
        >
          Men
        </Link>
      </div>
      <div className="category-featured row-span-2 relative">
        <img
          src="https://images.pexels.com/photos/9821881/pexels-photo-9821881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="A Man and a Woman Standing on the Concrete Pavement"
          className="w-full h-full object-cover"
        />
        <Link
          to="/featured"
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full uppercase text-white text-5xl font-bold slide-headline bg-black/0 hover:bg-black/50 duration-500 flex justify-center items-center"
        >
          Featured
        </Link>
      </div>
      <div className="category-kids relative">
        <img
          src="https://images.pexels.com/photos/4714951/pexels-photo-4714951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Boy in Blue and White Striped Shirt and Blue Denim Jeans Sitting on Red Wooden Chair"
          className="w-full h-full object-cover"
        />
        <Link
          to="/products/3"
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full uppercase text-white text-5xl font-bold slide-headline bg-black/0 hover:bg-black/50 duration-500 flex justify-center items-center"
        >
          Kids
        </Link>
      </div>
      <div className="category-accessories relative">
        <img
          src="https://images.pexels.com/photos/8721339/pexels-photo-8721339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="A Person Doing Hand Gestures While Wearing a Vr Goggles"
          className="w-full h-full object-cover"
        />
        <Link
          to="/products/4"
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full uppercase text-white text-5xl font-bold slide-headline bg-black/0 hover:bg-black/50 duration-500 flex justify-center items-center"
        >
          Accessories
        </Link>
      </div>
      <div className="category-women relative">
        <img
          src="https://images.pexels.com/photos/5119205/pexels-photo-5119205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman in Gray Coat Standing"
          className="w-full h-full object-cover"
        />
        <Link
          to="/products/2"
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full uppercase text-white text-5xl font-bold slide-headline bg-black/0 hover:bg-black/50 duration-500 flex justify-center items-center"
        >
          Women
        </Link>
      </div>
      <div className="category-trending col-span-2 relative">
        <img
          src="https://images.pexels.com/photos/8443629/pexels-photo-8443629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Group of People wearing Stylish Outfits"
          className="w-full h-full object-cover"
        />
        <Link
          to="/trending"
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full uppercase text-white text-5xl font-bold slide-headline bg-black/0 hover:bg-black/50 duration-500 flex justify-center items-center"
        >
          Trending
        </Link>
      </div>
    </div>
  );
};

export default Categories;
