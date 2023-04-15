import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import CustomerLogin from './components/CustomerLogin';
import CustomerSignup from "./components/CustomerSignup";
import Testpage from "./components/Testpage";
import SellerLogin from "./components/SellerLogin";
import SellerSignup from "./components/SellerSignup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<CustomerLogin/>}></Route>
        <Route path="/signup" element={<CustomerSignup/>}></Route>
        <Route path="/users" element={<Testpage/>}></Route>

        <Route path="/slogin" element={<SellerLogin/>}></Route>
        <Route path="/ssignup" element={<SellerSignup/>}></Route>
      </Routes>
      </Router>
  );
}

export default App;
