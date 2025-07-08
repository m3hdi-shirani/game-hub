import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d617c273378246f7b621ba54d42c679c",
  },
});
