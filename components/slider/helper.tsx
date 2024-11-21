"use client";

import { images } from "@/components/slider/constants";
import Description from "@/components/slider/Description";
import Image from "next/image";
import { useEffect, useState } from "react";



const ClientSlider: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const clickPrev = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      clickNext();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
   
     

    <main className="grid  place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl  rounded-2xl">
      
    <div className="w-full flex justify-center items-center gap-4 md:rounded-2xl  ">
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${idx === activeImage ? "block" : "hidden"} w-full h-[80vh] `}
        >
          <Image
            src={elem.src}
            alt={'slide'}
            width={800} 
            height={800}
            className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
            priority={idx === activeImage}
          />
        </div>
      ))}
    </div>
    <Description
      activeImage={activeImage}
      clickNext={clickNext}
      clickPrev={clickPrev}
    />
  </main>
  
  );
};

export default ClientSlider;
