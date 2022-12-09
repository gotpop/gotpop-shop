import { CSSProperties, useEffect, useRef } from 'react'

import { AiOutlineArrowRight } from 'react-icons/ai'
import Grid from '../Grid'
import GridWrap from '../GridWrap'
import Image from 'next/image'
import LinkIcon from '@ui/LinkIcon'
import { PanelWithPhotos } from '@lib/prisma'
import macPic from '@images/mac.png'
import { panelAnimations } from './Panel.animation'
import styles from './Panel.module.css'
import stylesContent from './PanelContent.module.css'
import { useOnScreen } from '@hooks/useOnScreen'

type Props = {
  compact: boolean
  i: number
  page: PanelWithPhotos
}

const Panel = ({ compact, page, i }: Props) => {
  const { linkhref, linktext, excerpt, title, id, direction, photos } = page
  const photo = photos[0]

  const sectionRef = useRef<HTMLElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const isOnScreen = useOnScreen(sectionRef)

  const vars = { ['--local-direction']: 'rtl' } as CSSProperties
  const varsGrid = { ['--local-min-height']: '100vh' } as CSSProperties

  useEffect(() => {
    panelAnimations(contentRef.current, imageRef.current, isOnScreen)
  }, [isOnScreen])

  return (
    <section
      style={direction === 'rtl' ? vars : undefined}
      className={styles.panel}
      id={`panel-${i + 1}`}
      ref={sectionRef}
    >
      <GridWrap>
        <Grid vars={!compact ? varsGrid : undefined}>
          <>
            <div ref={contentRef} className={stylesContent.content}>
              <h3>{title}</h3>
              <p>{excerpt}</p>
              <LinkIcon href={linkhref} icon={<AiOutlineArrowRight />}>
                Buy now
              </LinkIcon>
            </div>
            <div ref={imageRef} className={styles.image}>
              <Image
                src={photo.url}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
              />
            </div>
          </>
        </Grid>
      </GridWrap>
    </section>
  )
}

Panel.defaultProps = {
  image: macPic,
  page: {
    id: '1',
    direction: 'ltr',
    link: {
      href: '/cards',
      text: 'Find out more'
    },
    excerpt:
      'Size queries in Container Queries provide a way to query the size of a container, and conditionally apply CSS to the content of that container.',
    title: 'Panel title'
  }
}

export default Panel
