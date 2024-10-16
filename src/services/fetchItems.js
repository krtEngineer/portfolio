import { createClient } from "contentful";
import {
  getBlogs,
  getBookshelf,
  getLocalStorageKey,
  getProjectCategories,
  getProjects,
  getSocialLinks,
  getTils,
  isContentTypeBlogs,
  isContentTypeBookshelf,
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

export const fetchItems = async (contentType, tag = null) => {
  let response = {
    loading: true,
    items: [],
    error: null,
  };
  const fetchResponse = async () => {
    try {
      let searchRequest = { content_type: contentType };
      if (
        (isContentTypeBlogs(contentType) || isContentTypeTils(contentType)) &&
        tag
      ) {
        searchRequest["fields.tags[in]"] = tag;
      }
      //temp
      const contentful_response = await fetch(
        `/.netlify/functions/getPortfolioData?searchRequest=${JSON.stringify(
          searchRequest
        )}`
      );
      const data = await contentful_response.json();
      if (data.error) {
        throw new Error(`Error in fetching ${contentType}.`);
      }
      const items = data.data.items;
      const parsedItems = getParsedItems(contentType, items);
      response.items = parsedItems;
      response.loading = false;
    } catch (error) {
      response.error = error.message;
      response.loading = false;
      throw error;
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
    } else if (isContentTypeBookshelf(contentType)) {
      return getBookshelf(items);
    } else {
      return;
    }
  };

  try {
    if (!isContentTypeValid(contentType)) {
      throw new Error("Invalid content type.");
    }
    let localKey = getLocalStorageKey(contentType, tag);
    let items = localStorage.getItem(localKey);
    if (items) {
      response.items = JSON.parse(items);
    } else {
      await fetchResponse();
      localStorage.setItem(localKey, JSON.stringify(response.items));
    }
    response.loading = false;
  } catch (error) {
    response.items = [];
    response.error = error.message;
    response.loading = false;
  }
  return { ...response };
};
