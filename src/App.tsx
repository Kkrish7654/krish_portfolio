import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./page/Homepage"
import Navbar from "./components/Navbar"
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <main className="w-full px-[1rem] sm:px-[10rem] overflow-auto">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </main>
      </BrowserRouter>
    </>
  )
}

export default App