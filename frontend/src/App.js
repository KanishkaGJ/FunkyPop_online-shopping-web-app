import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import CustomerLogin from './components/CustomerLogin';
import CustomerSignup from "./components/CustomerSignup";
import Testpage from "./components/Testpage";
import SellerLogin from "./components/SellerLogin";
import SellerSignup from "./components/SellerSignup";
import AddProduct from "./components/AddProduct";
import ViewProduct from "./components/ViewProduct";
import UpdateProduct from "./components/UpdateProduct";
import ClientProduct from "./components/ClientProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<CustomerLogin/>}></Route>
        <Route path="/signup" element={<CustomerSignup/>}></Route>
        <Route path="/users" element={<Testpage/>}></Route>

        <Route path="/slogin" element={<SellerLogin/>}></Route>
        <Route path="/ssignup" element={<SellerSignup/>}></Route>

        <Route path="/addP" element={<AddProduct/>}></Route>
        <Route path="/viewP" element={<ViewProduct/>}></Route>
        <Route path="/updateP" element={<UpdateProduct/>}></Route>
        <Route path="/clientP" element={<clientProduct/>}></Route>
      </Routes>
      </Router>
  );
}

export default App;
