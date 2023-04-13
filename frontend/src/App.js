import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import CustomerLogin from './components/CustomerLogin';
import CustomerSignup from "./components/CustomerSignup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<CustomerLogin/>}></Route>
        <Route path="/signup" element={<CustomerSignup/>}></Route>
      </Routes>
      </Router>
  );
}

export default App;
