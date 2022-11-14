import Image from 'next/image'
import LinkIcon from '@ui/LinkIcon'
import keyboardPic from '@images/keyboard.png'
import styles from './Hero.module.css'

const Hero = ({ image, page }) => {
  const { link, excerpt, title } = page

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <LinkIcon href={link.href} content={link.text} />
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

Hero.defaultProps = {
  image: keyboardPic,
  page: {
    title: 'GotPop Starter',
    excerpt: 'A Next.js starter template using Next.js 13',
    link: {
      text: 'Find out more!',
      href: '/cards'
    }
  }
}

export default Hero
