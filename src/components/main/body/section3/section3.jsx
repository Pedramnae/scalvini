import React from 'react'
import leftimg from './../../../../assets/img/1.jpg'
import rightbot from './../../../../assets/img/2.jpg'
import { useEffect, useRef } from 'react'
import { BsArrowUpRight } from "react-icons/bs";

function Section3({ st }) {
  const section = useRef()
  const titr = useRef()
  const textpar = useRef()
  const text = useRef()
  const imgleft = useRef()
  const imgleftsm = useRef()
  const rightbotimg = useRef()
  const rightbotimgsm = useRef()
  useEffect(() => {

    let oftop = section.current.offsetTop
    if (st > oftop - 500) {
      titr.current.childNodes[0].childNodes.forEach((val) => {
        val.classList.add('animate-bottomToTop')
      })
      titr.current.childNodes[1].childNodes.forEach((val) => {
        val.classList.add('animate-bottomToTop')
      })
    }

    if (st > oftop) {
      textpar.current.classList.add('animate-bottomToTop')
      text.current.classList.remove('opacity-0')
      text.current.classList.add('opacity-[1]')
    }

    if (st > oftop + 200) {
      imgleft.current.style.top = '-100%'
      imgleftsm.current.style.top = '-100%'
    }
    if (st > oftop + 700) {
      rightbotimg.current.style.top = '-100%'
    }
    if (st > oftop + 300) {
      rightbotimgsm.current.style.top = '-100%'
    }

  }, [st])

  return (
    <div ref={section} className='w-full h-full flex flex-wrap '>

      <div ref={titr} className='w-full h-[10%] md:h-[25%]  hidden md:flex flex-wrap relative z-[2]'>
        <div className='w-full h-1/2 flex flex-wrap  overflow-hidden'>
          <p className='w-[fit-content] me-[15px] md:me-[0] md:w-1/2 h-full flex items-center justify-start uppercase font-ppbook text-[#c9c2ac] translate-y-[100%]   text-[7vw]'>artisans,</p>
          <p className='w-[fit-content] ms-[15px] md:ms-[0] md:w-1/2 h-full flex items-center justify-end uppercase font-ppbook text-[#c9c2ac] translate-y-[100%]  text-[7vw]'>aesthetes</p>
        </div>
        <div className='w-full h-1/2 flex flex-wrap  overflow-hidden'>
          <p className='w-[fit-content] md:w-full h-full flex items-center justify-end uppercase font-ppbook text-[#c9c2ac] translate-y-[100%]  text-[7vw]'>and innovators</p>
        </div>
      </div>


      <div className='w-full h-[90%] md:h-[75%] hidden md:flex flex-wrap'>

        <div className='w-1/2 h-full hidden md:flex flex-wrap  items-end '>
          <figure className='w-[80%] h-[65%] relative'>
            <span ref={imgleft} className='w-full h-full bg-[#212121] absolute top-0 left-0 duration-[1s] z-[1]'></span>
            <img className='w-full h-full object-cover' src={leftimg} alt="" />
          </figure>
        </div>

        <div className='w-1/2 h-full hidden md:flex flex-wrap  content-between '>

          <div className='w-full h-1/4  flex flex-wrap overflow-hidden'>
            <div ref={textpar} className='w-full h-full flex flex-wrap translate-y-[100%] duration-[0.4s]'>
              <h3 ref={text} className='w-[60%] h-[75%]  font-ppm text-[#c9c2ac] text-[28px] opacity-0 duration-[1s]'>Distinguished by a great sensitivity in seeing and creating beauty by constantly reinventing ourselves.</h3>
              <div className='w-full h-[25%] flex flex-wrap '>
                <div className='w-[60%] h-full flex flex-wrap ' href="">
                  <a href='#' className='w-[60%] h-full flex flex-wrap relative  group overflow-hidden'>
                    <span className='w-full h-full absolute top-0 left-0 flex flex-wrap justify-center'>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase '>a</span>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.02s]'>b</span>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.04s]'>o</span>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.06s]'>u</span>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.08s]'>t</span>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.08s] opacity-0'>t</span>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.1s]'>u</span>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.12s]'>s</span>
                    </span>
                    <span className='w-full h-full absolute top-[100%] left-0 flex flex-wrap justify-center'>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase '>a</span>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.02s]'>b</span>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.04s]'>o</span>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.06s]'>u</span>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.08s]'>t</span>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.08s] opacity-0'>t</span>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.1s]'>u</span>
                      <span className='h-full flex items-center duration-[0.4s] font-ppm text-[11px] md:text-[15px] lg:text-[22px] text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase delay-[0.12s]'>s</span>
                    </span>
                  </a>
                  <a href='#' className='h-full flex items-center  text-[#c9c2ac] text-[16px] md:text-[22px] lg:text-[30px]'>
                    <BsArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full h-1/4 flex items-center justify-end '>
            <figure className='w-[50%] h-full relative'>
              <span ref={rightbotimg} className='w-full h-full bg-[#212121] absolute top-0 left-0 duration-[1s] z-[1]'></span>
              <img className='w-full h-full object-contain' src={rightbot} alt="" />
            </figure>
          </div>

        </div>

      </div>
      {/* sm */}
      {/* sm */}
      {/* sm */}
      <div className='w-full h-[50%]  flex flex-wrap md:hidden relative z-[10]'>
        <div className='w-full h-[35%]  flex flex-wrap  items-end'>
          <h3 className='w-full text-[#c9c2ac] font-ppbook text-[30px]'>ARTISANS, AESTHETES AND INNOVATORS</h3>
        </div>
        <div className='w-full h-[65%] flex flex-wrap '>
          <div className='w-full h-[70%]  items-end flex justify-end'>
            <p className='w-[75%] h-[60%]  flex items-center text-[#c9c2ac] font-ppm text-[18px]'>Distinguished by a great sensitivity in seeing and creating beauty by constantly reinventing ourselves.</p>
          </div>
          <div className='w-full h-[20%]  flex justify-end'>
            <div className='w-[75%] h-full boder flex flex-wrap'>
              <div className='w-[40%]  h-full relative flex justify-center group overflow-hidden'>
                <a href='#' className='w-full h-full flex justify-center flex-wrap absolute top-0 left-0'>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s]  uppercase group-hover:translate-y-[-100%]'>a</span>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s] delay-[0.02s] uppercase group-hover:translate-y-[-100%]'>b</span>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s] delay-[0.04s] uppercase group-hover:translate-y-[-100%]'>o</span>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s] delay-[0.06s] uppercase group-hover:translate-y-[-100%]'>u</span>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s] delay-[0.08s] uppercase group-hover:translate-y-[-100%]'>t</span>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s] delay-[0.08s] uppercase group-hover:translate-y-[-100%] opacity-0'>t</span>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s] delay-[0.1s] uppercase group-hover:translate-y-[-100%]'>u</span>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s] delay-[0.12s] uppercase group-hover:translate-y-[-100%]'>s</span>
                </a>
                <a href='#' className='w-full h-full flex justify-center flex-wrap absolute top-[100%] left-0'>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s]  uppercase group-hover:translate-y-[-100%]'>a</span>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s] delay-[0.02s] uppercase group-hover:translate-y-[-100%]'>b</span>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s] delay-[0.04s] uppercase group-hover:translate-y-[-100%]'>o</span>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s] delay-[0.06s] uppercase group-hover:translate-y-[-100%]'>u</span>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s] delay-[0.08s] uppercase group-hover:translate-y-[-100%]'>t</span>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s] delay-[0.08s] uppercase group-hover:translate-y-[-100%] opacity-0'>t</span>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s] delay-[0.1s] uppercase group-hover:translate-y-[-100%]'>u</span>
                  <span className='text-[#c9c2ac] text-[12px]  font-ppm h-full flex items-center  duration-[0.4s] delay-[0.12s] uppercase group-hover:translate-y-[-100%]'>s</span>
                </a>
              </div>
              <a href='#' className='h-full flex items-center  text-[#c9c2ac] text-[25px]'>
                <BsArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[50%] md:hidden flex flex-wrap'>
        <div className='w-1/2 h-full flex items-end'>
          <figure className='w-[80%] h-[70%] relative'>
            <span ref={imgleftsm} className='w-full h-full bg-[#212121] absolute top-0 left-0 duration-[1s] z-[1]'></span>
            <img className='w-full h-full object-cover' src={leftimg} alt="" />
          </figure>
        </div>
        <div className='w-1/2 h-full flex items-end justify-end'>
          <figure className='w-[80%] h-[30%] relative'>
            <span ref={rightbotimgsm} className='w-full h-full bg-[#212121] absolute top-0 left-0 duration-[1s] z-[1]'></span>
            <img className='w-full h-full object-cover' src={rightbot} alt="" />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Section3