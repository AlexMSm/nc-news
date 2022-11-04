import "./App.css";
import "./cssStyling/Home.css";
import "./cssStyling/HeaderBar.css";
import "./cssStyling/TopicsBar.css";
import "./cssStyling/Article.css";
import "./cssStyling/Comments.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./Context/UserContext";
import { ArticleSOContext } from "./Context/ArticleSOContext";

import Base from "./Components/Base";
import Home from "./Components/Home";
import TopicPage from "./Components/TopicPage";
import Article from "./Components/Article";
import CommentsPage from "./Components/CommentsPage";
import ProfilePage from "./Components/ProfilePage";

function App() {
  const [user, setUser] = useState({
    username: "happyamy2016",
    name: "Amy Happy",
    avatar_url:
      "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
  });

  const [sort, setSort] = useState("Sort");
  const [order, setOrder] = useState("Order");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <ArticleSOContext.Provider value={{ sort, setSort, order, setOrder }}>
          <div className="App">
            <Base />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Topics/:topic" element={<TopicPage />} />
              <Route path="/Article/:article_id" element={<Article />} />
              <Route path="/Comments/:article_id" element={<CommentsPage />} />
              <Route path="/Profile/butter_bridge" element={<ProfilePage />} />
            </Routes>
          </div>
        </ArticleSOContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
