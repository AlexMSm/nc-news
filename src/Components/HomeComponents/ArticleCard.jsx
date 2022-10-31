import ArticleVoteButton from "../ReusedButtons.jsx/ArticleVoteButton";
import { useState, useEffect } from "react";

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
      id={`Card-${article_id}`}
    >
      <ul className="article-card">
        <li>
          <h4 className="card-title">{title}</h4>
          <h6 className="card-author">{author}</h6>
          <h6 lassName="card-topic">{topic}</h6>
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
