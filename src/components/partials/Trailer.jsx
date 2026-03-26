import React from 'react'
import  ReactPlayer from "react-player"
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NotFound from '../Notfound'


const Trailer = () => {
  const navigate=useNavigate()
    const { pathname } = useLocation()
     const category = pathname.includes("movie")?"movie":"tv"
    const ytvedio  =useSelector((state)=>state[category].info.vedios);


  return (
  
    <div className='bg-[rgba(0,0,0,.9)] absolute top-0 left-0 z-[100] w-screen h-screen flex justify-center items-center'>
          <Link
                    onClick={() => navigate(-1)}
                    className="absolute hover:text-[#6556CD] ri-close-fill text-3xl text-white right-[5%] top-[5%]"
                >
                  </Link>
       {ytvedio ?(<ReactPlayer 
       controls
        height={600}
        width={1300}
        src={`https://www.youtube.com/watch?v=${ytvedio.key}`}/>
       ):(<NotFound/>)}
    </div>
    
  )
}

export default Trailer