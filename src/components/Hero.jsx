import { useEffect, useState } from "react";
import heroImg_2 from "../assets/hero_wbcg.png";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { fetchItems } from "../fetchItems";
import { socialLinksContentType } from "../../constant";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const getSocialLinks = async () => {
    let socialLinks = localStorage.getItem("social_links");
    if (
      socialLinks === null ||
      socialLinks === undefined ||
      socialLinks === "undefined" ||
      socialLinks === "" ||
      socialLinks.length === 0
    ) {
      const { items } = await fetchItems(socialLinksContentType);
      socialLinks = JSON.stringify(items);
      localStorage.setItem("social_links", socialLinks);
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
          <h1>Portfolio</h1>
          <p>
            Namaste &#128591; <br />I am{" "}
            <span id="name">Kushagra Raj Tiwari</span> from Bharat 🇮🇳 <br />I am
            software engineer at Deutsche Bank.
            <br />
            You can connect with me on <br />
            {socialLinks.length > 0 && (
              <SocialLinks socialLinks={socialLinks} />
            )}
            <br />
            Get resume {"         "}{" "}
            <a
              id="logo"
              href={import.meta.env.VITE_RESUME_LINK}
              target="_blank"
            >
              <GoDownload />
            </a>
            <br />
            Here are some of my projects.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg_2} alt="image" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
