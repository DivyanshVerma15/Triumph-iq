import React, {useRef, useState} from 'react'
import Navbar  from '../components/navbar';
import { IoMdMail } from "react-icons/io";
import Pbs from '../components/Pbs';
import Problems from '../problems';
import Sol from '../components/Sol';
import Solution from '../solution';
import image1 from "../assets/Graph.png"
import frameimage from "../assets/frame.png"
import gradient from "../assets/Vector 15.svg"
import Collage0 from "../assets/collage0.png"
import Collage1 from "../assets/collage1.png"
import Collage2 from "../assets/collage2.png"
import Collage3 from "../assets/collage3.png"
import bgImg from "../assets/bgImg.png"


function Home() {

  const contactRef = useRef(null);
  const homeref = useRef(null);

  
  

  function scroll() {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function scroll2() {
    homeref.current?.scrollIntoView({behavior : "smooth"});
  }



  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); 

    let url =
      "https://script.google.com/macros/s/AKfycbwKZNM-LkrhBD-S4m1R38AiO-DEvhmvEOjDln8UE4PHzzragphdSPZk_E_4QHIbmpH2/exec";

    let formBody = `email=${encodeURIComponent(email)}`; 

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert("Submitted successfully!");
        setEmail("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }



  return (
    <div>
          
          <div className='overflow-hidden  w-full   min-h-[960px] relative' style={{background:" linear-gradient(180deg, #F9F7FF 0%, #EEE8FF 100%)"}}>

             
          
          <div className='absolute right-0'>
            <img src={gradient} alt="" />
          </div>
          
          <div>
              <Navbar scroll1 = {scroll} scroll2 = {scroll2}/>
          </div>

          <div  ref = {homeref} className=' w-full h-[780px] mt-16 flex flex-col gap-[30px] items-center '>

            
            
            <div className='flex flex-col items-center' >
              
              <div className='w-[137px] h-[16px] '><span className='font-Roboto font-medium text-[12px] text-center '>Built by CSM’s, for CSM’s</span></div>

              <div className="flex ">

                <div className="relative inline-block">
                  <img src={bgImg} className="w-[270.11px] h-[99.4px]" alt="background" />
                  <span className="absolute inset-0 text-center font-Roboto font-semibold text-[65px]">
                    Simplify
                  </span>
                </div>
                
                  <div className="text-center font-Roboto font-semibold text-[65px] pl-3 ]">Your Customer Success</div>
                  </div>
                  <h4 className='text-center font-Roboto font-semibold text-[65px] mt-[-10px] '>And Reduce Churn</h4> 
                  </div>
            
            <div className='md:pl-96 md:pr-96   '> <p className='text-[16px] font-Roboto  italic text-center text-gray-900'>“After years of managing customer relationships through disconnected tools and spreadsheets, I knew there had to be a better way. That's why we are building Triumph IQ” – Founder, Triumph IQ</p></div>

          
            <div  className='flex justify-center items-center mt-4 gap-2 '>
            
            <form onSubmit={handleSubmit} className="flex items-center gap-2  pl-4">
              
              <div className='border-[1px] border-purple-100 rounded-xl flex items-center gap-1 pl-4 bg-white'>
                <IoMdMail className="text-[#6938ef] w-[23px] h-[23px]" />
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" text-black w-[368px] h-[56px] font-Roboto text-[16px] font-medium rounded-xl outline-none bg-transparent  focus:ring-0 focus:outline-none autofill:bg-transparent placeholder:font-Roboto placeholder:text-[14px] placeholder:font-medium placeholder:text-gray-700 placeholder:text-opacity-80  "
                  type="email"
                  placeholder="Enter your Email"
                  required
                />
                </div>
                
              <button
                type="submit"
                className="pl-3 pr-3 bg-[#6938ef] w-full h-[56px] font-Roboto text-[16px] text-white font-medium rounded-xl active:scale-95 transition-transform border-[1.5px]-black"
              >
                <span className='font-normal' >Request Early Access</span>
              </button>
              
            </form>
            
            
              
            </div>

            <div className='w-[1120px] min-h-[419px]  flex items-end absolute bottom-0 '>
              <img className='w-full h-auto max-h-full object-contain ' src={Collage0} alt="" />
            </div>

          </div>
          
        </div>

          
            <div className='text-center w-full h-[85px] mt-5'>
              <h3 className='text-[45px] font-Roboto font-bold'>Customer Success Is Tough!</h3>
            </div>
            
            <div className='  flex flex-wrap content-center justify-center gap-8 w-full mt-8  md:mt-4 xl:mt-10  '>
              {Problems.map((items) => {
                return (
                  <Pbs image = {items.image} id = {items.id} heading = {items.header} description = {items.description}/>  
                )
              })}
            </div>  
              
              
            
        
          <div style={{background:'rgb(245,242,255)'}} className='h-[419px] p-[0.5em] mt-24'  >    
            
            <div className='text-center w-full h-[85px] mt-[25px]  '>
              <h3 className='text-[45px] font-Roboto font-bold text-[rgba(16,16,16,1)]'>That’s why we are building Triumph IQ</h3>
            </div>
          
          
            <div className='flex flex-wrap content-center justify-center gap-[25px] w-[full] h-[227.88px] mt-[25px] overflow-hidden '>
                {Solution.map((items) => {
                  return (
                    <Sol  image = {items.image} id = {items.id} heading = {items.header} description = {items.description}/>
                  )
                })}
            </div>

          </div>
        

        <div className=' h-[850px] w-full mt-14 flex flex-col items-center'>
              <div className='pt-4 w-full h-[65px]'>
                <h3 className='text-[45px] font-Roboto font-bold text-center text-[rgba(16,16,16,1)]'>Features That Transform Your Customer Success</h3>
              </div>
              
              <div className='flex flex-row justify-center items-center gap-[40px] pt-[40px] pr-[30px] w-full mt-16'>
                <div  className = 'w-[684px] h-[570px] rounded-2xl'>
                  <img src={Collage1} className="w-full h-full" alt="" />
                </div>
                
                <div className=' w-[548px] h-[570px] rounded-2xl  flex flex-col gap-[30px]  '>
                  
                  <div className=' shadow-xl w-full h-[270px] flex flex-col  gap-[20px] p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[20px] w-full'>
                      <h3 className='w-[488px] h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[30px]'>Unified Data Management</h3>

                      <p className='font-Roboto font-normal w-[488px] h-[46px] text-[14px] text-[rgba(67,67,67,1)]'>Still juggling customer data across multiple platforms? You’re not alone—70% of companies do the same. But now, there’s a better way.</p>
                    </div>
                    
                    <div>
                      <ul className=' flex flex-col gap-2 ' >
                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'> <span className='mr-[10px]'>✔️</span>Import and update customer data effortlessly</li>
                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Integrate with your existing data source</li>
                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Maintain real-time data accuracy</li>
                      </ul>
                    </div>

                  </div>

                  <div className='shadow-xl w-[548px] h-[270px] flex flex-col  gap-[20px] p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[20px]'>
                      <h3 className=' w-[488px] h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[30px]'>Customizable, Yet Simple</h3>

                      <p className='font-Roboto font-normal w-[488px] h-[46px] text-[14px] text-[rgba(67,67,67,1)]'>Unlike legacy tools that take 10-12 weeks to implement, we get you up and running fast.</p>
                    </div>
                    
                    <div>
                      <ul className=' flex flex-col gap-2 ' >
                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'> <span className='mr-[10px]'>✔️</span>Customize Fields, Dashboards and Health Score easily
                        </li>
                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'> <span className='mr-[10px]'>✔️</span>Adapt the platform to fit your organization’s unique needs</li>


                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'> <span className='mr-[10px]'>✔️</span>No technical expertise required
                        </li>
                      </ul>
                    </div>

                  </div>
                  
                  
                </div>
              </div>
        </div>

        


         <div className=' h-[850px] w-full mt-10 '>
              
              <div className='flex flex-row justify-center items-center gap-[40px] pt-[40px] pl-[40px]  w-full'>
               
                
                <div className=' w-[548px] h-[570px] rounded-2xl  flex flex-col gap-[30px]  '>
                  
                <div className='shadow-xl w-[548px] h-[270px] flex flex-col gap-[20px] p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                      <div className='flex flex-col gap-[20px]'>
                        <h3 className='w-[488px] h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[30px]'>Manage customer communication</h3>

                        <p className='font-Roboto font-normal w-[488px] h-[46px] text-[14px] text-[rgba(67,67,67,1)]'>When should you reach out, or when was your last conversation? Still a question? Let Us Guide Your Customer Engagement and deliver maximum value.</p>
                      </div>
                      
                      <div>
                        <ul className=' mt-4 flex flex-col gap-2' >
                          <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Automatically capture customer communications</li>
                          
                          <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Create engagement formulas to get the right alerts</li>
                          
                          <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Integrate easily with your communication platforms</li>
                          
                        </ul>
                      </div>

                    </div>

                    <div className=' shadow-xl w-[548px] h-[270px] flex flex-col  gap-[20px] p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                      <div className='flex flex-col gap-[20px]'>
                        <h3 className='w-[488px] h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[30px]'>Predictive Churn Score</h3>

                        <p className='font-Roboto font-normal w-[488px] h-[46px] text-[14px] text-[rgba(67,67,67,1)]'>70% of CSMs find it difficult to assess customer health - leading to unexpected churn.</p>
                      </div>
                      
                      <div>
                        <ul className=' flex flex-col gap-2 ' >
                          <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Track feature adoption, product usage for better visibility</li>
                          <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Setup custom risk formula - as per your needs</li>
                          <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Get actionable insights for at-risk accounts</li>
                          
                        </ul>
                      </div>

                    </div>
                  
                  
                </div>
                <div  className = 'w-[684px] h-[570px] rounded-2xl'>
                  <img src={Collage2} className="w-full h-full" alt="" />
                </div>
              </div>
        </div> 

        <div className=' h-[850px] w-full mt-[-110px] flex flex-col items-center '>
              
              
              <div className='flex items-center justify-center gap-[40px] pt-[40px] pr-[30px]  w-full'>
                <div className='w-[684px] h-[693px] rounded-2xl'>
                  <img src={Collage3} className="w-full h-full" alt="" />
                </div>
                
                <div className=' w-[548px] h-[693px] rounded-2xl   flex flex-col gap-[30px]  '>
                  
                  <div className='shadow-xl w-[548px] h-[211px] flex flex-col  gap-[3px] p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[15px] '>
                      <h3 className='w-[488px] h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[30px]'>Deal Management</h3>

                      
                    </div>
                    
                    <div className='mt-4'>
                      <ul className=' flex flex-col gap-2 ' >
                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Identify the right opportunity with a predictive upsell score</li>
                        
                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Create and Manage upsell and cross-sell opportunities
                        </li>
                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Monitor pipeline progress with intuitive visualizations
                        </li>
                      </ul>
                    </div>

                  </div>

                  <div className=' shadow-xl w-[548px] h-[211px] flex flex-col  gap-[3px] p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[15px] '>
                      <h3 className='w-[488px] h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[30px]'>Success Plans</h3>

                      
                    </div>
                    
                    <div className='mt-4'>
                      <ul className=' flex flex-col gap-2 ' >
                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Systematically document and track customer objectives
                        </li>
                        
                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Ensure goal visibility through team transitions

                        </li>
                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Instantly access historical context

                        </li>
                      </ul>
                    </div>

                  </div>


                  <div className='shadow-xl w-[548px] h-[211px] flex flex-col  gap-[3px] p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[15px] '>
                      <h3 className='w-[495px] h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[30px] '>Comprehensive Analytics Dashboard</h3>

                      
                    </div>
                    
                    <div className='mt-4'>
                      <ul className=' flex flex-col gap-2' >
                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Get a unified view of all accounts</li>
                        
                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Quantify CSM impact on revenue
                        </li>
                        <li className='text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Track account growth metrics


                        </li>
                      </ul>
                    </div>

                  </div>
                  
                </div>
              </div>
        </div>
        
        <div className='w-full h-[539.16px] bg-[rgba(211,199,244,1)] mt-[1px] pt-[80px] pb-[80px] pr-[20px] pl-[20px] flex items-center justify-center rounded-3xl'>
          
          <div className='w-[1240px] h-[379.16px]  rounded-2xl bg-white pt-[48px] pb-[48px] pr-[29px] pl-[29px] flex justify-between items-center shadow-lg'>
            
            <div className='w-[588px] h-[260.7px]  p-[16px] flex flex-col gap-10 items-center'>
              <div className='flex flex-col gap-6 items-center w-[566px]'>
                
                <div className='w-[566px] h-[94px]'>
                  <h3 className='font-Roboto font-bold text-[40px] text-[rgba(16,16,16,1)]'>Ready to Transform Your </h3>
                  <h3 className='font-Roboto font-bold text-[40px] text-[rgba(16,16,16,1)] mt-[-10px]'>Customer Success Operations? </h3>
                </div>

                <div className='h-[38.69px] w-[566px] '>
                  <p className=' font-Roboto text-[16px] text-[rgba(67,67,67,1)] font-normal'>Book a demo today and see how Triumph IQ can help you deliver exceptional customer experiences while driving business growth.</p>
                </div>

              </div>

              <div className='w-[566px] h-[48px] flex gap-[10px] items-center'>
                <form onSubmit={handleSubmit} className='flex gap-3 items-center w-[556px]  '>
                    
                  <div className='border-[1px] border-[rgba(234,237,240,1)] pl-2  flex items-center  gap-4 rounded-lg bg-[rgba(248,249,250,1)]
 '>     
                    <IoMdMail className='text-[#6938ef]' />
                    <input name='email' value={email}  onChange={(e) => setEmail(e.target.value)}  className='bg-[rgba(248,249,250,1)] outline-none  w-[340px] h-[48px] placeholder:font-Dm placeholder:text-[rgba(67,67,67,0,8)] placeholder:font-medium placeholder:text-[14px] ' type="email" placeholder='Enter Your Email' />
                  </div>

                  <button type='submit' className='active:scale-95 transition-transform w-[180px] h-[48px] bg-[rgba(105,56,239,1)]  rounded-2xl flex items-center justify-center'><span className='text-white font-Dm text-[14px] font-semibold w-[140px] h-[18px]'>Schedule Your Demo</span></button>
                </form>
                
                
              </div>

            </div>
            
            <div className='w-[466.66px] h-[283.16px] bg-green-300 relative overflow-hidden'>
              <img className='absolute top-[-96px] object-cover' src={image1} alt="" />
            </div>
          </div>

        </div>


       <div  ref={contactRef} className='w-full   p-[64px] flex gap-[100px]'>

          <div className='w-[1312px] h-[100px]  ml-[70px] mt-[-20px] flex flex-col  gap-[1px]'>
              
              <div className='w-[420px] h-full flex items-center '>
                <h2 className='font-Roboto font-bold text-[24px] '>Contact Us</h2>
              </div>

              <div className='w-[334px] h-full flex items-center '>
                <a className='font-Roboto text-[20px] text-indigo-600' href="hello@triumphIQ.com">hello@triumphiq.com</a>
              </div>
          </div>

          <div>

          </div>
        </div>


        <div className='w-full   text-center mb-5 '>
          <span className='font-Roboto font-normal text-[20px] text-gray-800'> Copyright © 2025 Triumph IQ</span>
        </div>

        

    </div>
  )
}

export default Home;




