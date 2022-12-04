import { useContext, useState, useEffect } from "react";
import { getArticles } from "../api";
import { UserContext } from "../Context/UserContext";
import BSArticleCard from "./HomeComponents/BSArticleCard";
import { getTopics, postTopic, postArticle } from "../api";
import PostArticle from "./PostArticle";

export default function ProfilePage() {
  const { user, setUser } = useContext(UserContext);
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topics, setTopics] = useState([]);
  const [articleCount, setArticleCount] = useState(0);

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
        if (userArticles.length !== articleCount) {
          setArticleCount(userArticles.length);
        }
        setArticlesLoading(false);
      })
      .catch((err) => {
        setError(err);
        setArticlesLoading(false);
      });
    getTopics().then((res) => {
      setTopics(res);
    });
  }, [articleCount]);

  async function postNewArticle(trimmedTitle, trimmedText, trimmedTopic) {
    let article = {
      body: trimmedText,
      title: trimmedTitle,
      topic: trimmedTopic,
      username: user.username,
    };

    if (
      !topics
        .map((topic) => {
          return topic.slug;
        })
        .includes(trimmedTopic)
    ) {
      await postTopic({
        slug: trimmedTopic,
        description: `A new topic on ${trimmedTopic}`,
      });
    }

    postArticle(article)
      .then(() => {
        setArticleCount((cur) => setArticleCount((cur += 1)));
      })
      .catch((err) => {
        window.alert(
          `Article failed to post. Error status ${err.status}. ${err.response.data.msg}`
        );
      });
  }

  return (
    <div>
      <div className="profile-heading">
        <h2>Welcome to your profile page {user.username}</h2>
      </div>
      <div className="profile-articles">
        <div className="profile-article-list">
          <div>
            <h3 className="articles-title">Your articles</h3>
          </div>
          <div className="article-container">
            {articles.map(
              ({
                article_id,
                title,
                author,
                body,
                comment_count,
                created_at,
                formated_date,
                topic,
                votes,
              }) => {
                return (
                  <BSArticleCard
                    key={`${article_id}_Card`}
                    article_id={article_id}
                    title={title}
                    author={author}
                    body={body}
                    comment_count={comment_count}
                    created_at={created_at}
                    formated_date={formated_date}
                    topic={topic}
                    votes={votes}
                  />
                );
              }
            )}
          </div>
        </div>

        <div className="profile-article-post">
          <PostArticle submitLabel="Post" postNewArticle={postNewArticle} />
        </div>
      </div>
    </div>
  );
}
