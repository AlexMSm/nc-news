import CommentCard from "./CommentCard";
import { useState, useEffect } from "react";
import { getCommentsByArticleById } from "../../api";

export default function CommentsContainer({ article_id }) {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  useEffect(() => {
    setCommentsLoading(true);
    getCommentsByArticleById(article_id).then((res) => {
      res.sort((b, a) => a.votes - b.votes);
      setComments(res);
      setCommentsLoading(false);
    });
  }, [article_id]);

  if (commentsLoading) return <h3>Comments loading...</h3>;

  return (
    <div className="article-comment-container">
      {comments.map(({ author, body, comment_id, created_at, votes }) => {
        let newDate = new Date(created_at);
        let formatedDate = newDate.toDateString();
        return (
          <CommentCard
            author={author}
            body={body}
            comment_id={comment_id}
            formatedDate={formatedDate}
            votes={votes}
          />
        );
      })}
    </div>
  );
}
