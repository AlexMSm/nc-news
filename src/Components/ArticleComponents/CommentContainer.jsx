import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { useState, useEffect } from "react";
import { getCommentsByArticleById } from "../../api";
import { postCommentToArticle } from "../../api";

export default function CommentsContainer({ article_id, comment_count }) {
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(comment_count);
  const [sortComments, setSortComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCommentsLoading(true);
    getCommentsByArticleById(article_id)
      .then((res) => {
        setComments(res);
        res.sort((b, a) => a.votes - b.votes); // For sorting by 'likes' by default'
        setSortComments(res);
        setCommentsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setCommentsLoading(false);
      });
  }, [article_id]);

  const postComment = (article_id, comment) => {
    postCommentToArticle(article_id, comment)
      .then((res) => {
        setSortComments((sortComments) => {
          let newSet = [...sortComments];
          newSet.unshift(res);
          setSortComments(newSet);
          return newSet;
        });
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          `Comment failed to post. Error status ${err.status}. ${err.response.data.msg}`
        );
      });
  };

  if (commentsLoading) return <h3>Comments loading...</h3>;

  if (error && error.response.status !== 404) {
    return (
      <div className="comment-error">
        <h3>Comments failed to load. Status {error.response.status}.</h3>
        <p>{error.response.data.msg}</p>
      </div>
    );
  }
  if (error && error.response.status === 404) {
    return (
      <div>
        <p className="no-comments-msg">{error.response.data.msg}</p>
        <div className="comment-form-title">
          Leave a comment
          <CommentForm
            submitLabel="Post"
            article_id={article_id}
            postComment={postComment}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="comments">
      <div className="comment-form-title">
        Leave a comment
        <CommentForm
          submitLabel="Post"
          article_id={article_id}
          postComment={postComment}
        />
      </div>
      <div className="article-comment-container">
        {sortComments.map(({ author, body, comment_id, created_at, votes }) => {
          let newDate = new Date(created_at);
          let formatedDate = newDate.toDateString();
          return (
            <CommentCard
              key={`article-comment-${comment_id}`}
              author={author}
              body={body}
              comment_id={comment_id}
              formatedDate={formatedDate}
              votes={votes}
              count={count}
              setCount={setCount}
              sortComments={sortComments}
              setSortComments={setSortComments}
            />
          );
        })}
      </div>
    </div>
  );
}
