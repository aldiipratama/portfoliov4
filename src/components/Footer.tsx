import { Button } from "@/components/ui/button"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import TypeIt from "typeit-react"

const Footer = () => {
  const date = new Date()
  return (
    <footer className="p-0 border-t-2 border-b-0 border-black 2xl:border dark:border-gray" data-aos="fade-up">
      <div className="flex flex-col mt-5 md:px-[8rem] px-4">
        <div className="flex gap-4 md:gap-0">
          <div className="flex flex-col w-1/2">
            <div className="flex items-center gap-4">
              <Button variant="link" className="p-0">
                <a href="/" className="text-xl md:text-2xl">aldipratama</a>
              </Button>
              <Button variant="link" className="p-0">
                <a href="https://instagram.com/alx.dyy" className="text-gray text-sm md:text-base">alx.dyy</a>
              </Button>
            </div>
            <p className="mt-5 text-base md:text-lg">Web Developer and Photographer</p>
          </div>
          <div className="flex justify-end w-1/2">
            <div className="flex flex-col">
              <h2 className="text-xl md:text-2xl font-bold">Media</h2>
              <div className="flex gap-4">
                <Button variant="ghost" className="dark:!bg-background p-0">
                  <a href="https://github.com/aldiipratama" target="_blank">
                    <FaGithub size={25} />
                  </a>
                </Button>
                <Button variant="ghost" className="dark:!bg-background p-0">
                  <a href="https://instagram.com/alx.dyy" target="_blank">
                    <FaInstagram size={25} />
                  </a>
                </Button>
                <Button variant="ghost" className="dark:!bg-background p-0">
                  <a href="https://linkedin.com/in/aldi-pratama-a21b61295" target="_blank">
                    <FaLinkedin size={25} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 mb-5 text-center dark:text-gray text-sm md:text-base">&copy; Copyright {date.getFullYear()}. Made with <TypeIt options={{
          loop: true,
        }} getBeforeInit={(instance) => {
          instance.type("❤").pause(1000).delete().type("Reactjs").pause(500).delete().type("Vitejs")
          return instance
        }} /> by <Button variant="link" className="p-0 !py-0 dark:text-gray"><a href="https://instagram.com/alx.dyy">Aldipratama</a></Button></p>
      </div>
    </footer>
  )
}

export default Footer