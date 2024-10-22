import React, { useRef,useEffect } from 'react'

function Menu({flag}) {
    const instagram = useRef()
    const linkedin = useRef()
    const youtube = useRef()
    const fullmenu = useRef()



    useEffect(() => {

        if(flag){
                fullmenu.current.classList.add('hidden')
                fullmenu.current.classList.remove('flex')
        }else{
            setTimeout(() => {
                fullmenu.current.classList.remove('hidden')
                fullmenu.current.classList.add('flex')
            }, 1000);
        }
      
        instagram.current.addEventListener('mouseenter',()=>{
            instagram.current.childNodes[0].classList.add('w-full')
            instagram.current.childNodes[0].classList.remove('right-0')
            instagram.current.childNodes[0].classList.remove('w-0')
            instagram.current.childNodes[0].classList.add('left-0')
        })
        instagram.current.addEventListener('mouseleave',()=>{
            instagram.current.childNodes[0].classList.remove('w-full')
            instagram.current.childNodes[0].classList.add('right-0')
            instagram.current.childNodes[0].classList.add('w-0')
            instagram.current.childNodes[0].classList.remove('left-0')
        })
        linkedin.current.addEventListener('mouseenter',()=>{
            linkedin.current.childNodes[0].classList.add('w-full')
            linkedin.current.childNodes[0].classList.remove('right-0')
            linkedin.current.childNodes[0].classList.remove('w-0')
            linkedin.current.childNodes[0].classList.add('left-0')
        })
        linkedin.current.addEventListener('mouseleave',()=>{
            linkedin.current.childNodes[0].classList.remove('w-full')
            linkedin.current.childNodes[0].classList.add('right-0')
            linkedin.current.childNodes[0].classList.add('w-0')
            linkedin.current.childNodes[0].classList.remove('left-0')
        })
        youtube.current.addEventListener('mouseenter',()=>{
            youtube.current.childNodes[0].classList.add('w-full')
            youtube.current.childNodes[0].classList.remove('right-0')
            youtube.current.childNodes[0].classList.remove('w-0')
            youtube.current.childNodes[0].classList.add('left-0')
        })
        youtube.current.addEventListener('mouseleave',()=>{
            youtube.current.childNodes[0].classList.remove('w-full')
            youtube.current.childNodes[0].classList.add('right-0')
            youtube.current.childNodes[0].classList.add('w-0')
            youtube.current.childNodes[0].classList.remove('left-0')
        })
    
    }, [flag])
    

  return (
    <>
        <div ref={fullmenu} className='w-full h-[65%] flex flex-wrap p-[35px]'>


            <div className='w-full h-[60%] md:h-[80%] flex items-center '>
                <nav className='w-[55%] md:w-[35%] h-[90%] md:h-[80%] flex flex-wrap'>
                    <ul className='w-full h-full flex flex-wrap'>
                        <li className='w-full h-1/4  overflow-hidden'>
                            <a className='w-full h-full flex relative group' href="#">
                                <div className='w-full h-full flex flex-wrap absolute translate-y-[100%] animate-bottomToTop top-0 left-0'>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] '>H</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.02s]'>o</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.04s]'>m</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.06s]'>e</span>
                                </div>
                                <div className='w-full h-full flex flex-wrap absolute  top-[100%] left-0'>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] '>H</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.02s]'>o</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.04s]'>m</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.06s]'>e</span>
                                </div>
                            </a>
                        </li>
                        <li className='w-full h-1/4  overflow-hidden'>
                            <a className='w-full h-full flex relative group' href="#">
                                <div className='w-full h-full flex flex-wrap absolute translate-y-[100%] animate-bottomToTop2 top-0 left-0'>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] '>A</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.02s]'>b</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.04s]'>o</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.06s]'>u</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.08s]'>t </span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] opacity-0'>t </span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.1s]'> u</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.12s]'>s</span>
                                </div>
                                <div className='w-full h-full flex flex-wrap absolute  top-[100%] left-0'>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] '>A</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.02s]'>b</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.04s]'>o</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.06s]'>u</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.08s]'>t </span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] opacity-0'>t </span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.1s]'> u</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.12s]'>s</span>
                                </div>
                            </a>
                        </li>
                        <li className='w-full h-1/4  overflow-hidden'>
                            <a className='w-full h-full flex relative group' href="#">
                                <div className='w-full h-full flex flex-wrap absolute translate-y-[100%] animate-bottomToTop3 top-0 left-0'>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] '>M</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.02s]'>a</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.04s]'>n</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.06s]'>u</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.08s]'>f</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.1s]'>a</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.12s]'>c</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.14s]'>t</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.16s]'>u</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.18s]'>r</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.2s]'>i</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.22s]'>n</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.24s]'>g</span>
                                </div>
                                <div className='w-full h-full flex flex-wrap absolute  top-[100%] left-0'>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] '>M</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.02s]'>a</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.04s]'>n</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.06s]'>u</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.08s]'>f</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.1s]'>a</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.12s]'>c</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.14s]'>t</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.16s]'>u</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.18s]'>r</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.2s]'>i</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.22s]'>n</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.24s]'>g</span>
                                </div>
                            </a>
                        </li>
                        <li className='w-full h-1/4 overflow-hidden'>
                            <a className='w-full h-full flex relative group' href="#">
                                <div className='w-full h-full flex flex-wrap absolute translate-y-[100%] animate-bottomToTop4 top-0 left-0'>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] '>C</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.02s]'>r</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.04s]'>e</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.06s]'>a</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.08s]'>t</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.1s]'>i</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.12s]'>o</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.14s]'>n</span>
                                    <span className='font-ppm h-full flex items-center text-[#c9c2ac] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.16s]'>s</span>
                                </div>
                                <div className='w-full h-full flex flex-wrap absolute  top-[100%] left-0'>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] '>C</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.02s]'>r</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.04s]'>e</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.06s]'>a</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.08s]'>t</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.1s]'>i</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.12s]'>o</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.14s]'>n</span>
                                    <span className='font-ppm h-full flex items-center text-[#212121] text-[6vw] md:text-[4vw] group-hover:translate-y-[-100%] duration-[0.3s] delay-[0.16s]'>s</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>


            <div className='w-full h-[40%] md:h-[20%] flex items-center '>
                <div className='w-[55%] md:w-[40%] h-[80%]  flex flex-wrap '>

                    <div className='w-full h-1/2 md:w-[40%] md:h-full flex items-center justify-start animate-op opacity-0'>
                        <a href='#' className='w-[85px] h-[25px] lg:w-[130px] lg:h-[25px] flex flex-wrap justify-center rounded-[50px] [border:_1px_solid_#c9c2ac] overflow-hidden relative group cursor-pointer'>
                            <div className='w-full h-full flex flex-wrap absolute top-0 left-0 justify-center'>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] group-hover:translate-y-[-100%]'> c </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.02s] group-hover:translate-y-[-100%]'> o </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.04s] group-hover:translate-y-[-100%]'> n </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.06s] group-hover:translate-y-[-100%]'> t </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.08s] group-hover:translate-y-[-100%]'> a </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.1s] group-hover:translate-y-[-100%]'> c </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.12s] group-hover:translate-y-[-100%]'> t </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] opacity-0'> t </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.14s] group-hover:translate-y-[-100%]'> u </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.16s] group-hover:translate-y-[-100%]'> s </p>
                            </div>
                            <div className='w-full h-full flex flex-wrap absolute top-[100%] left-0 justify-center'>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] group-hover:translate-y-[-100%]'> c </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.02s] group-hover:translate-y-[-100%]'> o </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.04s] group-hover:translate-y-[-100%]'> n </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.06s] group-hover:translate-y-[-100%]'> t </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.08s] group-hover:translate-y-[-100%]'> a </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.1s] group-hover:translate-y-[-100%]'> c </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.12s] group-hover:translate-y-[-100%]'> t </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] opacity-0'> t </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.14s] group-hover:translate-y-[-100%]'> u </p>
                                <p className='flex items-center justify-center uppercase text-[#c9c2ac] font-ppm text-[11px] lg:text-[15px] duration-[0.3s] delay-[0.16s] group-hover:translate-y-[-100%]'> s </p>
                            </div>
                        </a>
                    </div>


                    <div className='w-1/3 h-1/2 md:w-[20%] md:h-full flex items-center justify-start lg:justify-center  animate-op opacity-0'>
                        <p ref={instagram} className='[width:_fit-content] cursor-pointer flex items-center  font-ppm text-[#c9c2ac] relative text-[9px] md:text-[12px]'><span className='w-0 duration-[0.4s] h-[1px] bg-[#c9c2ac] absolute bottom-0 left-0 '></span>Instagram</p>
                    </div>
                    <div className='w-1/3 h-1/2 md:w-[20%] md:h-full flex items-center justify-start lg:justify-center  animate-op opacity-0'>
                        <p ref={linkedin} className='[width:_fit-content] cursor-pointer flex items-center  font-ppm text-[#c9c2ac] relative text-[9px] md:text-[12px]'><span className='w-0 duration-[0.4s] h-[1px] bg-[#c9c2ac] absolute bottom-0 left-0 '></span>LinkedIn</p>
                    </div>
                    <div className='w-1/3 h-1/2 md:w-[20%] md:h-full flex items-center justify-start lg:justify-center  animate-op opacity-0'>
                        <p ref={youtube} className='[width:_fit-content] cursor-pointer flex items-center  font-ppm text-[#c9c2ac] relative text-[9px] md:text-[12px]'><span className='w-0 duration-[0.4s] h-[1px] bg-[#c9c2ac] absolute bottom-0 left-0 '></span>YouTube</p>
                    </div>
                </div>  
            </div>
        </div>
    </>
  )
}

export default Menu