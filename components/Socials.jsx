import Link from "next/link"
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {MdArchive} from 'react-icons/md'

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/GustavoAnjos2005'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/gustavo-anjos-231981239'},
    {icon: <MdArchive />, path: 'https://drive.google.com/drive/folders/1Re-_8Saa0WY07pjJyEs0CWQGjjK-wSs2?usp=drive_link'},
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
  <div className={containerStyles}>
    {socials.map((item, index)=> {
        return (
        <Link key={index} href={item.path} className={iconStyles}>
        {item.icon}
        </Link>
    )
    })}
  </div>
  )
}

export default Socials