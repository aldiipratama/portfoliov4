import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import ProjectItems from "@/lib/ProjectItems"
import { Link } from "react-router-dom"

const Projects = () => {
  return (
    <section className="relative mt-20 " id="projects">
      <div className="absolute flex-col hidden gap-4 top-10 -left-28 md:flex">
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
          <div className="flex items-center w-2/3" data-aos="fade-right" data-aos-delay="500" data-aos-offset="200">
            <h2><span className="text-xl dark:text-primary text-secondary md:text-2xl">#</span>projects</h2>
            <hr className="w-full text-secondary ms-4 dark:text-primary" />
          </div>
          <Button variant="link" data-aos="fade-left" data-aos-delay="500" data-aos-offset="200">
            <Link to="/project" className="text-base md:text-lg">View All ~~&gt;</Link>
          </Button>
        </div>
        <div className={`flex flex-wrap justify-center gap-10 mt-10 ${(ProjectItems.length < 3 || ProjectItems.length > 3) ? "lg:justify-around" : "lg:justify-stretch"}`}>
          {
            ProjectItems.slice(0, 3).map((item, i) => (
              <Card key={i} className="border border-black rounded-none w-[350px] dark:text-gray dark:bg-background dark:border-white" data-aos="zoom-in" data-aos-delay="500">
                <CardHeader className="p-0">
                  <img src={item.image} alt={item.title} className="w-[350px] h-[200px] object-fill" />
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex gap-2 p-2 overflow-x-auto border-t-2 border-b-2 scrollbar scrollbar-thumb-background dark:scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full scrollbar-h-1">
                    {
                      item.tech.map((tech, i) => (
                        <Button variant="link" className="text-sm md:text-base" key={i}><a href={tech.link} >{tech.title}</a></Button>
                      ))
                    }
                  </div>
                  <CardTitle className="p-4 text-lg md:text-xl">{item.title}</CardTitle>
                  <CardDescription className="px-4">
                    <HoverCard>
                      <HoverCardTrigger asChild className="text-sm md:text-base">
                        <span className="truncate line-clamp-3 text-wrap">{item.desc}</span>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <span>{item.desc}</span>
                      </HoverCardContent>
                    </HoverCard>
                  </CardDescription>
                </CardContent>
                <CardFooter className="justify-end mt-4">
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
      <div className='absolute top-52 hidden w-[150px] h-[150px] border border-black dark:border-white -right-56 md:block'></div>
    </section>
  )
}

export default Projects