'use client'

import { useState, Fragment } from 'react'

import Card from '@/components/Card'
import { cardData } from '@/data/CardData'
import ProductDetail from '@/components/detail/ProductDetail'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion'
import Image from 'next/image'

interface ProductDetail {
  title: string
  description: string
  accordion: {
    iconUrl: string
    title: string
    description: string
  }[]
}

const MobileView = () => {
  const [tabName, setTabName] = useState(cardData[0]?.title)

  const selectedCard = cardData.find(
    (product) => product?.title === tabName
  ) as { productDetail: ProductDetail }

  // console.log('selectedCard\t', selectedCard)

  return (
    <>
      <div className=''>
        <Accordion type='single' collapsible>
          {cardData.map(({ title, description, icon }) => (
            <div
              key={`${title}-${description}`}
              onClick={() => setTabName(title)}
            >
              <AccordionItem
                value={title}
                className='mb-6 rounded-2xl border-b-[8px] border-HF-yellow bg-white data-[state=open]:border-b-0'
              >
                <AccordionTrigger className=' pr-4'>
                  <div className='flex items-center gap-6 px-3'>
                    <Image src={icon} alt='' height={35} width={35} />
                    <h5 className='hf-h5'>{title}</h5>
                  </div>
                </AccordionTrigger>
                <AccordionContent className='p-0'>
                  <ProductDetail productDetail={selectedCard?.productDetail} />
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </>
  )
}

export default MobileView
