import Icons from './Icons'
import styles from './Card.module.css'
import LinkIcon from '@components/LinkIcon'

export default function Card({ content, fullCard, childPath = 'cards' }) {
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
