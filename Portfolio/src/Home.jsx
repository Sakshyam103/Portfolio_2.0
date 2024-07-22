import "./App.css";
import {useNavigate} from "react-router-dom";
import {animate} from "framer-motion";
import {motion} from "framer-motion";

function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <div className="w-screen h-fit bg-[url('/assets/des1.png')] bg-fixed">
                <div className="flex flex-row m-auto max-[480px]:text-md">
                    {/*<div  className="w-[5%] h-full flex flex-col justify-items-center content-center text-center">*/}
                    {/*    <button>previous button</button>*/}
                    {/*</div>*/}
                    <div id="chapter-1" className="opacity-90 m-auto w-[50%] max-[1024px]:w-[80%] max-[480px]:w-[100%] grid grid-cols-3 grid-rows-[1fr,auto,1fr,1fr,1fr] gap-2 bg-none border-black border-2 p-3 rounded-lg shadow-xl shadow-black">
                        <div className="col-span-3 border-2 border-black rounded-lg hover:shadow-2xl hover:border-4 hover:shadow-black bg-black"><button className="h-52 md:h-60 lg:h-72 xl:h-72 hover:text-4xl max-[480px]:text-md text-red-900 hover:text-black w-full bg-black relative" onClick={()=>navigate("home/about_me")}><img src='/assets/IMG_7167.PNG' alt="pic1" loading="lazy" className="h-full w-full"/><div className="absolute font-serif font-bold italic backdrop-blur-3xl border-2 border-white text-3xl max-[1350px]:text-3xl max-[480px]:text-lg  top-0 right-0">About me</div>
                            {/*<div className="absolute top-10 right-0 h-10"><img src="/assets/icons8-click.gif" className="h-16 w-16 bg-green-400" alt="click me"/> </div>*/}
                        </button>
                        </div>
                        <div className="h-3 col-span-3 justify-self-center content-center pb-2 pl-3 font-bold font-serif italic text-white">Chapter 1: Introduction</div>
                        <div className="col-span-3 border-2 border-black rounded-lg hover:shadow-2xl hover:border-4  hover:shadow-black bg-black"><button className="h-52 md:h-60 lg:h-72 xl:h-72 w-full bg-black text-red-900 hover:text-black relative" onClick={()=>navigate("home/work_experience")}><img src="/assets/IMG_7167.PNG" alt="pic2" loading="lazy" className="h-full w-full object-fill"/><div className="absolute font-serif font-bold italic backdrop-blur-3xl border-2 border-white text-3xl max-[1350px]:text-3xl max-[480px]:text-lg top-0 right-0">Projects</div></button></div>
                        <motion.div className="h-full w-full border-2 border-black rounded-lg hover:shadow-2xl hover:border-4  hover:shadow-black bg-black"><motion.button className="h-52 md:h-60 lg:h-72 xl:h-72 w-full bg-black text-red-900 hover:text-black relative" onClick={()=> navigate("home/research")}><img src="/assets/IMG_7166.PNG" loading="lazy" alt="pic3" className="h-full w-full"/><div className="absolute font-serif font-bold italic backdrop-blur-3xl border-2 border-white text-3xl max-[1350px]:text-3xl max-[480px]:text-lg top-0 right-0">Research</div></motion.button></motion.div>
                        <div className="h-full w-full border-2 border-black rounded-lg hover:shadow-2xl hover:border-4  hover:shadow-black bg-black"><button className="h-52 md:h-60 lg:h-72 xl:h-72 w-full bg-black text-red-900 hover:text-black relative" onClick={()=>navigate("home/resume")}><img src="/assets/IMG_7168.PNG" alt="pic4" loading="lazy" className="h-full w-full"/><div className="absolute font-serif font-bold italic text-3xl max-[1350px]:text-3xl backdrop-blur-3xl border-2 border-white max-[480px]:text-lg top-0 right-0">Resume</div></button></div>
                        <div className="h-full w-full border-2 border-black rounded-lg hover:shadow-2xl hover:border-4  hover:shadow-black bg-black"><button className="h-52 md:h-60 lg:h-72 xl:h-72 w-full bg-black text-red-900 hover:text-black relative" onClick={()=>navigate("home/core_classes")}><img src="/assets/IMG_7169.PNG" loading="lazy" alt="pic5" className="h-full w-full"/><div className="absolute font-serif font-bold italic text-3xl max-[1350px]:text-3xl backdrop-blur-3xl border-2 border-white max-[480px]:text-lg top-0 right-0">Skills</div></button></div>
                        {/*<div className="h-full w-full"><img src="src/assets/IMG_7167.PNG" alt="pic1" className="hover:size-2 h-full w-full"/></div>*/}
                        {/*<div className="h-full w-full"><img src="src/assets/IMG_7168.PNG" alt="pic2" className="hover:size-2 h-full w-full"/></div>*/}
                        {/*<div className="h-full w-full"><img src="src/assets/IMG_7169.PNG" alt="pic3" className="hover:size-2 h-full w-full"/></div>*/}
                        <div className="col-span-3 border-2 border-black rounded-lg hover:shadow-2xl hover:shadow-black hover:border-4  bg-black text-blue-300 hover:text-violet-500"><button className="h-52 md:h-60 lg:h-72 xl:h-72 w-full bg-black text-red-900 hover:text-black relative" onClick={()=>navigate("home/contact")}><img src="/assets/IMG_7170.PNG" loading="lazy" alt="pic6" className="h-full w-full"/><div className="absolute font-serif font-bold italic backdrop-blur-3xl border-2 border-white text-3xl max-[1350px]:text-3xl max-[480px]:text-lg top-0 right-0">Contact Me</div></button></div>
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