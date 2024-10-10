import React from "react";
import { useLoaderData } from "react-router-dom";
import { fetchMarkdown } from "../services/utility";
import MarkdownRenderer from "./MarkdownRenderer";
import { githubBaseUrl } from "../constants/githubBaseUrl";

export const loader = async ({ request, params }) => {
  const url = new URL(request.url);
  const basePath = url.pathname.split("/")[1];
  const baseUrl = githubBaseUrl[basePath];
  const { title: articleTitle } = params;
  const articleUrl = `${baseUrl}/${articleTitle}.md`;
  const { loading, error, item } = await fetchMarkdown(articleUrl);
  return { loading, error, item };
};

const Article = () => {
  const { loading, error, item } = useLoaderData();

  if (loading) {
    <Message message={"Loading..."} />;
  }

  if (error) {
    <Message message={"Error in loading article."} />;
  }

  return (
    <div className="blogs article">
      <MarkdownRenderer markdown={item}></MarkdownRenderer>
      <div className="title-underline"></div>
    </div>
  );
};

export default Article;
