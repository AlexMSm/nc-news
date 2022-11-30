import TopicsBar from "./TopicsBar";
import SortButtons from "./SortButtons";

export default function SearchBar() {
  return (
    <div className="filter-bar">
      <SortButtons />
      <TopicsBar />
    </div>
  );
}
