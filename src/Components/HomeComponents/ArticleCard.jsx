import ArticleVoteButton from "../ReusedButtons.jsx/ArticleVoteButton";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ArticleCard({
  article_id,
  title,
  topic,
  body,
  comment_count,
  author,
  created_at,
  votes,
}) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <article
      className="article-card" // may have to make different card classes
      id={`card-${article_id}`}
    >
      <ul>
        <li key={`article-${article_id}`}>
          <div>
            <Link to={`/Article/${article_id}`}>
              <div className="article-link">{title}</div>
            </Link>
          </div>
          <h4 className="card-title">{title}</h4>
          <h6 className="card-author">{author}</h6>
          <h6 className="card-topic">{topic}</h6>
          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="article-preview"
          >
            Preview article.
          </div>
          {isHovering && (
            <div>
              <p>{body}</p>
            </div>
          )}
          <h6>{created_at}</h6>
          <h6>{comment_count}</h6>
          <ArticleVoteButton article_id={article_id} votes={votes} />
        </li>
      </ul>
    </article>
  );
}

//import { Link } from "react-router-dom"; <Link to={`/article/${article_id}`}></Link>   </Link>
