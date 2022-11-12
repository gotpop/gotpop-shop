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
  childPath: 'cards'
}

export default Card
