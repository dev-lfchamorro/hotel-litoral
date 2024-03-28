import React from "react";
import "./styles.scss";
import Slider from "react-slick";

const SliderReactSlick: React.FC = () => {
  return (
    <div className="slider-rs-container">
      <Slider
        className="slider-rs"
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
        arrows={false}
        vertical={false}
        //verticalSwiping
      >
        <div className="image">
          <div
            className="cover-bg-image"
            style={{
              backgroundImage: `url(https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg)`,
            }}
          />
        </div>

        <div className="image">
          <div
            className="cover-bg-image"
            style={{
              backgroundImage: `url(https://i.blogs.es/ceda9c/dalle/450_1000.jpg)`,
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderReactSlick;
