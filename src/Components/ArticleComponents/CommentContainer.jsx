import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { useState, useEffect } from "react";
import { getCommentsByArticleById } from "../../api";
import { postCommentToArticle } from "../../api";

export default function CommentsContainer({ article_id }) {
  const [comments, setComments] = useState([]);
  const [sortComments, setSortComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [activeComment, setActiveComment] = useState(null);

  useEffect(() => {
    setCommentsLoading(true);
    getCommentsByArticleById(article_id).then((res) => {
      setComments(res);
      res.sort((b, a) => a.votes - b.votes); // For sorting by 'likes' by default'
      setSortComments(res);
      setCommentsLoading(false);
    });
  }, [article_id]);

  const postComment = (article_id, comment) => {
    postCommentToArticle(article_id, comment).then((res) => {
      setSortComments((sortComments) => {
        let newSet = [...sortComments];
        newSet.unshift(res);
        setSortComments(newSet);
        return newSet;
      });
    });
  };

  if (commentsLoading) return <h3>Comments loading...</h3>;

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>
      <CommentForm
        submitLabel="Post"
        article_id={article_id}
        postComment={postComment}
      />
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
              sortComments={sortComments}
              setSortComments={setSortComments}
            />
          );
        })}
      </div>
    </div>
  );
}
