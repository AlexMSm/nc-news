import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <div>
      <Link to={`/`}>
        <div id="HomeButton">Home</div>
      </Link>
    </div>
  );
}
