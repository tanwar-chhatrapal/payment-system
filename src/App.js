import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './components/Checkout';


function App() {
  return (
    <div class="main">
      <div class="container-fluid px-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
