const Blog = ({ blog }) => {
  const { id, creator, title, articleLink, date, categories, thumbnail } = blog;
  return (
    <a key={id} href={articleLink} target="_blank" className="project">
      <div className="project-img-container-1">
        <img src={thumbnail} alt={title} className="project-img" />
      </div>
      <h5 id="title-completed">{title}</h5>
      <h5 id="blog-date">{date}</h5>
    </a>
  );
};
export default Blog;
