import React, { useRef, useEffect, useState } from 'react'
import Section1 from './toppage/section1'
import Section2 from './videosection/section2'
import Section4 from './section4/section4'
import Section5 from './section5/section5'
import Footer from './footer/footer'


function Body({ flag }) {
  const body = useRef()
  const [st , setSt] = useState()
  useEffect(() => {
    body.current.addEventListener('scroll',()=>{
      let st = body.current.scrollTop
      seter(st)
    })
    if (flag) {
      body.current.classList.add('w-full')
      body.current.classList.add('top-0')
      body.current.classList.remove('w-[96%]')
      body.current.classList.remove('top-[65%]')
      body.current.classList.remove('right-[2%]')
      setTimeout(() => {
        body.current.classList.remove('scrollbar-none')
      }, 1000);
    } else {
      body.current.classList.remove('w-full')
      body.current.classList.remove('top-0')
      body.current.classList.add('w-[96%]')
      body.current.classList.add('top-[65%]')
      body.current.classList.add('right-[2%]')
      body.current.classList.add('scrollbar-none')
    }
  }, [flag])
  
  function seter(x){
    setSt(x)
  }

  return (
    <>
      <div ref={body} className='w-full h-full bg-[#212121]  fixed top-0 right-0 flex flex-wrap duration-[1s]  overflow-y-scroll'>
        <Section1></Section1>
        <Section2 body={body} st={st}></Section2>
        <Section4 st={st}></Section4>
        <Section5 st={st}></Section5>
        <Footer st={st}></Footer>
      </div>
    </>
  )
}

export default Body