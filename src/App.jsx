import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Message from "./components/Message";
import Projects, { loader as projectsLoader } from "./pages/Projects";
import Blogs, { loader as blogsLoader } from "./pages/Blogs";
import ProjectCategories, {
  loader as projectCategoriesLoader,
} from "./pages/ProjectCategories";
import Layout from "./pages/Layout";
import Hero from "./components/Hero";
import Bookshelf, { loader as bookshelfLoader } from "./pages/Bookshelf";
import Article, { loader as articleLoader } from "./components/Article";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Message message={"Error in loading portfolio."} />,
      children: [
        {
          path: "",
          element: <Hero />,
          errorElement: <Message message={"Error in loading home"} />,
        },
        {
          path: "projects/categories",
          element: <ProjectCategories />,
          loader: projectCategoriesLoader,
          errorElement: (
            <Message message={"Error in loading project categories."} />
          ),
        },
        {
          path: "projects/:category",
          element: <Projects />,
          loader: projectsLoader,
          errorElement: <Message message={"Error in loading projects."} />,
        },
        {
          path: "blogs",
          element: <Blogs />,
          loader: blogsLoader,
          errorElement: <Message message={"Error in loading blogs."} />,
        },
        {
          path: "tils",
          element: <Blogs />,
          loader: blogsLoader,
          errorElement: <Message message={"Error in loading learnings."} />,
        },
        {
          path: "bookshelf",
          element: <Bookshelf />,
          loader: bookshelfLoader,
          errorElement: <Message message={"Error in loading bookshelf."} />,
        },
        {
          path: "article",
          element: <Article />,
          loader: articleLoader,
          errorElement: <Message message={"Error in loading article."} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
