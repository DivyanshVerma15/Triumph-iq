import React from 'react'


function Pbs({image , id, heading , description}) {
  return (
    <div className='flex flex-col w-[410px] h-[222.25px] items-center   p-4 gap-4 rounded-3xl border-2 border-gray-200 '>
        <div  > 
            {image}
        </div>
        
        <div className='flex flex-col items-center gap-4'>
            <div className='w-full h-[28px]'>
                <h5 className='text-[24px] font-Roboto font-semibold text-center text-gray-900 text-opacity-80 '>{heading}</h5>
            </div>
            
            <div className='w-[328px] h-[48px]'>
                <p className='text-center font-Roboto text-[16px] text-slate-600'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Pbs