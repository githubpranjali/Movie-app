import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asyncloadtv } from '../store/actions/tvAction'
import { removetv } from '../store/reducers/tvSlice'
import Loading from './Loading'
import HorizontalCards from './partials/HorizontalCards'

const TvDetails = () => {
   const {pathname}=useLocation()
      const navigate = useNavigate() 
      const { id } = useParams()
      const dispatch = useDispatch()
      const { info } = useSelector(state => state.tv)
  
      useEffect(() => {
          dispatch(asyncloadtv(id))
          return () => dispatch(removetv())
      }, [id])
      console.log(info)
      
  return info ? (
        <div
            style={{
                background: `linear-gradient(
                    rgba(0,0,0,0.2),
                    rgba(0,0,0,0.5),
                    rgba(0,0,0,0.7)
                ), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="w-screen realtive h-[215vh] px-[10%]" 
        >

            {/* part 1 navigation */}
            <nav className="h-[10vh] items-center w-full text-zinc-100 flex gap-10 text-xl">
                <Link
                    onClick={() => navigate(-1)}
                    className="hover:text-[#6556CD] ri-arrow-left-line"
                />
                <a target="_blank" rel="noreferrer" href={info.details.homepage}>
                    <i className="ri-external-link-line"></i>
                </a>
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
                    href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
                >
                    imdb
                </a>
            </nav>

            {/* part 2 poster */}
            <div className="w-full flex">
                <img

                    className="shadow-[8px_17px_38px_2px_rgba(0,0,0,5)] h-[50vh] object-cover"
                    src={`https://image.tmdb.org/t/p/original/${info.details.poster_path || info.details.backdrop_path}`}
                    alt=""
                />


                <div className='content ml-[5%] text-white '>
                    <h1 className='text-5xl font-black'>
                        {info.details.name || info.details.title || info.details.original_name || info.details.original_title}
                        <small className='text-2xl font-bold text-zinc-300'>
                            ({info.details.first_air_date.split("-")[0]})
                        </small>

                    </h1>

                    <div className=' mt-3  mb-5 flex  items-center gap-x-5 gap-y-10'>
                        <span className=' rounded-full text-xl font-semibold  bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center '>{(info.details.vote_average * 10).toFixed()} <sup>%</sup>
                        </span>
                        <h1 className='w-[60px] font-semibold text-2xl leading-6'>
                            User Score
                        </h1>
                        <h1>{info.details.first_air_date}</h1>
                        <h1>{info.details.genres.map((g) => g.name).join(",")}</h1>
                        <h1>{info.details.runtime}min</h1>
                    </div>

                    <h1 className='text-ms font-semibold italic text-zinc-200'>
                        {info.details.tagline}</h1>

                        <h1 className='text-2xl mb-3 mt-4'>
                        overview</h1>
                        <p>{info.details.overview}</p>

                         <h1 className='w-[80%] text-2xl mb-3 mt-4'>
                        Tv Translated</h1>
                        <p className='mb-5'>{info.translations.join(", ")}</p>
                     
                     <Link className='p-5 bg-[#6556CD] rounded-lg' to={`${pathname}/trailer`}>
                     <i className=" text- xl mr-3 ri-play-fill"></i>
                      Play Trailer </Link>


                </div>
            </div>

            {/* part 3 watch providers */}
            <div className="w-[80%] flex flex-col gap-y-5 mt-10">

                {info.watchproviders && info.watchproviders.flatrate && (
                    <div className="flex gap-x-10 items-center text-white">
                        <h1>Available on Platform</h1>
                        {info.watchproviders.flatrate.map(w => (
                            <img
                                title={w.provider_name}
                                key={w.provider_id}
                                className="w-[5vh] h-[5vh] object-cover rounded-md"
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                alt={w.provider_name}
                            />
                        ))}
                    </div>
                )}

                {info.watchproviders && info.watchproviders.rent && (
                    <div className="flex gap-x-10 items-center text-white">
                        <h1>Available on Rent</h1>

                        {info.watchproviders.rent.map(w => (
                            <img
                                title={w.provider_name}
                                key={w.provider_id}
                                className="w-[5vh] h-[5vh] object-cover rounded-md"
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                alt={w.provider_name}
                            />
                        ))}
                    </div>
                )}

                {info.watchproviders && info.watchproviders.buy && (
                    <div className="flex gap-x-10 items-center text-white">
                        <h1>Available for buy</h1>
                        {info.watchproviders.buy.map(w => (
                            <img
                                title={w.provider_name}
                                key={w.provider_id}
                                className="w-[5vh] h-[5vh] object-cover rounded-md"
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                alt={w.provider_name}
                            />
                        ))}
                    </div>
                )}
            </div>


  {/* {part 4 season} */}
<hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500'/>
         <h1 className='text-3xl font-bold  text-white'>Seasons</h1>
      <div className='w-[100%] flex overflow-y-hidden mb-5 p-5 gap-1'>
        {info.details.seasons.length>0 ? info.details.seasons.map((s,i)=>(
<div className=' w-[15vh] mr-[2%]'>
 <img className=' shadow-[8px_17px_38px_2px_rgba(0,0,0,5)] w-[20vw] h-[30vh] object-cover'
                        src={`https://image.tmdb.org/t/p/original/${s.poster_path 
                            }`} alt="" />

 <h1 className=' text-xl text-zinc-300 mt-3 font-semibold '>
                            {s.name}
                        </h1>
</div>
        )): (
            <h1 className='text-3xl mt-5 text-white font-black text-center'>
                Nothing to show
            </h1>
        )}

      </div>

       {/* part 5 recommendations and similar stuff */}
  <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500'/>
         <h1 className='text-3xl font-bold  text-white'>Recommendations And Similar Stuff</h1>
      <HorizontalCards data= {info.recommendations.length>0 ? info.recommendations : info.similar}/>
       

        </div>
    ) : (
    <Loading />
)
}

export default TvDetails