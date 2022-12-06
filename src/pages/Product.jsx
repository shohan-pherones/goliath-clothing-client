import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const data = [
  "https://images.pexels.com/photos/1845831/pexels-photo-1845831.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2519323/pexels-photo-2519323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuanity] = useState(1);

  return (
    <div className="product container mx-auto py-20 flex gap-10">
      <div className="left flex-1 flex gap-5">
        <div className="images flex-1 flex flex-col gap-5">
          <img
            src={data[0]}
            alt="Image"
            onClick={() => setSelectedImage(0)}
            className="w-full h-32 object-cover cursor-pointer hover:brightness-50 duration-500"
          />
          <img
            src={data[1]}
            alt="Image"
            onClick={() => setSelectedImage(1)}
            className="w-full h-32 object-cover cursor-pointer hover:brightness-50 duration-500"
          />
        </div>
        <div className="main-image flex-[5] w-full aspect-square overflow-hidden">
          <img
            src={data[selectedImage]}
            alt="Main image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="right flex-1 flex flex-col gap-5">
        <h2 className="text-2xl font-bold">Title one</h2>
        <span className="text-2xl text-rose-500 font-medium">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga
          doloribus ratione vel commodi tempore mollitia est quas totam hic
          dolores facilis, quasi natus atque et facere officiis dolore. Numquam?
        </p>
        <div className="quantity flex text-xl font-semibold items-center">
          <button
            className="border border-black w-10 h-10 hover:bg-black hover:text-white duration-500"
            onClick={() => setQuanity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span className="w-10 h-10 flex justify-center items-center">
            {quantity}
          </span>
          <button
            className="border border-black w-10 h-10 hover:bg-black hover:text-white duration-500"
            onClick={() => setQuanity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div className="btns flex gap-5 items-center">
          <button className="flex gap-3 text-xl items-center uppercase tracking-widest font-semibold bg-black text-white py-2 px-7 hover:bg-teal-500 hover:text-black duration-500">
            <AddShoppingCartIcon />
            <span>Add to cart</span>
          </button>
          <button className="flex gap-3 text-xl items-center uppercase tracking-widest font-semibold hover:text-teal-500 duration-500">
            <FavoriteBorderIcon />
            <span>Add to favourite</span>
          </button>
        </div>
        <div className="info flex flex-col mt-10">
          <span>Vendor: Polo</span>
          <span>Product type: T-Shirt</span>
          <span>Tags: T-Shirt, Top, Women</span>
        </div>
        <div className="details flex flex-col gap-2 mt-10">
          <span className="text-xl uppercase tracking-widest font-semibold">
            Descriptions
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            adipisci aliquam velit minus officiis, doloremque cupiditate in
            impedit nam quia, nobis commodi quasi itaque veritatis ullam ipsa
            qui aperiam dolores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, rem nisi nulla fugiat maxime neque dolorem, illum
            praesentium laboriosam sapiente reprehenderit sequi. Neque
            voluptates sequi possimus repudiandae cupiditate. Minima, eos.
          </p>
        </div>
        <div className="additional-details flex flex-col gap-2">
          <span className="text-xl uppercase tracking-widest font-semibold">
            Additional details
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            adipisci aliquam velit minus officiis, doloremque cupiditate in
            impedit nam quia, nobis commodi quasi itaque veritatis ullam ipsa
            qui aperiam dolores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
