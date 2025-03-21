import { socialMedia } from "@/data";
import Link from "next/link";
import { Lamp } from "./ui/Lamp";
const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
     {/* <LampContainer>
     <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
     </LampContainer> */}
     <Lamp/>
      {/* <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-purple">
        
          Crafted with Code, Designed with Passion
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and Let&apos;s build something amazing together
        </p>
        <a href="mailto:anhnguyentl1312@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div> */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
      <p className="md:text-base text-sm font-karla">
         Anh Nguyen
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
            key={info.id}
            
            href={info.href}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
               <img src={info.img} alt="icons" width={20} height={20} />
            </Link>
            // <div
             
            //   className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            // >
             
            // </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
