import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { currencyFormatter } from "../utls/currencyFormatter";

const Product = () => {
  const param = useParams();
  const [selectedImage, setSelectedImage] = useState("img1");
  const [quantity, setQuanity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${param.id}?populate=*`);

  return (
    <div className="product container mx-auto py-20 flex gap-10">
      {loading ? (
        "Loading..."
      ) : error ? (
        error
      ) : (
        <>
          <div className="left flex-1 flex gap-5">
            <div className="images flex-1 flex flex-col gap-5">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img1?.data?.attributes?.url
                }
                alt={data?.attributes?.title}
                onClick={() => setSelectedImage("img1")}
                className="w-full h-32 object-cover cursor-pointer hover:brightness-50 duration-500"
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt={data?.attributes?.title}
                onClick={() => setSelectedImage("img2")}
                className="w-full h-32 object-cover cursor-pointer hover:brightness-50 duration-500"
              />
            </div>
            <div className="main-image flex-[5] w-full aspect-square overflow-hidden">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.[selectedImage]?.data?.attributes?.url
                }
                alt={data?.attributes?.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="right flex-1 flex flex-col gap-5">
            <h2 className="text-2xl font-bold">{data?.attributes?.title}</h2>
            <span className="text-2xl text-rose-500 font-medium">
              {currencyFormatter(data?.attributes?.price)}
            </span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity flex text-xl font-semibold items-center">
              <button
                className="border border-black w-10 h-10 hover:bg-black hover:text-white duration-500"
                onClick={() =>
                  setQuanity((prev) => (prev === 1 ? 1 : prev - 1))
                }
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
            <div className="details flex flex-col gap-2 mt-10">
              <span className="text-xl uppercase tracking-widest font-semibold">
                Descriptions
              </span>
              <p>{data?.attributes?.desc}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
