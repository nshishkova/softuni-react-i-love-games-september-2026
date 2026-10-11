import { Route, Routes } from "react-router";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import GameDetails from "./components/game-details/GameDetails.jsx";
import GameCreate from "./components/game-create/GameCreate.jsx"
import GameEdit from "./components/game-edit/GameEdit.jsx"
import GameRegister from "./components/game-register/GameRegister.jsx"
import GameLogin from "./components/game-login/GameLogin.jsx"

function App() {
  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/games/:gameId" element={<GameDetails />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path="/games/edit" element={<GameEdit/>} />
        <Route path="/login" element={<GameLogin />} />
        <Route path="/register" element={<GameRegister />} />
      </Routes> 

      <Footer />
    </>
  )
}

export default App;
