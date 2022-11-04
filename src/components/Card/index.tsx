import * as React from 'react'
import Link from 'next/link'
import Icons from './Icons'
import styles from './Card.module.css'

export default function Card({ content, fullCard }) {
  const { id, title, text, links } = content

  const Navigation = ({ id }) => (
    <Link href="/card/[id]" as={`/card/${id}`}>
      Visit page
    </Link>
  )

  return (
    <div className={styles.card}>
      <article className={styles.inner}>
        <section className={styles.content}>
          <h3>{title}</h3>
          <p>{text}</p>
        </section>
        {fullCard ? <Icons links={links} /> : <Navigation id={id} />}
      </article>
    </div>
  )
}
