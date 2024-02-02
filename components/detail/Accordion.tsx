'use client'

import React, { useState } from 'react'

const Accordion: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        className='flex cursor-pointer items-center justify-between p-4'
        onClick={toggleAccordion}
      >
        <div className='font-bold'>{title}</div>
        <div className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          &#9660;
        </div>
      </div>
      {isOpen && <div className='border-t border-black p-4'>{children}</div>}
    </>
  )
}

export default Accordion
