import { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/9586542/pexels-photo-9586542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Crackerjack",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam atque autem perspiciatis temporibus repellendus saepe neque repellat incidunt alias quos.",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/7621731/pexels-photo-7621731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Orienteers",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam atque autem perspiciatis temporibus repellendus saepe neque repellat incidunt alias quos.",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/10679145/pexels-photo-10679145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Parapluie",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam atque autem perspiciatis temporibus repellendus saepe neque repellat incidunt alias quos.",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/9464243/pexels-photo-9464243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Urbane Root",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam atque autem perspiciatis temporibus repellendus saepe neque repellat incidunt alias quos.",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/9771811/pexels-photo-9771811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Mobster Zero",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam atque autem perspiciatis temporibus repellendus saepe neque repellat incidunt alias quos.",
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
          <Slide key={item.id} item={item} />
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
