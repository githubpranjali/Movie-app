import React, { useEffect, useState } from 'react'
import axios from "../../utils/axios"
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpeg'

const Topnav = () => {
    const [query, setquery] = useState("")
    const [searches, setsearches] = useState([])
    const Getsearches=async()=>{
      try{
    const {data}=await axios.get( `/search/multi?query=${query}`);
     setsearches(data.results)
      }catch(error){
        console.log("Error",error)
      }
    }
    useEffect(()=>{
      Getsearches();
    },[query])
    
    
  return (
   
    <div className='w-[80%] h-[10vh] relative flex mx-auto  items-center'>
      <i class="text-zinc-400 text-3xl ri-search-2-line"></i>
      <input 
      onChange={(e)=>{setquery(e.target.value)}}
      value={query}
      className='w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent' 
      type="text" 
      placeholder='Search anything'/>
      {query.length>0 && (<i 
      onClick={()=>setquery("")}
      class=" text-zinc-400 text-2xl ri-close-fill right-0"></i>)}
      
      <div className=' z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto'>
      {searches.map((s,i)=>(
       <Link 
      to={`/${s.media_type}/details/${s.id}`}

       key={i}
       className=' hover:text-black hover:bg-zinc-300 duration-300 font:semibold text-zinc-600 w-[100%] p-8 flex justify-start items-center border-b-2 border-zinc-100'>
       <img
       className='w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg'
       src={
        s.backdrop_path || s.profile_path ?
        `https://image.tmdb.org/t/p/original/${s.backdrop_path || 
       s.profile_path}`:noimage } alt="" />
       <span>{s.name || s.title || s.original_name|| s.original_title} </span>
       </Link> 
      ))
      }
       
      </div>
    </div>
  )
}

export default Topnav