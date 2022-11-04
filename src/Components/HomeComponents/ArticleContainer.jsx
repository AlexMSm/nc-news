import ArticleCard from "./ArticleCard";
import { useState, useEffect, useContext } from "react";
import { getArticles } from "../../api";
import { useParams } from "react-router-dom";
import { ArticleSOContext } from "../../Context/ArticleSOContext";

export default function ArticleContainer() {
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);
  const [topic, setTopic] = useState({});
  const params = useParams();
  const { sort, order } = useContext(ArticleSOContext);
  const [SOUpdate, setSOUpdate] = useState({});

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
    getArticles(query).then((res) => {
      res.forEach((article) => {
        let newDate = new Date(article.created_at);
        let formatedDate = newDate.toDateString();
        article.formated_date = formatedDate;
      });
      setArticles(res);
      setArticlesLoading(false);
    });
  }, [topic]);

  if (articlesLoading) return <h3>Articles loading...</h3>;

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
            <ArticleCard
              className="card-column"
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
