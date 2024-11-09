import playerProfile from "./playerProfile.jpg";
import { Link } from "react-router-dom";
import "./signUp.css";
export default function SignUp() {
  return (
    <div className="container">
      <h2>To join a game, you will need to create a profile</h2>
      <div className="card">
        <img src={playerProfile} alt="" />
        <Link to="/create-profile" className="button-link">
          Create Profile
        </Link>
      </div>
    </div>
  );
}
