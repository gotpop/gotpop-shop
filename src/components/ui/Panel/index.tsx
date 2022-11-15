import { useEffect, useRef } from 'react'

import Image from 'next/image'
import LinkIcon from '@ui/LinkIcon'
import styles from './Panel.module.css'

export default function Panel({ image, page }) {
  const { link, excerpt, title, id } = page
  const sectionRef = useRef(null)

  useEffect(() => {
    const right = page?.direction === 'rtl'

    right
      ? sectionRef.current.style.setProperty('--local-direction', 'rtl')
      : null
  }, [page])

  return (
    <section ref={sectionRef} className={styles.panel}>
      <div className={styles.content}>
        <h3 id={`panel-${id}`}>{title}</h3>
        <p>{excerpt}</p>
        <LinkIcon href={link.href} />
      </div>
      <Image
        className={styles.image}
        src={image}
        alt="Picture of the author"
        placeholder="blur"
      />
    </section>
  )
}
