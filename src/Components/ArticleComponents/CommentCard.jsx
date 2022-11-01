export default function CommentCard({
  author,
  body,
  comment_id,
  formatedDate,
  votes,
}) {
  const voteCounterColour = (count) => {
    if (count > 0) {
      return "votes-counter-green";
    } else if (count < 0) {
      return "votes-counter-red";
    } else {
      return "votes-counter-neutral";
    }
  };

  return (
    <div className="article-comment-card">
      <span className="comment-span">
        <p>{author}</p> <p>{formatedDate}</p>{" "}
        <p className={voteCounterColour(votes)}>{votes}</p>
      </span>
      <p>{body}</p>
    </div>
  );
}
