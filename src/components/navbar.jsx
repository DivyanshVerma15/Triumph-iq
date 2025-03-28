import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Navop from "../assets/navop.svg"
import { useEffect, useState } from "react";

function Navbar({scroll1, scroll2}) {

  var size = window.screen.width;



  
  
  return (
    <div className='w-[393px] md:w-full h-[34px] md:h-[74px] md:pt-[10px] md:pb-[10px] md:pr-[64px] md:pl-[64px] pt-[5px] pb-[5px] pr-[20px] pl-[20px]  flex justify-between items-center relative'>
        <div className='w-[96px] md:w-[160px] h-[22px] md:h-[36px] text-[18px] md:text-[30px] md:mb-3 font-Inter font-medium'>Triumph IQ</div>
        
        {size > 768 ?<div className='absolute left-56 '>
            <ul className='flex justify-between item-center gap-10 font-medium m-10 text-[18px] '>
                <li onClick={scroll2} className='cursor-pointer'>Home</li>
                <li onClick={scroll1}  className='cursor-pointer'>Contact Us</li>
            </ul>
        </div> :
        <div className='w-[24px] h-[24px] mt-[8px] flex items-center justify-end'>
        <img src={Navop} alt="" />
      </div>}
        
        
        
        
        
    </div>
  )
}

export default Navbar;