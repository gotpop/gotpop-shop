import prisma, { ProductWithPhotos } from '@lib/prisma'

import Intro from '@components/ui/Intro'
import LayoutStandard from '@components/layouts/LayoutStandard'
import Meta from '@components/head/Meta'
import Product from '@components/ui/Product'

const content = {
  title: 'Shop',
  text: 'Buy your developer accessories here.'
}

type Props = {
  shopData: ProductWithPhotos[]
}

export default function Shop({ shopData }: Props) {
  return (
    <LayoutStandard>
      <>
        <Meta />
        <Intro content={content} />
        {shopData.map((product: ProductWithPhotos, key: number) => (
          <Product product={product} key={key} iteration={key} />
        ))}
      </>
    </LayoutStandard>
  )
}

export const getServerSideProps = async () => {
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
