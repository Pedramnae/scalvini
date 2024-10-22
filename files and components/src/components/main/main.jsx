import React, { useEffect, useRef, useState } from 'react'
import Body from './body/body'
import Menu from './menu/Menu'



function Main() {

    const [flag , setFlag] = useState(true)
    const menu1 = useRef()
    const close1 = useRef()

    const clicked = (e)=>{
        let menu = menu1.current.childNodes
        let close = close1.current.childNodes
        if(flag){
            menu.forEach((val)=>{
                val.classList.remove('translate-y-0')
                val.classList.add('translate-y-[-100%]')
            })
            close.forEach((val)=>{
                val.classList.remove('translate-y-0')
                val.classList.add('translate-y-[-100%]')
            })
            setFlag(!flag)
        }else{
            menu.forEach((val)=>{
                val.classList.add('translate-y-0')
                val.classList.remove('translate-y-[-100%]')
            })
            close.forEach((val)=>{
                val.classList.add('translate-y-0')
                val.classList.remove('translate-y-[-100%]')
            })
            setFlag(!flag)
        }
    }

    return (
        <>
            <div className='w-full h-[100vh] flex flex-wrap justify-center bg-[#86969e]'>

                <div onClick={(event)=>{clicked(event)}} className='w-[64px] h-[20px] md:w-[80px] md:h-[30px]  md:rounded-[30px] fixed top-[50px] z-[10] right-[50px] bg-[#212121] group overflow-hidden cursor-pointer'>

                    <div className='w-full h-full relative flex flex-wrap justify-end'>
                        <div ref={menu1} className='w-[80%] h-full flex justify-center flex-wrap absolute top-0 left-0 '>
                            <span className='h-full font-ppm flex items-center text-[#c9c2ac] text-[13px] duration-[0.2s] capitalize'>m</span>
                            <span className='h-full font-ppm flex items-center text-[#c9c2ac] text-[13px] duration-[0.2s] delay-[0.05s] capitalize'>e</span>
                            <span className='h-full font-ppm flex items-center text-[#c9c2ac] text-[13px] duration-[0.2s] delay-[0.1s] capitalize'>n</span>
                            <span className='h-full font-ppm flex items-center text-[#c9c2ac] text-[13px] duration-[0.2s] delay-[0.15s] capitalize'>u</span>
                        </div> 
                        <div ref={close1} className='w-[80%] h-full flex justify-center flex-wrap absolute top-[100%] left-0 '>
                            <span className='h-full font-ppm flex items-center text-[#c9c2ac] text-[13px] duration-[0.2s] capitalize'>c</span>
                            <span className='h-full font-ppm flex items-center text-[#c9c2ac] text-[13px] duration-[0.2s] delay-[0.05s] capitalize'>l</span>
                            <span className='h-full font-ppm flex items-center text-[#c9c2ac] text-[13px] duration-[0.2s] delay-[0.1s] capitalize'>o</span>
                            <span className='h-full font-ppm flex items-center text-[#c9c2ac] text-[13px] duration-[0.2s] delay-[0.15s] capitalize'>s</span>
                            <span className='h-full font-ppm flex items-center text-[#c9c2ac] text-[13px] duration-[0.2s] delay-[0.2s] capitalize'>e</span>
                        </div>
                        <div className='w-[20%] h-full flex items-center justify-start '>
                            <span className='w-[6px] h-[6px] bg-[#c9c2ac] rounded-[3px] group-hover:w-[8px] group-hover:h-[8px] group-hover:rounded-[4px] duration-[0.4s]'></span>
                        </div>
                    </div>

                </div>



                <Menu flag={flag}></Menu>
                <Body flag={flag}></Body>
            </div>
        </>
    )
}

export default Main