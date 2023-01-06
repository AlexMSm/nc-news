import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../../api";
import ContentContainer from "../ArticleComponents/ContentContainer";
import CommentsContainer from "../ArticleComponents/CommentContainer";
import TopicsBar from "../HomeComponents/TopicsBar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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

  if (articleLoading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
        Article loading ....
      </Box>
    );

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
      <img
        className="article-image-main"
        src="https://picsum.photos/800/300"
        alt="car"
      />
      <ContentContainer article={article} />
      <CommentsContainer
        article_id={article_id}
        comment_count={article.comment_count}
      />
      <TopicsBar className="article-topics-bar" />
    </div>
  );
}
//
