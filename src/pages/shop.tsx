import { GetServerSideProps, GetStaticProps } from 'next'
import prisma, { ProductWithPhotos } from '@lib/prisma'

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

export default function Shop({ shopData }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <LayoutStandard>
      <>
        <Intro content={content} />
        {shopData.map((product: ProductWithPhotos, key: number) => (
          <Product key={key} product={product} />
        ))}
      </>
    </LayoutStandard>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
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
