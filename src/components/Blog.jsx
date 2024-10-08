import { Link } from "react-router-dom";

const Blog = ({ blog, contentType }) => {
  const { id, title, file_name, date, tags, is_markdown } = blog;
  return (
    <div className="blog">
      <div className="blog-part-1">
        <span>{date}</span>
        {is_markdown ? (
          <Link to={`/${contentType}/${file_name}`}>{title}</Link>
        ) : (
          <a key={id} target="_blank" href={file_name}>
            {title}
          </a>
        )}
      </div>
      <div className="blog-part-2">
        <ul className="blog-tags">
          {tags.map((tag, index) => {
            return (
              <li key={index} className="blog-tag">
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Blog;
