import { useEffect, useState } from "react";
import heroImg_2 from "../assets/hero_wbcg.png";
import { fetchItems } from "../services/fetchItems";
import GreetingSlider from "./GreetingSlider";
import {
  getDataWithExpiry,
  saveDataWithExpiry,
  socialLinksContentType,
} from "../services/utility";
import Contact from "./Contact";

const Hero = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const getSocialLinks = async () => {
    let socialLinks = getDataWithExpiry("social_links");
    if (
      socialLinks === null ||
      socialLinks === undefined ||
      socialLinks === "undefined" ||
      socialLinks === "" ||
      socialLinks.length === 0
    ) {
      const { items } = await fetchItems(socialLinksContentType);
      socialLinks = JSON.stringify(items);
      saveDataWithExpiry("social_links", socialLinks);
    }
    setSocialLinks(JSON.parse(socialLinks));
  };
  useEffect(() => {
    getSocialLinks();
  }, []);
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <GreetingSlider></GreetingSlider>
          <p>
            I am Kushagra, from Bharat 🇮🇳. I work as{" "}
            {import.meta.env.VITE_CURRENT_COMPANY_EMP_TITLE} at{" "}
            <a
              id="logo"
              href={import.meta.env.VITE_CURRENT_COMPANY_WEBSITE}
              target="_blank"
            >
              {import.meta.env.VITE_CURRENT_COMPANY_NAME}
            </a>
            , where I specialize in backend engineering.
            <br />
            <br />
            I focus on building robust marketing products for some of the
            world's top brands. My role involves designing and optimizing
            scalable solutions that empower businesses to make data-driven
            decisions.
            <br />
            <br />
            Beyond my professional work, I have a keen interest in distributed
            systems, networks, databases, and security. I continuously explore
            these areas to enhance my understanding and stay at the forefront of
            technological advancements.
            <br />
            <br />
          </p>
          <p>
            When I’m not with tech, I’m probably running, on a bike trip,
            playing harmonium, or cooking in the kitchen.
          </p>
          <br />
          <p>
            If you are my potential employer, please feel free to review my{" "}
            <a
              id="logo"
              href={import.meta.env.VITE_RESUME_LINK}
              target="_blank"
            >
              resume
            </a>{" "}
            for a detailed overview of my skills and experiences.
          </p>
          <div className="contact-small-screen">
            <Contact socialLinks={socialLinks} />
          </div>
        </div>
        <div className="img-container">
          <img src={heroImg_2} alt="image" />
          <div className="big-small-screen">
            <Contact socialLinks={socialLinks} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
