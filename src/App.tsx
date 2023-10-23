import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./page/Homepage"
import Navbar from "./components/Partials/Navbar"
import "./App.css";
import Footer from "./components/Partials/Footer";
import About from "./page/About";
import Work from "./page/Work";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <main className="w-full px-[1rem] sm:px-[10rem] overflow-auto">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/aboutme" element={<About/>}/>
          <Route path="/work" element={<Work/>}/>
        </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App