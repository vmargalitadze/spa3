
import { useTranslations } from "next-intl";

import ClientSlider from "@/components/slider/helper";



 function Slider() {
  
  const  t  =  useTranslations('HomePage');
  return (
    <div id="team" className="mt-[120px] px-4 md:p-0 mb-[120px]">
 <div className="text-center">
        <h1 className="text-[#0f1b48] mb-4 leading-[80px] font1 text-[50px] md:text-[70px] font-[600px]"> {t('nav4')}</h1>
        <p className="text-[20px] font2 mb-16 text-[#0f1b48] font-semibold leading-tight">
        {t('team-info')}
        </p>
      </div>
              <ClientSlider  />
  

    </div>
  );
};



export default Slider;
