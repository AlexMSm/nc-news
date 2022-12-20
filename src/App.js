import "./App.css";
import "./cssStyling/Home.css";
import "./cssStyling/HeaderBar.css";
import "./cssStyling/TopicsBar.css";
import "./cssStyling/Article.css";
import "./cssStyling/Comments.css";
import "./cssStyling/SortBar.css";
import "./cssStyling/Profile.css";
import "./cssStyling/Details.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./Context/UserContext";
import { ArticleSOContext } from "./Context/ArticleSOContext";

import NavBar from "./Components/PrimaryComponents/NavBar";
import Home from "./Components/PrimaryComponents/Home";
import TopicPage from "./Components/PrimaryComponents/TopicPage";
import Article from "./Components/PrimaryComponents/Article";

import ProfilePage from "./Components/ProfilePage";
import ErrorPage from "./Components/ErrorPage";
import DetailsPage from "./Components/PrimaryComponents/DetailsPage";
import ContactPage from "./Components/PrimaryComponents/ContactPage";

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
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Topics/:topic" element={<TopicPage />} />
              <Route path="/Article/:article_id" element={<Article />} />
              <Route path="/Profile/:username" element={<ProfilePage />} />
              <Route path="/Details" element={<DetailsPage />} />
              <Route path="/Contact" element={<ContactPage />} />

              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </div>
        </ArticleSOContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
