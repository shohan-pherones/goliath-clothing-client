import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/3366753/pexels-photo-3366753.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    price: 12,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2905827/pexels-photo-2905827.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    price: 14,
  },
];

const Cart = () => {
  return (
    <div className="cart flex flex-col gap-5 bg-white shadow-xl p-10 w-[35rem] absolute z-[999] right-[5rem] top-[5rem]">
      <h2 className="uppercase text-2xl tracking-widest font-bold slide-headline">
        Products in your cart
      </h2>
      {data?.map((item) => (
        <div className="item flex items-center gap-5" key={item.id}>
          <img
            src={item.img}
            alt={item.title}
            className="w-28 h-28 object-cover"
          />
          <div className="details flex flex-col gap-1">
            <h3 className="text-xl font-medium">{item.title}</h3>
            <p className="text-gray-500">{item.desc?.substring(0, 100)}</p>
            <span className="price text-xl font-medium">1 x ${item.price}</span>
          </div>
          <DeleteOutlineIcon className="text-rose-500" />
        </div>
      ))}
      <div className="total flex text-xl uppercase tracking-widest font-bold justify-between">
        <span>Subtotal</span>
        <span>$123</span>
      </div>
      <button className="bg-teal-500 text-white text-lg uppercase tracking-wider font-semibold py-2 hover:bg-black duration-500">
        Proceed to checkout
      </button>
      <button className="uppercase text-rose-500 font-semibold tracking-wider">
        Clear cart
      </button>
    </div>
  );
};

export default Cart;
