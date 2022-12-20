import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function ContactPage() {
  const [twitterIcon, setTwitterIcon] = useState(<TwitterIcon />);
  const [instagramIcon, setInstagramIcon] = useState(<InstagramIcon />);
  const [githubIcon, setGithubIcon] = useState(<GitHubIcon />);
  return (
    <div className="details-page">
      <h2>Contact me</h2>
      <p>Alex Smith</p>
      <p>alexmsmith.dev@gmail.com</p>
      <Button startIcon={githubIcon}>@alexmsm</Button>
      <Button startIcon={instagramIcon}>@itsalexs</Button>
      <Button startIcon={twitterIcon}>@booleanaire_</Button>
      <div></div>
    </div>
  );
}
