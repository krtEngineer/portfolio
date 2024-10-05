import { fetchItems } from "../services/fetchItems";
import Message from "../components/Message";
import ProjectCategory from "../components/ProjectCategory";
import Title from "../components/Description";
import { useLoaderData } from "react-router-dom";
import { getDescription, portfolioContentType } from "../services/utility";
import Description from "../components/Description";

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
      <Description title={getDescription("projects")}></Description>
      <div className="projects-center">
        {projectCategories.map((category) => {
          return <ProjectCategory key={category.id} category={category} />;
        })}
      </div>
    </section>
  );
};
export default ProjectCategories;
