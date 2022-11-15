import { GetStaticProps, NextPage } from 'next'

import Hero from '@components/ui/Hero'
import { IPage } from '@types'
import LayoutFull from '@components/layouts/LayoutFull'
import Meta from '@head/Meta'
import Panel from '@components/ui/Panel'
import booksPic from '@images/books.png'
import { getImage } from '@utils/getComponent'
import htmlPic from '@images/html.png'
import keyboardPic from '@images/keyboard.png'
import macPic from '@images/mac.png'
import { server } from '@config'

interface Props {
  pages: IPage[]
}

const imagesMap = new Map([
  [1, booksPic],
  [2, htmlPic],
  [3, keyboardPic],
  [4, macPic]
])

export default function Brochure({ data: pages }) {
  return (
    <LayoutFull>
      <Meta />
      <Hero />
      {pages.map((page: IPage, i) => (
        <Panel key={i} image={getImage(imagesMap, page.id)} page={page} />
      ))}
    </LayoutFull>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch(`${server}/api/liam`, {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json, text/plain, */*',
  //     'User-Agent': '*'
  //   }
  // })

  // const pages = await res.json()
  // // console.log('pages :', pages)

  // return {
  //   props: {
  //     pages
  //   }
  // }

  let data = []
  let error = ''
  try {
    const res = await fetch(`${server}/api/pages`, {
      method: 'GET',
      headers: {
        // update with your user-agent
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
        Accept: 'application/json; charset=UTF-8'
      }
    })

    data = await res.json()
  } catch (e) {
    error = e.toString()
  }

  return {
    props: {
      data,
      error
    }
  }
}
