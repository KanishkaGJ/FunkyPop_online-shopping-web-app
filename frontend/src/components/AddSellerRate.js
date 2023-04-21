// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import "../css/AddProductRate.css";
// import Product2FilteredRateProduct2FilteredRate from "../components/Product2FilteredRate";

// export default function AddSellerRate() {
//   const navigate = useNavigate();
//   const [customerName, setCustomerName] = useState("");
//   const [sellerName, setSellerName] = useState("");
//   const [rate, setRate] = useState("");
//   const [comment, setComment] = useState("");
//   function sendData(e) {
//     e.preventDefault();
//     const newSellerRate = {
//       customerName: customerName,
//       sellerName: sellerName,
//       rate: rate,
//       comment: comment,
//     };
//     //send http request
//     axios
//       .post("http://localhost:8070/sellerRate/addSellerRate", newSellerRate)
//       .then((resp) => {
//         setCustomerName("");
//         setSellerName("");
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
//               <label for="nameInput">
//                 <b>Name</b>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="nameInput"
//                 placeholder="Enter your name"
//                 onChange={(e) => {
//                   setCustomerName(e.target.value);
//                 }}
//               ></input>
//             </div>
//           </div>
//           <div className="col">
//             <div className="col">
//               <div className="form-group form-inline">
//                 <label htmlFor="productInput">
//                   <b>Seller</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="productInput"
//                   placeholder="Enter product name"
//                   onChange={(e) => {
//                     setSellerName(e.target.value);
//                   }}
//                   value="product-2"
//                   disabled
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="form-group form-inline">
//               <label for="rateInput">
//                 <b>Rate</b>
//               </label>
//               <select
//                 className="form-control"
//                 id="rateInput"
//                 onChange={(e) => {
//                   setRate(e.target.value);
//                 }}
//               >
//                 <option value="">Choose..</option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//               </select>
//             </div>
//           </div>
//         </div>
//         <div className="form-group">
//           <label for="exampleFormControlTextarea1">
//             <b>Add Review</b>
//           </label>
//           <br></br>
//           <textarea
//             className="form-control"
//             placeholder="Add your comment here.."
//             id="exampleFormControlTextarea1"
//             rows="3"
//             onChange={(e) => {
//               setComment(e.target.value);
//             }}
//           ></textarea>
//           <br></br>
//           <div style={{ display: "flex", justifyContent: "flex-end" }}>
//             <button type="submit" className="btn btn-dark">
//               ADD
//             </button>
//           </div>
//         </div>{" "}
//       </form>
//       <Product2FilteredRateProduct2FilteredRate />
//     </div>
//   );
// }

//pasted from -> AddProductRate.js

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../css/AddProductRate.css";
import SellerFilteredRate from "./SellerFilteredRate";

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
      productName: "product-2",
      rate: rate,
      comment: comment,
    };
    //send http request
    axios
      .post("http://localhost:8070/productRate/addProductRate", newProductRate)
      .then((resp) => {
        setCustomerName("");
        setProductName("");
        setRate(0);
        setComment("");
        window.location.reload(); // Refresh the page
      });
  }

  return (
    <div className="form-container">
      <br></br>
      <div className="form-box">
        <form class="form-review" onSubmit={sendData}>
          <div class="row">
            <div class="col">
              <div class="form-group form-inline">
                <label for="nameInput">
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  class="form-control input-field"
                  id="nameInput"
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                  }}
                ></input>
              </div>
            </div>

            {/* rate by dropdown */}
            <div class="col">
              <div class="form-group form-inline">
                <label for="rateInput">
                  <b>Rate</b>
                </label>
                <select
                  class="form-control input-field"
                  id="rateInput"
                  placeholder="Choose.."
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

          <br />
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              <b>Add Review</b>
            </label>
            <br />
            <textarea
              class="form-control input-field"
              placeholder="Add your comment here.."
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
            <br />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button type="submit" class="btn btn-dark">
                ADD
              </button>
            </div>
          </div>
          <br />
        </form>
      </div>
      <SellerFilteredRate />
    </div>
  );
}