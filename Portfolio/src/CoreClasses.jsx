import TypingEffect from "./TypingEffect.jsx";
import {IconCloudDemo} from "@/IconCloud.jsx";
import {useNavigate} from "react-router-dom";

function CoreClasses(){
    const takenClasses = ["Principle of Programming","Foundations of Computer Science", "Abstract Data Types and Programming Methodology", "Ethics and Policy in the Digital Age","Systems Programming","Programming Updates","Data Structures and Algorithms","Software Engineering","Data Base Management Systems","Privacy/Security/Cryptology"]
    const classInProgress = ["Software Deployment","Parallel Computing","Software Quality","Software Design"]
    const navigate = useNavigate();
    return(

        // <div className="w-screen h-screen bg-[url('/assets/des1.png')] bg-fixed">
        //     <div className="h-screen m-auto w-[50%] max-[1024px]:w-[80%] max-[480px]:w-[100%] flex flex-col gap-2 bg-gray-300 border-black border-2 p-3 rounded-lg shadow-xl shadow-black">
        //         <h1 className="text-3xl text-violet-950 text-center font-serif font-bold italic">Core Classes</h1>
        //         <div className="flex flex-row">
        //             <div className="h-full m-3 p-4 bg-white flex-1">
        //                 <h1 className="text-lg text-violet-900 font-serif font-bold">Classes taken</h1>
        //                 <p><TypingEffect text={takenClasses}/></p>
        //             </div>
        //             <div className="h-full m-3 p-4 bg-white flex-12">
        //                 <h2 className="text-lg text-violet-900 font-serif font-bold">Classes in progress</h2>
        //                 <p><TypingEffect text={classInProgress}/> </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="w-screen h-[100vh] bg-[url('/assets/des1.png')] bg-fixed">
            <div className="h-screen m-auto w-[50%] max-[1024px]:w-[80%] max-[480px]:w-[100%] flex flex-col gap-2 bg-cover bg-[url('/assets/opa.png')] border-black border-2 p-3 rounded-lg shadow-xl shadow-black">
                <nav ><button className="h-6 text-center rounded-lg font-bold shadow-2xl shadow-blue-400 w-16 hover:bg-blue-700 bg-blue-600" onClick={()=>navigate("/")}>Back</button></nav>
                <div className="w-full h-auto bg-white rounded-lg shadow-lg shadow-black mx-auto p-5 font-bold">Embarking on the path to becoming a Full Stack Developer has been an incredibly rewarding experience, marked by continuous learning and diverse projects. Throughout this journey, I've had the opportunity to develop a wide array of skills, each contributing to my holistic understanding of web development. Here's a glimpse into the skills I've honed:</div>
                {/*<div className="relative flex h-full w-full max-w-full items-center justify-center overflow-hidden rounded-lg border bg-white bg-background px-20 pb-20 pt-8 ">*/}
                    <IconCloudDemo/>
                {/*</div>*/}
            </div>
        </div>
    )
}

export default CoreClasses;