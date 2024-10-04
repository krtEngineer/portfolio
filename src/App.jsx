import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Message from "./components/Message";
import Projects, { loader as projectsLoader } from "./pages/Projects";
import Blogs, { loader as blogsLoader } from "./pages/Blogs";
import ProjectCategories, {
  loader as projectCategoriesLoader,
} from "./pages/ProjectCategories";
import Layout from "./pages/Layout";
import Hero from "./components/Hero";

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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
