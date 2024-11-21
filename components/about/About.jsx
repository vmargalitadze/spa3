// components/About.tsx
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import massage from '@/public/img/454508620_122093737544473219_5205370538850432311_n.jpg';

const About = () => {
  const t = useTranslations('HomePage'); // Adjust namespace accordingly
  
  return (
    <section id="about" className="py-20 gap-4">
      <div className="group gap-4 mx-auto px-4">
        <div className="flex  items-center gap-4 flex-col lg:flex-row justify-center">
          <aside className="w-full h-full lg:w-4/12 relative z-0 transition-all delay-200 ease-linear lg:group-hover:-mr-56 rounded ">
            <Image src={massage} alt="Traveler" width={550} height={850} priority={true} className="w-full h-auto object-cover rounded" />
          </aside>
          <article className="p-4 lg:w-4/12 bg-white shadow-lg relative lg:-mr-20">
            <div className="md:pr-12">
              <h3 className="text-[50px] font1 text-[#a56c6c] font-semibold">ჰარმონერია </h3>
              <hr className="w-2/4 h-1 my-2 bg-[#e7b6a1] border-0 rounded-lg md:mb-6" />
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 whitespace-pre-line">
                {t('herotext')}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
