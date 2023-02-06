import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import Image from 'next/image'
import { Session } from 'next-auth'
import styles from './ProfileCard.module.css'

type Props = {
  session: Session
}

export const ProfileCard = ({ session }: Props) => (
  <article className={styles.card}>
    <div className={styles.content}>
      <h3>
        <span>
          <BsFillPersonFill />
        </span>
        <span>{session?.user?.name}</span>
      </h3>
      <p>
        <span>
          <AiOutlineMail />
        </span>
        <span>{session?.user?.email}</span>
      </p>
    </div>
    <div className="avatar">
      <Image
        className={styles.image}
        src={session?.user?.image as string}
        alt={'avatar'}
        width={100}
        height={100}
      />
    </div>
  </article>
)
