import prisma, { productWithPhotos } from '@lib/prisma'

import { GetStaticProps } from 'next'
import Intro from '@components/ui/Intro'
import LayoutStandard from '@components/layouts/LayoutStandard'
import Product from '@components/ui/Product'
import { Product as ProductType } from '@prisma/client'
import { useEffect } from 'react'

const content = {
  title: 'Shop',
  text: 'Buy your developer accessories here.'
}

export default function Shop({ shopData }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <LayoutStandard>
      <>
        <Intro content={content} />
        {shopData.map((product: productWithPhotos, key) => (
          <Product key={key} product={product} />
        ))}
      </>
    </LayoutStandard>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const shopData = await prisma.product.findMany({
    include: {
      photo: true
    }
  })

  return {
    props: {
      shopData: JSON.parse(JSON.stringify(shopData))
    }
  }
}
