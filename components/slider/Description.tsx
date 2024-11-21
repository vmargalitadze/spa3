import React from "react";
import { images } from "./constants";
import left from "@/public/left.svg";
import right from "@/public/right.svg";

import Image from "next/image";

type Props = {
  activeImage: number; 
  clickNext: () => void; 
  clickPrev: () => void; 
};
const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <>
    
    
    
    <div className="grid place-items-start w-full bg-[#e7dfd9]  relative md:rounded-tr-3xl md:rounded-br-3xl">
     
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[80vh] py-20 md:px-20  text-left"
              : "hidden"
          }`}
        >
         <div className=" text-3xl md:text-5xl font1 text-center text-[#a56c6c] font-extrabold">{elem.title}</div>
         <hr className="w-full m-auto mb-16 h-1 my-2 bg-[#e7b6a1] border-0 rounded-lg md:mb-6" />
            <div className=" font-medium text-base font2  h-60 md:h-40 italic text-gray-600">
              {" "}
              {elem.desc}
            </div>

          
          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="" />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Description;
