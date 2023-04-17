import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../css/customerLogin.css";
import "../css/cusLoginUtil.css";

export default function AdminLogin() {
    
  const history = useNavigate();

  const [AdminEmail, setAdminEmail] = useState("");
  const [AdminPassword, setAdminPassword] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newLogin = {
      AdminEmail,
      AdminPassword,
    };

    //send http request
    axios
      .post("http://localhost:8070/admin/login", newLogin)
      .then(() => {
        alert("Login Success");
        history.navigate("/adminSignup"); // Corrected line
      })
      .catch((err) => {
        alert(err);
      });

  }

    return (
        <div className="limiter">
        <div className="container-login100">
            <div className="wrap-login100">
                <form onSubmit={sendData} className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                    <span className="login100-form-title">
                        Admin Login
                    </span>

                    <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter email">
                        <input className="input100" type="text" name="email" placeholder="Email"
            onChange={(e)=>{
                setAdminEmail(e.target.value);
            }
            }/>

            <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate = "Please enter password">
                        <input className="input100" type="password" name="pass" placeholder="Password"
            onChange={(e)=>{
                setAdminPassword(e.target.value);
            }
            }/>
            <span className="focus-input100"></span>
                    </div>

                    <div className="text-right p-t-13 p-b-23">
                        <span className="txt1">
                            Forgot
                        </span>

                        <a href="#" className="txt2">
                            Username / Password?
                        </a>
                    </div>

                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn">
                            Login
                        </button>
                    </div>

                    <div className="flex-col-c p-t-170 p-b-40">
                        <span className="txt1 p-b-9">
                            Don’t have an account?
                        </span>

                        <Link to="/adminSignup" className="txt3">
                            Sign up now
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
