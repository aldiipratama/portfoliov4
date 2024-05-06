import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Link } from 'react-scroll'
import { Link as Link2 } from 'react-router-dom'
import HamburgerMenu from '@/assets/hamburger.svg'
import { useState } from "react";
import { X } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ReactSVG } from "react-svg";
import { Navs } from "@/lib/NavItems";


const Navbar = ({ NavItems }: { NavItems: Navs[] }) => {
  const [navOpen, setNavOpen] = useState(false)
  const [navBg, setNavBg] = useState(false)
  const changeBg = () => {
    window.scrollY >= 60 ? setNavBg(true) : setNavBg(false)
  }

  window.addEventListener("scroll", changeBg)

  return (
    <>
      <div className="absolute flex-col items-center justify-center hidden w-20 gap-2 md:flex " data-aos="fade-down" data-aos-delay="500" data-aos-once="true" data-aos-easing="ease-in">
        <div className="w-[.01rem] h-28 bg-black dark:bg-white" />
        <div className="flex flex-col dark:text-white">
          <Button variant="ghost" size="icon" className="dark:!bg-background">
            <a href="https://github.com/aldiipratama" target="_blank">
              <FaGithub size={20} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="dark:!bg-background">
            <a href="https://instagram.com/alx.dyy" target="_blank">
              <FaInstagram size={20} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="dark:!bg-background">
            <a href="https://linkedin.com/in/aldi-pratama-a21b61295" target="_blank">
              <FaLinkedin size={20} />
            </a>
          </Button>
        </div>
      </div>
      <nav className={`px-5 md:container 2xl:border-r 2xl:border-l sm:px-[8rem] sticky top-0 z-[999] transition-all ${navBg && "bg-slate-600/10 dark:bg-white/10 backdrop-blur-md"}`}>
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <Button variant="link" className="!p-0">
              <Link2 to="/">AldiPratama</Link2>
            </Button>
          </div>
          <div className="flex ms-auto lg:hidden">
            <ModeToggle />
            <Button variant="ghost" onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? <X className={`transition-all duration-500 ${navOpen ? "rotate-0 scale-100" : "rotate-90 scale-0"}`} /> :
                <ReactSVG src={HamburgerMenu} className={`transition-all duration-500 text-black dark:text-white ${!navOpen ? "rotate-0 scale-100" : "rotate-90 scale-0"}`} />
              }
            </Button>
          </div>
          <div className={`lg:flex ${navOpen ? "block" : "hidden"} w-full text-4xl lg:w-auto items-center`}>
            <ul className="flex flex-col lg:items-center lg:flex-row">
              {
                NavItems.map((item, i) => {
                  return (
                    <li key={i} className="nav-item">
                      <Button asChild variant="link" className="justify-start w-full dark:hover:bg-slate-600/10 hover:bg-slate-100" onClick={()=>setNavOpen(false)}>
                        {
                          item.link === "/" ? (
                            <Link2 to="/"><span className="dark:text-primary text-secondary">#</span>{item.title}</Link2>
                          ) : (
                            <Link to={item.link} spy smooth activeClass="active" offset={-60}><span className="dark:text-primary text-secondary">#</span>{item.title}</Link>
                          )
                        }
                      </Button>
                    </li>
                  )
                })
              }
            </ul>
            <div className="hidden lg:block">
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
};

export default Navbar;
