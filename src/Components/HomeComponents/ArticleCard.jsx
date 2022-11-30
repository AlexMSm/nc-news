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
  const [subtext, setSubtext] = useState("");
  const [image, setImage] = useState("");
  const characters =
    "       ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789      ";

  function generateString(length) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    let num = 100 + Math.floor(Math.random() * 150);
    setSubtext(result);
    setImage(`https://mdbootstrap.com/img/new/standard/nature/${num}.webp`);
  }

  useEffect(() => {
    generateString(100);
  }, []);

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
