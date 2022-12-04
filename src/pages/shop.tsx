import prisma, { ProductWithPhotos } from '@lib/prisma'

import { GetStaticProps } from 'next'
import Intro from '@components/ui/Intro'
import LayoutStandard from '@components/layouts/LayoutStandard'
import Product from '@components/ui/Product'
import { useEffect } from 'react'

const content = {
  title: 'Shop',
  text: 'Buy your developer accessories here.'
}

type Props = {
  shopData: ProductWithPhotos[]
}

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json()
}

const handelClick = () => {
  const url = 'http://localhost:3000/api/cart'
  const body = {
    id: 'c1f2beda-1673-440d-93a2-c3c49a15065d',
    newAmount: 999999
  }

  postData(url, body).then(data => {
    console.log(data)
  })
}

export default function Shop({ shopData }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <LayoutStandard>
      <>
        <Intro content={content} />
        <button onClick={handelClick}>Click me baby!</button>
        {shopData.map((product: ProductWithPhotos, key: number) => (
          <Product key={key} product={product} />
        ))}
      </>
    </LayoutStandard>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const shopData = await prisma.product.findMany({
    include: {
      photos: true
    }
  })

  return {
    props: {
      shopData: JSON.parse(JSON.stringify(shopData))
    }
  }
}
