import { fetchItems } from "../services/fetchItems";
import Message from "../components/Message";
import ProjectCategory from "../components/ProjectCategory";
import Title from "../components/Title";
import { useLoaderData } from "react-router-dom";
import { portfolioContentType } from "../services/utility";

export const loader = async () => {
  const {
    loading,
    error,
    items: projectCategories,
  } = await fetchItems(portfolioContentType);
  return { loading, error, projectCategories };
};

const ProjectCategories = () => {
  const { loading, error, projectCategories } = useLoaderData();

  if (loading) {
    <Message message={"Loading..."} />;
  }

  if (error) {
    <Message message={"Error in loading project categories."} />;
  }

  return (
    <section className="projects">
      <div className="projects-center">
        {projectCategories.map((category) => {
          return <ProjectCategory key={category.id} category={category} />;
        })}
      </div>
    </section>
  );
};
export default ProjectCategories;
