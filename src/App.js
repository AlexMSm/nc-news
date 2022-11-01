import "./App.css";
import "./cssStyling/home.css";
import "./cssStyling/HeaderBar.css";
import "./cssStyling/TopicsBar.css";
import "./cssStyling/Article.css";
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
  const [user, setUser] = useState("butter_bridge");

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
