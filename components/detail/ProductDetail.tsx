import React from 'react'
import Image from 'next/image'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion'
import { IProductDetail } from '../desktop/productDetail'

const ProductDetail: React.FC<IProductDetail> = ({ productDetail }) => {
  return (
    <>
      <div className='rounded-3xl bg-HF-yellow/60 px-7 py-8 sm:px-10 md:rounded-[45px] md:px-16 md:py-12'>
        <div className='flex flex-col gap-8 sm:flex-row md:gap-12'>
          <div className='flex-1 space-y-4 md:pt-4'>
            <h2 className='hf-h2'>{productDetail?.title}</h2>
            <h5 className='hf-h5'>{productDetail?.description}</h5>
            <button className='hf-primary-button'>
              <span>Discover product</span>
            </button>
          </div>

          <div className='flex-1 pb-5'>
            <Accordion type='single' collapsible>
              {productDetail &&
                productDetail?.accordion.map(
                  ({ description, iconUrl, title }) => (
                    <React.Fragment key={`${title}`}>
                      <AccordionItem value={title} className='py-1 md:py-2'>
                        <AccordionTrigger>
                          <div className='flex items-center gap-3'>
                            <Image
                              src={iconUrl}
                              alt=''
                              height={35}
                              width={35}
                            />
                            <p className='hf-paragraph-medium text-left'>
                              {title}
                            </p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className='hf-paragraph-medium'>{description}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </React.Fragment>
                  )
                )}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
