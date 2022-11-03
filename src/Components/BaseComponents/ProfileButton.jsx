import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export default function ProfileButton() {
  const { user, setUser } = useContext(UserContext);

  return (
    <Link to={`/Profile`}>
      <div className="profile-button">
        <img
          id="profileImage"
          src={user.avatar_url}
          alt={`image of user ${user.username}`}
        ></img>
        <div className="profile-name">{user.username}</div>
      </div>
    </Link>
  );
}
