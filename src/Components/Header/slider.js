import React from "react";
import "./slider.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loder from "../Loder/Loder";
import Crousel from "./Crousel";
import Footer from "../Footer/Footer";
import veganBrand from "../../assets/vegan-brand.webp";
import newfoot from "../../assets/newfootmob.webp";
import tops from "../../assets/360tops.webp";
import festiv from "../../assets/festive.webp";
import party from "../../assets/party.webp";
import travel from "../../assets/travel.webp";
import casul from "../../assets/casual.webp";
import storis from "../../assets/tims-storis.jpg";
import useHttp from "../../hooks/useHttp";

function Banner() {
  useEffect(() => {
    fetcHandler();
  }, []);
  const {
    fetchData,
    isLoding,
    fetchApi: fetcHandler,
  } = useHttp({
    url: "https://pim.wforwoman.com/pim/pimresponse.php?service=home&store=1",
  });

  const BannerSlideImgs =
    fetchData &&
    fetchData.brand_slider.map((val, i) => {
      if (val.device === "desktop") {
        return (
          <div key={val.id_banner} className="slider_imgs">
            <img className="slider_img" src={val.image} alt="img" />
          </div>
        );
      }
    });

  const banSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2400,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "19px",
          padding: "30px 0",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  // console.log(fetchData.trending.brand_category);
  return (
    <div className="banner">
      {isLoding ? (
        <Loder />
      ) : (
        <Slider {...banSettings}>{BannerSlideImgs}</Slider>
      )}
      <p className="spring_summer_edits_tag">SPRING SUMMER EDITS</p>
      <div className="first_crousel">
        <Crousel data={fetchData.go_styles} />
      </div>
      <p className="featured_shop_tag">FEATURED SHOPS</p>
      <div className="featured_shop_section">
        <img className="vegan_img" src={veganBrand} alt="img" />
        <img className="newfoot_img" src={newfoot} alt="" />
      </div>
      <p className="this_summer_tag">THIS SUMMER #MOVE360 </p>
      <p className="this_summer_pera">
        The chic and comfortable styles to keep you on the move throughout
        summer!
      </p>
      <div className="this_summer_imgs">
        <img className="long_img tops " src={tops} alt="" />
        <img className="short_img casul " src={casul} alt="" />
        <img className="short_img festiv" src={festiv} alt="" />
        <img className="short_img travel " src={travel} alt="" />
        <img className="long_img party" src={party} alt="" />
      </div>
      <p className="new_in_tag">NEW IN </p>
      <div className="second_crousel">
        <Crousel data={fetchData.whats_new_main} />
      </div>
      <div className="time-less_storis">
        <p className="strois_tag">
          Curated Stories for every woman who is always on the move!
        </p>
        <div className="storis_img_div">
          <img className="storis_img" src={storis} alt="img" />
        </div>
      </div>
      <div className="third_crousel">
        <Crousel data={fetchData.best_seller} />
      </div>
      <Footer />
    </div>
  );
}
export default Banner;
