import Blog from "../components/Blog";
import { useLoaderData } from "react-router-dom";
import Title from "../components/Description";
import Message from "../components/Message";
import { fetchItems } from "../services/fetchItems";
import { useState } from "react";
import Description from "../components/Description";
import { getDescription } from "../services/utility";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const tag = url.searchParams.get("tag");
  const contentType = pathname.split("/")[1];
  const { loading, error, items: blogs } = await fetchItems(contentType, tag);
  return { loading, error, blogs, contentType };
};

const Blogs = () => {
  const { loading, error, blogs, contentType } = useLoaderData();

  if (loading) {
    <Message message={"Loading..."} />;
  }

  if (error) {
    <Message message={"Error in loading blogs."} />;
  }

  const [visibleBlogs, setVisibleBlogs] = useState(8);

  const loadMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 4);
  };

  return (
    <section className="blogs">
      <Description title={getDescription(contentType)}></Description>
      <div className="blogs-center">
        {blogs.slice(0, visibleBlogs).map((blog, index) => {
          return <Blog key={index} blog={blog} contentType={contentType} />;
        })}
      </div>
      {visibleBlogs < blogs.length && (
        <button className="btn load-more-btn" onClick={loadMore}>
          Load More
        </button>
      )}
    </section>
  );
};
export default Blogs;
