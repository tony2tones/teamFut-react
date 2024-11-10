import playerProfile from "./playerProfile.jpg";
import { Link } from "react-router-dom";
import "./signUp.css";
export default function SignUp() {
  return (
    <div className="container">
      <h2>To join a game, you will need to create a profile</h2>
      <div className="card">
        <div className="image-container">
        <img src={playerProfile} alt="" />
        </div>
        <Link to="/create-profile" className="button-link">
          Create Profile
        </Link>
      </div>
    </div>
  );
}

// Photo by <a href="https://unsplash.com/@cesarfrv93?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">César Rincón</a> on <a href="https://unsplash.com/photos/grayscale-photo-of-man-XHVpWcr5grQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      