import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import LegalNotice from "./pages/LegalNotice/LegalNotice.tsx";
import RoutePaths from "./entities/RoutePaths.ts";
import Navbar from "./components/Navbar.tsx";
import NotFound from "./pages/NotFound.tsx";
import Footer from "./components/Footer.tsx";
import {Helmet} from "react-helmet";

const App = () => {
    return (
      <>
          <Navbar/>
          <Routes>
              <Route path={RoutePaths.HOME} element={
                  <>
                      <Helmet>
                          <title>Ged Applications</title>
                      </Helmet>
                      <Home/>
                  </>
              }/>
              <Route path={RoutePaths.LEGAL_NOTICE} element={
                  <>
                      <Helmet>
                          <title>Mentions légales</title>
                      </Helmet>
                    <LegalNotice/>
                  </>
              }/>
              <Route path={RoutePaths.ABOUT} element={
                  <>
                      <Helmet>
                          <title>À propos de nous</title>
                      </Helmet>
                      <About/>
                  </>
              }/>
              <Route path="*" element={
                  <>
                      <Helmet>
                          <title>Page non trouvé</title>
                      </Helmet>
                      <NotFound/>
                  </>
              }/>
          </Routes>
          <Footer/>
      </>
  )
}

export default App;
