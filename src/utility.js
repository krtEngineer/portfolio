import {
  portfolioContentType,
  projectContentTypes,
  socialLinksContentType,
} from "../constant";

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

export const isContentTypeValid = (contentType) => {
  return (
    isContentTypePortfolio(contentType) ||
    isContentTypeProject(contentType) ||
    isContentTypeSocialLinks(contentType)
  );
};
