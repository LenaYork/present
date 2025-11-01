import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css'
import Menu from './components/Menu/Menu'
import About from './components/About/About'
import Conditions from './components/Conditions/Conditions'
import Services from './components/Services/Services'
import Footer from './components/footer/Footer'
import Agreement from './components/Agreement/Agreement'
import Payment from './components/Payment/Payment'
import Certificates from './components/Certificates/Certificates';
import CookieConsent from './components/CookieConsent/CookieConsent';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Routes>
        {/* Главная страница - С меню */}
        <Route path="/" element={
          <>
            <Menu />
            <h1>Коуч по личностному развитию и отношениям</h1>
            <About />
            <Certificates />
            <Conditions />
            <Services />
            <Footer />
            <CookieConsent />
          </>
        } />

        <Route path="/agreement" element={<Agreement />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  )
}

export default App