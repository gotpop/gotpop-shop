import { SiCsswizardry, SiMozilla } from 'react-icons/si'

import { AiFillChrome } from 'react-icons/ai'
import { DiCssTricks } from 'react-icons/di'
import { FaEdge } from 'react-icons/fa'
import { TfiGithub } from 'react-icons/tfi'
import { getComponent } from '@utils/getComponent'
import stylesIcon from './Icons.module.css'

const icons = new Map([
  [1, TfiGithub],
  [2, SiCsswizardry],
  [3, DiCssTricks],
  [4, AiFillChrome],
  [5, FaEdge],
  [6, SiMozilla]
])

const Icons = ({ links }) => (
  <aside className={stylesIcon.icons}>
    {links.map(link => (
      <a key={link.name} href={link.href} className={stylesIcon.link}>
        <span className={stylesIcon.text}>{link.name}</span>
        {getComponent(icons, link.id)}
      </a>
    ))}
  </aside>
)

export default Icons
