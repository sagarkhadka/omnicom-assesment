'use client'

import React, { useState } from 'react'
import { Chevron } from '../ui/Icons'
import { cn } from '@/lib/utils'

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
        <div
          className={cn('rotate-0 transform duration-200', {
            'rotate-180': isOpen
          })}
        >
          <Chevron />
        </div>
      </div>
      <div
        data-state={isOpen ? 'open' : 'closed'}
        className='overflow-hidden border-black duration-100 data-[state=closed]:h-0 data-[state=open]:h-full data-[state=open]:border-t data-[state=open]:p-4'
      >
        {children}
      </div>
    </>
  )
}

export default Accordion
