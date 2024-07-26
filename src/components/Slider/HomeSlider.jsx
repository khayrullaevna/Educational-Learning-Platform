import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { slider_images } from "../../API_URL";
import { MdNavigateNext } from "react-icons/md";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <MdNavigateNext
      className={`${className} custom-arrow`}
      style={style}
      onClick={onClick}
    />
  );
};

const HomeSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    centerMode: true,
    centerPadding: "7%", // Adjust this value to control how much of the next slide is shown
  };

  return (
    <section className="homeSlider">
      <div className="container">
        <Slider {...settings}>
          {slider_images.map((slide, index) => (
            <div key={index} className="slider-item">
              <img
                className="slider-img"
                src={slide.img}
                alt={`Slide${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
