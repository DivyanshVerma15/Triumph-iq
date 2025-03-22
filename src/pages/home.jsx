import React, {useRef, useState} from 'react'
import Navbar  from '../components/navbar';
import { IoMdMail } from "react-icons/io";
import Pbs from '../components/Pbs';
import Problems from '../problems';
import Sol from '../components/Sol';
import Solution from '../solution';
import image1 from "../assets/Graph.png"
import frameimage from "../assets/frame.png"
import Collage1 from "../assets/collage1.svg"
import Collage2 from "../assets/collage2.svg"



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
          
          <div className='w-full h-[960px]' style={{background:" linear-gradient(180deg, #F9F7FF 0%, #EEE8FF 100%)"}}>  
          <div>
              <Navbar scroll1 = {scroll} scroll2 = {scroll2}/>
          </div>

          <div  ref = {homeref} className=' w-full h-[780px] mt-16 flex flex-col gap-[30px] items-center'>
            
            <div  ><h4 className='text-center font-Roboto font-semibold text-[65px] ' >Simplify Your Customer Success </h4> 
            <h4 className='text-center font-Roboto font-semibold text-[65px] '>And Reduce Churn</h4></div>
            
            <div className='pl-96 pr-96 '> <p className='text-[16px] font-Roboto  italic text-center text-gray-900'>“After years of managing customer relationships through disconnected tools and spreadsheets, I knew there had to be a better way. That's why we are building Triumph IQ” – Founder, Triumph IQ</p></div>

          
            <div  className='flex justify-center items-center mt-4 gap-2 '>
            
            <form onSubmit={handleSubmit} className="flex items-center gap-2  pl-4">
              
              <div className='border-[1px] border-black rounded-xl flex items-center gap-4 pl-4'>
                <IoMdMail className="text-purple-600" />
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" text-black w-[368px] h-[56px] font-Roboto text-[16px] font-medium rounded-xl outline-none bg-transparent  focus:ring-0 focus:outline-none autofill:bg-transparent "
                  type="email"
                  placeholder="Enter your Email"
                  required
                />
                </div>
                
              <button
                type="submit"
                className="pl-3 pr-3 bg-purple-600 w-[190px] h-[56px] font-Roboto text-[16px] text-white font-medium rounded-xl active:scale-95 transition-transform border-[1.5px]-black"
              >
                <span >Request Early Access</span>
              </button>
              
            </form>
            
            
              
            </div>

            <div className='w-[1120px] h-[419px] mt-[-10px]'>
            <img src= {frameimage} alt="" />
          </div>

          </div>
          
        </div>

        <div className='w-full h-[614.5px] mt-14 pt-2'> 
            <div className='text-center w-full h-[85px] mt-5'>
              <h3 className='text-[45px] font-Roboto font-bold'>Customer Success Is Tough!</h3>
            </div>
            
            <div className='flex flex-wrap content-center justify-center gap-8 w-full h-[469.5px] mt-8'>
              {Problems.map((items) => {
                return (
                  <Pbs image = {items.image} id = {items.id} heading = {items.header} description = {items.description}/>  
                )
              })}
            </div>  
              
              
            
        </div>

        <div className='bg-[#F5F2FF] w-full h-[419px] mt-20 flex flex-col items-center'>
          <div className='pt-8'>
          <h3 className='text-[45px] font-Roboto font-bold '>That’s why we are building Triumph IQ</h3>
          </div>
          
          <div className='flex flex-wrap content-center justify-center gap-8 w-full h-[469.5px] mt-8'>
              {Solution.map((items) => {
                return (
                  <Sol  image = {items.image} id = {items.id} heading = {items.header} description = {items.description}/>
                )
              })}
          </div>
        </div>

        <div className=' h-[100vh] w-full mt-14 flex flex-col items-center  '>
              <div className='pt-4 w-full h-[65px]'>
                <h3 className='text-[45px] font-Roboto font-bold text-center'>Features That Transform Your Customer Success</h3>
              </div>
              
              <div className='flex items-center gap-[40px] p-[40px]'>
                <div  className = 'bg-slate-100 w-[644px] h-[570px] rounded-2xl border-[1.5px] border-slate-200'>
                  <img src={Collage1} alt="" />
                </div>
                
                <div className=' w-[548px] h-[570px] rounded-2xl  flex flex-col gap-[30px]  '>
                  
                  <div className=' shadow-xl w-[548px] h-[270px] flex flex-col  gap-[20px] p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[20px]'>
                      <h3 className='w-[488px] h-[35px] text-black/80 font-Roboto font-medium text-[24px]'>Unified Data Management</h3>

                      <p className='font-Roboto font-normal w-[488px] h-[46px] text-[14px] text-gray-900'>Still juggling customer data across multiple platforms? You’re not alone—70% of companies do the same. But now, there’s a better way.</p>
                    </div>
                    
                    <div>
                      <ul className=' flex flex-col gap-2 ' >
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'> <span className='mr-[10px]'>✔️</span>Import and update customer data effortlessly</li>
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Integrate with your existing data source</li>
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Maintain real-time data accuracy</li>
                      </ul>
                    </div>

                  </div>

                  <div className='shadow-xl w-[548px] h-[270px] flex flex-col  gap-[20px] p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[20px]'>
                      <h3 className=' w-[488px] h-[35px] text-black/80 font-Roboto font-medium text-[24px]'>Customizable, Yet Simple</h3>

                      <p className='font-Roboto font-normal w-[488px] h-[46px] text-[14px] text-gray-900'>Unlike legacy tools that take 10-12 weeks to implement, we get you up and running fast.</p>
                    </div>
                    
                    <div>
                      <ul className=' flex flex-col gap-2 ' >
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'> <span className='mr-[10px]'>✔️</span>Customize Fields, Dashboards and Health Score easily
                        </li>
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'> <span className='mr-[10px]'>✔️</span>Adapt the platform to fit your organization’s unique needs</li>


                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'> <span className='mr-[10px]'>✔️</span>No technical expertise required
                        </li>
                      </ul>
                    </div>

                  </div>
                  
                  
                </div>
              </div>
        </div>


        <div className=' h-[100vh] w-full mt-1 flex flex-col items-center '>
              
              <div className='flex items-center gap-[40px] p-[40px]'>
                
                
                <div className=' w-[548px] h-[570px] rounded-2xl  flex flex-col gap-[30px]  '>
                  
                  <div className='shadow-xl w-[548px] h-[270px] flex flex-col  gap-[20px] p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[20px]'>
                      <h3 className='w-[488px] h-[35px] text-black/80 font-Roboto font-medium text-[24px]'>Manage customer communication</h3>

                      <p className='font-Roboto font-normal w-[488px] h-[46px] text-[14px] text-gray-900'>When should you reach out, or when was your last conversation? Still a question? Let Us Guide Your Customer Engagement and deliver maximum value.</p>
                    </div>
                    
                    <div>
                      <ul className=' mt-4 flex flex-col gap-2' >
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Automatically capture customer communications</li>
                        
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Create engagement formulas to get the right alerts</li>
                        
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Integrate easily with your communication platforms</li>
                        
                      </ul>
                    </div>

                  </div>

                  <div className=' shadow-xl w-[548px] h-[270px] flex flex-col  gap-[20px] p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[20px]'>
                      <h3 className='w-[488px] h-[35px] text-black/80 font-Roboto font-medium text-[24px]'>Predictive Churn Score</h3>

                      <p className='font-Roboto font-normal w-[488px] h-[46px] text-[14px] text-gray-900'>70% of CSMs find it difficult to assess customer health - leading to unexpected churn.</p>
                    </div>
                    
                    <div>
                      <ul className=' flex flex-col gap-2 ' >
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Track feature adoption, product usage for better visibility</li>
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Setup custom risk formula - as per your needs</li>
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Get actionable insights for at-risk accounts</li>
                        
                      </ul>
                    </div>

                  </div>
                  
                  
                </div>

                <div className='bg-slate-100 w-[644px] h-[570px] rounded-2xl border-[1.5px] border-slate-200'>
                  <img src= {Collage2} alt="" />
                </div>
              </div>
              
              <div></div>
              
              <div></div>
        </div>

        <div className=' h-[100vh] w-full mt-1 flex flex-col items-center '>
              
              
              <div className='flex items-center gap-[40px] p-[40px]'>
                <div className='bg-slate-100 w-[644px] h-[693px] rounded-2xl border-[1.5px] border-slate-200'>
                  <img src={Collage1} alt="" />
                </div>
                
                <div className=' w-[548px] h-[693px] rounded-2xl   flex flex-col gap-[30px]  '>
                  
                  <div className='shadow-xl w-[548px] h-[211px] flex flex-col  gap-[3px] p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[15px] '>
                      <h3 className='w-[488px] h-[35px] text-black/80 font-Roboto font-medium text-[24px]'>Deal Management</h3>

                      
                    </div>
                    
                    <div className='mt-4'>
                      <ul className=' flex flex-col gap-2 ' >
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Identify the right opportunity with a predictive upsell score</li>
                        
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Create and Manage upsell and cross-sell opportunities
                        </li>
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Monitor pipeline progress with intuitive visualizations
                        </li>
                      </ul>
                    </div>

                  </div>

                  <div className=' shadow-xl w-[548px] h-[211px] flex flex-col  gap-[3px] p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[15px] '>
                      <h3 className='w-[488px] h-[35px] text-black/80 font-Roboto font-medium text-[24px]'>Success Plans</h3>

                      
                    </div>
                    
                    <div className='mt-4'>
                      <ul className=' flex flex-col gap-2 ' >
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Systematically document and track customer objectives
                        </li>
                        
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Ensure goal visibility through team transitions

                        </li>
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Instantly access historical context

                        </li>
                      </ul>
                    </div>

                  </div>


                  <div className='shadow-xl w-[548px] h-[211px] flex flex-col  gap-[3px] p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[15px] '>
                      <h3 className='w-[495px] h-[35px] text-black/80 font-Roboto font-medium text-[24px]'>Comprehensive Analytics Dashboard</h3>

                      
                    </div>
                    
                    <div className='mt-4'>
                      <ul className=' flex flex-col gap-2' >
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Get a unified view of all accounts</li>
                        
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Quantify CSM impact on revenue
                        </li>
                        <li className='text-16px font-Roboto font-normal text-gray-700/80 ml-[-5px]'><span className='mr-[10px]'>✔️</span>Track account growth metrics


                        </li>
                      </ul>
                    </div>

                  </div>
                  
                </div>
              </div>
        </div>
        
        <div className='w-full h-[539.16px] bg-purple-200 mt-24 pt-[80px] pb-[80px] pr-[20px] pl-[130px] rounded-3xl'>
          
          <div className='w-[1240px] h-[379.16px]  rounded-2xl bg-white pt-[48px] pb-[48px] pr-[29px] pl-[29px] flex justify-between items-center shadow-lg'>
            
            <div className='w-[588px] h-[260.7px]  p-[16px] flex flex-col gap-10 items-center'>
              <div>
                
                <div className='w-[566px] h-[94px]'>
                  <h3 className='font-Roboto font-semibold text-[30px]'>Ready to Transform Your Customer Success Operations?</h3>
                </div>

                <div className='h-[38.69px] w-[566px] '>
                  <p className=' font-Roboto text-[16px]'>Book a demo today and see how Triumph IQ can help you deliver exceptional customer experiences while driving business growth.</p>
                </div>

              </div>

              <div className='w-[590px] h-[48px] flex gap-[10px] items-center'>
                <form onSubmit={handleSubmit} className='flex gap-3 items-center   '>
                    
                  <div className='border-[1px] border-black pl-2  flex items-center gap-4 rounded-lg '>     
                    <IoMdMail className='text-purple-600' />
                    <input name='email' value={email}  onChange={(e) => setEmail(e.target.value)}  className='outline-none  w-[368px] h-[48px]  ' type="email" placeholder='Enter Your Email' />
                  </div>

                  <button type='submit' className='active:scale-95 transition-transform w-[180px] h-[48px] bg-indigo-600  text-white font-Dm text-[14px] rounded-2xl'>Schedule Your Demo</button>
                </form>
                
                
              </div>

            </div>
            
            <div className='w-[466.66px] h-[283.16px] bg-green-300 relative overflow-hidden'>
              <img className='absolute top-[-96px] object-cover' src={image1} alt="" />
            </div>
          </div>

        </div>


        <div  ref={contactRef} className='w-full h-[223px]  p-[64px] flex gap-[100px]'>

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


        <div className='w-full h-[23px]  text-center mb-5 '>
          <span className='font-Roboto font-normal text-[20px] text-gray-800'> Copyright © 2025 Triumph IQ</span>
        </div>

        

    </div>
  )
}

export default Home;




