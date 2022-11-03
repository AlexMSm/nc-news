import "./App.css";
import "./cssStyling/Home.css";
import "./cssStyling/HeaderBar.css";
import "./cssStyling/TopicsBar.css";
import "./cssStyling/Article.css";
import "./cssStyling/Comments.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./Context/UserContext";

import Base from "./Components/Base";
import Home from "./Components/Home";
import TopicPage from "./Components/TopicPage";
import Article from "./Components/Article";
import CommentsPage from "./Components/CommentsPage";
import ProfilePage from "./Components/ProfilePage";

function App() {
  const [user, setUser] = useState({
    username: "butter_bridge",
    name: "jonny",
    avatar_url:
      "https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg",
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
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
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
