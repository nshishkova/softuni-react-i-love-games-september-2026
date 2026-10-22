import { useParams, useNavigate, Link } from "react-router";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../../contexts/auth-context.jsx";
import request from "../../utils/request.js";
import CreateComment from "../comment-create/CreateComment.jsx";
import CommentList from "../comment-list/CommentList.jsx";
import { gameApi } from "../../api/index.js";

export default function GameDetails() {
  const { user, isAuthenticated } = useContext(AuthContext);
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState({});
  const [refresh, setRefresh] = useState(false);

  const isOwner = user &&user?.id === game?.user_id;

  useEffect(() => {
    request(`/games?id=eq.${gameId}`).
      then(result => {
        setGame(result[0]);
      }).catch(err => alert(err));
  }, [gameId]);

  const deleteGameClickHandler = async (e) => {
    e.preventDefault();

    const confirmed = confirm(`Are you sure you want to delete ${game.title} game?`);

    if (!confirmed) {
      return;
    }

    try {
      await gameApi.remove(gameId);
      navigate("/catalog");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="header-and-image">
          <img
            className="game-img"
            src={game.imageUrl}
            alt={game.title}
          />

          <div className="meta-info">
            <h1 className="game-name">{game.title}</h1>

            <p className="data-row">
              <span className="label">Genre:</span>
              <span className="value">{game.genre}</span>
            </p>

            <p className="data-row">
              <span className="label">Active Players:</span>
              <span className="value">{game.activePlayers}</span>
            </p>

            <p className="data-row">
              <span className="label">Release Date:</span>
              <span className="value">{game.releaseDate}</span>
            </p>
          </div>
          <div className="summary-section">
            <h2>Summary:</h2>
            <p className="text-summary">
              {game.summary}
            </p>
          </div>
        </div>

        {isOwner && (
          <div className="buttons">
            <Link to={`/games/${gameId}/edit`} className="button">
              Edit
            </Link>
            <a href="#" className="button" onClick={deleteGameClickHandler}>
              Delete
            </a>
          </div>
        )}

        <CommentList gameId={gameId} refresh={refresh} />
      </div>
      {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
      {isAuthenticated && !isOwner && <CreateComment user={user} gameId={gameId} onCreate={() => setRefresh(state => !state)} />}
    </section>
  );
}
