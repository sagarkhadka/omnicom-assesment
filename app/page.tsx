import DesktopView from '@/components/desktop/DesktopView'
import MobileView from '@/components/mobile/MobileView'

export default function Home() {
  return (
    <>
      <section className='container pb-14'>
        <div className='my-7 space-y-2'>
          <h1 className='hf-section-title text-center'>Section title</h1>
          <h4 className='hf-section-subtitle text-center'>Section subtitle</h4>
        </div>
        <div className='hidden sm:block'>
          <DesktopView />
        </div>
        <div className='block sm:hidden'>
          <MobileView />
        </div>
      </section>
    </>
  )
}
