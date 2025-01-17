import {motion, useMotionValue, useTransform} from "framer-motion";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {animate} from "framer-motion";

function AboutMe(){
     const navigate = useNavigate()
    const [i, setI] = useState(0);
    const title = ["Welcome to my Portfolio", "My name is Sakshyam Sarki"]

    // function onComplete(){
    //     if(i===title.length-1) {
    //         setI(0);
    //     }else{
    //         setI(i+1);
    //     }
    // }




    useEffect(() => {
      const interval = setInterval(()=>{
          setI((prev)=>(prev + 1) % title.length);
      },3000);
      return ()=> clearInterval(interval);
    }, [title.length]);
    // const [pathIndex, setPathIndex] = useState(0);
    // const progress = useMotionValue(pathIndex);
    //
    // useEffect(()=>{
    //     const animation = animate(("#test"., title , {
    //         duration: 0.8,
    //         ease: "easeInOut",
    //         onComplete: ()=> {
    //             if (i === title.length - 1) {
    //                 setI(0)
    //             } else {
    //                 setI(i+1)
    //             }
    //         }
    //     });
    //     return () => animation.stop();
    // },[pathIndex]);
    return(
        <div>
            <div className="w-screen max-[480px]:h-auto max-[1024px]:h-full h-full min-[1024px]:h-full bg-center bg-[url('/assets/des1.png')]">
                <div id="chapter-2" className="m-auto w-[50%] max-[1024px]:w-[80%] max-[480px]:w-fit h-full bg-[url('/assets/opa.png')] bg-cover bg-center bg-white  border-black border-2 rounded-lg shadow-xl shadow-black flex flex-col">
                    <nav className="relative"><button className="h-6 text-center rounded-lg font-bold shadow-2xl m-2 shadow-blue-400 w-16 hover:bg-blue-700 bg-blue-600" onClick={()=>navigate("/")}>Back</button>  <header className="absolute font-Qwitcher text-6xl opacity-100 text-purple-950 right-0 top-0"><em>Sakshyam</em> </header></nav>
                    <div className="grid grid-cols-2 grid-rows-2 m-3 p-3 gap-2 max-[480px]:m-0 max-[480px]:h-80 max-[1024px]:h-[600px] bg-fixed">
                        <motion.h1 animate={{ x: 0, opacity:1 }} initial={{x: -10, opacity: 0}} transition={{ ease: "easeOut", duration: 2 }} className="text-center font-serif max-[1024px]:self-center max-[480px]:text-left font-bold backdrop-blur-md bg-clip-text bg-gradient-to-r from-violet-600 to-blue-800 text-transparent text-6xl drop-shadow-glow max-[1024px]:text-6xl max-[580px]:text-4xl max-[480px]:text-3xl max-[480px]:self-center">Hi, I am <br/>Sakshyam <br/> Sarki</motion.h1>
                        <motion.div animate={{y: 0 ,scale:1}} initial={{y: -10, scale: 0.9}} transition={{ ease: "easeOut", duration: 1 }} className="row-span-2"><img src='/assets/pro.png' alt="profile pic" className='h-full w-full m-auto w-70 border-4 border-blue-500 shadow-blue-500 shadow-lg max-[1023px]:w-full max-[1023px]:h-full'/></motion.div>
                        <motion.h3 initial={{opacity:0}} animate={{opacity: 1}} transition={{duration:1}} className="text-2xl max-[1024px]:text-3xl max-[1024px]:self-center font-serif font-bold h-32 text-blue-950 backdrop-blur-sm drop-shadow-glow self-center text-center max-[820px]:text-3xl max-[480px]:text-lg">Major: Computer Science <br/>  University: SUNY Oswego</motion.h3>
                    </div>
                    <div className="h-auto w-[95%] mx-auto mb-5 p-5 flex flex-row bg-white shadow-lg shadow-black max-[1023px]:mt-20 max-[480px]:mt-5 rounded-xl max-[480px]:flex-col">
                        <div className="flex-1 w-40 max-[480px]:self-center"><img src="/assets/IMG_1193.JPG" alt="profile pic" className="h-32 w-32 max-[1024px]:h-40 max-[1024px]:w-40 rounded-full border-4 border-amber-400 shadow-sm shadow-amber-500"/>  </div>
                        <motion.div animate={{y: 0}} initial={{y: 20}} transition={{ease: "easeInOut", type: "spring" ,duration: 2}} className="font-serif font-bold text-xl w-9/12 max-[1024px]:text-4xl flex-5 h-auto max-[480px]:w-full max-[480px]:text-lg max-[480px]:text-center">I'm a passionate Full Stack Developer with experience in building dynamic web applications from concept to deployment. My expertise spans both front-end and back-end technologies, including JavaScript, React, Node.js, Python, Java, Go, C. I thrive on solving complex problems and creating seamless user experiences.
                        </motion.div>

                    </div>
                    {/*<div className="w-full h-[50%] p-4 relative">*/}
                    {/*    <img src="/src/assets/d.png" alt="about1" className="h-full w-full mr-5 relative"/>*/}
                    {/*    /!*<img src="/src/assets/Speech_bubble.svg" alt="a" className="w-[50%] h-[80%]  absolute top-[10%] right-[0%]"/>*!/*/}
                    {/*        <motion.h1 className="absolute top-[40%] right-3 bg-[#6200ea] text-white font-bold font-serif text-2xl italic">{title[i]}</motion.h1>*/}
                    {/*</div>*/}
                    {/*<div className="px-4 font-serif h-1 text-center font-bold">Chapter 2: About me </div>*/}
                    {/*<div className="w-[95%] h-[50%] p-4 m-4 bg-white rounded-xl shadow-lg shadow-black flex gap-4">*/}
                    {/*    /!*<img src="/src/assets/c.png" alt="about2" className="h-full w-full"/>*!/*/}
                    {/*    <img src="/src/assets/image.png" className="flex-1 w-20 h-20 rounded-full border-2 border-indigo-500" alt="portfolio pic"/>*/}
                    {/*    <motion.div className="flex-4 font-bold italic font-serif text-violet-900 text-xl text-left pt-2">I'm a passionate Full Stack Developer with experience in building dynamic web applications from concept to deployment. My expertise spans both front-end and back-end technologies, including JavaScript, React, Node.js, Python, Java, Go, C. I thrive on solving complex problems and creating seamless user experiences. </motion.div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}



export default AboutMe;