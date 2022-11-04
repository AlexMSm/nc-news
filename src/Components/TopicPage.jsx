import ArticleContainer from "./HomeComponents/ArticleContainer";
import TopicsBar from "./HomeComponents/TopicsBar";
import { useParams } from "react-router-dom";

export default function TopicPage() {
  const { topic } = useParams();
  return (
    <div>
      <TopicsBar />
      <ArticleContainer topic={topic} />
    </div>
  );
}
