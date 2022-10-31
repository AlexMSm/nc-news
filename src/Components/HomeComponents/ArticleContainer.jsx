import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { getArticles } from "../../api";

export default function ArticleContainer() {
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);
  const [query, setQuery] = useState({});

  useEffect(() => {
    setArticlesLoading(true);
    getArticles(query).then((res) => {
      console.log(res);
      setArticles(res);
      setArticlesLoading(false);
    });
  }, [query]);

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
          topic,
          votes,
        }) => {
          return (
            <div class="card-column">
              <ArticleCard
                key={`${article_id}_Card`}
                article_id={article_id}
                title={title}
                author={author}
                body={body}
                comment_count={comment_count}
                created_at={created_at}
                topic={topic}
                votes={votes}
              />
            </div>
          );
        }
      )}
    </div>
  );
}
