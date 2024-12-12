import{ useState } from "react";
import { useDispatch} from 'react-redux';
// import {setUserDetails, clearUserDetails} from "../../reducer/playerProfileReducer";
import "./CreateProfile.css";

const defaultState = {
  userName: "",
  age: 18,
  area: "Enter preferred area",
  skillLevel: 1,
};
const skillLevels = [
  { label: "Beginner: newbie, starting out, first game", value: 1 },
  { label: "Intermediate: Knows how to play, regular player", value: 2 },
  { label: "Advanced: Competitive, will probably break ankles", value: 3 },
  { label: "Expert: no one has seen hiim being tackled", value: 4 },
];

export default function CreateProfile() {
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState(defaultState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prev) => ({ ...prev, [name]: value }));
      };

  const handleSkillChange = (e) => {
    setUserDetails({ ...userDetails, skillLevel: parseInt(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserDetails(userDetails));
  };

  return (
    <section>
      <h2>Create a profile</h2>
        <div className="instructions">
            
      <p>
        next few steps will take you through a game creation with locations and
        player makers. Please enter these details to get you up and running on the field.
      </p>
        </div>
      <div className="container">
        <div className="card">
          <div className="input-group">
            <div className="input">
              <label>Username:</label>
              <input
                type="text"
                name="userName"
                value={userDetails.userName}
                onChange={handleChange}
                placeholder="Please enter a username"
              />
            </div>
            <div className="input">
              <label>age:</label>
              <input
                type="number"
                name="age"
                value={userDetails.age}
                onChange={handleChange}
                placeholder="Please enter a age"
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input">
              <label>Area:</label>
              <input
                type="text"
                name="area"
                value={userDetails.area}
                onChange={handleChange}
                placeholder="Please enter a username"
              />
            </div>
            <div className="input">
              <label htmlFor="skillLevel">Select Skill Level:</label>
              <select
                id="skillLevel"
                name="sillLevel"
                value={userDetails.skillLevel}
                onChange={handleSkillChange}
              >
                <option value="" disabled>
                  Choose a skill level
                </option>
                {skillLevels.map((skill) => (
                  <option key={skill.value} value={skill.value}>
                    {skill.label}
                  </option>
                ))}
              </select>
              <button onClick={handleSubmit}>Crate profile</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
      {userDetails.age}
            {userDetails.area}
            {userDetails.userName}
            {userDetails.skillLevel}
      </div>
    </section>
  );
}
