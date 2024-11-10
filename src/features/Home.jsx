import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="container">
        <h3>Welcome to TeamFut</h3>
      <div className="menu">
        <div>
          <Link to={"/sign-up"} className="join-game-link">
            Join a game
          </Link>
        </div>
        <div>
          <Link to={"/create-game"} className="create-game-link">
            Create a game
          </Link>
        </div>
      </div>
    </div>
  );
}
