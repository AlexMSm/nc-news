import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function ProfilePage() {
  const { user, setUser } = useContext(UserContext);
  return <h2>Welcome to your profile page {user.username}</h2>;
}
