import heroImg_2 from "./assets/hero_wbcg.png";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
const Hero = () => {
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
            <a
              id="logo"
              href="https://www.linkedin.com/in/kushagra-raj-tiwari/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            {"           "}
            <a id="logo" href="https://github.com/krtEngineer" target="_blank">
              <FaGithubSquare />
            </a>
            {"           "}
            <a
              id="logo"
              href="https://twitter.com/kushagra1857"
              target="_blank"
            >
              <FaTwitterSquare />
            </a>
            <br />
            Get resume {"         "}{" "}
            <a
              id="logo"
              href="https://drive.google.com/file/d/1Pvdj2JL_-kDObJ69TSDtnUQkmiPI-_rQ/view?usp=sharing"
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
