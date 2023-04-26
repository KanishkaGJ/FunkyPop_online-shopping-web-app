import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../css/paymentDelivery.css";
import "../css/cusLoginUtil.css";
axios.defaults.withCredentials = true;

export default function PayDeliver() {
  const navigate = useNavigate();

  const [customerName, setcustomerName] = useState("");
  const [customerPhone, setcustomerPhone] = useState("");
  const [deliveryAddress, setdeliveryAddress] = useState("");
  const [tot, settot] = useState("");

  const handleCheckout = (e) => {
    
    e.preventDefault();
    const newData = {
      deliveryAddress,
      tot,
      customerName,
      customerPhone,
    };

    console.log(newData);
    axios.post("http://localhost:8070/delivery/deliveries",newData).then(()=>{
        alert("New Delivery details added");
        navigate(`/confirmpay?newData=${JSON.stringify(newData)}`);
        //history("/confirmPay");
    }).catch((err)=>{
        alert(err)
    })
    //navigate(`/confirmpay?formData=${JSON.stringify(formData)}`);
    
    
  };

  return (
    <div className="paydeliver">
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form onSubmit={handleCheckout}>
              <div className="row">
                <div className="col-50">
                  <h3 className="m-b-20">Delivery Details</h3>
                  <label htmlFor="fname">
                    <i className="fa fa-user"></i> Customer Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setcustomerName(e.target.value);
                    }}
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o"></i> Customer Phone
                    Number
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setcustomerPhone(e.target.value);
                    }}
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution"></i> Address
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setdeliveryAddress(e.target.value);
                    }}
                  />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">tot</label>
                      <input
                        type="text"
                        onChange={(e) => {
                          settot(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3 className="m-b-20">Payment</h3>

                  <label htmlFor="cname">Name on Card</label>
                  <input type="text" />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input type="text" />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input type="text" />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input type="text" />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
              
                <div>
                  <button type="submit" className="paydeliverybtn">
                    Continue to Checkout
                  </button>
                </div>
              
             
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
