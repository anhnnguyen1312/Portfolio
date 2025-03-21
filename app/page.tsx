import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import {navItems} from "@/data/index"
export default function Home() {
  // const navItems = [
  //   {
  //     name: "Home",
  //     link: "/",
  //     icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  //   },
  //   {
  //     name: "About",
  //     link: "/about",
  //     icon: <FaUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  //   },
  //   {
  //     name: "Contact",
  //     link: "/contact",
  //     icon: (
  //       <FaMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
  //     ),
  //   },
  // ]; bg-black-100
  // bg-[#0D0F14]// #23262D #020617
  return (
  <main className="relative  font-karla bg-[#020617] flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
     
      <FloatingNav navItems={navItems} />
    <Hero/>
    {/* <About/> */}
    <Grid/>
    <RecentProjects/>
    <Experience/>
    <Footer/>
    </div>
    
  </main>
  );
}

