import React, { useEffect , useRef} from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import bg from './../../../../assets/img/bg.jpg'

function Section4({ st }) {
    const sec4 = useRef()
    const titr = useRef()
    const manufacturing = useRef()
    useEffect(()=>{
        if( st >= (sec4.current.offsetTop - 300)){
            titr.current.classList.add('animate-bottomToTop')
        }
        if(st >= sec4.current.offsetTop){
            manufacturing.current.classList.add('animate-bottomToTop')
        }
    },[st])
    return (
        <section ref={sec4} className="w-full h-[100vh] md:h-[140vh] relative z-[20]">
            <div className='w-full h-[10%]'></div>
            <div style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='w-full h-[90%] flex flex-wrap'>
                <div className='w-full md:w-[75%] h-[50%] flex  overflow-hidden'>
                    <h2 ref={titr} className='w-full h-full text-[#c9c2ac] font-ppm flex items-center  text-[8vw] md:text-[7vw] translate-y-[100%]  ps-[25px]'>
                        NOBLE MATERIALS FOR UNIQUE CREATIONS
                    </h2>
                </div>
                <div className='w-full h-1/2 flex  justify-end overflow-hidden'>
                    <div ref={manufacturing} className='w-[70%] md:w-[50%] h-full content-center flex flex-wrap justify-start md:justify-center translate-y-[100%] '>
                        <div className='w-full md:w-[65%] h-[65%]  flex flex-wrap '>
                            <h3 className='w-full h-full text-[#c9c2ac] font-ppbook flex items-end justify-center text-[22px]  lg:text-[28px] '>We mould the material with creativity and respect to enhance its natural characteristics.</h3>
                        </div>
                        <div className='w-full md:w-[65%] h-[20%] flex '>
                            <div className='h-full  flex relative group overflow-hidden'>
                                <p className='h-full text-[20px]  lg:text-[26px] opacity-0 font-ppbook  uppercase'>manufacturing</p>
                                <a className='w-full h-full flex flex-wrap justify-center absolute top-0 left-0' href="">
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px]  lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase'>m</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px]  lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.02s]'>a</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px]  lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.04s]'>n</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px]  lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.06s]'>u</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px]  lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.08s]'>f</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px]  lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.1s]'>a</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px]  lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.12s]'>c</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px]  lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.14s]'>t</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px]  lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.16s]'>u</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px]  lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.18s]'>r</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px]  lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.2s]'>i</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px]  lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.22s]'>n</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px]  lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.24s]'>g</span>
                                </a>
                                <a className='w-full h-full flex flex-wrap justify-center absolute top-[100%] left-0' href="">
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px] lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase'>m</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px] lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.02s]'>a</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px] lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.04s]'>n</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px] lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.06s]'>u</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px] lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.08s]'>f</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px] lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.1s]'>a</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px] lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.12s]'>c</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px] lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.14s]'>t</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px] lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.16s]'>u</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px] lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.18s]'>r</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px] lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.2s]'>i</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px] lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.22s]'>n</span>
                                    <span className='h-full flex items-center duration-[0.4s] font-ppbook text-[18px] lg:text-[24px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.24s]'>g</span>
                                </a>
                            </div>
                            <a href='#' className='h-full flex items-center text-[25px] text-[#c9c2ac]  '>
                                <BsArrowUpRight/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4