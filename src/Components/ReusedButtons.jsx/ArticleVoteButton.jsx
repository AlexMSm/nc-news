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
      if (dislikeId === "disliked") {
        setVote(2);
      } else {
        setVote(1);
      }
      setDislikeId("neutral");
    } else if (likeId === "liked") {
      setLikeId("neutral");
      setVote(-1);
    }
  };

  const handleDislikeClick = (event) => {
    if (dislikeId === "neutral") {
      setDislikeId("disliked");
      if (likeId === "liked") {
        setVote(-2);
      } else {
        setVote(-1);
      }
      setLikeId("neutral");
    } else if (dislikeId === "disliked") {
      setDislikeId("neutral");
      setVote(1);
    }
  };

  useEffect(() => {
    let body = { inc_vote: vote };
    patchVoteById(article_id, body).then((res) => {
      setVoteCount(res);
      setVote(0);
    });
  }, [vote]);

  return (
    <div className="article-vote-button-container">
      <input
        type="button"
        className="like-btn"
        id={likeId}
        onClick={handleLikeClick}
        value="Like"
      ></input>
      <input
        type="button"
        className="dislike-btn"
        id={dislikeId}
        onClick={handleDislikeClick}
        value="Dislike"
      ></input>

      <p className="article-vote-count">{voteCount}</p>
    </div>
  );
}
