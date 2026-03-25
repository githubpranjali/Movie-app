import React from 'react'
import  ReactPlayer from "react-player"
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
const Trailer = () => {
    const { pathname } = useLocation()
     const category = pathname.includes("movie")?"movie":"tv"
    const ytvedio  =useSelector((state)=>state[category].info.vedios);
   console.log(ytvedio)
// console.log( pathname.includes("movie"), ytvedio)
  return (
    <div className='bg-[rgba(0,0,0,.9)] absolute top-0 left-0 z-[100] w-screen h-screen flex justify-center items-center'>
        <ReactPlayer 
        height={1080}
        width={1920}
        url={`https://www.youtube.com/watch?v=${ytvedio.key}`}/>
    </div>
  )
}

export default Trailer