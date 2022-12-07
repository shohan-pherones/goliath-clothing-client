import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../redux/cartReducer";
import { currencyFormatter } from "../utls/currencyFormatter";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  const total = () => {
    const calcTotal = products.reduce(
      (acc, item) => (acc += item.quantity * item.price),
      0
    );

    const fixedTotal = +calcTotal.toFixed(2);
    const subtotal = currencyFormatter(fixedTotal);
    return subtotal;
  };

  const dispatch = useDispatch();

  return (
    <div className="cart flex flex-col gap-5 bg-white shadow-xl p-10 w-[35rem] absolute z-[999] right-[5rem] top-[5rem]">
      <h2 className="uppercase text-2xl tracking-widest font-bold slide-headline">
        {products.length === 0 ? "Your cart is empty" : "Products in your cart"}
      </h2>
      {products?.map((item) => (
        <div className="item flex items-center gap-5" key={item.id}>
          <img
            src={item.img}
            alt={item.title}
            className="w-28 h-28 object-cover"
          />
          <div className="details flex flex-col gap-1">
            <h3 className="text-xl font-medium">{item.title}</h3>
            <span className="price text-xl font-medium text-teal-500">
              {item.quantity} x {currencyFormatter(item.price)}
            </span>
          </div>
          <DeleteOutlineIcon
            className="text-rose-500 cursor-pointer"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total flex text-xl uppercase tracking-widest font-bold justify-between">
        <span>Subtotal</span>
        <span>{total()}</span>
      </div>
      <button className="bg-teal-500 text-white text-lg uppercase tracking-wider font-semibold py-2 hover:bg-black duration-500">
        Proceed to checkout
      </button>
      <button
        onClick={() => dispatch(resetCart())}
        className="uppercase text-rose-500 font-semibold tracking-wider"
      >
        Clear cart
      </button>
    </div>
  );
};

export default Cart;
