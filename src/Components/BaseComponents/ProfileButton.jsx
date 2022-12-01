import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export default function ProfileButton() {
  const { user, setUser } = useContext(UserContext);

  return (
    <Link to={`/Profile/${user.username}`}>
      <div className="profile-button">
        <img
          className="profile-image"
          src={user.avatar_url}
          alt={`image of user ${user.username}`}
        ></img>
        <div className="profile-name">{user.username}</div>
      </div>
    </Link>
  );
}
