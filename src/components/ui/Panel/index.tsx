import Image from 'next/image'
import LinkIcon from '@ui/LinkIcon'
import keyboardPic from '../../../../public/images/books.png'
import macPic from '@images/mac.png'
import styles from './Panel.module.css'
import stylesContent from './PanelContent.module.css'

// import keyboardPic from '@images/hero/keyboard.png'

const Panel = ({ image, page }) => {
  // console.log('image :', image.src)
  const { link, excerpt, title, id, direction } = page
  const vars = { ['--local-direction' as string]: 'rtl' }

  const liam = `http://localhost:3000${image.src}`
  console.log('liam :', liam)

  return (
    <section style={direction === 'rtl' ? vars : null} className={styles.panel}>
      <div className={stylesContent.content}>
        <h3 id={`panel-${id}`}>{title}</h3>
        <p>{excerpt}</p>
        <LinkIcon href={link.href} />
      </div>
      <Image
        className={styles.image}
        src={liam}
        width={image.width}
        height={image.height}
        alt="Image alt2"
        // placeholder="blur"
      />
    </section>
  )
}

Panel.defaultProps = {
  // image: macPic,
  image: keyboardPic,
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
