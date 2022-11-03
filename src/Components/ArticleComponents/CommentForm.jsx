import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export default function CommentForm({
  postComment,
  submitLabel,
  initialText = "",
  article_id,
}) {
  const { user } = useContext(UserContext);
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    let comment = { body: text, username: user.username };
    postComment(article_id, comment);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
    </form>
  );
}
