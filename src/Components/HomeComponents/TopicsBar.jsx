import { useState, useEffect } from "react";
import TopicCard from "./TopicCard";
import { getTopics } from "../../api";

export default function TopicsBar() {
  const [topics, setTopics] = useState([]);
  const [topicsLoading, setTopicsLoading] = useState(true);

  useEffect(() => {
    setTopicsLoading(true);
    getTopics().then((res) => {
      console.log(res);
      setTopics(res);
      setTopicsLoading(false);
    });
  }, []);

  if (topicsLoading) return <h3>Topics loading ....</h3>;

  return (
    <div className="topics-bar">
      {topics.map(({ slug, description }) => {
        return (
          <TopicCard
            key={`${slug}_Card`}
            topic={slug}
            description={description}
          />
        );
      })}
    </div>
  );
}
