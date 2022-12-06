import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";

const Products = () => {
  const { categoryId } = useParams();
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products container mx-auto py-20 flex gap-5">
      <div className="left flex-1 sticky h-full top-20  flex flex-col gap-5">
        <div className="filter-item">
          <h3 className="text-xl font-bold mb-1">Choose Categories</h3>
          <div className="input-item flex items-center gap-2">
            <input
              type="checkbox"
              id="1"
              value={1}
              className="accent-teal-500 cursor-pointer"
            />
            <label htmlFor="1" className="cursor-pointer">
              Tops
            </label>
          </div>
          <div className="input-item flex items-center gap-2">
            <input
              type="checkbox"
              id="2"
              value={2}
              className="accent-teal-500 cursor-pointer"
            />
            <label htmlFor="2" className="cursor-pointer">
              Coats
            </label>
          </div>
          <div className="input-item flex items-center gap-2">
            <input
              type="checkbox"
              id="3"
              value={3}
              className="accent-teal-500 cursor-pointer"
            />
            <label htmlFor="3" className="cursor-pointer">
              Skirts
            </label>
          </div>
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
              value="ascending"
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
              value="descending"
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
        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
