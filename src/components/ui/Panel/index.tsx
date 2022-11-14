import Image from 'next/image'
import styles from './Panel.module.css'

export default function Panel({ image }) {
  return (
    <section className={styles.panel}>
      <div className={styles.content}>
        <h3>Panel</h3>
      </div>
      <Image
        className={styles.image}
        src={image}
        alt="Picture of the author"
        placeholder="blur"
      />
    </section>
  )
}
