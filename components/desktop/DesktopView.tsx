'use client'

import { useState, Fragment } from 'react'

import Card from '@/components/Card'
import { cardData } from '@/data/CardData'
import ProductDetail from '@/components/detail/ProductDetail'

interface ProductDetail {
  title: string
  description: string
  accordion: {
    iconUrl: string
    title: string
    description: string
  }[]
}

const DesktopView = () => {
  const [tabName, setTabName] = useState(cardData[0]?.title)

  const selectedCard = cardData.find(
    (product) => product?.title === tabName
  ) as { productDetail: ProductDetail }

  // console.log('selectedCard\t', selectedCard)

  return (
    <>
      <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {cardData.map(({ title, description, icon }) => (
          <div
            key={`${title}-${description}`}
            onClick={() => setTabName(title)}
          >
            <Card
              title={title}
              description={description}
              icon={icon}
              active={title === tabName}
            />
          </div>
        ))}
      </div>
      <div className='mt-14'>
        <ProductDetail productDetail={selectedCard?.productDetail} />
      </div>
    </>
  )
}

export default DesktopView
