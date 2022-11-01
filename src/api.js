import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://als-news-app.herokuapp.com/api",
});

export function getArticles(query) {
  return ncNewsApi
    .get("/articles", {
      params: {
        topic: query.topic,
      },
    })
    .then((res) => {
      return res.data;
    });
}
export function getArticleById(article_id) {
  return ncNewsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
}

export function getTopics() {
  return ncNewsApi.get("/topics").then((res) => {
    return res.data;
  });
}

export function getCommentsByArticleById(article_id) {
  return ncNewsApi.get(`articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
}
