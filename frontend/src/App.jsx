// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Products from './pages/Products';
// import Contact from './pages/Contact';
// import ScheduleDemo from './pages/ScheduleDemo';


// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/contact" element={<Contact />} />
//              <Route path="/schedule-demo" element={<ScheduleDemo />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ScheduleDemo from './pages/ScheduleDemo';
import ChatBot from './components/ChatBot';

 // PRODUCT PAGES (Correct Case)
 import SandMaster from "./pages/sandmaster.jsx";
 import RockMaster from "./pages/RockMaster.jsx";
 import AutoWellz from "./pages/AutoWellz.jsx";
 import AutoPro from "./pages/AutoPro.jsx";
 import Green from "./pages/Green.jsx";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule-demo" element={<ScheduleDemo />} />

            {/* PRODUCT ROUTES */}
            <Route path="/products/sandmaster" element={<SandMaster />} />
            <Route path="/products/rockmaster" element={<RockMaster />} />
            <Route path="/products/autowellz" element={<AutoWellz />} />
            <Route path="/products/autopro" element={<AutoPro />} />
            <Route path="/products/green" element={<Green />} />
          </Routes>
        </main>

        <Footer />

        {/* CHATBOT ALWAYS VISIBLE */}
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;