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
  const [error, setError] = useState(null);

  useEffect(() => {
    setArticleLoading(true);
    getArticleById(article_id)
      .then((res) => {
        setArticle(res);
        setArticleLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
        setArticleLoading(false);
      });
  }, [article_id]);

  if (articleLoading) return <h3>Article loading...</h3>;

  if (error) {
    return (
      <div className="article-error">
        <h3>Article content failed to load. Status {error.response.status}.</h3>
        <p>{error.response.data.msg}</p>
      </div>
    );
  }

  return (
    <div>
      <ContentContainer article={article} />
      <CommentsContainer article_id={article_id} />
      <TopicsBar />
    </div>
  );
}
//
