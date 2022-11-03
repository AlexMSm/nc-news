import { useEffect, useState } from "react";
import { getUserByUsername } from "../../api";

export default function CommentCard({
  author,
  body,
  comment_id,
  formatedDate,
  votes,
  activeComment,
  setActiveComment,
}) {
  const voteCounterColour = (count) => {
    if (count > 0) {
      return "comment-votes-counter-green";
    } else if (count < 0) {
      return "comment-votes-counter-red";
    } else {
      return "comment-votes-counter-neutral";
    }
  };

  const [userUrl, setUserUrl] = useState({});

  useEffect(() => {
    getUserByUsername(author).then((res) => {
      setUserUrl(res.avatar_url);
    });
  }, []);

  return (
    <div key={comment_id} className="comment-card">
      <div className="comment-image-container">
        <img src={userUrl} />
      </div>

      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{author}</div>
          <div className="comment-date">{formatedDate}</div>
          <div></div>
          <p className="comment-vote-count" id={voteCounterColour(votes)}>
            {votes}
          </p>
        </div>
        {<div className="comment-text">{body}</div>}
      </div>
    </div>
  );
}

{
  /* <div className="article-comment-card">
<span className="comment-span">
  <p>{author}</p> <p>{formatedDate}</p>{" "}

</span>
<p>{body}</p>
</div>
); */
}
