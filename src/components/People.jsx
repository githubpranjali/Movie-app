import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from '../utils/axios';
import Loading from './Loading'
import Topnav from './partials/Topnav'

import InfiniteScroll from "react-infinite-scroll-component";  
import Cards from './partials/Cards'

const People = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("popular")
    
    const [people, setpeople] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title="people "+category.toUpperCase();

     const GetPeople = async () => {
        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`);
              console.log(data);
            if(data.results.length >0){
              setpeople((prevState)=>[...prevState, ...data.results])
             setpage(page+1)
            }else{
               sethasMore(false)
            }
           
           
        } catch (error) {
            console.log("Error", error)
        }
    }
    
      const refreshHandler=  ()=>{
        if(people.length===0){
            GetPeople()
        }else{
            setpage(1)
            setpeople([])
            GetPeople()
        }
      }
      

    useEffect(() => {
        refreshHandler()
    }, [category])

    return people.length>0 ? (
        <div className=' w-screen h-screen '>

            <div className='px-[5%] w-full flex items-center justify-between'>

                <h1 className=' text-2xl text-zinc-400 font-semibold'>
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line"></i> 
                        People
                </h1>
                <div className='flex items-center w-[80%]'>
                    <Topnav />
                   
                    <div className='w-[2%]'></div>
                    
                </div>
            </div>
            <InfiniteScroll
            dataLength={people.length}
            next={GetPeople}
            hasMore={hasMore}
            loader={<h1> Loading.... </h1>}
            >
                 <Cards data={people} title="person" />
            </InfiniteScroll>
           

        </div>
    ) : (
     <Loading/>
    )
}

export default People