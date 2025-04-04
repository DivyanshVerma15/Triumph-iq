import React from 'react'


function Sol({image , id, heading , description}) {
  return (
    <div className='flex flex-col w-[325.93px] md:w-[410px] h-[137.68px] md:h-[227.25px] items-center   p-4 gap-[12px] rounded-3xl border-[1px] border-gray-200 bg-white shadow-lg'>
        <div  > 
            {image}
        </div>
        
        <div className='flex flex-col items-center gap-[8px] md:gap-4'>
            <div className='w-full h-[21px] md:h-[28px]'>
                <h5 className='text-[18px] md:text-[24px] font-Roboto font-semibold text-center text-[rgba(16,16,16,0.8)] '>{heading}</h5>
            </div>
            
            <div className='w-[328px] h-[32px] md:h-[48px]'>
                <p className='text-center font-Roboto text-[13px] md:text-[16px] text-[rgba(67,67,67,0.8)] font-normal
'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Sol