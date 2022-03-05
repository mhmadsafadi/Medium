import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import InHome from './pages/InHome';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<InHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
