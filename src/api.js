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

export function patchVoteById(article_id, body) {
  return ncNewsApi.patch(`articles/${article_id}`, body).then((res) => {
    return res.data.votes;
  });
}

export function getUserByUsername(username) {
  return ncNewsApi
    .get(`users/${username}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {});
}
