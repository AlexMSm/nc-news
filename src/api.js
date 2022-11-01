import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://als-news-app.herokuapp.com/api",
});

export function getArticles(query) {
  let queryString = "/articles";
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

export function getTopics() {
  return ncNewsApi.get("/topics").then((res) => {
    return res.data;
  });
}
