import Picture from '@/assets/picture.png'
import Dots from '@/assets/Dots.svg'
import { ReactSVG } from 'react-svg'
import { Button } from '@/components/ui/button'
import Tick from '@/assets/tick.svg'
import { Link } from 'react-scroll'
import TypeIt from 'typeit-react'

const Home = () => {
  return (
    <section className='relative flex flex-col mt-20 ' id='#'>
      <div className="flex flex-col items-stretch lg:flex-row">
        <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-delay="500">
          <h1 >Aldipratama is a <TypeIt options={{
            loop: true,
          }} getBeforeInit={(instance) => {
            instance.type("Frontend Developer").pause(500).delete().type("Photographer")
            return instance
          }} className="text-secondary dark:text-primary" /></h1>
          <p className='mt-10 text-sm md:max-w-md text-gray md:text-base'>I build responsive websites where technology meets creativity</p>
          <Button variant="outline" className='hidden mt-5 rounded-none lg:block'>
            <Link to="contact" spy smooth activeClass="active" offset={-60}>Contact Me !!</Link>
          </Button>
        </div>
        <div className='w-[1px] bg-black dark:bg-gray h-80 hidden lg:block' data-aos="zoom-in" data-aos-delay="500"></div>
        <div className="flex flex-col items-center justify-center w-full mt-5 lg:w-1/2 lg:-mt-5" data-aos="fade-left" data-aos-delay="500">
          <div className='relative w-60 h-60 ms-20'>
            <ReactSVG src={Dots} className='absolute left-0 top-10 text-primary dark:text-secondary' width={50} />
            <img src={Picture} alt="picture" width={200} className='absolute -top-4 -left-5' />
            <ReactSVG src={Dots} className='absolute bottom-5 right-24 text-secondary dark:text-primary' width={50} />
          </div>
          <div className='p-2 -mt-2 border border-black dark:border-white w-68 border-1 z-[1] flex gap-2 items-center'>
            <span className='inline-block w-2 h-2 bg-secondary dark:bg-primary'></span>
            <p className='max-w-[250px] text-xs text-gray md:text-base'>Currently Working on <span className="font-bold dark:text-white">Portofolio</span></p>
          </div>
        </div>
      </div>
      <div className='flex flex-col self-center max-w-lg mt-10 text-sm md:text-base' data-aos="flip-right" data-aos-delay="500">
        <fieldset className='p-4 border border-background dark:border-white'>
          <legend className='px-2 ms-5'>
            <img src={Tick} alt="tick" />
          </legend>
          <p>If you don’t take risks in this life, you can’t create a future.</p>
        </fieldset>
        <fieldset className='w-40 p-4 -mt-[11px] border border-background dark:border-white self-end'>
          <legend className='px-2 bg-white dark:bg-background'>
            <img src={Tick} alt="tick" />
          </legend>
          <p>- Monkey D. Luffy</p>
        </fieldset>
      </div>
      <div className="absolute flex-col hidden gap-4 top-10 -right-28 md:flex">
        <div className="flex items-center justify-center gap-4">
          <div className="w-1 h-1 bg-background dark:bg-gray"></div>
          <div className="w-1 h-1 bg-background dark:bg-gray"></div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="w-1 h-1 bg-background dark:bg-gray"></div>
          <div className="w-1 h-1 bg-background dark:bg-gray"></div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="w-1 h-1 bg-background dark:bg-gray"></div>
          <div className="w-1 h-1 bg-background dark:bg-gray"></div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="w-1 h-1 bg-background dark:bg-gray"></div>
          <div className="w-1 h-1 bg-background dark:bg-gray"></div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="w-1 h-1 bg-background dark:bg-gray"></div>
          <div className="w-1 h-1 bg-background dark:bg-gray"></div>
        </div>
      </div>
      <div className='absolute bottom-0 hidden w-24 h-24 border border-black dark:border-white -right-36 md:block'></div>
    </section>
  )
}

export default Home