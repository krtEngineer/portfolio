import { Link } from "react-router-dom";

const ProjectCategory = ({ category }) => {
  const { id, title, contentType, image, url, status } = category;

  return (
    <Link
      key={id}
      to={status ? `/projects/${contentType}` : "/"}
      className="project"
    >
      <div className="project-img-container">
        <div className="img-bcg"></div>
        <img src={image} alt={title} className="img" />
      </div>
      <h5 id={status ? "title-completed" : "title-pending"}>{title}</h5>
    </Link>
  );
};
export default ProjectCategory;
