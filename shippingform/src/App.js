import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ShippingForm from "./Components/ShippingForm/ShippingForm";
import ShippingList from "./Components/ShippingLists/ShippingList";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/ShippingList" element={<ShippingList />} />
          <Route path="/ShippingForm" element={<ShippingForm />} />
          <Route path="/ShippingForm/:id" element={<ShippingForm />} />
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
