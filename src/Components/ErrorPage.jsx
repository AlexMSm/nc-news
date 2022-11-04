import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h3>Unknown region - please return to saftey.</h3>
      <div>
        <Link to={`/`}>
          <div className="home-button">Home</div>
        </Link>
      </div>
    </div>
  );
}
