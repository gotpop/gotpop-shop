import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineHome } from 'react-icons/ai'
import styles from './BreadCrumbs.module.css'

const getPathFromUrl = (url: string): string => {
  return url.split(/[?#]/)[0]
}

const convertBreadcrumb = (
  title: string,
  toUpperCase: boolean | undefined,
  replaceCharacterList: Array<CharacterMap> | undefined,
  transformLabel?: ((title: string) => React.ReactNode) | undefined
): React.ReactNode => {
  let transformedTitle = getPathFromUrl(title)

  if (transformLabel) {
    return transformLabel(transformedTitle)
  }

  if (replaceCharacterList) {
    for (let i = 0; i < replaceCharacterList.length; i++) {
      transformedTitle = transformedTitle.replaceAll(
        replaceCharacterList[i].from,
        replaceCharacterList[i].to
      )
    }
  }

  return toUpperCase
    ? decodeURI(transformedTitle).toUpperCase()
    : decodeURI(transformedTitle)
}

export interface Breadcrumb {
  breadcrumb: string
  href: string
}

export interface CharacterMap {
  from: string
  to: string
}

export interface BreadcrumbsProps {
  useDefaultStyle?: boolean
  rootLabel?: string | null
  omitRootLabel?: boolean
  labelsToUppercase?: boolean | undefined
  replaceCharacterList?: Array<CharacterMap> | undefined
  transformLabel?: ((title: string) => React.ReactNode) | undefined
  omitIndexList?: Array<number> | undefined
  containerStyle?: any | null
  containerClassName?: string
  listStyle?: any | null
  listClassName?: string
  inactiveItemStyle?: any | null
  inactiveItemClassName?: string
  activeItemStyle?: any | null
  activeItemClassName?: string
}

const defaultProps: BreadcrumbsProps = {
  useDefaultStyle: false,
  rootLabel: 'Home',
  omitRootLabel: false,
  labelsToUppercase: false,
  replaceCharacterList: [{ from: '-', to: ' ' }],
  transformLabel: undefined,
  omitIndexList: undefined,
  containerStyle: null,
  containerClassName: '',
  listStyle: null,
  listClassName: '',
  inactiveItemStyle: null,
  inactiveItemClassName: '',
  activeItemStyle: null,
  activeItemClassName: ''
}

const Breadcrumbs = ({
  useDefaultStyle,
  rootLabel,
  omitRootLabel,
  labelsToUppercase,
  replaceCharacterList,
  transformLabel,
  omitIndexList,
  containerStyle,
  containerClassName,
  listStyle,
  listClassName,
  inactiveItemStyle,
  inactiveItemClassName,
  activeItemStyle,
  activeItemClassName
}: BreadcrumbsProps) => {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState<Array<Breadcrumb> | null>(null)

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/')
        }
      })

      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }

  return (
    <nav
      style={containerStyle}
      className={styles.breadcrumbs}
      aria-label="breadcrumbs">
      <ol
        style={listStyle}
        className={useDefaultStyle ? '_2jvtI' : listClassName}>
        {!omitRootLabel && (
          <li style={inactiveItemStyle} className={inactiveItemClassName}>
            <Link href="/">
              <AiOutlineHome className={styles.iconhome} />
              {convertBreadcrumb(
                rootLabel || 'Home',
                labelsToUppercase,
                replaceCharacterList,
                transformLabel
              )}
            </Link>
          </li>
        )}
        {breadcrumbs.length >= 1 &&
          breadcrumbs.map((breadcrumb, i) => {
            if (
              !breadcrumb ||
              breadcrumb.breadcrumb.length === 0 ||
              (omitIndexList && omitIndexList.find(value => value === i))
            ) {
              return
            }
            return (
              <li
                key={breadcrumb.href}
                className={
                  i === breadcrumbs.length - 1
                    ? activeItemClassName
                    : inactiveItemClassName
                }
                style={
                  i === breadcrumbs.length - 1
                    ? activeItemStyle
                    : inactiveItemStyle
                }>
                <Link href={breadcrumb.href}>
                  {convertBreadcrumb(
                    breadcrumb.breadcrumb,
                    labelsToUppercase,
                    replaceCharacterList,
                    transformLabel
                  )}
                </Link>
              </li>
            )
          })}
      </ol>
    </nav>
  )
}

Breadcrumbs.defaultProps = defaultProps

export default Breadcrumbs
