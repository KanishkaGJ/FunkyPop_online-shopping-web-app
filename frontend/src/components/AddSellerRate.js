import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../css/AddProductRate.css";
import Product2FilteredRateProduct2FilteredRate from "../components/Product2FilteredRate";

export default function AddSellerRate() {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [rate, setRate] = useState("");
  const [comment, setComment] = useState("");
  function sendData(e) {
    e.preventDefault();
    const newSellerRate = {
      customerName: customerName,
      sellerName: sellerName,
      rate: rate,
      comment: comment,
    };
    //send http request
    axios
      .post("http://localhost:8070/sellerRate/addSellerRate", newSellerRate)
      .then((resp) => {
        setCustomerName("");
        setSellerName("");
        setRate("");
        setComment("");
        window.location.reload(); // Refresh the page
      });
  }

  return (
    <div className="form-container">
      <br></br>
      <form onSubmit={sendData}>
        <div className="row">
          <div className="col">
            <div className="form-group form-inline">
              <label for="nameInput">
                <b>Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter your name"
                onChange={(e) => {
                  setCustomerName(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="col">
            <div className="col">
              <div className="form-group form-inline">
                <label htmlFor="productInput">
                  <b>Seller</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productInput"
                  placeholder="Enter product name"
                  onChange={(e) => {
                    setSellerName(e.target.value);
                  }}
                  value="product-2"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="form-group form-inline">
              <label for="rateInput">
                <b>Rate</b>
              </label>
              <select
                className="form-control"
                id="rateInput"
                onChange={(e) => {
                  setRate(e.target.value);
                }}
              >
                <option value="">Choose..</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">
            <b>Add Review</b>
          </label>
          <br></br>
          <textarea
            className="form-control"
            placeholder="Add your comment here.."
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          ></textarea>
          <br></br>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="submit" className="btn btn-dark">
              ADD
            </button>
          </div>
        </div>{" "}
      </form>
      <Product2FilteredRateProduct2FilteredRate />
    </div>
  );
}
