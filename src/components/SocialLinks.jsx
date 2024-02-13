import SocialIcon from "./SocilaIcon";

const SocialLinks = ({ socialLinks }) => {
  return (
    <>
      {socialLinks.map((socialLink) => {
        const { id, url, platform } = socialLink;
        return (
          <a key={id} id="logo" href={url} target="_blank">
            <SocialIcon name={platform} /> &nbsp;
          </a>
        );
      })}
    </>
  );
};
export default SocialLinks;
