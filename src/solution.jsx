import React from "react"
import { IoTrendingDownOutline } from "react-icons/io5";
import { IoIosTrendingUp } from "react-icons/io";
import { LuScanEye } from "react-icons/lu";
import Image7 from "./assets/img7.svg"
import Image8 from "./assets/img8.svg"
import Image9 from "./assets/img9.svg"





const Solution = [

    {
        id : 1,
        image : <img src= {Image7} alt="" className='md:w-[61.88px] w-[30xp] h-[30px] md:h-[61.88px]' /> ,
        header : "Plug and Play" , 
        description : "Get your CSM dashboard instantly "
    },

    {
        id : 2,
        image : <img src= {Image8} alt="" className='md:w-[61.88px] w-[30xp] h-[30px] md:h-[61.88px]' /> ,
        header : "Transparency" , 
        description : "Get and give visibility of your customers 🔦"
    },

    {
        id : 3,
        image : <img src= {Image9} className='md:w-[61.88px] w-[30xp] h-[30px] md:h-[61.88px]' alt="" /> ,
        header : "Get Right Actionable" , 
        description : "Insights to prevent churn and do upsell/cross sell 💲"
    }
]

export default Solution;