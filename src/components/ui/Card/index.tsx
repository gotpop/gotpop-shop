import Icons from './Icons'
import LinkIcon from '@ui/LinkIcon'
import styles from './Card.module.css'

const Card = ({ content, fullCard, childPath }) => {
  const { id, title, text, links } = content

  return (
    <div className={styles.card}>
      <article className={styles.inner}>
        <section className={styles.content}>
          <h3>{title}</h3>
          <p>{text}</p>
        </section>
        {fullCard ? (
          <Icons links={links} />
        ) : (
          <LinkIcon href={`/${childPath}/${id}`} />
        )}
      </article>
    </div>
  )
}

Card.defaultProps = {
  fullCard: true,
  content: {
    id: '1',
    text: 'Size queries in Container Queries provide a way to query the size of a container, and conditionally apply CSS to the content of that container.',
    title: '@container queries',
    links: [
      {
        id: '4',
        name: 'Chrome',
        href: 'https://web.dev/state-of-css-2022/#container-queries'
      },
      {
        id: '2',
        name: 'CSS',
        href: 'https://drafts.csswg.org/css-contain-3'
      },
      {
        id: '6',
        name: 'MDN',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries'
      }
    ]
  },
  childPath: 'cards'
}

export default Card
