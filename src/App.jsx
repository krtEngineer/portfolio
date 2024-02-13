import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Message from "./components/Message";
import Projects, { loader as projectsLoader } from "./pages/Projects";
import ProjectCategories, {
  loader as projectCategoriesLoader,
} from "./pages/ProjectCategories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Message message={"Error in loading portfolio."} />,
    children: [
      {
        index: true,
        element: <ProjectCategories />,
        loader: projectCategoriesLoader,
        errorElement: (
          <Message message={"Error in loading project categories."} />
        ),
      },
    ],
  },
  {
    path: "/projects/:category",
    element: <Projects />,
    loader: projectsLoader,
    errorElement: <Message message={"Error in loading projects."} />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
