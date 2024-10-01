import { Link } from "react-router-dom";

const Work = ({ work }) => {
  const { id, title, image, url, isPending } = work;
  console.log(work);
  return (
    <Link key={id} to={url} className="project">
      <h5 id={!isPending ? "title-completed" : "title-pending"}>{title}</h5>
    </Link>
  );
};
export default Work;
