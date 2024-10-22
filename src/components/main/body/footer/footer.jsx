import { list } from 'postcss';
import React from 'react'
import { useEffect, useRef } from 'react';
import { GoArrowUpRight } from "react-icons/go";

function Footer({ st }) {
    const mouseicon = useRef()
    const contactdiv = useRef()
    const footer = useRef()
    const list = useRef()
    useEffect(() => {
        contactdiv.current.addEventListener('mouseenter', () => {
            mouseicon.current.classList.add('w-[60px]')
            mouseicon.current.classList.add('h-[60px]')
            mouseicon.current.classList.remove('w-0')
            mouseicon.current.classList.remove('h-0')

            contactdiv.current.childNodes[1].classList.add('w-full')
            contactdiv.current.childNodes[1].classList.remove('w-0')
            contactdiv.current.childNodes[1].classList.add('left-0')
            contactdiv.current.childNodes[1].classList.remove('right-0')
        })


        contactdiv.current.addEventListener('mouseleave', () => {

            mouseicon.current.classList.remove('w-[60px]')
            mouseicon.current.classList.remove('h-[60px]')
            mouseicon.current.classList.add('w-0')
            mouseicon.current.classList.add('h-0')

            contactdiv.current.childNodes[1].classList.remove('w-full')
            contactdiv.current.childNodes[1].classList.add('w-0')
            contactdiv.current.childNodes[1].classList.remove('left-0')
            contactdiv.current.childNodes[1].classList.add('right-0')
        })
        list.current.childNodes.forEach((val)=>{
            // val.childNodes[0]
            val.addEventListener('mouseenter',()=>{
                val.childNodes[0].childNodes[0].classList.add('w-full')
                val.childNodes[0].childNodes[0].classList.remove('w-0')
                val.childNodes[0].childNodes[0].classList.add('left-0')
                val.childNodes[0].childNodes[0].classList.remove('right-0')
            })
            val.addEventListener('mouseleave',()=>{
                val.childNodes[0].childNodes[0].classList.remove('w-full')
                val.childNodes[0].childNodes[0].classList.add('w-0')
                val.childNodes[0].childNodes[0].classList.remove('left-0')
                val.childNodes[0].childNodes[0].classList.add('right-0')
            })
        })
    }, [])
    function changemouse(e) {
        let a = footer.current.offsetTop - st
        let x = e.clientX
        let y = e.clientY - a
        mouseicon.current.style.top = y + 'px'
        mouseicon.current.style.left = x + 'px'
    }

    return (
        <footer ref={footer} onMouseMove={(event) => { changemouse(event) }} className='w-full h-[85vh] flex flex-wrap relative'>
            <div ref={mouseicon} className='w-0 h-0 rounded-[30px] bg-[#c9c2ac]  translate-x-[-50%] translate-y-[-50%] absolute top-0 left-0 text-black flex duration-[0.1s] ease-linear items-center justify-center text-[20px]'><GoArrowUpRight /></div>
            <div className='w-full h-[50%] flex justify-center items-end  '>
                <div ref={contactdiv}  className='w-[fit-content] md:cursor-none h-[45%]  flex relative group overflow-hidden'>
                    <p className='text-[9.5vw] md:text-[7vw] font-ppm opacity-0'>Pedram</p>
                    <span className='w-0 h-[4px] bg-[#c9c2ac] absolute bottom-0 left-0 duration-[0.4s]'></span>
                    <a  className=' h-full flex justify-center absolute top-0 left-0 cursor-none' href="#">
                        <span className='h-full flex items-center font-ppm text-[9.5vw] md:text-[7vw] text-[#c9c2ac] duration-[0.4s] group-hover:translate-y-[-100%]'>P</span>
                        <span className='h-full flex items-center font-ppm text-[9.5vw] md:text-[7vw] text-[#c9c2ac] duration-[0.4s] group-hover:translate-y-[-100%] delay-[0.02s]'>e</span>
                        <span className='h-full flex items-center font-ppm text-[9.5vw] md:text-[7vw] text-[#c9c2ac] duration-[0.4s] group-hover:translate-y-[-100%] delay-[0.04s]'>d</span>
                        <span className='h-full flex items-center font-ppm text-[9.5vw] md:text-[7vw] text-[#c9c2ac] duration-[0.4s] group-hover:translate-y-[-100%] delay-[0.06s]'>r</span>
                        <span className='h-full flex items-center font-ppm text-[9.5vw] md:text-[7vw] text-[#c9c2ac] duration-[0.4s] group-hover:translate-y-[-100%] delay-[0.08s]'>a</span>
                        <span className='h-full flex items-center font-ppm text-[9.5vw] md:text-[7vw] text-[#c9c2ac] duration-[0.4s] group-hover:translate-y-[-100%] delay-[0.1s]'>m</span>
                    </a>
                    <a className=' h-full flex justify-center absolute top-[100%] left-0 cursor-none' href="#">
                        <span className='h-full flex items-center font-ppm text-[9.5vw] md:text-[7vw] text-[#c9c2ac] duration-[0.4s] group-hover:translate-y-[-100%]'>P</span>
                        <span className='h-full flex items-center font-ppm text-[9.5vw] md:text-[7vw] text-[#c9c2ac] duration-[0.4s] group-hover:translate-y-[-100%] delay-[0.02s]'>e</span>
                        <span className='h-full flex items-center font-ppm text-[9.5vw] md:text-[7vw] text-[#c9c2ac] duration-[0.4s] group-hover:translate-y-[-100%] delay-[0.04s]'>d</span>
                        <span className='h-full flex items-center font-ppm text-[9.5vw] md:text-[7vw] text-[#c9c2ac] duration-[0.4s] group-hover:translate-y-[-100%] delay-[0.06s]'>r</span>
                        <span className='h-full flex items-center font-ppm text-[9.5vw] md:text-[7vw] text-[#c9c2ac] duration-[0.4s] group-hover:translate-y-[-100%] delay-[0.08s]'>a</span>
                        <span className='h-full flex items-center font-ppm text-[9.5vw] md:text-[7vw] text-[#c9c2ac] duration-[0.4s] group-hover:translate-y-[-100%] delay-[0.1s]'>m</span>
                    </a>
                </div>
            </div>
            <div className='w-full h-[50%] flex items-start '>
                <nav className='w-full h-[20%]  flex justify-center'>
                    <ul ref={list} className='w-[90%] md:w-[55%] lg:w-[45%] h-full  flex flex-wrap justify-center '>
                        <li className='w-[fit-content] h-full flex justify-center'>
                            <a className='w-[fit-content] h-full  flex items-center justify-center uppercase font-ppbook text-[12px] md:text-[15px] lg:text-[18px] text-[#c9c2ac] relative' href="#"><span className='w-0 h-[1px] bg-[#c9c2ac] absolute bottom-[5%] left-0 duration-[0.4s]'></span>contact us</a>
                            <span className='h-full flex items-center font-ppm text-[#c9c2ac] px-[3px] md:px-[7px] text-[12px] md:text-[15px] lg:text-[18px]'>/</span>
                        </li>
                        <li className='w-[fit-content] h-full flex justify-center'>
                            <a className='w-[fit-content] h-full  flex items-center justify-center uppercase font-ppbook text-[12px] md:text-[15px] lg:text-[18px] text-[#c9c2ac] relative' href="#"><span className='w-0 h-[1px] bg-[#c9c2ac] absolute bottom-[5%] left-0 duration-[0.4s]'></span> instagram</a>
                            <span className='h-full flex items-center font-ppm text-[#c9c2ac] px-[3px] md:px-[7px] text-[12px] md:text-[15px] lg:text-[18px]'>/</span>
                        </li>
                        <li className='w-[fit-content] h-full flex justify-center'>
                            <a className='w-[fit-content] h-full  flex items-center justify-center uppercase font-ppbook text-[12px] md:text-[15px] lg:text-[18px] text-[#c9c2ac] relative' href="#"><span className='w-0 h-[1px] bg-[#c9c2ac] absolute bottom-[5%] left-0 duration-[0.4s]'></span> linked in</a>
                            <span className='h-full flex items-center font-ppm text-[#c9c2ac] px-[3px] md:px-[7px] text-[12px] md:text-[15px] lg:text-[18px]'>/</span>
                        </li>
                        <li className='w-[fit-content] h-full flex justify-center'>
                            <a className='w-[fit-content] h-full  flex items-center justify-center uppercase font-ppbook text-[12px] md:text-[15px] lg:text-[18px] text-[#c9c2ac] relative' href="#"><span className='w-0 h-[1px] bg-[#c9c2ac] absolute bottom-[5%] left-0 duration-[0.4s]'></span> youtube</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer