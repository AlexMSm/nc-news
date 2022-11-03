import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export default function ProfileButton() {
  const { user, setUser } = useContext(UserContext);

  return (
    <Link to={`/Profile`}>
      <div className="profile-button">{user.username}</div>
      <img id="profileImage" src={user.avatar_url}></img>
    </Link>
  );
}
