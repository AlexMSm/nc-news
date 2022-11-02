import { useState, useEffect } from "react";
import { patchVoteById } from "../../api";

export default function ArticleVoteButton({ article_id, votes }) {
  const [voteCount, setVoteCount] = useState(votes);
  const [vote, setVote] = useState(0);
  const [likeId, setLikeId] = useState("neutral");
  const [dislikeId, setDislikeId] = useState("neutral");

  const handleLikeClick = (event) => {
    if (likeId === "neutral") {
      setLikeId("liked");

      console.log(likeId, dislikeId);

      if (dislikeId === "disliked") {
        setVote((vote) => vote + 2);
      } else {
        setVote((vote) => vote + 1);
      }
      setDislikeId("neutral");
    } else if (likeId === "liked") {
      setLikeId("neutral");
      setVote((vote) => vote - 1);
    }
  };

  const handleDislikeClick = (event) => {
    if (dislikeId === "neutral") {
      setDislikeId("disliked");
      if (likeId === "liked") {
        setVote((vote) => vote - 2);
      } else {
        setVote((vote) => vote - 1);
      }
      setLikeId("neutral");
    } else if (dislikeId === "disliked") {
      setDislikeId("neutral");
      setVote((vote) => vote + 1);
    }
  };

  useEffect(() => {
    let body = { inc_vote: vote };
    patchVoteById(article_id, body).then((res) => {
      console.log(res);
      setVoteCount(res);
      setVote(0);
    });
  }, [vote]);

  return (
    <div className="article-vote-button">
      <span>
        <input
          type="button"
          className="like-btn"
          id={likeId}
          onClick={handleLikeClick}
          value="Y"
        ></input>
        <input
          type="button"
          className="dislike-btn"
          id={dislikeId}
          onClick={handleDislikeClick}
          value="N"
        ></input>
      </span>
      <h5 className="article-vote-count">{voteCount}</h5>
    </div>
  );
}
