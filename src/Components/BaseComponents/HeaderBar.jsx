import HomeButton from "./HomeButton";
import ProfileButton from "./ProfileButton";

export default function HeaderBar() {
  return (
    <div className="header-bar">
      <HomeButton />
      <h1>NC News</h1>
      <ProfileButton />
    </div>
  );
}
