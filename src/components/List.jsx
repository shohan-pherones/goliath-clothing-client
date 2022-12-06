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

const List = () => {
  return (
    <div className="list flex gap-10 flex-wrap">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
