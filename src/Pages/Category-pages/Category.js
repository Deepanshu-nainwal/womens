import React from "react";
import { useState, useEffect } from "react";
import Nav from "../../Components/Navbar/nav";
import Footer from "../../Components/Footer/Footer";
import useHttp from "../../hooks/useHttp";
import Loder from "../../Components/Loder/Loder";
import "./Category.css";
import { Link, useParams } from "react-router-dom";

function Page(props) {
  const [isActive, setIsActive] = useState("");
  const [classValue, setClassValue] = useState(false);
  const [displayOnHover, setDisplayOnHover] = useState(false);
  const [isActiveOnHover, setIsActiveOnHover] = useState("");
  const { productId } = useParams();
  const {
    fetchData,
    fetchApi: apihandler,
    isLoding,
  } = useHttp({
    url: `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=${productId}.html&page=1&count=20&sort_by=&sort_dir=desc&filter=`,
  });

  useEffect(() => {
    apihandler();
  }, [productId]);

  // for displaying the list data
  const showListData = (event) => {
    setIsActive(event);
    setClassValue((classValue) => !classValue);
    // setClassValue(true);
  };
  // for displaying product size on hover data
  const onHover = (e) => {
    setIsActiveOnHover(e);
    setDisplayOnHover(true);
  };
  const onMouseLeave = () => {
    setDisplayOnHover(false);
  };

  const products =
    fetchData &&
    fetchData?.products?.map((val, i) => {
      return (
        <div
          onMouseOver={onHover.bind(this, val.id_product)}
          onMouseLeave={onMouseLeave}
          key={val.id_product}
          className="product_div"
        >
          <img className="product_img" src={val.image} alt="img" />
          <p
            className={
              isActiveOnHover === val.id_product && displayOnHover
                ? "active view_detail"
                : "view_detail"
            }
          >
            VIEW DETAIL
          </p>
          <div className="product_info_div">
            <p className="product_name">
              <Link className="product_name_link">{val.name}</Link>
            </p>
            <p className="product_price">Rs. {val.selling_price}</p>
            <p
              className={
                isActiveOnHover === val.id_product && displayOnHover
                  ? "active product_size"
                  : "product_size"
              }
            >
              Size - {val.size}
            </p>
          </div>
        </div>
      );
    });
  const filters =
    fetchData &&
    fetchData?.filters?.map((val, i) => {
      return (
        <div key={i + 1} className="filter_div">
          <li
            className="filter_list"
            onClick={showListData.bind(this, val.filter_lable)}
          >
            {val.filter_lable}
          </li>
          <div
            className={
              isActive === val.filter_lable && classValue
                ? "active filter_lists_inside_data_div"
                : "filter_lists_inside_data_div"
            }
          >
            {Object.keys(val?.options).map((key, index) => {
              return (
                <div key={index} className="list_data_div">
                  <input type="checkbox" className="list_data_checkbox" />
                  <li className="list_data">{val?.options[key].value}</li>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  // console.log(fetchData);
  return (
    <div>
      <Nav />
      {isLoding ? (
        <Loder />
      ) : (
        <div className="category">
          <div className="filters">
            <h3 className="filter_text">FILTER</h3>
            {filters}
          </div>
          <div className="products">{products}</div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Page;
