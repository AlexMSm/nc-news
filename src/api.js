import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://alexs-nc-be-project.cyclic.app/api",
});

export function getArticles(query) {
  ///console.log("query in the api", query);
  return ncNewsApi
    .get("/articles", {
      params: {
        topic: query.topic,
        order: query.order,
        sort_by: query.sort_by,
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
export function postTopic(body) {
  return ncNewsApi.post("/topics", body).then((res) => {
    return res.data;
  });
}
export function postArticle(body) {
  return ncNewsApi.post("/articles", body).then((res) => {
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
  return ncNewsApi.get(`users/${username}`).then((res) => {
    return res.data;
  });
}
export function postCommentToArticle(article_id, comment) {
  return ncNewsApi
    .post(`articles/${article_id}/comments`, comment)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

export function deleteCommentById(comment_id) {
  return ncNewsApi.delete(`comments/${comment_id}`).then((res) => {
    return res.data;
  });
}
