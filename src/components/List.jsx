import { useFetch } from "../hooks/useFetch";
import Card from "./Card";

const List = ({ subCat, maxPrice, sort, categoryId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters] [categories] [id]=${categoryId}${subCat.map(
      (item) => `&[filters] [sub_categories] [id] [$eq]=${item}`
    )}`
  );

  return (
    <div className="list flex gap-10 flex-wrap">
      {loading
        ? "Loading..."
        : error
        ? error
        : data.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};

export default List;
