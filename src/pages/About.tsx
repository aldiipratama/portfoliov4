// import Navbar from "@/components/Navbar"

import SplashScreen from "@/components/SplashScreen"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Dots from '@/assets/Dots.svg'
import Picture2 from '@/assets/picture2.png'
import skills from "@/lib/skills";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import funfact from "@/lib/funfact";
import Footer from "@/components/Footer";
import { NavAboutItems } from "@/lib/NavItems";
import Navbar from "@/components/Navbar";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });
  return (
    <>
      <SplashScreen loading={loading} />
      {!loading && (
        <div className="dark:bg-background dark:text-white font-fira-code">
          <Navbar NavItems={NavAboutItems} />
          <div className="md:container">
            <main className="px-5 sm:px-[8rem] overflow-x-hidden 2xl:border-r 2xl:border-l">
              <div className="mt-10 md:container" data-aos="flip-down" data-aos-delay="500">
                <Breadcrumb>
                  <BreadcrumbList className="text-xl md:text-2xl !gap-0">
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/">Home</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-secondary dark:text-primary text-2xl md:text-4xl">
                      <span>/</span>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage>about</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <p className="dark:text-gray mt-5 text-sm md:text-base">Who am i?</p>
              </div>
              <section className="relative mt-10">
                <ReactSVG src={Dots} className="absolute scale-50 top-16 -left-32 hidden md:block" />
                <div className="flex flex-col items-center lg:flex-row">
                  <div data-aos="fade-right" data-aos-delay="500" className="flex flex-col gap-5 dark:text-gray order-2 w-full mt-10 lg:w-1/2 lg:order-1 lg:mt-0 text-sm md:text-base">
                    <p>Hello, i’m Aldipratama</p>
                    <p>I’m a self-taught front-end developer based in Bandung, Indonesia. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
                    <p>Transforming my creativity and knowledge into a websites has been my passion for over two years.</p>
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
              </section>
              <section className="relative mt-10 " id="skills">
                <ReactSVG src={Dots} className="absolute -top-20 -right-40 hidden md:block" />
                <div className="flex flex-col">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center w-2/3" data-aos="fade-right" data-aos-delay="500">
                      <h2><span className="dark:text-primary text-secondary text-xl md:text-2xl">#</span>skills</h2>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-10 xl:justify-between xl:flex-row">
                    <div className="flex flex-col gap-2 mt-10 sm:flex-wrap md:justify-center md:flex-row xl:mt-0">
                      {
                        skills.map((skill, i) => (
                          <div className="flex flex-col gap-4" key={i} data-aos="zoom-in" data-aos-delay="500">
                            <Card className="border-black rounded-none dark:bg-background dark:border-gray w-52">
                              <CardHeader className="p-2 border-b border-black dark:border-gray text-lg md:text-xl">
                                <CardTitle>{skill.title}</CardTitle>
                              </CardHeader>
                              <CardContent className="p-2 ">
                                <CardDescription className="flex flex-wrap gap-2">
                                  {
                                    skill.skill.map((s, a) => (
                                      <Button variant="link" key={a} className="h-auto p-0 text-sm md:text-base text-black dark:text-gray"><a href={s.link} target="_blank">{s.title}</a></Button>
                                    ))
                                  }
                                </CardDescription>
                              </CardContent>
                            </Card>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative mt-10 mb-40" id="funfact">
                <div className="border absolute border-gray w-32 h-32 top-14 -left-48 hidden md:block"></div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center w-2/3" data-aos="fade-right" data-aos-delay="500">
                      <h2><span className="dark:text-primary text-secondary text-xl md:text-2xl">#</span>my-fun-facts</h2>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-center lg:items-start justify-center lg:justify-start flex-col lg:flex-row">
                  <div className="w-full lg:w-1/2 flex gap-2 flex-wrap mt-10 lg:mt-0" data-aos="fade-right" data-aos-delay="500">
                    {
                      funfact.map((ff, i) => (
                        <div className="border border-gray p-2 text-gray text-sm md:text-base" key={i}>
                          <p >{ff}</p>
                        </div>
                      ))
                    }
                  </div>
                  <div className="w-1/2 relative hidden lg:block h-40" data-aos="fade-left" data-aos-delay="500">
                    <ReactSVG src={Dots} className="absolute top-1/4 left-1/4 text-primary dark:text-secondary" />
                    <ReactSVG src={Dots} className="absolute top-3/4 left-56 text-secondary dark:text-primary" />
                  </div>
                </div>
                <ReactSVG src={Dots} className="absolute bottom-0 -right-36 hidden md:block" />
              </section>
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  )
}

export default About