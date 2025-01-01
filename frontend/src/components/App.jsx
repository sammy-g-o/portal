// import { SpeedInsights } from '@vercel/speed-insights/next';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import About from "../pages/about"
import Loginpage from "../pages/login"
import Campus from "../pages/campus"
import ProgramsPage from "../pages/programsPage"
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Loginpage />}/>
        <Route path="/campus" element={<Campus />}/>
        <Route path="/programs" element={<ProgramsPage />}/>
      </Routes>
      </BrowserRouter>
      {/* <SpeedInsights /> */}

    </>
  )
}

export default App
