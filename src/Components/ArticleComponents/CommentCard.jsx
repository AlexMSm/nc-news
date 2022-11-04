import { useEffect, useState, useContext } from "react";
import { getUserByUsername } from "../../api";
import { UserContext } from "../../Context/UserContext";
import { deleteCommentById } from "../../api";

export default function CommentCard({
  author,
  body,
  comment_id,
  formatedDate,
  votes,
  sortComments,
  setSortComments,
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
  const { user } = useContext(UserContext);
  const [buttonDisable, setButtonDisable] = useState(false);

  const canDelete = user.username === author;

  useEffect(() => {
    getUserByUsername(author).then((res) => {
      setUserUrl(res.avatar_url);
    });
  }, []);

  const deleteComment = (comment_id) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      setButtonDisable("true");
      deleteCommentById(comment_id).then((res) => {
        let newCommentsList = sortComments.map((comment) => {
          if (comment_id === comment.comment_id) {
            comment.body = "This message has been deleted.";
            return comment;
          } else {
            return comment;
          }
        });
        setSortComments(newCommentsList);
      });
    }
  };

  return (
    <div key={comment_id} className="comment-card">
      <div className="comment-image-container">
        <img src={userUrl} />
      </div>

      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{author}</div>
          <div className="comment-date">{formatedDate}</div>

          <p className="comment-vote-count" id={voteCounterColour(votes)}>
            {votes}
          </p>

          {canDelete && (
            <div className="comment-delete">
              <button
                onClick={() => {
                  deleteComment(comment_id);
                }}
                disabled={buttonDisable}
              >
                Delete
              </button>
            </div>
          )}
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
