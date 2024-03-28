import { ReactNode } from "react";
import ImgRoom1 from "../../../assets/img/gallery/room-1.jpeg";
import ImgRoom2 from "../../../assets/img/gallery/room-2.jpeg";
import ImgRoom3 from "../../../assets/img/gallery/room-3.jpeg";
import ImgRoom4 from "../../../assets/img/gallery/room-4.jpeg";
import ImgRoom5 from "../../../assets/img/gallery/room-5.jpeg";
import RoomCardSlider from "../../../components/RoomCardSlider";
import { RoomCardSliderProps } from "../../../components/RoomCardSlider/types";

const roomsCardContent: RoomCardSliderProps[] = [
  {
    img: ImgRoom1,
    text: "Apto. Single",
  },
  {
    img: ImgRoom2,
    text: "Apto. Duplo",
  },
  {
    img: ImgRoom3,
    text: "Apto. Triplo",
  },
  {
    img: ImgRoom4,
    text: "Apto. Quádruplo",
  },
  {
    img: ImgRoom5,
    text: "Apto. Quíntuplo",
  },
];

export const roomCardSlider: ReactNode[] = roomsCardContent.map(
  ({ img, text }, idx) => <RoomCardSlider img={img} key={idx} text={text} />
);
