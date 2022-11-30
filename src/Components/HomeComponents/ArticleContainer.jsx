import ArticleCard from "./ArticleCard";
import { useState, useEffect, useContext } from "react";
import { getArticles } from "../../api";
import { useParams, Link } from "react-router-dom";
import { ArticleSOContext } from "../../Context/ArticleSOContext";
import BSArticleCard from "./BSArticleCard";

export default function ArticleContainer() {
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);
  const [topic, setTopic] = useState({});
  const params = useParams();
  const { sort, order } = useContext(ArticleSOContext);
  const [SOUpdate, setSOUpdate] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    let newQuery = {};
    if (sort !== "Sort") {
      newQuery["sort_by"] = sort;
    }
    if (order !== "Order") {
      newQuery["order"] = order;
    }
    setSOUpdate(newQuery);
  }, [sort, order]);

  useEffect(() => {
    setTopic(params);
  }, [params]);

  useEffect(() => {
    ///...SOUpdate
    let query = { ...topic, ...SOUpdate };
    setArticlesLoading(true);
    getArticles(query)
      .then((res) => {
        res.forEach((article) => {
          let newDate = new Date(article.created_at);
          let formatedDate = newDate.toDateString();
          article.formated_date = formatedDate;
        });
        setArticles(res);
        setArticlesLoading(false);
      })
      .catch((err) => {
        setError(err);
        setArticlesLoading(false);
      });
  }, [topic]);

  if (articlesLoading) return <h3>Articles loading...</h3>;

  if (error) {
    return (
      <div className="article-container-error">
        <h3>Articles failed to load. Status {error.response.status}.</h3>
        <p>{error.response.data.msg}</p>
      </div>
    );
  }

  return (
    <div className="article-container">
      {articles.map(
        ({
          article_id,
          title,
          author,
          body,
          comment_count,
          created_at,
          formated_date,
          topic,
          votes,
        }) => {
          return (
            <BSArticleCard
              key={`${article_id}_Card`}
              article_id={article_id}
              title={title}
              author={author}
              body={body}
              comment_count={comment_count}
              created_at={created_at}
              formated_date={formated_date}
              topic={topic}
              votes={votes}
            />
          );
        }
      )}
    </div>
  );
}
