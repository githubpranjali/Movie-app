import Lottie from "lottie-react";
import Loader from "../assets/Loader.json";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <Lottie 
        animationData={Loader} 
        loop 
        className="w-[800px] h-[800px]"
      />
    </div>
  );
};

export default Loading;