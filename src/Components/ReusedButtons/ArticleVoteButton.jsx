import { useState, useEffect } from "react";
import { patchVoteById } from "../../api";
import { Button } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";
import ThumbDownSharpIcon from "@mui/icons-material/ThumbDownSharp";

export default function ArticleVoteButton({ article_id, votes }) {
  const [voteCount, setVoteCount] = useState(votes);
  const [vote, setVote] = useState(0);
  const [likeId, setLikeId] = useState("neutral");
  const [dislikeId, setDislikeId] = useState("neutral");
  const [likeIcon, setLikeIcon] = useState(<ThumbUpOutlinedIcon />);
  const [dislikeIcon, setDislikeIcon] = useState(<ThumbDownOutlinedIcon />);

  const handleLikeClick = (event) => {
    if (likeId === "neutral") {
      setLikeId("liked");
      setLikeIcon(<ThumbUpSharpIcon />);
      setDislikeIcon(<ThumbDownOutlinedIcon />);
      if (dislikeId === "disliked") {
        setVote(2);
      } else {
        setVote(1);
      }
      setDislikeId("neutral");
    } else if (likeId === "liked") {
      setLikeId("neutral");
      setVote(-1);
      setLikeIcon(<ThumbUpOutlinedIcon />);
    }
  };

  const handleDislikeClick = (event) => {
    if (dislikeId === "neutral") {
      setDislikeId("disliked");
      setDislikeIcon(<ThumbDownSharpIcon />);
      setLikeIcon(<ThumbUpOutlinedIcon />);
      if (likeId === "liked") {
        setVote(-2);
      } else {
        setVote(-1);
      }
      setLikeId("neutral");
    } else if (dislikeId === "disliked") {
      setDislikeId("neutral");
      setVote(1);
      setDislikeIcon(<ThumbDownOutlinedIcon />);
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
      <Button
        startIcon={likeIcon}
        className="like-btn"
        id={likeId}
        onClick={handleLikeClick}
      >
        Like
      </Button>
      <Button
        startIcon={dislikeIcon}
        className="dislike-btn"
        id={dislikeId}
        onClick={handleDislikeClick}
      >
        Dislike
      </Button>
      <div
        className="article-vote-count"
        id={
          voteCount === 0
            ? "vote-count-neutral"
            : voteCount > 0
            ? "vote-count-positive"
            : "vote-count-negative"
        }
      >
        <p>{voteCount}</p>
      </div>
    </div>
  );
}
