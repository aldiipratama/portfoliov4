import { Button } from "@/components/ui/button"
import { ReactSVG } from "react-svg"
import Dots from '@/assets/Dots.svg'
import Picture2 from '@/assets/picture2.png'
import { Link } from "react-router-dom"

const About = () => {
  return (
    <section className="relative mt-20 " id="aboutme">
      <div className="flex flex-col">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center w-2/3" data-aos="fade-right" data-aos-delay="500">
            <h2 className="w-40 md:w-28"><span className="dark:text-primary text-secondary text-xl md:text-2xl">#</span>about-me</h2>
            <hr className="w-full text-secondary ms-2 dark:text-primary" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 lg:flex-row">
          <div className="flex flex-col order-2 w-full mt-10 lg:w-1/2 lg:order-1 lg:mt-0" data-aos="fade-right" data-aos-delay="500">
            <div className="flex flex-col gap-5 dark:text-gray text-sm md:text-base">
              <p>Hello, i’m Aldipratama</p>
              <p>I’m a self-taught front-end developer based in Bandung, Indonesia. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
              <p>Transforming my creativity and knowledge into a websites has been my passion for over two years.</p>
            </div>
            <div className="mt-10">
              <Button variant="outline" className="rounded-none">
                <Link to="/about">Read More -&gt;</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center order-1 w-full h-auto lg:w-1/2 lg:order-2" data-aos="fade-left" data-aos-delay="500">
            <div className="flex flex-col items-center justify-center w-full mt-5 lg:w-1/2 lg:-mt-5 max-sm:-ms-24">
              <div className='relative h-80 w-60 ms-20 '>
                <img src={Picture2} alt="picture" width={800} />
                <ReactSVG src={Dots} className='absolute left-5 top-28 text-primary dark:text-secondary' width={50} />
                <ReactSVG src={Dots} className='absolute bottom-5 -right-5 text-secondary dark:text-primary' width={50} />
                <div className='absolute -bottom-2 right-0 h-52 border-b border-r border-r-primary dark:border-r-secondary border-secondary dark:border-primary w-60 border-1 z-[1]'>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex-col hidden gap-4 -right-28 md:flex">
        <ReactSVG src={Dots} className="text-gray" />
      </div>
    </section>
  )
}

export default About