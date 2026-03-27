import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asyncloadperson } from '../store/actions/personActions'
import { removeperson } from '../store/reducers/personSlice'
import Loading from './Loading'
import HorizontalCards from './partials/HorizontalCards'
import Dropdown from './partials/Dropdown'

const PersonDetails = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()
  const { info } = useSelector(state => state.person)
  const [category, setcategory] = useState("movie")


  useEffect(() => {
    dispatch(asyncloadperson(id))
    return () => dispatch(removeperson())
  }, [id])
  console.log(info);
  return info ?
    <div className='p-[15%] pt-[2%] w-screen bg-[#1F1E24] h-[200vh] '>
      {/* part 1 navigation */}
      <nav className=" h-[10vh] items-center w-full text-zinc-100 flex gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        />
      </nav>
      <div className='w-full flex '>
        {/* part 2 left poster and details  */}
        <div className='w-[30%]'>
          <img

            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,5)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.details.profile_path}`}
            alt=""
          />

          <hr className='w-[195px] mt-10 mb-5 border-none h-[2px] bg-zinc-500' />
          {/* social media links */}
          <div className='text-2xl text-white flex gap-x-5'>
            <a

              target="_blank"
              rel="noreferrer"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-line"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>
          {/* personal informations */}
          <h1 className='text-2xl text-zinc-400 font-semibold my-3'>Personal Info</h1>
          <h1 className='text-lg text-zinc-400 font-semibold '>Known For</h1>
          <h1 className=' text-zinc-400 '>{info.details.known_for_department}</h1>
          <h1 className='text-lg text-zinc-400 font-semibold mt-2 '>Gender</h1>
          <h1 className=' text-zinc-400 '>{info.details.gender === 2 ? "Male" : "Female"}</h1>
          <h1 className='text-lg text-zinc-400 font-semibold mt-2 '>Birthday</h1>
          <h1 className=' text-zinc-400 '>{info.details.birthday}</h1>

          <h1 className='text-lg text-zinc-400 font-semibold mt-2 '>Deathday</h1>
          <h1 className=' text-zinc-400 '>{info.details.deathday ? info.details.deathday : "Still alive"}</h1>
          <h1 className='text-lg text-zinc-400 font-semibold mt-2 '>Place Of Birth</h1>
          <h1 className=' text-zinc-400 '>{info.details.place_of_birth}</h1>
          <h1 className='text-lg text-zinc-400 font-semibold mt-2 '>Also Known As</h1>
          <h1 className=' text-zinc-400 '>{info.details.also_known_as.join(", ")}</h1>
        </div>
        {/* part3 write details and information */}
        <div className="w-[80%] ml-[5%]">
          <h1 className='text-6xl text-zinc-400 font-black my-3'>{info.details.name}</h1>
          <h1 className='text-xl text-zinc-400 font-semibold '>Biography</h1>
          <p className='text-zinc-400 mt-3 '>{info.details.biography}</p>

          <h1 className='mt-5 text-lg text-zinc-400 font-semibold'>Known For</h1>
          <HorizontalCards data={info.combinedCredits.cast} />

          <div className='w-full flex justify-between'>
            <h1 className='mt-5 text-xl text-zinc-400 font-semibold'>
              Acting
            </h1>
            <Dropdown
              title="category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />

          </div>

          <div className='list-disc text-zinc-400 w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5'>
           {info[category + "Credits"].cast.map((c,i)=>(
            <li 
            key={i}
            className='hover:text-white duration-300 cursor-pointer p-5'>
           <Link
           to={`/${category}/details/${c.id}`}>
           
           <span className=''>
            {" "}
            {
              c.name ||
              c.title||
              c.original_name||
              c.original_title
            }
            </span>
            <span className='block ml-5 mt-2'>
            { c.character && `Character Name: ${c.character}`}
            </span>
            </Link>
           
            </li>
           ))}
          </div>
        </div>
      </div>
    </div> : (<Loading />)

}

export default PersonDetails