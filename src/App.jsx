import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Message from "./components/Message";
import Projects, { loader as projectsLoader } from "./pages/Projects";
import Blogs, { loader as blogsLoader } from "./pages/Blogs";
import ProjectCategories, {
  loader as projectCategoriesLoader,
} from "./pages/ProjectCategories";
import Works, { loader as worksLoader } from "./pages/Works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Message message={"Error in loading portfolio."} />,
    children: [
      {
        index: true,
        element: <Works />,
        loader: worksLoader,
        errorElement: <Message message={"Error in loading works."} />,
      },
    ],
  },
  {
    path: "/projects/categories",
    element: <ProjectCategories />,
    loader: projectCategoriesLoader,
    errorElement: <Message message={"Error in loading project categories."} />,
  },
  {
    path: "/projects/:category",
    element: <Projects />,
    loader: projectsLoader,
    errorElement: <Message message={"Error in loading projects."} />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
    loader: blogsLoader,
    errorElement: <Message message={"Error in loading blogs."} />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
