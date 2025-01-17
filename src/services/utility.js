import { description } from "../constants/descriptions";
import { localStorageExpiryTime } from "../constants/localStorageExpiry";

export const portfolioContentType = import.meta.env.VITE_CT_PORTFOLIO;
export const projectContentTypes = import.meta.env.VITE_CT_PROJECTS;
export const socialLinksContentType = import.meta.env.VITE_CT_SOCIAL_LINKS;
export const blogsContentType = import.meta.env.VITE_CT_BLOGS;
export const tilsContentType = import.meta.env.VITE_CT_TILS;
export const bookshelfContentType = import.meta.env.VITE_CT_BOOKSHELF;

export const getProjectCategories = (items) => {
  const projectCategories = items.map((item) => {
    const { id, title, contentType, img, url, status } = item.fields;
    const image = img?.fields?.file?.url;
    return { id, title, contentType, image, url, status };
  });
  projectCategories.sort(compareCategoryId);
  return projectCategories;
};

export const getProjects = (items) => {
  const projects = items.map((item) => {
    const {
      id,
      name,
      sourceCode: source_code,
      liveDemo: live_demo,
      image: img,
      isPending,
    } = item.fields;
    const image = img?.fields?.file?.url;
    return { id, name, source_code, live_demo, image, isPending };
  });
  projects.sort(compareProjectId);
  return projects;
};

export const getSocialLinks = (items) => {
  const socialLinks = items.map((item) => {
    const { id, platform, url } = item.fields;
    return { id, platform, url };
  });
  return socialLinks;
};

export const getBlogs = (items) => {
  const blogs = items.map((item) => {
    const { id, title, file_name, tags, date, is_markdown } = item.fields;
    return {
      id,
      title,
      file_name: file_name["content"][0]["content"][0]["value"],
      tags,
      date,
      is_markdown,
    };
  });
  return blogs.sort(compareDate);
};

export const getTils = (items) => {
  const tils = items.map((item) => {
    const { id, title, file_name, tags, date, is_markdown } = item.fields;
    return {
      id,
      title,
      file_name: file_name["content"][0]["content"][0]["value"],
      tags,
      date,
      is_markdown,
    };
  });
  return tils.sort(compareDate);
};

export const getBookshelf = (items) => {
  const bookshelf = items.map((item) => {
    const { id, book_name, summary_url, image, status } = item.fields;
    return {
      id,
      book_name,
      summary_url: summary_url["content"][0]["content"][0]["value"],
      image: image?.fields?.file?.url,
      status,
    };
  });
  return bookshelf.sort(compareBookId);
};

const compareBookId = (a, b) => {
  return a.id - b.id;
};

export const compareDate = (a, b) => {
  return new Date(b.date) - new Date(a.date);
};

export const compareCategoryId = (a, b) => {
  return a.id - b.id;
};

export const compareProjectId = (a, b) => {
  return b.id - a.id;
};

export const isContentTypePortfolio = (contentType) => {
  return contentType === portfolioContentType;
};

export const isContentTypeProject = (contentType) => {
  return projectContentTypes.includes(contentType);
};

export const isContentTypeSocialLinks = (contentType) => {
  return contentType === socialLinksContentType;
};

export const isContentTypeBlogs = (contentType) => {
  return contentType === blogsContentType;
};

export const isContentTypeTils = (contentType) => {
  return contentType === tilsContentType;
};

export const isContentTypeBookshelf = (contentType) => {
  return contentType === bookshelfContentType;
};

export const isContentTypeValid = (contentType) => {
  return (
    isContentTypePortfolio(contentType) ||
    isContentTypeProject(contentType) ||
    isContentTypeSocialLinks(contentType) ||
    isContentTypeBlogs(contentType) ||
    isContentTypeTils(contentType) ||
    isContentTypeBookshelf(contentType)
  );
};

export const getSplittedDate = (date) => {
  return date.split("T")[0];
};

export const getTruncatedString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

export const formatDate = (date) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  return `${day}/${month}/${year}`;
};

export const getDescription = (title) => {
  return description[title];
};

export const fetchMarkdown = async (url) => {
  try {
    const response = await fetch(url);
    let data = await response.text();
    return {
      loading: false,
      item: data,
      error: null,
    };
  } catch (error) {
    console.error("Error fetching HTML:", error);
    return {
      loading: false,
      item: null,
      error: error,
    };
  }
};

export const getLocalStorageKey = (contentType, tag) => {
  if (
    (isContentTypeBlogs(contentType) || isContentTypeTils(contentType)) &&
    tag
  ) {
    return `${contentType}&${tag}`;
  } else {
    return contentType;
  }
};

export const saveDataWithExpiry = (key, value) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + localStorageExpiryTime,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getDataWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // Compare the expiry time with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, remove it from storage and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};
