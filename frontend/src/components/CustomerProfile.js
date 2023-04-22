import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import axios from "axios";
import "../css/cusProfile.css";
axios.defaults.withCredentials = true;
// let firstRender = true;

export default function CustomerProfile() {
  const history = useNavigate();
  const [customer, setCustomer] = useState();

  const [CustomerName, setCustomerName] = useState("");
  const [CustomerEmail, setCustomerEmail] = useState("");
  const [ContactNum, setContactNum] = useState("");
  const [Address, setAddress] = useState("");
  const [CusUsername, setCusUsername] = useState("");

  useEffect(() => {
    const sendRequest = async () => {
      const res = await axios.get("http://localhost:8070/customer/cus");
      const data = res.data.customer;
      setCustomer(data);
      setCustomerName(data.CustomerName);
      setCustomerEmail(data.CustomerEmail);
      setContactNum(data.ContactNum);
      setAddress(data.Address);
      setCusUsername(data.CusUsername);
    };

    sendRequest();
  }, []);

  const sendDataToUpdate = async (e) => {
    e.preventDefault();

    const data = {
      CustomerName: CustomerName,
      CustomerEmail: CustomerEmail,
      ContactNum: ContactNum,
      Address: Address,
      CusUsername: CusUsername,
    };

    await axios
      .put(`http://localhost:8070/customer/update/${customer._id}`, data, {
        withCredentials: true,
      })
      .then(() => {
        alert("Profile Updated");
      })
      .catch((err) => {
        alert(err);
      });

    setCustomer({ ...customer, ...data });
  };

  const onDelete = (_id) => {
    axios
      .delete(`http://localhost:8070/customer/delete/${customer._id}`)
      .then(() => {
        alert("Profile Deleted");
        history("/login");
      })
      .catch((err) => {
        alert(err);
      });
  };

  // const submit = (_id) => {
  //   confirmAlert({
  //     title: "Confirm to Delete",
  //     message: "Are you sure to do this?",
  //     buttons: [
  //       {
  //         label: "Yes",
  //         onClick: () => onDelete(_id),
  //       },
  //       {
  //         label: "No",
  //         //onClick: () => alert('Click No')
  //       },
  //     ],
  //   });
  // };

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span className="login100-form-title">Customer Profile</span>

            <div className="fieldNames"></div>

            <div className="inputFields">
              <div className="alignLine m-b-20">
                {/* <span stlle="margin-right:10px;">Name:</span> */}
                <input
                  className="input200 m-l-16"
                  type="text"
                  value={CustomerName}
                  name="CustomerName"
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                  }}
                />
              </div>

              <div className="alignLine m-b-20">
                <input
                  className="input200 m-l-16"
                  type="text"
                  value={CustomerEmail}
                  name="CustomerEmail"
                  onChange={(e) => {
                    setCustomerEmail(e.target.value);
                  }}
                />
              </div>

              <div className="alignLine m-b-20">
                <input
                  className="input200 m-l-16"
                  type="text"
                  value={ContactNum}
                  name="ContactNum"
                  onChange={(e) => {
                    setContactNum(e.target.value);
                  }}
                />
              </div>

              <div className="alignLine m-b-20">
                <input
                  className="input200 m-l-16"
                  type="text"
                  value={Address}
                  name="ContactNum"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>

              <div className="alignLine m-b-16">
                <input
                  className="input200 m-l-16"
                  type="text"
                  value={CusUsername}
                  name="CusUsername"
                  onChange={(e) => {
                    setCusUsername(e.target.value);
                  }}
                />
              </div>
            </div>

            <button
              className="login100-form-btn m-b-16 m-t-16"
              type="submit"
              onClick={sendDataToUpdate}
            >
              Save and Update
            </button>

            <button
              className="login100-form-btn m-b-16 m-t-16"
              onClick={() => onDelete(customer._id)}
            >
              Delete Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
