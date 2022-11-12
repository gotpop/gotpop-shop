import styles from './Intro.module.css'

export default function Intro({ content }) {
  const { title, text } = content

  return (
    <section className={styles.intro}>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  )
}
