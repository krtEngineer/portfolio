import Project from "../components/Project";
import { useLoaderData } from "react-router-dom";
import Title from "../components/Title";
import { fetchItems } from "../services/fetchItems";
import Message from "../components/Message";

export const loader = async ({ params }) => {
  const { category: contentType } = params;
  const { loading, error, items: projects } = await fetchItems(contentType);
  return { loading, error, projects, contentType };
};

const Projects = () => {
  const { loading, error, projects, contentType } = useLoaderData();

  if (loading) {
    <Message message={"Loading..."} />;
  }

  if (error) {
    <Message message={"Error in loading projects."} />;
  }
  return (
    <section className="projects">
      <Title title={localStorage.getItem(contentType)} />
      <div className="projects-center">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
