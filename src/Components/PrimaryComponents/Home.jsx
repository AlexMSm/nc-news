import ArticleContainer from "../HomeComponents/ArticleContainer";
import SearchBar from "../HomeComponents/SearchBar";

export default function Home() {
  return (
    <div className="home">
      <div className="title-container">
        <p className="para-container">Ey up there, welcome to </p>
        <h1>
          <span className="highlight">NC news</span>
        </h1>
        <div className="para-container">
          <p className="home-para">
            "Just really good news from a sauce we can trust." - The Onion
          </p>
        </div>
      </div>
      <SearchBar className="home-topics-bar" />
      <ArticleContainer />
    </div>
  );
}
