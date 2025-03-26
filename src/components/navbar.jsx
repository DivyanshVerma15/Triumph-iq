import React  from 'react'
import { FaArrowRight } from "react-icons/fa6";


function Navbar({scroll1, scroll2}) {
  
  
  
  return (
    <div className='w-full h-[74px] md:pt-[10px] md:pb-[10px] md:pr-[64px] md:pl-[64px] p-[10px]  flex justify-between items-center relative'>
        <div className='w-[160px] h-[36px] text-[30px] mb-3 font-Inter font-medium'>Triumph IQ</div>
        <div className='absolute left-56 '>
            <ul className='flex justify-between item-center gap-10 m-10 text-[18px] '>
                <li onClick={scroll2} className='cursor-pointer'>Home</li>
                <li onClick={scroll1}  className='cursor-pointer'>Contact Us</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar;