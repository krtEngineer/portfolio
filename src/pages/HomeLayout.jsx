import { Outlet, useNavigation } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <main>
      <Hero />
      {isPageLoading ? <div className="loading"></div> : <Outlet />}
      {/* <Footer /> */}
    </main>
  );
};
export default HomeLayout;
