import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import {
  FaBehanceSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

export const SocialIcon = ({ name }) => {
  const getSocialIcon = (name) => {
    switch (name) {
      case "FACEBOOK":
        return <FaFacebookSquare />;
      case "BEHANCE":
        return <FaBehanceSquare />;
      case "LINKEDIN":
        return <FaLinkedin />;
      case "X":
        return <FaTwitterSquare />;
      case "GITHUB":
        return <FaGithubSquare />;
      case "OUTLOOK":
        return <PiMicrosoftOutlookLogoFill />;
    }
  };
  return <>{getSocialIcon(name)}</>;
};
export default SocialIcon;
