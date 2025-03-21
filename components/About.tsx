
"use client";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";const About = () => {

    // "https://res-console.cloudinary.com/dx3nwkh2i/thumbnails/v1/image/upload/v1740858126/MTQ0MTI3LWJzLWhvZTFfbGc1aHVq/drilldown";
  return (
    // <div className="h-[40rem] relative  flex items-center justify-center">
    //   <DirectionAwareHover imageUrl={imageUrl}>
    //     <p className="font-bold text-xl">In the mountains</p>
    //     <p className="font-normal text-sm">$1299 / night</p>
    //   </DirectionAwareHover>
    // </div>
    <Carousel 
    autoPlay
     infiniteLoop 
     axis='horizontal'
     dynamicHeight={false}
     emulateTouch={true}
     showArrows={false}
     showStatus={false}
     showThumbs={false}
     swipeable={false}
     showIndicators	={false}
     	
     useKeyboardArrows={false}

     width="400px"

     >
    <div>
      <img src="/graduate2.jpg" alt="Image 1" />
    </div>
    <div>
      <img src="/graduate1.jpg" alt="Image 2" />
    </div>
    {/* <div>
      <img src="/slide1.jpg" alt="Image 3" />
    </div> */}
    <div>
      <img src="/slide2.jpg" alt="Image 3" />
    </div>
   
    <div>
      <img src="/slide4.jpg" alt="Image 3" />
    </div>
  </Carousel>

  );
}

export default About