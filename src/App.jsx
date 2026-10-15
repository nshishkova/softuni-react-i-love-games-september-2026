import { Route, Routes } from "react-router";
import { useState } from "react";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import GameDetails from "./components/game-details/GameDetails.jsx";
import GameCreate from "./components/game-create/GameCreate.jsx"
import GameEdit from "./components/game-edit/GameEdit.jsx"
import Register from "./components/register/Register.jsx"
import Login from "./components/login/Login.jsx"
import Logout from "./components/logout/Logout.jsx";

function App() {
  const [user, setUser] = useState(null);

  const userAuthHandler = (userData) => {
    setUser(userData)
  }

  const logoutAction = () => {
    setUser(null);
  }

  return (
    <>
      <Header isAuthenticated={!!user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/games/:gameId" element={<GameDetails user={user} />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path="/games/:gameId/edit" element={<GameEdit />} />
        <Route path="/login" element={<Login onLogin={userAuthHandler}/>} />
        <Route path="/register" element={<Register onRegister={userAuthHandler} />} />
        <Route path="/logout" element={<Logout onLogout={logoutAction}/>} />
      </Routes> 

      <Footer />
    </>
  )
}

export default App;
