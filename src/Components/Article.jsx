import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../api";
import ContentContainer from "./ArticleComponents/ContentContainer";
import CommentsContainer from "./ArticleComponents/CommentContainer";
import TopicsBar from "./HomeComponents/TopicsBar";

export default function Article() {
  const [article, setArticle] = useState([]);
  const [articleLoading, setArticleLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setArticleLoading(true);
    getArticleById(article_id).then((res) => {
      setArticle(res);
      setArticleLoading(false);
    });
  }, [article_id]);

  if (articleLoading) return <h3>Article loading...</h3>;

  return (
    <div>
      <ContentContainer article={article} />
      <CommentsContainer article_id={article_id} />
      <TopicsBar />
    </div>
  );
}
//
