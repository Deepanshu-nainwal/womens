import React from "react";
import "./Loder.css";
function Loder() {
  return (
    <div style={{ maxHeight: "80vh" }}>
      <span className="loder_span">
        <img
          style={{ width: "77px" }}
          className="loder_img"
          src="/img/loder.gif"
          alt="loder"
        />
      </span>
    </div>
    // <div class="d-flex justify-content-center">
    //   <div class="spinner-border" role="status">
    //     <span class="sr-only">Loading...</span>
    //   </div>
    // </div>
  );
}
export default Loder;
