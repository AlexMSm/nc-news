import ArticleContainer from "../HomeComponents/ArticleContainer";
import TopicsBar from "../HomeComponents/TopicsBar";
import styled from "styled-components";
import Button from "../ReusedButtons/Button";
import cloudchamber from "./../../assets/cloudchamber.png";
import SortButtons from "../HomeComponents/SortButtons";

export default function Home() {
  return (
    <div>
      <Section id="home">
        <p className="para-container">Welcome to </p>
        <h1>
          <span className="highlight">NC news!</span>
        </h1>
        <div className="para-container">
          <p className="home-para">
            Bringing to you nothing but entirely factual and unbiased
            <span className="highlight"> hot </span> takes.
          </p>
        </div>
        <TopicsBar className="home-topics-bar" />
        <ArticleContainer />
      </Section>
    </div>
  );
}

const Section = styled.section`
  background-image: url(${cloudchamber});
  background-repeat: no-repeat;
  background-size: max;
  background-position: center;
  width: 90%;
  display: flex;
  flex-drection: column;
  flex-wrap: wrap;
`;
