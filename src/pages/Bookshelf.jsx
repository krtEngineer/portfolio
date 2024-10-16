import { useLoaderData } from "react-router-dom";
import { fetchItems } from "../services/fetchItems";
import Message from "../components/Message";
import { getDescription } from "../services/utility";
import Description from "../components/Description";
import Book from "../components/Book";

export const loader = async () => {
  const { loading, error, items: books } = await fetchItems("bookshelf");
  return { loading, error, books };
};

const Bookshelf = () => {
  const { loading, error, books } = useLoaderData();

  if (loading) {
    <Message message={"Loading..."} />;
  }

  if (error) {
    return <Message message={"Error in loading bookshelf."} />;
  }
  return (
    <section className="projects">
      <Description title={getDescription("bookshelf")}></Description>
      <div className="projects-center">
        {books.map((book) => {
          return <Book key={book.id} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Bookshelf;
