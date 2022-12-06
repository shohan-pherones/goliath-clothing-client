import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default Home;
