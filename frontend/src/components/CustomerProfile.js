import React, { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
let firstRender = true;
export default function CustomerProfile() {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span className="login100-form-title">Profile</span>
            <span className="txt2 m-l-16">Name:</span>
            <div
              className="wrap-input100 validate-input m-t-10 m-b-16"
              data-validate="Please enter username"
            >
              <input
                className="input100"
                type="text"
                name="cusName"
                // value={customer.CustomerName}
                placeholder="name"
              />
              <span className="focus-input100"></span>
            </div>
            <span className="txt2 m-l-16">Email:</span>
            <div
              className="wrap-input100 validate-input m-t-10 m-b-16"
              data-validate="Please enter password"
            >
              <input
                className="input100"
                type="password"
                name="cusEmail"
                // value={customer.CustomerEmail}
                placeholder="name"
              />
              <span className="focus-input100"></span>
            </div>
            <span className="txt2 m-l-16">Contact Number:</span>
            <div
              className="wrap-input100 validate-input m-t-10 m-b-16"
              data-validate="Please enter password"
            >
              <input
                className="input100"
                type="text"
                name="cusTelNum"
                // value={customer.ContactNum}
                placeholder="name"
              />
              <span className="focus-input100"></span>
            </div>
            <span className="txt2 m-l-16">Address:</span>
            <div
              className="wrap-input100 validate-input m-t-10 m-b-16"
              data-validate="Please enter password"
            >
              <input
                className="input100"
                type="password"
                name="cusAddress"
                // value={customer.Address}
                placeholder="name"
              />
              <span className="focus-input100"></span>
            </div>
            <span className="txt2 m-l-16">Username:</span>
            <div
              className="wrap-input100 validate-input m-t-10 m-b-16"
              data-validate="Please enter password"
            >
              <input
                className="input100"
                type="password"
                name="cusUsername"
                // value={customer.CusUsername}
                placeholder="name"
              />

              <span className="focus-input100"></span>
            </div>
            <span className="txt2 m-l-16">Change Password</span>
            <button className="login100-form-btn m-b-16 m-t-16">
              Save and Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
