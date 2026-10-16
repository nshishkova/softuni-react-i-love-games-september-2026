import { useEffect, useState, useContext } from "react";
import AuthContext from "../../contexts/auth-context.js";
import * as gameApi from "../../api/game-api.js";
import GameCard from "../game-card/gameCard.jsx";

export default function Catalog() {
  const [games, setGames] = useState([]);
  const { accessToken } = useContext(AuthContext);

  useEffect(() => {
      gameApi.getAll(accessToken)
      .then(setGames)
      .catch(err => alert(err))
  }, [accessToken]);

  return (
    <section id="catalog-page">
      <h1>Catalog</h1>

      <div className="catalog-container">
      {games.length > 0 
        ? games.map((game) => (<GameCard key={game.id} {...game} />)) 
        : <h3 className="no-articles">No Added Games Yet</h3>
      }
      </div>
    </section>
  );
}
