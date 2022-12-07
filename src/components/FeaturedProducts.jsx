import Card from "./Card";
import { useFetch } from "../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters] [type] [$eq]=${type}`
  );

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
        {loading
          ? "Loading..."
          : error
          ? error
          : data?.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
