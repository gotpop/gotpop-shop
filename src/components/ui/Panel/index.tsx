import Image from 'next/image'
import LinkIcon from '@ui/LinkIcon'
import macPic from '@images/mac.png'
import styles from './Panel.module.css'
import stylesContent from './PanelContent.module.css'

const Panel = ({ image, page }) => {
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

Panel.defaultProps = {
  image: macPic,
  page: {
    id: '1',
    direction: 'ltr',
    link: {
      href: '/cards',
      text: 'Find out more'
    },
    excerpt:
      'Size queries in Container Queries provide a way to query the size of a container, and conditionally apply CSS to the content of that container.',
    title: 'Panel title'
  }
}

export default Panel
