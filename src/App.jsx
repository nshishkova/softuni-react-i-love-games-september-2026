import { Route, Routes } from "react-router";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Catalog from "./components/catalog/Catalog.jsx";

function App() {
  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes> 

      <Footer />
    </>
  )
}

export default App;
