import React, { useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import { useLocation, useParams } from "react-router-dom";
import Nav from "../../Components/Navbar/nav";
import Loder from "../../Components/Loder/Loder";
import Footer from "../../Components/Footer/Footer";
import { Button } from "reactstrap";
export default function Checkout() {
  const { key, store } = useParams();
  const location = useLocation().state.data;
  //   const {
  //     fetchData,
  //     fetchApi: apihandler,
  //     isLoding,
  //   } = useHttp({
  //     url: `https://pim.wforwoman.com/pim/pimresponse.php/?service=meta_title&store=${store}&url_key=${key}`,
  //     // https://pim.wforwoman.com/pim/pimresponse.php/?service=meta_title&store=1&url_key=product-royal-blue-embroidered-kurta-pants-and-dupatta-set-23auws10288-220798&meta_type=product
  //   });

  //   useEffect(() => {
  //     apihandler();
  //     console.log("fetchData", fetchData);
  //   }, [key]);
  //   service: meta_title
  // store: 1
  // url_key: product-royal-blue-embroidered-kurta-pants-and-dupatta-set-23auws10288-220798
  // meta_type: product
  console.log(location);
  const size = location?.size.replace(/\[|\]/g, "");
  const actualSize = size?.split(",");

  return (
    <>
      <div>
        <Nav />
        <div className="px-5 d-flex align-items-top gap-5  py-5">
          <img src={location?.gallery[0].image} alt="kajfl" />
          <div>
            <p className="fs-3 m-0">{location?.name}</p>
            <p className="m-0">
              <span style={{ fontSize: "13px" }} className="fw-bolder">
                SKU
              </span>{" "}
              :
              <span
                style={{ fontSize: "13px" }}
                className="text-secondary ms-1"
              >
                {location?.sku}
              </span>
            </p>
            <p className="fs-3 m-0">Rs.{location?.selling_price}</p>
            <p style={{ fontSize: "10px" }} className="m-0">
              MRP (inclusive of all taxes)
            </p>
            <p
              style={{
                fontSize: "13px",
                width: "310px",
                border: "1px solid #bf1616",
                borderRadius: "10px",
              }}
              className="mt-1 px-2 py-2 "
            >
              <span className="fw-bolder">
                or 3 monthly payments of ₹1666 with UPI & Cards Accepted,
              </span>
              <span className="text-secondary fw-bold">
                Online approval in 2 minutes
              </span>
              <br />
              Easy full refunds, No extra charges.
            </p>
            <p className="fs-5 mt-2 mb-1">Select Size</p>
            <p className="d-flex align-items-center gap-2 px-3 mt-0">
              {actualSize.map((val) => {
                return (
                  <p
                    style={{
                      border: "1px solid ",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    className="px-3 py-1 "
                  >
                    {val}
                  </p>
                );
              })}
            </p>
            <Button
              style={{ background: "#bf1616", border: "none", color: "#FFF" }}
              className="font-bolder me-2 px-4 py-2"
              size="md"
            >
              ADD TO CART
            </Button>
            <Button
              style={{ background: "#bf1616", border: "none", color: "#FFF" }}
              className="font-bolder  px-4 py-2 ms-1"
              size="md"
            >
              BUY NOW
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
