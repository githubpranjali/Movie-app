import Loader from '/Loader.jpeg'

const Loading = () => {
   
  return (
   
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <img className="h-[50%] object-cover bg-transparent " src={Loader} alt="" />
    </div>
  )
}

export default Loading