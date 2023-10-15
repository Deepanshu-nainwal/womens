import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./LogIn.css";
function LogIn() {
  return (
    <form className="login_form">
      <div class="form-group">
        <label for="exampleInputEmail1">Phone Number</label>

        <input
          type="tel"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter mobile No."
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">OTP</label>
        <input
          type="OTP"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter OTP    "
        />
      </div>

      <button type="submit" class="btn btn-primary">
        close
      </button>
    </form>
  );
}
export default LogIn;
