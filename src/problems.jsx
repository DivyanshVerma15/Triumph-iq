import React from "react";


import Image1 from "./assets/img1.svg";
import Image2 from "./assets/img2.svg";
import Image3 from "./assets/img3.svg";
import Image4 from "./assets/img4.svg";
import Image5 from "./assets/img5.svg";
import Image6 from "./assets/img6.svg";




const Problems =[
    {
        id : 1,
        image : <img src= {Image1} className='w-[56.25px] h-[56.25px]' alt="" /> ,
        header : "Scattered Customer Data",
        description : "CSMs juggle 4-5 tools on average, leading to inefficiencies."

    },

    {
        id : 2,
        image : <img src= {Image2} className='w-[56.25px] h-[56.25px]' alt="" />,
        header : "Misaligned Customer Goals",
        description : "70% of CSMs find it difficult to track customer objectives."

    },

    {
        id : 3,
        image : <img src= {Image3} className='w-[56.25px] h-[56.25px]' alt="" />,
        header : "Engagement Tracking Challenges",
        description : "90% of CSMs under-communicate with customers, causing churn."

    },

    {
        id : 4,
        image : <img src= {Image4} className='w-[56.25px] h-[56.25px]' alt="" />,
        header : "Unpredictable Churn",
        description : " 8 out of 10 churn cases could be prevented with better prediction."

    },

    {
        id : 5,
        image : <img src= {Image5} className='w-[56.25px] h-[56.25px]' alt="" />,
        header : "Missed Growth Opportunities",
        description : "Lack of data visibility causes 50% loss in expansion revenue."

    },

    {
        id : 6,
        image : <img src= {Image6} className='w-[56.25px] h-[56.25px]' alt="" />,
        header : "Hard to Quantify CS",
        description : "90% of companies struggle to measure the value of customer success function"

    }
]


export default Problems;