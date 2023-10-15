import React from "react";
import "./nav.css";
import LogIn from "../LogIn";
import { useEffect, useState } from "react";
import women from "../../assets/women-logo.png";
import logIn from "../../assets/icons8-log-in.png";
import cart from "../../assets/cart-icon.png";
import useHttp from "../../hooks/useHttp";
import { Link, NavLink, useParams } from "react-router-dom";
const Nav = () => {
  const { fetchData, fetchApi: apiHandler } = useHttp({
    url: "https://pim.wforwoman.com/pim/pimresponse.php?service=menu&store=1&device=desktop",
  });
  useEffect(() => {
    apiHandler();
  }, []);
  //   console.log(navData);
  // console.log(fetchData);
  const productId = useParams();
  const navLink =
    fetchData &&
    fetchData.map((val) => {
      return (
        <Link
          className="navlink"
          to={`/category/${val.menu_url_key}`}
          key={val.source_category_id}
        >
          {val.name}
        </Link>
      );
    });

  return (
    <div className="navbar">
      <div className="nav_menu">
        <Link to={"/"}>
          <img className="women_logo" src={women} alt="logo" />
        </Link>
        <ul className="navlinks">{navLink}</ul>
      </div>
      <div className="nav_icons">
        <div className="search_bar_div">
          <input className="search_bar" type="text" placeholder="Search" />
          <img
            className="icon_search"
            src="/img/icons-search.svg"
            alt="search"
          />
        </div>
        <div className="icons">
          <div className="logIn">
            <img className="icon_login" src={logIn} alt="logIn" />
            <p className="login_text">LOGIN</p>
          </div>
          <div className="cart">
            <img className="icon_cart" src={cart} alt="cart" />
            <p className="cart_text">CART</p>
          </div>
        </div>
      </div>
      {/* <LogIn /> */}
    </div>
  );
};
export default Nav;
