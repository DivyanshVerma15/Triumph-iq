import React from 'react'


function Sol({image , id, heading , description}) {
  return (
    <div className='flex flex-col w-[410px] h-[227.25px] items-center   p-4 gap-[12px] rounded-3xl border-[1px] border-gray-200 bg-white shadow-lg'>
        <div  > 
            {image}
        </div>
        
        <div className='flex flex-col items-center gap-4'>
            <div className='w-full h-[28px]'>
                <h5 className='text-[24px] font-Roboto font-normal text-center text-gray-1000 '>{heading}</h5>
            </div>
            
            <div className='w-[328px] h-[48px]'>
                <p className='text-center font-Roboto text-[16px] text-slate-600'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Sol