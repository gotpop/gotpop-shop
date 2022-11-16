import Image from 'next/image'
import LinkIcon from '@ui/LinkIcon'
import styles from './Panel.module.css'
import stylesContent from './PanelContent.module.css'

export default function Panel({ image, page }) {
  const { link, excerpt, title, id, direction } = page
  const vars = { ['--local-direction' as string]: 'rtl' }

  return (
    <section style={direction === 'rtl' ? vars : null} className={styles.panel}>
      <div className={stylesContent.content}>
        <h3 id={`panel-${id}`}>{title}</h3>
        <p>{excerpt}</p>
        <LinkIcon href={link.href} />
      </div>
      <Image
        className={styles.image}
        src={image}
        alt="Image alt"
        placeholder="blur"
      />
    </section>
  )
}
