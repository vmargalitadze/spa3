
import Image from "next/image";
import db from "@/db/gallery.json";
import { gallery } from "@/models/gallery";
import { useState } from "react";
import { useTranslations } from 'next-intl';

import GalleryHelper from "@/lib/galleryhelper";

const Gallery = () => {
  const t = useTranslations('HomePage');
  return (
    <>
     <div id="gallery" className="spa-price">
     <div className=" text-[50px] font1  md:text-5xl mb-2 text-center text-[#a56c6c] font-extrabold">Gallery</div>
    
    <hr className="w-2/4 m-auto mb-16 h-1 my-2 bg-[#e7b6a1] border-0 rounded-lg md:mb-6" />
   
<GalleryHelper />
      
    </div>
    </>
  );
};

export default Gallery;
