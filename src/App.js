import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import './styles/globals.css'
// import './styles/Home.module.css'
import Navbar from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import PetList from './pages/PetList'
import AdoptPet from './pages/AdoptPet'
import GiveAway from './pages/GiveAway'
import ContactUs from './pages/ContactUs';

function App({ Component, pageProps }) {
  return (
   
    <div className="container">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/pets" element={<PetList/>} />
      <Route path="/adopt" element={<AdoptPet/>} />
      <Route path="/giveaway" element={<GiveAway/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="*" element={<HomePage/>} />
       </Routes>
       
      </BrowserRouter>
     </div>
  
  );
}

export default App;
