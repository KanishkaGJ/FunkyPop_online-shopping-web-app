import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../css/AddProductRate.css";
import Product2FilteredRateProduct2FilteredRate from "../components/Product2FilteredRate";

export default function AddProductRate() {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [productName, setProductName] = useState("");
  const [rate, setRate] = useState("");
  const [comment, setComment] = useState("");
  function sendData(e) {
    e.preventDefault();
    const newProductRate = {
      customerName: customerName,
      productName: productName,
      rate: rate,
      comment: comment,
    };
    //send http request
    axios
      .post("http://localhost:8070/productRate/addProductRate", newProductRate)
      .then((resp) => {
        setCustomerName("");
        setProductName("");
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
                  <b>Product</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productInput"
                  placeholder="Enter product name"
                  onChange={(e) => {
                    setProductName(e.target.value);
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

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import { BFormRating } from 'bootstrap-vue';
// import "../css/AddProductRate.css";

// export default function AddProductRate() {
//   const navigate = useNavigate();
//   const [customerName, setCustomerName] = useState("");
//   const [productName, setProductName] = useState("");
//   const [rate, setRate] = useState("");
//   const [comment, setComment] = useState("");

//   function handleRateChange(value) {
//     setRate(value);
//   }

//   function sendData(e) {
//     e.preventDefault();
//     const newProductRate = {
//       customerName: customerName,
//       productName: productName,
//       rate: rate,
//       comment: comment,
//     };
//     //send http request
//     axios
//       .post("http://localhost:8070/productRate/addProductRate", newProductRate)
//       .then((resp) => {
//         setCustomerName("");
//         setProductName("");
//         setRate("");
//         setComment("");
//         window.location.reload(); // Refresh the page
//       });
//   }

//   return (
//     <div className="form-container">
//       <br></br>
//       <form onSubmit={sendData}>
//         <div className="row">
//           <div className="col">
//             <div className="form-group form-inline">
//               <label htmlFor="rateInput">
//                 <b>Rate</b>
//               </label>
//               <BFormRating
//                 id="rateInput"
//                 value={rate}
//                 variant="warning"
//                 class="mb-2"
//                 onChange={handleRateChange}
//               />
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
