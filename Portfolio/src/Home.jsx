import "./App.css";
import {useNavigate} from "react-router-dom";
import {animate} from "framer-motion";
import {motion} from "framer-motion";

function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <div className="w-screen h-fit bg-[url('/assets/des1.png')] bg-fixed">
                <div className="flex flex-row m-auto">
                    {/*<div  className="w-[5%] h-full flex flex-col justify-items-center content-center text-center">*/}
                    {/*    <button>previous button</button>*/}
                    {/*</div>*/}
                    <div id="chapter-1" className="opacity-90 m-auto w-[50%] max-[1024px]:w-[80%] max-[480px]:w-[100%] grid grid-cols-3 grid-rows-[1fr,auto,1fr,1fr,1fr] gap-2 bg-none border-black border-2 p-3 rounded-lg shadow-xl shadow-black">
                        <div className="col-span-3 border-2 border-black rounded-lg hover:shadow-2xl text-purple-700 hover:text-purple-900 hover:shadow-black bg-black"><button className="h-52 md:h-60 lg:h-72 xl:h-72 w-full bg-black relative" onClick={()=>navigate("home/about_me")}><img src='/assets/IMG_7167.PNG' alt="pic1" className="h-full w-full"/><div className="absolute font-serif font-bold italic text-3xl max-[1350px]:text-3xl max-[480px]:text-lg  top-3 right-2">About me</div></button>
                        </div>
                        <div className="h-3 col-span-3 justify-self-center content-center pl-3 font-bold font-serif italic text-white">Chapter 1: Introduction</div>
                        <div className="col-span-3 border-2 border-black rounded-lg hover:shadow-2xl hover:shadow-black bg-black"><button className="h-52 md:h-60 lg:h-72 xl:h-72 w-full bg-black text-purple-700 hover:text-purple-900 relative" onClick={()=>navigate("home/work_experience")}><img src="/assets/IMG_7167.PNG" alt="pic2" className="h-full w-full object-fill"/><div className="absolute font-serif font-bold italic text-3xl max-[1350px]:text-3xl max-[480px]:text-lg top-3 right-2">Projects</div></button></div>
                        <motion.div className="h-full w-full border-2 border-black rounded-lg hover:shadow-2xl hover:shadow-black bg-black"><motion.button className="h-52 md:h-60 lg:h-72 xl:h-72 w-full bg-black text-purple-700 hover:text-purple-900 relative" onClick={()=> animate({opacity: 1}, {opacity: 0})}><img src="/assets/IMG_7166.PNG" alt="pic3" className="h-full w-full"/><div className="absolute font-serif font-bold italic text-3xl max-[1350px]:text-3xl max-[480px]:text-lg top-3 right-2">Research</div></motion.button></motion.div>
                        <div className="h-full w-full border-2 border-black rounded-lg hover:shadow-2xl hover:shadow-black bg-black"><button className="h-52 md:h-60 lg:h-72 xl:h-72 w-full bg-black text-purple-700 hover:text-purple-900 relative" onClick={()=>navigate("home/resume")}><img src="/assets/IMG_7168.PNG" alt="pic4" className="h-full w-full"/><div className="absolute font-serif font-bold italic text-3xl max-[1350px]:text-3xl max-[480px]:text-lg top-3 right-2">Resume</div></button></div>
                        <div className="h-full w-full border-2 border-black rounded-lg hover:shadow-2xl hover:shadow-black bg-black"><button className="h-52 md:h-60 lg:h-72 xl:h-72 w-full bg-black text-purple-700 hover:text-purple-900 relative" onClick={()=>navigate("home/core_classes")}><img src="/assets/IMG_7169.PNG" alt="pic5" className="h-full w-full"/><div className="absolute font-serif font-bold italic text-3xl max-[1350px]:text-3xl max-[480px]:text-lg top-3 right-2">Core Classes</div></button></div>
                        {/*<div className="h-full w-full"><img src="src/assets/IMG_7167.PNG" alt="pic1" className="hover:size-2 h-full w-full"/></div>*/}
                        {/*<div className="h-full w-full"><img src="src/assets/IMG_7168.PNG" alt="pic2" className="hover:size-2 h-full w-full"/></div>*/}
                        {/*<div className="h-full w-full"><img src="src/assets/IMG_7169.PNG" alt="pic3" className="hover:size-2 h-full w-full"/></div>*/}
                        <div className="col-span-3 border-2 border-black rounded-lg hover:shadow-2xl hover:shadow-black bg-black text-blue-300 hover:text-violet-500"><button className="h-52 md:h-60 lg:h-72 xl:h-72 w-full bg-black text-purple-700 hover:text-purple-900 relative" onClick={()=>navigate("home/contact")}><img src="/assets/IMG_7170.PNG" alt="pic6" className="h-full w-full"/><div className="absolute font-serif font-bold italic text-3xl max-[1350px]:text-3xl max-[480px]:text-lg top-3 right-2">Contact Me</div></button></div>
                    </div>
                    {/*<div id="next-button" className="w-[5%]">*/}
                    {/*    <button>next button</button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default Home;