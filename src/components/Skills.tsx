import { Button } from "@/components/ui/button"
import Dots from '@/assets/Dots.svg'
import { ReactSVG } from "react-svg"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import skills from '@/lib/skills'

const Skills = () => {
  return (
    <section className="relative mt-20 " id="skills">
      <div className="flex flex-col">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center w-2/3" data-aos="fade-right" data-aos-delay="500" data-aos-offset="200">
            <h2><span className="text-xl dark:text-primary text-secondary md:text-2xl">#</span>skills</h2>
            <hr className="w-full text-secondary ms-4 dark:text-primary" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 xl:justify-between xl:flex-row">
          <div className="h-[300px]" data-aos="fade-right" data-aos-delay="500">
            <div className="relative w-[300px] h-[250px]">
              <ReactSVG src={Dots} className="absolute left-0 scale-50 top-5" />
              <span className="w-[86px] h-[86px] absolute border border-black dark:border-gray top-0 right-2"></span>
              <span className="w-[112px] h-[112px] absolute border border-black dark:border-gray bottom-0 left-8"></span>
              <ReactSVG src={Dots} className="absolute scale-50 bottom-14 right-12" />
              <span className="w-[52px] h-[52px] absolute border border-black dark:border-gray bottom-10 right-2"></span>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-10 sm:flex-wrap max-md:justify-center md:flex-row-reverse xl:mt-0" data-aos="fade-left" data-aos-delay="500">
            <div className="flex flex-col gap-4">
              <Card className="border-black rounded-none dark:bg-background dark:border-gray w-60">
                <CardHeader className="p-2 text-lg border-b border-black dark:border-gray md:text-xl">
                  <CardTitle>{skills[0].title}</CardTitle>
                </CardHeader>
                <CardContent className="p-2 ">
                  <CardDescription className="flex flex-wrap gap-2">
                    {
                      skills[0].skill.map(s => (
                        <Button variant="link" key={s.title} className="h-auto p-0 text-sm text-black dark:text-gray md:text-base"><a href={s.link} target="_blank">{s.title}</a></Button>
                      ))
                    }
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-black rounded-none dark:bg-background dark:border-gray w-60" key={skills[1].title}>
                <CardHeader className="p-2 border-b border-black dark:border-gray">
                  <CardTitle>{skills[1].title}</CardTitle>
                </CardHeader>
                <CardContent className="p-2 ">
                  <CardDescription className="flex flex-wrap gap-2">
                    {
                      skills[1].skill.map(s => (
                        <Button variant="link" key={s.title} className="h-auto p-0 text-black dark:text-gray"><a href={s.link} target="_blank">{s.title}</a></Button>
                      ))
                    }
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col gap-4">
              <Card className="border-black rounded-none dark:bg-background dark:border-gray w-60" key={skills[2].title}>
                <CardHeader className="p-2 border-b border-black dark:border-gray">
                  <CardTitle>{skills[2].title}</CardTitle>
                </CardHeader>
                <CardContent className="p-2 ">
                  <CardDescription className="flex flex-wrap gap-2">
                    {
                      skills[2].skill.map(s => (
                        <Button variant="link" key={s.title} className="h-auto p-0 text-black dark:text-gray"><a href={s.link} target="_blank">{s.title}</a></Button>
                      ))
                    }
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-black rounded-none dark:bg-background dark:border-gray w-60" key={skills[3].title}>
                <CardHeader className="p-2 border-b border-black dark:border-gray">
                  <CardTitle>{skills[3].title}</CardTitle>
                </CardHeader>
                <CardContent className="p-2 ">
                  <CardDescription className="flex flex-wrap gap-2">
                    {
                      skills[3].skill.map(s => (
                        <Button variant="link" key={s.title} className="h-auto p-0 text-black dark:text-gray"><a href={s.link} target="_blank">{s.title}</a></Button>
                      ))
                    }
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col gap-4">
              <Card className="border-black rounded-none dark:bg-background dark:border-gray w-60" key={skills[4].title}>
                <CardHeader className="p-2 border-b border-black dark:border-gray">
                  <CardTitle>{skills[4].title}</CardTitle>
                </CardHeader>
                <CardContent className="p-2 ">
                  <CardDescription className="flex flex-wrap gap-2">
                    {
                      skills[4].skill.map(s => (
                        <Button variant="link" key={s.title} className="h-auto p-0 text-black dark:text-gray"><a href={s.link} target="_blank">{s.title}</a></Button>
                      ))
                    }
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills