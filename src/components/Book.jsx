import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { id, book_name, summary_url, image, status } = book;
  return (
    <Link key={id} to={status ? `${summary_url}` : "/"} className="project">
      <div className="project-img-container">
        <div className="img-bcg"></div>
        <img src={image} alt={book_name} className="img" />
      </div>
      <h5 id={status ? "title-completed" : "title-pending"}>{book_name}</h5>
    </Link>
  );
};

export default Book;
