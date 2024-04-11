import CompleteApp from "@/components/CompleteApp"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SmallProject from "@/components/SmallProject"
import SplashScreen from "@/components/SplashScreen"
import loadingTitle from "@/components/loadingTitle"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { NavProjectItems } from "@/lib/NavItems"
import { useEffect, useLayoutEffect, useState } from "react"
import { Link } from "react-router-dom"


const Project = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  useLayoutEffect(() => {
    loadingTitle("Project")
  })
  return (
    <>
      <SplashScreen loading={loading} />
      {!loading && (
        <div className="dark:bg-background dark:text-white font-fira-code">
          <Navbar NavItems={NavProjectItems} />
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
                    <BreadcrumbSeparator className="text-2xl text-secondary dark:text-primary md:text-4xl">
                      <span>/</span>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage>project</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <p className="mt-5 text-sm dark:text-gray md:text-base">List of my Project</p>
              </div>
              <CompleteApp />
              <SmallProject />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  )
}

export default Project