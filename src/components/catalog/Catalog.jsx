import { useEffect, useState } from "react";
import request from "../../utils/request.js";
import GameCard from "../game-card/gameCard.jsx";

export default function Catalog() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    request("/Games?order=created_at.desc")
      .then(setGames)
      .catch(err => alert(err))
  }, []);

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
