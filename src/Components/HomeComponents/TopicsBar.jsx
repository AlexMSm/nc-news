import { useState, useEffect } from "react";
import TopicCard from "./TopicCard";
import { getTopics } from "../../api";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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
        setError(err);
      });
  }, []);

  if (topicsLoading)
    return (
      <h3>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
          Topics loading ....
        </Box>
      </h3>
    );

  if (error) {
    return (
      <div className="topics-bar-error">
        <h3>Topics unable to load.</h3>
      </div>
    );
  }

  return (
    <div className="topics-bar">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        {topics.map(({ slug, description }) => {
          return (
            <TopicCard
              key={`${slug}_Card`}
              topic={slug}
              description={description}
            />
          );
        })}
      </Stack>
    </div>
  );
}
