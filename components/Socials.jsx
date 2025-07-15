import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoDribbble,
  BiLogoLinkedin,
  BiLogoYoutube,
  BiLogoGithub,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoFacebook />,
    path: "https://www.facebook.com/paraphol.puangpee.2024/",
  },
  {
    icon: <BiLogoInstagram />,
    path: "https://www.instagram.com/zeppelin__p/?theme=dark",
  },
  {
    icon: <BiLogoYoutube />,
    path: "https://www.youtube.com/@Zeppe1in",
  },
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/ZeppelinZP",
  },
];

const Socials = ({ containerstyles, iconStyles }) => {
  return (
    <div className={containerstyles}>
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
