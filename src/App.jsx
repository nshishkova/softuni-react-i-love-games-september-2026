import { Route, Routes } from "react-router";
import { useState } from "react";
import * as authApi from "./api/index.js";
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
  const [auth, setAuth] = useState(null);

  const register = async (userData) => {
    try{
      const result = await authApi.register(userData);
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  }

  const logoutAction = () => {
    setAuth(null);
  }

  return (
    <>
      <Header isAuthenticated={!!auth} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/games/:gameId" element={<GameDetails user={auth} />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path="/games/:gameId/edit" element={<GameEdit />} />
        <Route path="/login" element={<Login onLogin={register}/>} />
        <Route path="/register" element={<Register onRegister={register} />} />
        <Route path="/logout" element={<Logout onLogout={logoutAction}/>} />
      </Routes> 

      <Footer />
    </>
  )
}

export default App;
