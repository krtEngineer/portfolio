import { createClient } from "contentful";
import {
  getBlogs,
  getProjectCategories,
  getProjects,
  getSocialLinks,
  getTils,
  isContentTypeBlogs,
  isContentTypePortfolio,
  isContentTypeProject,
  isContentTypeSocialLinks,
  isContentTypeTils,
  isContentTypeValid,
} from "../services/utility";

const client = createClient({
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
});

export const fetchItems = async (contentType) => {
  let response = {
    loading: true,
    items: [],
    error: null,
  };
  const fetchResponse = async () => {
    try {
      const data = await client.getEntries({ content_type: contentType });
      const items = data.items;
      const parsedItems = getParsedItems(contentType, items);
      response.items = parsedItems;
      response.loading = false;
    } catch (error) {
      response.error = error.message;
      response.loading = false;
    }
  };

  const getParsedItems = (contentType, items) => {
    if (isContentTypePortfolio(contentType)) {
      return getProjectCategories(items);
    } else if (isContentTypeProject(contentType)) {
      return getProjects(items);
    } else if (isContentTypeSocialLinks(contentType)) {
      return getSocialLinks(items);
    } else if (isContentTypeBlogs(contentType)) {
      return getBlogs(items);
    } else if (isContentTypeTils(contentType)) {
      return getTils(items);
    } else {
      return;
    }
  };

  try {
    if (!isContentTypeValid(contentType)) {
      throw new Error("Invalid content type.");
    }
    let items = localStorage.getItem(contentType);
    if (items) {
      response.items = JSON.parse(items);
    } else {
      await fetchResponse();
      localStorage.setItem(contentType, JSON.stringify(response.items));
    }
    response.loading = false;
  } catch (error) {
    response.items = [];
    response.error = error.message;
    response.loading = false;
  }
  return { ...response };
};
