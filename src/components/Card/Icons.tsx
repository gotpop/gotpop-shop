import stylesIcon from './Icons.module.css'

import { FaEdge } from 'react-icons/fa'
import { TfiGithub } from 'react-icons/tfi'
import { SiCsswizardry, SiMozilla } from 'react-icons/si'
import { DiCssTricks } from 'react-icons/di'
import { AiFillChrome, AiOutlineLink } from 'react-icons/ai'

const Icons = ({ links }) => (
  <aside className={stylesIcon.icons}>
    {links.map(link => (
      <a key={link.name} href={link.href} className={stylesIcon.link}>
        <span className={stylesIcon.text}>{link.name}</span>
        {link.name === 'GitHub' ? (
          <TfiGithub className={stylesIcon.icon} />
        ) : link.name === 'CSS' ? (
          <SiCsswizardry className={stylesIcon.icon} />
        ) : link.name === 'CSS Tricks' ? (
          <DiCssTricks className={stylesIcon.icon} />
        ) : link.name === 'Chrome' ? (
          <AiFillChrome className={stylesIcon.icon} />
        ) : link.name === 'Edge' ? (
          <FaEdge className={stylesIcon.icon} />
        ) : link.name === 'MDN' ? (
          <SiMozilla className={stylesIcon.icon} />
        ) : (
          <AiOutlineLink className={stylesIcon.icon} />
        )}
      </a>
    ))}
  </aside>
)

export default Icons
