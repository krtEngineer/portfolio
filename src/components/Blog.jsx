const Blog = ({ blog }) => {
  const { id, title, url, date, tags } = blog;
  return (
    <div className="blog">
      <div className="blog-part-1">
        <span>{date}</span>
        <a key={id} href={url} target="_blank">
          {title}
        </a>
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
