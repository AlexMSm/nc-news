import ArticleContainer from "../HomeComponents/ArticleContainer";
import TopicsBar from "../HomeComponents/TopicsBar";
import { useParams } from "react-router-dom";
import SearchBar from "../HomeComponents/SearchBar";

export default function TopicPage() {
  const { topic } = useParams();
  return (
    <div>
      <div className="topic-title">
        <h3>{topic}</h3>
        <SearchBar />
      </div>
      <ArticleContainer topic={topic} />
    </div>
  );
}
