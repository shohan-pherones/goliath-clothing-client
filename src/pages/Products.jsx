import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import List from "../components/List";

const Products = () => {
  const param = useParams();
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCat, setSelectedSubCat] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters] [categories] [id] [$eq]=${+param.id}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCat(
      isChecked
        ? [...selectedSubCat, value]
        : selectedSubCat.filter((item) => item !== value)
    );
  };

  return (
    <div className="products container mx-auto py-20 flex gap-5">
      <div className="left flex-1 sticky h-full top-20  flex flex-col gap-5">
        <div className="filter-item">
          <h3 className="text-xl font-bold mb-1">Choose Categories</h3>
          {data?.map((item) => (
            <div className="input-item flex items-center gap-2" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
                className="accent-teal-500 cursor-pointer"
              />
              <label htmlFor={item.id} className="cursor-pointer">
                {item.attributes.title}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-item">
          <h3 className="text-xl font-bold mb-1">Filter by Price Range</h3>
          <div className="input-item flex items-center gap-2">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="accent-teal-500 cursor-pointer"
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filter-item">
          <h3 className="text-xl font-bold mb-1">Sort by Price</h3>
          <div className="input-item flex items-center gap-2">
            <input
              type="radio"
              id="ascending"
              value="asc"
              name="price"
              onChange={(e) => setSort(e.target.value)}
              className="accent-teal-500 cursor-pointer"
            />
            <label htmlFor="ascending" className="cursor-pointer">
              Price (Low to High)
            </label>
          </div>
          <div className="input-item flex items-center gap-2">
            <input
              type="radio"
              id="descending"
              value="desc"
              name="price"
              onChange={(e) => setSort(e.target.value)}
              className="accent-teal-500 cursor-pointer"
            />
            <label htmlFor="descending" className="cursor-pointer">
              Price (High to Low)
            </label>
          </div>
        </div>
      </div>
      <div className="right flex-[3] flex flex-col gap-10">
        <img
          src="https://images.pexels.com/photos/7522458/pexels-photo-7522458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="A Woman Holding a Red Flower"
          className="category-image w-full h-80 object-cover"
        />
        <List
          categoryId={param.id}
          maxPrice={maxPrice}
          sort={sort}
          subCat={selectedSubCat}
        />
      </div>
    </div>
  );
};

export default Products;
