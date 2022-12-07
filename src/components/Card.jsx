import { Link } from "react-router-dom";
import { currencyFormatter } from "../utls/currencyFormatter";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card w-80 flex flex-col gap-2 border">
        <div className="images w-full h-96 overflow-hidden relative group">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img1?.data?.attributes?.url
            }
            alt={item.attributes.title}
            className="first-img w-full absolute z-[1] group-hover:hidden"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt={item.attributes.title}
            className="second-img w-full absolute z-[2] opacity-0 group-hover:opacity-100 duration-500"
          />
          {item?.attributes.isNew && (
            <span className="absolute top-0 left-0 bg-rose-500 text-white uppercase tracking-widest text-sm py-1 px-3 font-semibold z-[3]">
              New Arrival
            </span>
          )}
        </div>
        <div className="texts flex flex-col gap-1 p-5">
          <h3 className="text-xl truncate">{item.attributes.title}</h3>
          <div className="prices flex gap-3">
            <span className="old-price text-gray-500 line-through">
              {currencyFormatter(
                item.attributes.oldPrice || item?.attributes.price + 5
              )}
            </span>
            <span className="price font-bold text-rose-500">
              {currencyFormatter(item.attributes.price)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
