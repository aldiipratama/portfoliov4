import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import SmallProjectItems from "@/lib/SmallProjectItems"
import { ReactSVG } from "react-svg"
import Dots from '@/assets/Dots.svg'

const SmallProject = () => {
  return (
    <section className="relative mt-20 mb-20" id="smallproject">
      <div className="absolute flex-col hidden gap-4 top-80 -left-28 md:flex">
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
      <div className="flex flex-col">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center w-2/3" data-aos="fade-right" data-aos-delay="500">
            <h2 className="text-2xl"><span className="dark:text-primary text-secondary text-xl md:text-2xl">#</span>small-project</h2>
          </div>
        </div>
        <div className={`flex flex-wrap justify-center gap-10 mt-10 ${(SmallProjectItems.length < 3 || SmallProjectItems.length > 3) ? "lg:justify-around" : "lg:justify-stretch"}`}>
          {
            SmallProjectItems.map((item, i) => (
              <Card key={i} className="border border-black rounded-none w-[350px] dark:text-gray dark:bg-background dark:border-white" data-aos="zoom-in" data-aos-delay="500">
                <CardHeader className="p-2 border-b border-black dark:border-gray flex flex-row items-center space-y-0 overflow-auto scrollbar scrollbar-thumb-background dark:scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full scrollbar-h-1">
                  {
                    item.tech.map((t, i) => (
                      <Button variant="link" key={i} className="text-base md:text-lg">
                        <a href={t.link}>{t.title}</a>
                      </Button>
                    ))
                  }
                </CardHeader>
                <CardContent className="p-0">
                  <CardTitle className="p-4 font-bold dark:text-white text-xl md:text-2xl">{item.title}</CardTitle>
                  <CardDescription className="px-4">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <span className="truncate line-clamp-3 text-wrap text-sm md:text-base">{item.description}</span>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <span>{item.description}</span>
                      </HoverCardContent>
                    </HoverCard>
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-4">
                  {
                    !item.link ? (
                      <Button variant="outline" className="rounded-none dark:hover:bg-slate-600/10" disabled>
                        Preview &lt;~&gt;
                      </Button>
                    ) : (
                      <Button variant="outline" className="rounded-none dark:hover:bg-slate-600/10">
                        <a href={item.link} target="_blank">Preview &lt;~&gt;</a>
                      </Button>
                    )
                  }
                </CardFooter>
              </Card>
            ))
          }
        </div>
      </div>
      <ReactSVG src={Dots} className='absolute top-20 hidden w-[150px] h-[150px] -right-40 md:block' />
    </section>
  )
}

export default SmallProject