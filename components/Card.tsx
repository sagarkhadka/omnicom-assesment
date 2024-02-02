interface ICard {
  title: string
  description: string
}

const Card = ({ title, description }: ICard) => {
  return (
    <>
      <div className='rounded-lg border border-black/20 min-h-[315px]'>
        <div className='space-y-4 p-4'>
          <div className='flex justify-between gap-3'>
            <h6>{title}</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
