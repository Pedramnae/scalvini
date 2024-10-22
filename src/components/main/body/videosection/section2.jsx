import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import Section3 from '../section3/section3';
import top from './../../../../assets/img/top.jpg'
import left from './../../../../assets/img/left.jpg'
import right from './../../../../assets/img/right.jpg'
import bl from './../../../../assets/img/bl.jpg'
import bm from './../../../../assets/img/bm.jpg'
import video from './../../../../assets/video/0109.mp4'

function Section2({ body, st }) {
  const videoi = useRef()
  const topi = useRef()
  const lefti = useRef()
  const righti = useRef()
  const bli = useRef()
  const bmi = useRef()
  const sec2 = useRef()
  const sec3 = useRef()
  const clonesec2 = useRef()
  const watch = useRef()
  const secondclone = useRef()
  useEffect(() => {

    let vh = sec3.current.offsetTop - sec2.current.offsetTop

    let x = 100 - (st - (sec2.current.offsetTop))
    let y = st - sec2.current.offsetTop - 100
    if (st > ((sec2.current.offsetTop))) {
      if (x >= 0) {
        topi.current.style.transform = 'translateY(' + x + '%)'
        lefti.current.style.transform = 'translateX(' + x + '%)'
        righti.current.style.transform = 'translateX(-' + x + '%)'
        bli.current.style.transform = 'translate(' + x / 2 + '% , -' + x + '%)'
        bmi.current.style.transform = 'translateY(-' + x + '%)'
      }
      if (x <= 0) {
        topi.current.style.transform = 'translateY(0%)'
        lefti.current.style.transform = 'translateX(0%)'
        righti.current.style.transform = 'translateX(0%)'
        bli.current.style.transform = 'translate(0% , 0%)'
        bmi.current.style.transform = 'translateY(0%)'
      }
    }






    if (x <= 0 && st <= vh) {
      let a = y / 550
      a = a.toFixed(10)
      secondclone.current.style.transform = 'scale(calc(1 + ' + a + '))'
      watch.current.style.transform = 'scale(calc(1 - ' + a/4 + '))'
    }
    if (x <= 0) {
      clonesec2.current.style.transform = 'translateY(' + Math.floor(y) + 'px)'
    }
    if (x >= 0) {
      watch.current.style.opacity = '0'
    } else {
      watch.current.style.opacity = '1'
    }

  }, [st])


  return (
    <>
      <section ref={sec2} className='w-full h-[240vh] flex flex-wrap overflow-hidden relative p-[30px]'>

        <div ref={clonesec2} className='w-full h-1/2'>

          <div ref={secondclone} className='w-full h-full'>
            <div className='w-full h-[30%] flex flex-wrap  p-[10px]'>
              <div className='w-full h-full flex justify-center'>
                <figure ref={topi} className='w-[45%] h-full translate-y-[100%] relative z-[4] duration-[0.1s]'>
                  <img className='w-full h-full object-cover' src={top} alt="" />
                </figure>
              </div>
            </div>

            <div className='w-full h-[40%] flex flex-wrap  p-[10px]'>
              <div className='w-[30%] h-full flex items-end  pe-[20px]'>
                <figure ref={lefti} className='w-full h-[80%]  relative z-[3]  translate-x-[100%] duration-[0.1s]'>
                  <img className='w-full h-full object-cover' src={left} alt="" />
                </figure>
              </div>
              <div ref={videoi} className='w-[40%] h-full flex justify-center relative '>
                <video autoPlay loop muted className='w-full h-full object-cover ' src={video}></video>
                <div ref={watch} className='w-full h-full overflow-hidden flex flex-wrap justify-center items-center cursor-pointer group absolute top-0 left-0  z-[20]'>
                  <div className='w-full h-full flex flex-wrap relative'>
                    <div className='w-full h-full absolute top-0 left-0 justify-center flex flex-wrap'>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s]'>w</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.02s]'>a</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.04s]'>t</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.06s]'>c</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.08s]'>h</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.08s] opcaity-0 invisible'>h</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.1s]'>v</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.12s]'>i</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.14s]'>d</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.16s]'>e</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.18s]'>o</span>
                    </div>
                    <div className='w-full h-full absolute top-[100%] left-0 justify-center flex flex-wrap'>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s]'>w</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.02s]'>a</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.04s]'>t</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.06s]'>c</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.08s]'>h</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.08s] opcaity-0 invisible'>h</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.1s]'>v</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.12s]'>i</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.14s]'>d</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.16s]'>e</span>
                      <span className='h-full flex items-center font-ppm text-[#c9c2ac] group-hover:translate-y-[-100%] uppercase text-[13px] md:text-[18px] lg:text-[23px] duration-[0.4s] delay-[0.18s]'>o</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[30%] h-full flex  ps-[20px]'>
                <figure ref={righti} className='w-full h-[80%]  relative z-[3]  translate-x-[-100%] duration-[0.1s]'>
                  <img className='w-full h-full object-cover' src={right} alt="" />
                </figure>
              </div>
            </div>

            <div className='w-full h-[30%] justify-center flex flex-wrap  p-[10px] '>
              <div className='w-[30%] h-full flex me-[5px]'>
                <figure ref={bli} className='w-full h-full relative z-[4]  translate-x-[50%] translate-y-[-100%] duration-[0.1s]'>
                  <img className='w-full h-full object-contain' src={bl} alt="" />
                </figure>
              </div>
              <div ref={bmi} className='w-[35%] h-full flex relative z-[5]  translate-y-[-100%] duration-[0.1s]'>
                <figure className='w-full h-full ms-[5px]'>
                  <img className='w-full h-full object-cover' src={bm} alt="" />
                </figure>
              </div>
            </div>
          </div>


        </div>
      </section>
      <section ref={sec3} className='w-full h-[130vh] md:h-[240vh] p-[30px]'>
        <Section3 st={st}></Section3>
      </section>
    </>
  )
}

export default Section2