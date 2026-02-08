import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import LegalNotice from "./pages/LegalNotice/LegalNotice.tsx";
import RoutePaths from "./entities/RoutePaths.ts";
import Navbar from "./components/Navbar.tsx";
import NotFound from "./pages/NotFound.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
    return (
      <>
          <Navbar/>
          <Routes>
              <Route path={RoutePaths.HOME} element={<Home/>}/>
              <Route path={RoutePaths.LEGAL_NOTICE} element={<LegalNotice/>}/>
              <Route path={RoutePaths.ABOUT} element={<About/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
      </>
  )
}

export default App;
