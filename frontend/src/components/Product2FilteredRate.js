import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";

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
              <table
                className="table"
                style={{ width: "100%", margin: "0 auto" }}
              >
                <thead>
                  <th>Customer Name</th>
                  <th>Rate (out of 5) </th>
                  <th>Comment</th>
                </thead>
                <tbody>
                  {rt.map((data) => (
                    <tr key={data.id}>
                      <td>{data.customerName}</td>
                      <td> {data.rate}</td>
                      <td>{data.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </center>
        </div>
      </div>
    </section>
  );
}
