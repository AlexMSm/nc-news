import ArticleContainer from "../HomeComponents/ArticleContainer";
import SearchBar from "../HomeComponents/SearchBar";

export default function Home() {
  return (
    <div className="home">
      <SearchBar className="home-topics-bar" />
      <ArticleContainer />
    </div>
  );
}
