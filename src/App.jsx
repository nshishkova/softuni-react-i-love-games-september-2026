import { Route, Routes } from "react-router";
import { useState } from "react";
import AuthContext from "./contexts/auth-context.js";
import { useNavigate } from "react-router";
import { authApi } from "./api";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import GameDetails from "./components/game-details/GameDetails.jsx";
import GameCreate from "./components/game-create/GameCreate.jsx";
import GameEdit from "./components/game-edit/GameEdit.jsx";
import Register from "./components/register/Register.jsx";
import Login from "./components/login/Login.jsx";
import Logout from "./components/logout/Logout.jsx";

function App() {
  const navigate = useNavigate();

  const [auth, setAuth] = useState(null);

  const register = async (userData) => {
    try {
      const result = await authApi.register(userData);

      setAuth(result);

      navigate("/");
    } catch (error) {

      alert(error.message);
    }
  };

  const login = async (userData) => {
    try {
      const result = await authApi.login(userData);

      setAuth(result);

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }; 

  const logoutAction = async () => {
    try {
      await authApi.logout(auth?.access_token);

      setAuth(null);
    } catch (error) {
      alert(error.message);
    }
    
  };

  const contextValue = {
    accessToken: auth?.access_token,
    user: auth?.user,
    isAuthenticated: !!auth,
    register,
    login,
    logout: logoutAction
  }

  return (
    <AuthContext.Provider value={contextValue}>
      <Header isAuthenticated={!!auth} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/games/:gameId" element={<GameDetails />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path="/games/:gameId/edit" element={<GameEdit />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/register" element={<Register onRegister={register} />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>

      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
