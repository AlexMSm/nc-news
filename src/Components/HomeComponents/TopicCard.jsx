import { Link } from "react-router-dom";

export default function TopicCard(props) {
  const { topic } = props;
  return (
    <Link className="topic-card-link" to={`/Topics/${topic}`}>
      <div className="topic-card">{topic}</div>
    </Link>
  );
}
