import { projects } from "../data";

const Projects = () => {
  return (
    <section className="projects">
      <div className="title">
        <h1>projects</h1>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, img, url, title, status } = project;
          return (
            <a
              key={id}
              href={status === 1 ? url : "#"}
              target="_blank"
              className="project"
            >
              <div className="project-img-container">
                <div className="img-bcg"></div>
                <img src={img} alt={title} className="img" />
              </div>
              <h5 id={status === 0 ? "title-pending" : "title-completed"}>
                {title}
              </h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
