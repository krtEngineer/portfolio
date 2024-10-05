import { fetchBlogs } from "../services/getBlogs";
import Blog from "../components/Blog";
import { useLoaderData } from "react-router-dom";
import Title from "../components/Title";
import Message from "../components/Message";
import { fetchItems } from "../services/fetchItems";
import { useState } from "react";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const contentType = pathname.split("/")[1];
  const { loading, error, items: blogs } = await fetchItems(contentType);
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
      <div className="blogs-center">
        {blogs.slice(0, visibleBlogs).map((blog, index) => {
          return <Blog key={index} blog={blog} />;
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
