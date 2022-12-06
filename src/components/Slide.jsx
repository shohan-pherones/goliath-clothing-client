import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

const Slide = ({ item }) => {
  return (
    <div
      className="slide w-screen h-full"
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="slide-texts container mx-auto text-white flex flex-col justify-center h-full gap-5">
        <h1 className="slide-headline text-9xl uppercase font-bold">
          {item.title}
        </h1>
        <p className="w-2/5">{item.text}</p>
        <Link
          to="/products"
          className="flex gap-3 uppercase tracking-widest self-start"
        >
          Explore Now <EastIcon />
        </Link>
      </div>
    </div>
  );
};

export default Slide;
