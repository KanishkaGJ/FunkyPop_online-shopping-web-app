import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { useEffect, useState } from "react";

import CustomerLogin from './components/CustomerLogin';
import CustomerSignup from "./components/CustomerSignup";
import Testpage from "./components/Testpage";
import SellerLogin from "./components/SellerLogin";
import SellerSignup from "./components/SellerSignup";
import Button from "./components/Button";
import ImageGrid from "./components/ImageGrid";
import axios from "axios";

function App() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:8080/api/get")
    .then((res) => {
      console.log(res.data);
      setPhotos(res.data);
    })
    .catch((err) => console.log(err));
  }, []);



  return (
    
    <Router>
      <Routes>
        <Route path="/login" element={<CustomerLogin/>}></Route>
        <Route path="/signup" element={<CustomerSignup/>}></Route>
        <Route path="/users" element={<Testpage/>}></Route>

        <Route path="/slogin" element={<SellerLogin/>}></Route>
        <Route path="/ssignup" element={<SellerSignup/>}></Route>

        <Route path="/image" element={<Button/>}></Route>
        <Route path="/grid" element={<ImageGrid photos={photos}/>}></Route>
        
      </Routes>
      </Router>
  );
}

export default App;
