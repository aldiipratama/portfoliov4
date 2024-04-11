import Navbar from "@/components/Navbar";
import MainContent from "@/components/MainContent";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import NavItems from "@/lib/NavItems";
import AOS from 'aos'
import 'aos/dist/aos.css'
import loadingTitle from "./components/loadingTitle";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    loadingTitle("Home")

    setTimeout(() => {
      setLoading(false);
    }, 1500);

    AOS.init()
  });
  return (
    <>
      <SplashScreen loading={loading} />
      {!loading && (
        <div className="dark:bg-background font-fira-code dark:text-white">
          <Navbar NavItems={NavItems} />
          <MainContent />
        </div>
      )}
    </>
  )
}

export default App;
