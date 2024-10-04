import SocialLinks from "./SocialLinks";

const Contact = ({ socialLinks }) => {
  return (
    <div id="contact">
      You can connect with me on{" "}
      {socialLinks.length > 0 && <SocialLinks socialLinks={socialLinks} />}
    </div>
  );
};
export default Contact;
