import field from "./john-o-nolan-o_field-unsplash.jpg";
export default function CreateGame() {
  return (
    <div className="container">
      <h2>Create a game</h2>
      <img src={field} alt="ariel view of football field" />
      <p>
        next few steps will take you through a game creation with locations and
        player makers
      </p>
    </div>
  );
}
