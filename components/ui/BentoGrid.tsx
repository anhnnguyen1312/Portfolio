"use client"
import { cn } from "@/utils/cn";
import  {BackgroundGradientAnimation} from "./BackgroundGradientAnimation";
import { GridGlobe } from "./GridGlobe";
import MargicButton from "./MargicButton";
import { useState } from "react";
import dynamic from 'next/dynamic';
// import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "@/data/confetti.json";
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto ",
        className
      )}
      id="about"
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
 
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;

  id?:number;
  img?:string;
  imgClassName?:string;
  spareImg?:string;
  titleClassName?:string
}) => {
  const [copied, setCopied] = useState(false);
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleCopy = () => {
    const text = "anhnguyentl1312@gmail.com";
    // navigator.clipboard.writeText(text);
    if(text){
          navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            console.log("Văn bản đã được sao chép!");
          })
          .catch(err => {
            console.error("Có lỗi khi sao chép: ", err);
          });
        
      };

    
    //setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 overflow-hidden font-playfair relative rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none    justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
     <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white px-4 pointer-events-none text-xl text-center md:text-2xl lg:text-3xl"/>
          </BackgroundGradientAnimation>
          
        )}
<div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-[20px]"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className=" font-extralight md:max-w-32 md:text-md lg:text-lg text-sm text-[#C1C2D3] z-10 font-karla">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={` text-lg lg:text-xl max-w-96 z-10`}
          >
            {title}
          </div>
          
          {id === 2 && <GridGlobe />}
            {/* Tech stack list div */}
            {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute right-[20px] lg:right-[40px]">
              {/* tech stack lists */}
              <div className="flex flex-col gap-2 md:gap-2 lg:gap-6">
                {['React.Js','Next.Js','Typescript'].map((item, i) => (
                  <span
                    key={i}
                    className=" lg:py-[4px] lg:px-[6px] py-[5px] px-[10px] text-xs lg:text-md opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-[20px] lg:px-[10px] py-[12px] px-[13px] h-[26px] w-[77.83px]  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-2 md:gap-2 lg:gap-6">
                <span className="lg:py-[20px] lg:px-3 py-[12px] px-3  rounded-lg text-center bg-[#10132E]"></span>
                {['Python','Express.js','Docker'].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-2 lg:px-3 py-1 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 5 && (
            <>
            <div className="grid grid-cols-2 gap-1  pt-[20px]">
  <div className=" p-[5px] ">
    <h3 className= "font-karla pb-[10px]  text-md lg:text-xl"> 1-Language programing</h3>
<ol  className= "font-karla list-inside " >
  <li className="p-[5px]  text-sm lg:text-lg list-disc pl-1"> HTML & CSS</li>
  <li className="p-[5px] text-sm lg:text-lg list-disc pl-1"> Javascript & Typescript</li>
  <li className="p-[5px] text-sm lg:text-lg list-disc pl-1"> React.JS & Next.JS</li>
  <li className="p-[5px] text-sm lg:text-lg list-disc pl-1">Express.JS & Python</li>
</ol>

  </div>
  <div className=" p-[10px]">
  <h3 className= "font-karla pb-[10px]  text-md lg:text-xl"> 2-CSS FM & Libraries</h3>
  <ol  className= "font-karla list-inside " >
  <li className="p-[5px] text-sm lg:text-lg list-disc pl-1"> SCSS</li>
  <li className="p-[5px] text-sm lg:text-lg list-disc pl-1"> TailwindCss</li>
  <li className="p-[5px] text-sm lg:text-lg list-disc pl-1"> Framer Motion</li>
  <li className="p-[5px] text-sm lg:text-lg list-disc pl-1"> AntD & ReactStrap</li>
</ol>
  </div>

  <div className=" p-[10px]">
  <h3 className= "font-karla pb-[10px]  text-md lg:text-xl"> 4-Tool</h3>
  <ol  className= "font-karla list-inside " >
<li className="p-[5px] text-sm lg:text-lg list-disc pl-1"> Navicat & Xampp</li>
<li className="p-[5px] text-sm lg:text-lg list-disc pl-1">Docker</li>
<li className="p-[5px] text-sm lg:text-lg list-disc pl-1">Git</li>

  <li className="p-[5px] text-sm lg:text-lg list-disc pl-1"> Figma</li>
  <li className="p-[5px] text-sm lg:text-lg list-disc pl-1">Postman</li>

 </ol>
  </div>

  <div className=" p-[10px]">
  <h3 className= "font-karla pb-[10px]  text-md lg:text-xl"> 3-Other Skills</h3>
  <ol  className= "font-karla list-inside " >
<li className="p-[5px] text-sm lg:text-lg list-disc pl-1"> RDBMS(MySQL, postgreSQL)</li>
{/* <li className="p-[5px] text-sm lg:text-lg list-disc pl-1"> APIs(Restful APIs)</li> */}
  <li className="p-[5px] text-sm lg:text-lg list-disc pl-1"> Unit Test(Jest, RTL)</li>
  <li className="p-[5px] text-sm lg:text-lg list-disc pl-1"> UIUX Design (Figma)</li>
  <li className="p-[5px] text-sm lg:text-lg list-disc pl-1"> Responsive Web</li>
  <li className="p-[5px] text-sm lg:text-lg list-disc pl-1"> Machine Learning</li>

 </ol>

  </div>



</div>
            </>
          )}
           {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
               
                <Lottie  options={defaultOptions} height={200} width={400}/>
              </div>

              <MargicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
        {/*  */}
     
    </div>
    </div>
  );
};
