import ArticleVoteButton from "../ReusedButtons/ArticleVoteButton";

export default function ContentContainer({ article }) {
  const {
    article_id,
    title,
    topic,
    body,
    comment_count,
    author,
    created_at,
    votes,
  } = article;
  let newDate = new Date(created_at);
  let formatedDate = newDate.toDateString();

  return (
    <div className="content-container">
      <article>
        <div className="article-meta">
          <h6>Author: {author}</h6>
          <time>{formatedDate}</time>
        </div>
        <div className="article-title-container">
          <h3 className="article-title">{title}</h3>
          <img
            className="article-image-title"
            src="https://picsum.photos/200"
            alt="car"
          />
        </div>

        <p className="article-text">{body}</p>
      </article>
      <ArticleVoteButton votes={votes} article_id={article_id} />
    </div>
  );
}
