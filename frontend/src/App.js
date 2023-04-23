import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import CustomerLogin from "./components/CustomerLogin";
import CustomerSignup from "./components/CustomerSignup";
import Testpage from "./components/Testpage";
import SellerLogin from "./components/SellerLogin";
import SellerSignup from "./components/SellerSignup";
import CustomerProfile from "./components/CustomerProfile";
import SellerProfile from "./components/SellerProfile";
import EmailSend from "./components/EmailSend";
import AddProduct from "./components/AddProduct";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";

import NavBar from "./components/NavBar";
import BackDrop from "./components/BackDrop";
import SideDrawer from "./components/SideDrawer";

function App() {

  const [sideToggle, setSideToggle] = useState(false);


  return (

    <Router>
      <NavBar click={() => setSideToggle(true)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Routes>
        {/*<Route exact path="/" compoment={HomePage}></Route>*/}
        <Route exact path="/cart" compoment={CartPage}></Route>
        <Route path="/login" element={<CustomerLogin/>}></Route>
        <Route path="/signup" element={<CustomerSignup/>}></Route>
        <Route path="/users" element={<Testpage/>}></Route>
        <Route path="/cusprofile" element={<CustomerProfile />}></Route>
        <Route path="/selprofile" element={<SellerProfile />}></Route>

        <Route path="/slogin" element={<SellerLogin />}></Route>
        <Route path="/ssignup" element={<SellerSignup />}></Route>

        <Route path="/email" element={<EmailSend />}></Route>
        <Route path="/slogin" element={<SellerLogin />}></Route>
        <Route path="/ssignup" element={<SellerSignup />}></Route>
        <Route path="/addP" element={<AddProduct />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
