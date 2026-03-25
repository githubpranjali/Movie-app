
import { Link } from 'react-router-dom'
const Sidenav = () => {
    return (
       
        <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
            <h1 className='text-2xl text-white font-bold'>
                <i class="text-[#6556CD] mr-2 ri-tv-fill"></i>
                <span className='text-2xl'>SCSDB</span>
            </h1>
            <nav className='flex text-zinc-400 text-xl gap-2 flex-col'>
                <h1 className='text-white font-semibold mt-8 mb-3 text-xl'>
                    New Feeds
                </h1>
                <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
                <i class="ri-fire-fill"></i> Trending</Link>
                <Link to="/popular" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
                <i class="ri-bard-fill"></i> Popular</Link>
                <Link to="/tvshows" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
                <i class="ri-tv-2-fill"></i> Tv Show</Link>
                <Link to="/movie" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
                <i class="ri-movie-2-ai-fill"></i> Movie</Link>
                <Link to="/people" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
                <i class="ri-team-fill"></i> People</Link>
            </nav>
            <hr className='border-none h-[1px] bg-zinc-400'/>
            <nav className='flex text-zinc-400 text-xl gap-2 flex-col'>
                <h1 className='text-white font-semibold mt-8 mb-3 text-xl'>
                    Website Information
                </h1>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
                <i class="ri-information-2-fill"></i> About </Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
                <i class="ri-phone-fill"></i> Contat Us</Link>
                
            </nav>
        </div>
    )
}

export default Sidenav