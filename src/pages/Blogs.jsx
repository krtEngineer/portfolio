import { fetchBlogs } from "../services/getBlogs";
import Blog from "../components/Blog";
import { useLoaderData } from "react-router-dom";
import Title from "../components/Title";
import Message from "../components/Message";

export const loader = async ({}) => {
  const contentType = "Blogs";
  const { loading, error, items: blogs } = await fetchBlogs();
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
  return (
    <section className="projects">
      <div className="projects-center">
        {blogs.map((blog) => {
          return <Blog key={blog.id} blog={blog} />;
        })}
      </div>
    </section>
  );
};
export default Blogs;
