import Header from "./Header"
import Home from "./Home"
import ContactUs from "./ContactUs"
import AboutUs from "./AboutUs"
import Footer from "./Footer"
import NotFound from "./NotFound"
import { Route, Routes } from "react-router-dom"
import "./style.css"
function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
       {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
