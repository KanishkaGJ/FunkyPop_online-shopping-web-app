import React, { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
let firstRender = true;

const Testpage = () => {
  const [customer, setCustomer] = useState();

  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:8070/customer/cus", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sendRequest().then((data) => setCustomer(data.customer));
    }
    // let interval = setInterval(() => {
    //   refreshToken().then((data) => setCustomer(data.customer));
    // }, 1000 * 29);
    // return () => clearInterval(interval);
  }, []);

  return (
    <div>
      Hello
      <br />
      {customer && <h1>{customer.CustomerName}</h1>}
    </div>
  );
};

export default Testpage;
