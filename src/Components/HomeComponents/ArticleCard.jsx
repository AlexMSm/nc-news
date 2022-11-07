import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({
  article_id,
  title,
  topic,
  body,
  comment_count,
  author,
  created_at,
  formated_date,
  votes,
}) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  if (isHovering) {
    return (
      <article
        className="article-card" // may have to make different card classes
        id={`card-${article_id}`}
      >
        <ul>
          <li key={`article-${article_id}`}>
            <div>
              <Link className="article-card-link" to={`/Article/${article_id}`}>
                <h4 className="card-title">{title}</h4>
                <div
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className="article-preview"
                >
                  <div className="article-preview-body">{body}</div>
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </article>
    );
  }

  return (
    <article
      className="article-card" // may have to make different card classes
      id={`card-${article_id}`}
    >
      <ul>
        <li key={`article-${article_id}`}>
          <div>
            <Link className="article-card-link" to={`/Article/${article_id}`}>
              <h4 className="card-title">{title}</h4>
              <p className="card-author">{author}</p>
              <p className="card-topic">{topic}</p>
              <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="article-preview-button"
              >
                Preview article.
              </div>
              <h6>{formated_date}</h6>
              <h6>Comment count: {comment_count}</h6>
              <h6>Article vote: {votes}</h6>
            </Link>
          </div>
        </li>
      </ul>
    </article>
  );
}

//import { Link } from "react-router-dom"; <Link to={`/article/${article_id}`}></Link>   </Link>
