import { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/9586542/pexels-photo-9586542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/7621731/pexels-photo-7621731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/10679145/pexels-photo-10679145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/9464243/pexels-photo-9464243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/9771811/pexels-photo-9771811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="slider relative">
      <div
        className="slides flex w-[500vw] h-[calc(100vh-5rem)] overflow-hidden duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <div
            className="slide w-screen h-full"
            key={item.id}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        ))}
      </div>
      <div className="btns absolute left-0 right-0 bottom-20 m-auto w-fit flex gap-10 text-white mix-blend-color-dodge">
        <button
          className="btn-left border py-2 px-4 hover:bg-white hover:text-black duration-500"
          onClick={prevSlide}
        >
          <WestIcon />
        </button>
        <button
          className="btn-right border py-2 px-4 hover:bg-white hover:text-black duration-500"
          onClick={nextSlide}
        >
          <EastIcon />
        </button>
      </div>
    </div>
  );
};

export default Slider;
