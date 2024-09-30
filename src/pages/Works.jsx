import Message from "../components/Message";
import Title from "../components/Title";
import { useLoaderData } from "react-router-dom";
import { works } from "../constants/works";
import Work from "../components/Work";

export const loader = async () => {
  return { loading: false, error: null, works };
};

const Works = () => {
  const { loading, error, works } = useLoaderData();

  if (loading) {
    <Message message={"Loading..."} />;
  }

  if (error) {
    <Message message={"Error in loading works."} />;
  }

  return (
    <section className="projects">
      <Title title={"My Works"} />
      <div className="projects-center">
        {works.map((work) => {
          return <Work key={work.id} work={work} />;
        })}
      </div>
    </section>
  );
};
export default Works;
