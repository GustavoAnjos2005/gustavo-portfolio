import Link from "next/link";
import { RiLinkedinFill, RiGithubFill, RiMailFill, RiWhatsappFill } from "react-icons/ri";
import { BsBoxArrowUp } from "react-icons/bs";

const icons = [
  {
    path: "https://www.linkedin.com/in/gustavo-anjos-231981239/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/GustavoAnjos2005",
    name: <RiGithubFill />,
  },
  {
    path: "https://drive.google.com/drive/u/1/folders/1Re-_8Saa0WY07pjJyEs0CWQGjjK-wSs2",
    name: <BsBoxArrowUp />,
  },
  {
    path: "mailto:anjos7623@gmail.com",
    name: <RiMailFill />,
  },
  {
    path: "https://wa.me/5511958748848",
    name: <RiWhatsappFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {icons.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;