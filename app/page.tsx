import Card from '@/components/Card'

export default function Home() {
  const cardData = {
    title: 'Card Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: '/icons/icon 1.svg'
  }

  return (
    <>
      <Card title='Card Title' description='' />
    </>
  )
}
