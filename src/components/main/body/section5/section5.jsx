import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import img2 from './../../../../assets/img/2.jpg'
import img3 from './../../../../assets/img/3.jpeg'
import img4 from './../../../../assets/img/4.jpg'
import img5 from './../../../../assets/img/5.jpg'
import img6 from './../../../../assets/img/6.jpg'
import img7 from './../../../../assets/img/7.jpg'

function Section5({ st }) {
    const sec5 = useRef()
    const span1 = useRef()
    const span2 = useRef()
    const span3 = useRef()
    const span4 = useRef()
    const span5 = useRef()
    const span6 = useRef()
    const creation = useRef()
    const line = useRef()
    useEffect(() => {
        creation.current.addEventListener('mouseenter', () => {
            line.current.classList.add('w-full')
            line.current.classList.remove('w-0')
            line.current.classList.add('left-0')
            line.current.classList.remove('right-0')
        })
        creation.current.addEventListener('mouseleave', () => {
            line.current.classList.remove('w-full')
            line.current.classList.add('w-0')
            line.current.classList.remove('left-0')
            line.current.classList.add('right-0')
        })
        if (st >= sec5.current.offsetTop - 300) {
            span1.current.style.top = '200%'
            span2.current.style.top = '-200%'
            span3.current.style.top = '200%'
            span4.current.style.top = '-200%'
            span5.current.style.top = '200%'
            span6.current.style.top = '-200%'
        }
    }, [st])

    return (
        <section ref={sec5} className='w-full h-[100vh] flex relative items-center overflow-hidden'>
            <div className='w-[40%] h-[15%] z-[3] uppercase group overflow-hidden  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center text-[#c9c2ac] font-ppm text-[30px]'>
                <div ref={creation} className='h-full relative  flex flex-wrap justify-center overflow-hidden'>
                    <p className='opacity-0 text-[7vw] uppercase font-ppm h-full'>creations</p>
                    <span ref={line} className='w-0 h-[4px] absolute bottom-0 left-0 bg-[#c9c2ac] duration-[0.4s]'></span>
                    <a className='w-full h-full absolute top-0 left-0 flex flex-wrap  justify-center' href="#">
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw]'>c</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.02s]'>r</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.04s]'>e</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.06s]'>a</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.08s]'>t</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.1s]'>i</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.12s]'>o</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.14s]'>n</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.16s]'>s</span>
                    </a>
                    <a className='w-full h-full absolute top-[100%] left-0 flex flex-wrap  justify-center' href="#">
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw]'>c</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.02s]'>r</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.04s]'>e</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.06s]'>a</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.08s]'>t</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.1s]'>i</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.12s]'>o</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.14s]'>n</span>
                        <span className='h-full flex items-center duration-[0.4s] group-hover:translate-y-[-100%]  font-ppm text-[#c9c2ac] uppercase text-[6vw] delay-[0.16s]'>s</span>
                    </a>
                </div>
            </div>
            <div className='w-full h-[75%] flex flex-wrap justify-evenly  items-center'>
                <figure className='w-[16%] md:w-[10%] h-[40%] md:h-[50%]  relative'>
                    <span ref={span1} className='w-full h-full absolute top-0 left-0 bg-[#212121] duration-[1s] z-[2]'></span>
                    <img className='w-full h-full object-cover absolute top-0 left-0 duration-[1s] ease-out' src={img3} alt="" />
                </figure>
                <figure className='w-[32%] md:w-[20%] h-[55%] md:h-[60%]  relative'>
                    <span ref={span2} className='w-full h-full absolute top-0 left-0 bg-[#212121] duration-[1s] z-[2]'></span>
                    <img className='w-full h-full object-cover absolute top-0 left-0 duration-[1s] ease-out' src={img4} alt="" />
                </figure>
                <figure className='w-[16%] md:w-[10%] h-[30%] md:h-[35%]  relative'>
                    <span ref={span3} className='w-full h-full absolute top-0 left-0 bg-[#212121] duration-[1s] z-[2]'></span>
                    <img className='w-full h-full object-cover absolute top-0 left-0 duration-[1s] ease-out' src={img5} alt="" />
                </figure>
                <figure className='w-[32%] md:w-[20%] h-[50%] md:h-[60%]  relative'>
                    <span ref={span4} className='w-full h-full absolute top-0 left-0 bg-[#212121] duration-[1s] z-[2]'></span>
                    <img className='w-full h-full object-cover absolute top-0 left-0 duration-[1s] ease-out' src={img6} alt="" />
                </figure>
                <figure className='w-[10%] h-[55%]  relative hidden md:flex'>
                    <span ref={span5} className='w-full h-full absolute top-0 left-0 bg-[#212121] duration-[1s] z-[2]'></span>
                    <img className='w-full h-full object-cover absolute top-0 left-0 duration-[1s] ease-out' src={img7} alt="" />
                </figure>
                <figure className='w-[20%] h-[65%]  relative hidden md:flex'>
                    <span ref={span6} className='w-full h-full absolute top-0 left-0 bg-[#212121] duration-[1s] z-[2]'></span>
                    <img className='w-full h-full object-cover absolute top-0 left-0 duration-[1s] ease-out' src={img2} alt="" />
                </figure>
            </div>
        </section>
    )
}

export default Section5