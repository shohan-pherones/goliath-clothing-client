import Card from "./Card";

const data = [
  {
    id: 1,
    img1: "https://images.pexels.com/photos/3366753/pexels-photo-3366753.jpeg?auto=compress&cs=tinysrgb&w=300",
    img2: "https://images.pexels.com/photos/3435323/pexels-photo-3435323.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Lorem ipsum dolor sit amet.",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img1: "https://images.pexels.com/photos/2905827/pexels-photo-2905827.jpeg?auto=compress&cs=tinysrgb&w=300",
    img2: "https://images.pexels.com/photos/2905825/pexels-photo-2905825.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Lorem ipsum dolor sit amet.",
    isNew: true,
    oldPrice: 22,
    price: 14,
  },
  {
    id: 3,
    img1: "https://images.pexels.com/photos/12917233/pexels-photo-12917233.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    img2: "https://images.pexels.com/photos/12944190/pexels-photo-12944190.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    title: "Lorem ipsum dolor sit amet.",
    isNew: false,
    oldPrice: 28,
    price: 16,
  },
  {
    id: 4,
    img1: "https://images.pexels.com/photos/6857690/pexels-photo-6857690.jpeg?auto=compress&cs=tinysrgb&w=300",
    img2: "https://images.pexels.com/photos/6857686/pexels-photo-6857686.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Lorem ipsum dolor sit amet.",
    isNew: false,
    oldPrice: 19,
    price: 13,
  },
];

const FeaturedProducts = ({ type }) => {
  return (
    <div className="featured-products container mx-auto py-20 flex flex-col gap-10">
      <div className="top flex gap-10">
        <h2 className="flex-[2] uppercase text-2xl tracking-widest font-bold slide-headline">
          {type} products
        </h2>
        <p className="flex-[3] text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
          explicabo earum facere totam ipsum molestiae doloremque culpa aliquam
          porro. Dolore?
        </p>
      </div>
      <div className="bottom flex gap-10 justify-center flex-wrap">
        {data.map((item) => (
          <Card key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
