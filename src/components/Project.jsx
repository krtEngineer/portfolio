const Project = ({ project }) => {
  const { id, name, live_demo, source_code, image, isPending } = project;
  return (
    <a key={id} href={live_demo} target="_blank" className="project">
      <div className="project-img-container-1">
        <img src={image} alt={name} className="project-img" />
      </div>
      <h5 id={isPending ? "title-pending" : "title-completed"}>{name}</h5>
    </a>
  );
};
export default Project;
