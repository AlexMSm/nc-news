import ArticleVoteButton from "../ReusedButtons.jsx/ArticleVoteButton";

export default function ContentContainer({ article }) {
  console.log(article);
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
        <span>
          <h6>{author}</h6>
          <time>{formatedDate}</time>
        </span>
        <h3>{title}</h3>
        <p>{body}</p>
      </article>
      <ArticleVoteButton />
    </div>
  );
}
