import axios from "axios";
import { formatDate, getSplittedDate, getTruncatedString } from "./utility";

const mediumUserUrl = import.meta.env.VITE_BLOG_FETCH_URL;

async function getBlogs() {
  let blogs = [];
  try {
    const response = await axios.get(mediumUserUrl);
    response.data.map((item, index) => {
      blogs.push({
        id: index,
        creator: item["creator"],
        title: getTruncatedString(item["title"], 30),
        articleLink: item["articleLink"],
        date: formatDate(new Date(getSplittedDate(item["date"]))),
        categories: item["categories"],
        thumbnail: item["thumbnail"],
      });
    });
    return blogs;
  } catch (error) {
    console.error("Error fetching or parsing RSS feed:", error);
  }
}

export const fetchBlogs = async () => {
  let response = {
    loading: true,
    items: [],
    error: null,
  };
  try {
    let locallyStoredBlogs = localStorage.getItem("blogs");
    if (locallyStoredBlogs) {
      response.items = JSON.parse(locallyStoredBlogs);
    } else {
      response.items = await getBlogs();
      localStorage.setItem("blogs", JSON.stringify(response.items));
    }
    response.loading = false;
  } catch (error) {
    response.items = [];
    response.error = error.message;
    response.loading = false;
  }
  return { ...response };
};
