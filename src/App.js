import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i <= 84; i++) {
        const img = new Image();
        img.src = `/frames/frame-${String(i).padStart(3, "0")}.jpg`;
      }
    };
    preloadImages();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
