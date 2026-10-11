import { useEffect, useState } from "react";
import request from "../../utils/request";
import GameCard from "../game-card/gameCard";

export default function Home() {

    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        request(`/Games?order=created_at.desc&limit=3`)
        .then(setLatestGames)
        .catch(error => alert(error))
    }, []);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in </h3>
        <img id="logo-left" src="./images/logo.png" alt="logo" />
      </div>

      <div id="home-page">
        <h1>Latest Games</h1>
        <div id="latest-wrap">
          {/* <!-- Display div: with information about every game (if any) --> */}
          <div className="home-container">
            {latestGames.length > 0 ?
                latestGames.map(game => <GameCard key={game.id} {...game}/>)
                : <p className="no-articles">No games yet</p>
                }
          </div>
        </div>
      </div>
    </section>
  );
}
