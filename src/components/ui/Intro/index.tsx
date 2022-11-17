import styles from './Intro.module.css'

const Intro = ({ content }) => {
  const { title, text } = content

  return (
    <section className={styles.intro}>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  )
}

Intro.defaultProps = {
  content: {
    title: 'This Is The Intro Component',
    text: 'This is the body text of the intro component.'
  }
}

export default Intro
