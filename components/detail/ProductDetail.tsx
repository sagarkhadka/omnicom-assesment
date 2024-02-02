import React from 'react'
import Accordion from './Accordion'

const ProductDetail = () => {
  return (
    <>
      <div className='rounded-[48px] bg-HF-yellow/60 px-16 py-12'>
        <div className='flex items-center gap-12'>
          <div className='flex-1 space-y-4'>
            <h2 className='hf-h2'>Product title</h2>
            <h5 className='hf-h5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              scelerisque risus id ante maximus blandit.
            </h5>
            <button className='hf-primary-button !mt-10'>
              <span>Discover product</span>
            </button>
          </div>
          <div className='flex-1 divide-y divide-black'>
            {Array(5)
              .fill()
              .map((_, index) => (
                <React.Fragment key={index}>
                  <div className='hf-paragraph-medium py-4'>
                    <Accordion title='hello'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste pariatur rerum suscipit itaque debitis sit
                        voluptatem fugiat eligendi molestias modi.
                      </p>
                    </Accordion>
                  </div>
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
