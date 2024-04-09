import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaDiscord } from "react-icons/fa"
import { Mail } from "lucide-react"

const Contact = () => {
  return (
    <section className="relative mt-20 mb-40 " id="contact">
      <div className="absolute flex-col hidden gap-4 top-20 -left-28 md:flex">
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
            <h2><span className="dark:text-primary text-secondary text-xl md:text-2xl">#</span>contact</h2>
            <hr className="w-full text-secondary ms-4 dark:text-primary" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-10 lg:flex-row lg:items-start lg:gap-0">
          <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-delay="500">
            <p className="dark:text-gray text-sm md:text-base">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
          </div>
          <div className="flex justify-center w-full lg:w-1/2 mt-10 md:mt-0" data-aos="fade-left" data-aos-delay="500">
            <Card className="bg-white border-black rounded-none w-52 dark:bg-background dark:border-gray">
              <CardHeader>
                <CardTitle className="text-base md:text-lg">
                  Message me here!
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-start p-0 px-8 m-0 text-base md:text-lg">
                <Button variant="link" className="p-0">
                  <a href="https://discordapp.com/users/aldxprtm_" className="flex gap-4">
                    <FaDiscord size={20} /> <span>Discord</span>
                  </a>
                </Button>
                <Button variant="link" className="p-0">
                  <a href="mailto:paldi0013@gmail.com" className="flex gap-4">
                    <Mail className="w-5" /> <span>Email</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact