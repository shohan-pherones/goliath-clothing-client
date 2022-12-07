import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const currencyFormatter = (price) => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <Link to={`/product/${item.id}`}>
      <div className="card w-80 flex flex-col gap-2">
        <div className="images w-full h-80 overflow-hidden relative group">
          <img
            src={item.img1}
            alt={item.title}
            className="first-img w-full absolute z-[1]"
          />
          <img
            src={item.img2}
            alt={item.title}
            className="second-img w-full absolute z-[2] opacity-0 group-hover:opacity-100 duration-500"
          />
        </div>
        <div className="texts flex flex-col gap-1">
          <h3 className="text-xl">{item.title}</h3>
          <div className="prices flex gap-3">
            <span className="old-price text-gray-500 line-through">
              {currencyFormatter(item.oldPrice)}
            </span>
            <span className="price font-bold text-rose-500">
              {currencyFormatter(item.price)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
