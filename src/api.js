import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://als-news-app.herokuapp.com/api",
});

export function getArticles(query) {
  let queryString = "/articles";
  return ncNewsApi.get("/articles").then((res) => {
    return res.data;
  });
}
