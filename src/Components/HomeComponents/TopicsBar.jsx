import { useState, useEffect } from "react";
import TopicCard from "./TopicCard";
import { getTopics } from "../../api";
import SortButtons from "./SortButtons";

export default function TopicsBar() {
  const [topics, setTopics] = useState([]);
  const [topicsLoading, setTopicsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTopicsLoading(true);
    getTopics()
      .then((res) => {
        setTopics(res);
        setTopicsLoading(false);
      })
      .catch(({ err }) => {
        console.dir(err);
        setTopicsLoading(false);
        setError(err.msg);
      });
  }, []);

  if (topicsLoading) return <h3>Topics loading ....</h3>;

  if (error) {
    return (
      <div>
        <div className="sort-button">
          <SortButtons />
        </div>
        <div className="topics-bar">
          <h3>Topics unable to load.</h3>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="sort-button">
        <SortButtons />
      </div>
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
    </div>
  );
}
