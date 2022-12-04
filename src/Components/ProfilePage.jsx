import { useContext, useState, useEffect } from "react";
import { getArticles } from "../api";
import { UserContext } from "../Context/UserContext";

export default function ProfilePage() {
  const { user, setUser } = useContext(UserContext);
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(user);

  useEffect(() => {
    setArticlesLoading(true);
    getArticles({})
      .then((res) => {
        res.forEach((article) => {
          let newDate = new Date(article.created_at);
          let formatedDate = newDate.toDateString();
          article.formated_date = formatedDate;
        });
        let userArticles = res.filter((article) => {
          return article.author === user.username;
        });
        setArticles(userArticles);
        console.log(userArticles);
        setArticlesLoading(false);
      })
      .catch((err) => {
        setError(err);
        setArticlesLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="profile-heading">
        <h2>Welcome to your profile page {user.username}</h2>
      </div>
      <div className="profile-articles">
        <div className="profile-article-list">List</div>

        <div className="profile-article-post">Post</div>
      </div>
    </div>
  );
}
