import Image from 'next/image'
import { DownChevron } from './ui/Icons'
import { cn } from '@/lib/utils'

interface ICard {
  title: string
  description: string
  icon: string
  active?: boolean
}

const Card = ({ title, description, icon, active }: ICard) => {
  return (
    <>
      <div className='flex min-h-[215px] cursor-pointer flex-col justify-between overflow-clip rounded-lg border border-black/20 duration-200 hover:bg-neutral-50'>
        <div className='space-y-4 p-4'>
          <div className='flex justify-between gap-14'>
            <h6 className='hf-h6'>{title}</h6>
            <Image
              src={icon}
              alt=''
              height={48}
              width={48}
              className='object-contain'
            />
          </div>
          <p className='hf-paragraph-medium'>{description}</p>
        </div>
        <button
          className={cn('hf-tab-btn', {
            'hf-tab-active': active
          })}
        >
          Discover <DownChevron />
        </button>
      </div>
    </>
  )
}

export default Card
