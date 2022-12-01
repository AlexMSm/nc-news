import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function BSArticleCard({
  article_id,
  title,
  topic,
  body,
  comment_count,
  author,
  created_at,
  formated_date,
  votes,
}) {
  const [subtext, setSubtext] = useState("");
  const [image, setImage] = useState("");
  const characters =
    "       ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789      ";

  function generateString(length) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    let num = 100 + Math.floor(Math.random() * 150);
    setSubtext(result);
    setImage(`https://mdbootstrap.com/img/new/standard/nature/${num}.webp`);
  }

  useEffect(() => {
    generateString(100);
  }, []);

  return (
    <Link className="article-card-link" to={`/Article/${article_id}`}>
      <Card sx={{ maxWidth: 345, backgroundColor: "transparent" }}>
        <div className="article-card">
          <div className="article-card-image">
            <CardMedia
              component="img"
              image={image}
              alt="randomly generated image"
            />
          </div>
          <CardContent sx={{ paddingBottom: 0 }}>
            <div className="article-card-title">
              <Typography gutterBottom variant="h6" component="div">
                {title}
              </Typography>
            </div>
            <div className="article-card-meta">
              <p> {formated_date}</p>
              <p>{author}</p>
            </div>
            <div className="article-card-subtext">
              <Typography variant="body2" color="text.secondary">
                {subtext}
              </Typography>
            </div>
            <div className="article-card-counts">
              <Typography variant="body2" color="blue">
                Votes: {votes}
              </Typography>
              <Typography variant="body2" color="blue">
                Comments: {comment_count}
              </Typography>
            </div>
            <div className="article-card-topic">
              <Typography variant="body2" color="blue">
                {topic}
              </Typography>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}
