import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function PostArticle({ postNewArticle }) {
  const { user } = useContext(UserContext);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const isTextareaDisabled =
    text.length === 0 || title.length === 0 || topic.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    if (/^(?!\s*$).+/.test(text)) {
      let trimmedText = text.trim();
      let trimmedTitle = title.trim();
      let trimmedTopic = topic.trim();

      postNewArticle(trimmedTitle, trimmedText, trimmedTopic);
      setText("");
      setTitle("");
      setTopic("");
    } else {
      setText("");
    }
  };

  return (
    <form onSubmit={onSubmit} className="article-submit">
      <h4>Title</h4>
      <textarea
        className="comment-form-textarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h4>Topic</h4>
      <textarea
        className="comment-form-textarea"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <h4>Content</h4>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {"Post article"}
      </button>
    </form>
  );
}
