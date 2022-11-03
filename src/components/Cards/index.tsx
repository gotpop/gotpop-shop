import * as React from 'react'
import styles from './Cards.module.css'

export default function Cards({ content }) {
  const { title, text, links } = content

  return (
    <div className={styles.cards}>
      <h1>Cards</h1>
    </div>
  )
}
