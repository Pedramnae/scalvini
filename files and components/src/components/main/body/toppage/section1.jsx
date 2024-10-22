import React from 'react'
import logo from './../../../../assets/img/logo1.jpg'

function Section1() {
    return (
        <>
            <section className='w-full h-[60vh] md:h-[100vh] flex flex-wrap p-[30px]'>

                <div className='w-full h-[20%] flex justify-start  items-center'>
                    <figure className='w-[20%] md:w-[12%] lg:w-[8%] h-[60%] '>
                        <img className='w-full h-full object-contain' src={logo} alt="scalvini" />
                    </figure>
                    <div className='w-[15%] h-[60%]  flex flex-wrap'>
                        <p className='w-full h-1/2 flex items-center justify-start font-ppm capitalize text-[#c9c2ac] text-[12px] md:text-[15px] lg:text-[17px] '>scalvini</p>
                        <p className='w-full h-1/2 flex items-center justify-start font-ppm capitalize text-[#c9c2ac] text-[12px] md:text-[15px] lg:text-[17px] '>marmi</p>
                    </div>
                </div>

                <div className='w-full h-[80%] hidden md:flex flex-wrap content-center'>
                    <div className='w-full h-1/4 flex flex-wrap justify-between overflow-hidden'>
                        <span className='h-full flex items-center font-ppbook text-[#c9c2ac] uppercase text-[7vw] translate-y-[100%] animate-bottomToTop'>beautify</span>
                        <span className='h-full flex items-center font-ppbook text-[#c9c2ac] uppercase text-[7vw] translate-y-[100%] animate-bottomToTop2'>with</span>
                    </div>
                    <div className='w-full h-1/4 flex flex-wrap justify-end overflow-hidden'>
                        <span className='h-full flex items-center font-ppbook text-[#c9c2ac] uppercase text-[7vw] translate-y-[100%] animate-bottomToTop3'>the uniqueness</span>
                    </div>
                    <div className='w-full h-1/4 flex flex-wrap justify-start overflow-hidden'>
                        <span className='h-full flex items-center font-ppbook text-[#c9c2ac] uppercase text-[7vw] translate-y-[100%] animate-bottomToTop4'>of nature</span>
                    </div>
                </div>

                    {/* sm */}
                    {/* sm */}

                <div className='w-full h-[80%] flex flex-wrap md:hidden  content-center'>
                    <div className='w-full h-1/5 flex  overflow-hidden'>
                        <p className='w-full h-full  flex items-center font-ppbook text-[7vw] uppercase text-[#c9c2ac] translate-y-[100%] animate-bottomToTop'>beautiyf with the</p>
                    </div>
                    <div className='w-full h-1/5 flex  overflow-hidden'>
                        <p className='w-full h-full  flex items-center font-ppbook text-[7vw] uppercase text-[#c9c2ac] translate-y-[100%] animate-bottomToTop2'>uniqueness of</p>
                    </div>
                    <div className='w-full h-1/5 flex  overflow-hidden'>
                        <p className='w-full h-full  flex items-center font-ppbook text-[7vw] uppercase text-[#c9c2ac] translate-y-[100%] animate-bottomToTop3'>nature</p>
                    </div>



                </div>
            </section>
        </>
    )
}

export default Section1