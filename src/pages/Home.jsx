import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Newsletter />
    </div>
  );
};

export default Home;
