import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";
import "../css/form.css";
import "../css/star.css";

export default function ProductRate() {
  const navigate = useNavigate();

  const componentRef = useRef();
  const [rt, setRt] = useState([]);
  let [rate, setRate] = useState("");
  let [meanValue, setMeanValue] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:8070/productRate/productRates").then(
      (getData) => {
        const filteredData = getData.data.filter(
          (data) => data.productName === "product-2"
        );
        setRt(filteredData);
      }
    );
  }, []);

  useEffect(() => {
    if (rt.length > 0) {
      const sum = rt.reduce((acc, data) => acc + data.rate, 0);
      const mean = sum / rt.length;
      setMeanValue(mean);
    }
  }, [rt]);

  return (
    <section className="ftco-section">
      <div className="container">
        <br />
        <br />
        <div
          ref={componentRef}
          style={{ width: "100%", height: window.innerHeight }}
        >
          <center>
            <div
              ref={componentRef}
              style={{
                width: "100%",
                height: window.innerHeight,
                textAlign: "center",
              }}
            >
              {meanValue && (
                <div>
                  <h5>Rate for the product: {meanValue.toFixed(2)}</h5>
                  {/* <h5>Value: {rate}</h5> */}
                </div>
              )}
              <br></br>

              {rt.map((data) => (
                <form>
                  <div className="row">
                    <div className="col">
                      <div className="form-group form-inline">
                        <input
                          type="text"
                          className="form-control"
                          id="nameInput"
                          value={data.customerName}
                        ></input>
                      </div>
                    </div>
                    <div className="col">
                      <div className="col">
                        <div className="form-group form-inline">
                          <div className="stars">
                            <span
                              className={data.rate >= 1 ? "filled" : ""}
                            ></span>
                            <span
                              className={data.rate >= 2 ? "filled" : ""}
                            ></span>
                            <span
                              className={data.rate >= 3 ? "filled" : ""}
                            ></span>
                            <span
                              className={data.rate >= 4 ? "filled" : ""}
                            ></span>
                            <span
                              className={data.rate >= 5 ? "filled" : ""}
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Add your comment here.."
                      id="exampleFormControlTextarea1"
                      value={data.comment}
                    ></textarea>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    ></div>
                  </div>{" "}
                  <br />
                </form>
              ))}
            </div>
          </center>
        </div>
      </div>
    </section>
  );
}
