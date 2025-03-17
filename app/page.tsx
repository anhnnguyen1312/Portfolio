import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FaHome } from "react-icons/fa";
import { FaMessage, FaUser } from "react-icons/fa6";

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
  // ];
  return (
  <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
     
      <FloatingNav navItems={navItems} />
    <Hero/>
    <Grid/>
    <RecentProjects/>
    <Experience/>
    <Footer/>
    </div>
    
  </main>
  );
}

