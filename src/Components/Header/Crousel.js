import React from "react";
import "./Crousel.css";
import useHttp from "../../hooks/useHttp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        padding: "8px  8px",
        borderRadius: "16%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        padding: "8px  8px",
        borderRadius: "16%",
      }}
      onClick={onClick}
    />
  );
}
function Crousel(props) {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const crousel =
    props.data &&
    props.data.map((val, i) => {
      if (i < 5) {
        return (
          <div
            key={val.source_product_id ? val.source_product_id : 1 + 1}
            className="first_crousel_product_imgs"
          >
            <img
              className="first_crousel_product_img"
              src={val.image}
              alt="img"
            />
            <p className="first_crousel_product_name">{val.name}</p>
            <p className="first_crousel_product_price">
              Rs. {val.selling_price}
            </p>
          </div>
        );
      }
    });
  //   console.log(crousel);
  return (
    <div>
      <Slider {...settings}>{crousel}</Slider>
    </div>
  );
}
export default Crousel;
