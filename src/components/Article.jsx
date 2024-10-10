import React from "react";
import { useLoaderData } from "react-router-dom";
import { fetchHtml } from "../services/utility";
import MarkdownRenderer from "./MarkdownRenderer";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const articleUrl = url.searchParams.get("url");
  const { loading, error, item } = await fetchHtml(articleUrl);
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
