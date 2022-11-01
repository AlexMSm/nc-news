import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <div>
      <Link to={`/`}>
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
