import React from 'react'
import orsuli from '@/public/img/serv/2.jpg'
import Image from 'next/image'
import rame from '@/public/img/serv/1.jpg'
function Items() {
  return (
    <div className="justify-center  px-4 md:px-0 gap-10 items-center flex flex-wrap">
    <div className="flex flex-col md:flex-row gap-2">
      <ul className="m-0 p-0 list-none">
        <li className="flex flex-col sm:flex-row  mb-3">
          <div className="w-full  md:w-[200px] min-w-[200px] mb-3 sm:mb-0">
            <Image src={rame} alt="Pregnancy Massage" />
          </div>
          <div className="pl-3">
            <h1 className="text-[20px] font-serif font-bold flex justify-between mb-2 text-[#0f1b48]">
              <p className="text-[20px] font1 text-[#232323]">Massages for couple</p>
              <span className="text-[20px] font-serif font-bold flex mb-2 text-[#0f1b48]">$15.00</span>
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, fuga!</p>
          </div>
        </li>
        <li className="flex flex-col sm:flex-row  mb-3">
          <div className="w-full  md:w-[200px] min-w-[200px] mb-3 sm:mb-0">
            <Image src={orsuli} alt="Pregnancy Massage" />
          </div>
          <div className="pl-3">
            <h1 className="text-[20px] font-serif font-bold flex justify-between mb-2 text-[#0f1b48]">
              <p className="text-[20px] font1 text-[#232323]">Pregnancy Massage</p>
              <span className="text-[20px] font-serif font-bold flex mb-2 text-[#0f1b48]">$15.00</span>
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, fuga!</p>
          </div>
        </li>
        <li className="flex flex-col sm:flex-row  mb-3">
          <div className="w-full  md:w-[200px] min-w-[200px] mb-3 sm:mb-0">
            <Image src={rame} alt="Pregnancy Massage" />
          </div>
          <div className="pl-3">
            <h1 className="text-[20px] font-serif font-bold flex justify-between mb-2 text-[#0f1b48]">
              <p className="text-[20px] font1 text-[#232323]">Pregnancy Massage</p>
              <span className="text-[20px] font-serif font-bold flex mb-2 text-[#0f1b48]">$15.00</span>
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, fuga!</p>
          </div>
        </li>
      </ul>
    </div>
    <div className="flex flex-col md:flex-row gap-2">
      <ul className="m-0 p-0 list-none">
        <li className="flex flex-col sm:flex-row  mb-3">
          <div className="w-full  md:w-[200px] min-w-[200px] mb-3 sm:mb-0">
            <Image src={rame} className='' alt="Pregnancy Massage" />
          </div>
          <div className="pl-3">
            <h1 className="text-[20px] font-serif font-bold flex justify-between mb-2 text-[#0f1b48]">
              <p className="text-[20px] font1 text-[#232323]">Massages for couple</p>
              <span className="text-[20px] font-serif font-bold flex mb-2 text-[#0f1b48]">$15.00</span>
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, fuga!</p>
          </div>
        </li>
        <li className="flex flex-col sm:flex-row  mb-3">
          <div className="w-full  md:w-[200px] min-w-[200px] mb-3 sm:mb-0">
            <Image src={orsuli} alt="Pregnancy Massage" />
          </div>
          <div className="pl-3">
            <h1 className="text-[20px] font-serif font-bold flex justify-between mb-2 text-[#0f1b48]">
              <p className="text-[20px] font1 text-[#232323]">Pregnancy Massage</p>
              <span className="text-[20px] font-serif font-bold flex mb-2 text-[#0f1b48]">$15.00</span>
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, fuga!</p>
          </div>
        </li>
        <li className="flex flex-col sm:flex-row  mb-3">
          <div className="w-full  md:w-[200px] min-w-[200px] mb-3 sm:mb-0">
            <Image src={rame} alt="Pregnancy Massage" />
          </div>
          <div className="pl-3">
            <h1 className="text-[20px] font-serif font-bold flex justify-between mb-2 text-[#0f1b48]">
              <p className="text-[20px] font1 text-[#232323]">Pregnancy Massage</p>
              <span className="text-[20px] font-serif font-bold flex mb-2 text-[#0f1b48]">$15.00</span>
            </h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, fuga!</p>
          </div>
        </li>
      </ul>
    </div>
  
  </div>
  )
}

export default Items