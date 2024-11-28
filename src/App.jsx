import React, { useState, useEffect } from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VistaPage from './components/pages/VistaPage';
import RestaurantesPage from './components/pages/RestaurantesPage';
import NativePage from './components/pages/NativePage';
import { Navbar } from './components/Navar/Navbar';


function App() {
  const [showVideo, setShowVideo] = useState(true); // Estado para controlar el video

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(false), 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {showVideo ? (
        <div className='contenedor'>
          <div className="video-container">
            <video autoPlay muted onEnded={() => setShowVideo(false)} style={{ width: '100%' }}>
              <source src="/video/Guarayos.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      ) : (
        <Main />
      )}
    </BrowserRouter>
  );
}

function Main() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<VistaPage />} />
        <Route path="/restaurantes" element={<RestaurantesPage />} />
        <Route path="/native/products" element={<NativePage />} />
      </Routes>
    </>
  );
}

export default App;
