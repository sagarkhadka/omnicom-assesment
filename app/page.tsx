import React from 'react'

import Card from '@/components/Card'
import { cardData } from '@/data/CardData'
import ProductDetail from '@/components/detail/ProductDetail'

export default function Home() {
  return (
    <>
      <section className='container'>
        <div className='mb-7 mt-3 space-y-2'>
          <h1 className='hf-section-title text-center'>Section title</h1>
          <h4 className='hf-section-subtitle text-center'>Section subtitle</h4>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {cardData.map(({ title, description, icon, active }) => (
            <React.Fragment key={`${title}-${description}`}>
              <Card
                title={title}
                description={description}
                icon={icon}
                active={active}
              />
            </React.Fragment>
          ))}
        </div>
        <div className='mt-14'>
          <ProductDetail />
        </div>
      </section>
    </>
  )
}
