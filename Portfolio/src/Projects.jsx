import "./App.css"
import {useState} from "react";
import TypingEffect from "./TypingEffect.jsx";
function Projects(){

    const [isShown, setIsShown] = useState(false);
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);


    // useEffect(() => {
    //
    //     document.getElementById('div1').addEventListener('mouseenter',()=> setIsShown(true));
    //
    //     return()=>{
    //         document.getElementById('div1').addEventListener('mouseleave',()=>setIsShown(false));
    //     }
    // }, []);


    // document.getElementById('div1').removeEventListener('mouseout',()=>document.getElementById('li1'))



    function makeExperience(a,b,c){
        if(!a || !b || !c) {
            return null;
        }

        return (
            <div>
                <div>
                    <h1 className="text-3xl text-violet-500">{a}</h1>
                    <p className="text-lg text-violet-500">{b}</p>
                    <ul>
                        {<TypingEffect text={c}/>}
                    </ul>
                </div>
            </div>)}






    function header(a){
        return (
            <h1 className="text-6xl text-center text-violet-500 italic font-serif">{a}</h1>

        )
    }

    return (<div className="w-screen h-fit bg-[url('/src/assets/des1.png')] bg-fixed">
        <div className="m-auto w-[50%] max-[1024px]:w-[80%] max-[480px]:w-[100%] h-screen flex flex-col gap-2 bg-gray-300 border-black border-2 p-3 rounded-lg shadow-xl shadow-black">
            <div id="div1" className="h-40 border-2 border-black rounded-lg hover:shadow-2xl text-purple-700 hover:text-purple-900 hover:h-80 bg-black m-3 p-4 overflow-y-hidden" onMouseEnter={()=>(setIsShown(true))} onMouseLeave={()=>(setIsShown(false))}>
                {isShown === false && header("Envisonary Web Application")}
                {isShown===true && makeExperience("Envisonary Web Application", "Software Engineer | Java, Spring Boot, JavaScript, Node.js, MongoDB, Junit testing, Git",["Led the implemetation of critical components within the Weather Prediction branch, focusing on the development of robust mailing classes to facilitate seamless communication and data exchange, resulting in a 90% improvement in data transmission efficiency.","Advanced frontend-backend integration using Node.js and Spring Boot, ensuring efficient communication between the user interface and server-side components, resulting in a 20% reduction in server response time.","Teamed up with 3 class members to deploy the Envisionary web application and successfully finished 80% of the project."])}
            </div>
            <div id="div1"
                 className="h-40 border-2 border-black rounded-lg hover:shadow-2xl text-purple-700 hover:text-purple-900 hover:h-72 bg-black m-3 p-4 overflow-y-hidden"
                 onMouseEnter={() => (setIsShown1(true))} onMouseLeave={() => (setIsShown1(false))}>
                {isShown1 === false && header("Envisonary Web Application")}
                {isShown1 === true && makeExperience("Envisonary Web Application", "Software Engineer | Java, Spring Boot, JavaScript, Node.js, MongoDB, Junit testing, Git", ["Led the implemetation of critical components within the Weather Prediction branch, focusing on the development of robust mailing classes to facilitate seamless communication and data exchange, resulting in a 90% improvement in data transmission efficiency.", "Advanced frontend-backend integration using Node.js and Spring Boot, ensuring efficient communication between the user interface and server-side components, resulting in a 20% reduction in server response time.", "Teamed up with 3 class members to deploy the Envisionary web application and successfully finished 80% of the project."])}
            </div>
            <div id="div1"
                 className="h-40 border-2 border-black rounded-lg hover:shadow-2xl text-purple-700 hover:text-purple-900 hover:h-72 bg-black m-3 p-4 overflow-y-hidden"
                 onMouseEnter={() => (setIsShown2(true))} onMouseLeave={() => (setIsShown2(false))}>
                {isShown2 === false && header("Envisonary Web Application")}
                {isShown2 === true && makeExperience("Envisonary Web Application", "Software Engineer | Java, Spring Boot, JavaScript, Node.js, MongoDB, Junit testing, Git", ["Led the implemetation of critical components within the Weather Prediction branch, focusing on the development of robust mailing classes to facilitate seamless communication and data exchange, resulting in a 90% improvement in data transmission efficiency.", "Advanced frontend-backend integration using Node.js and Spring Boot, ensuring efficient communication between the user interface and server-side components, resulting in a 20% reduction in server response time.", "Teamed up with 3 class members to deploy the Envisionary web application and successfully finished 80% of the project."])}
            </div>
            <div id="div1"
                 className="h-40 border-2 border-black rounded-lg hover:shadow-2xl text-purple-700 hover:text-purple-900 hover:h-72 bg-black m-3 p-4 overflow-y-hidden"
                 onMouseEnter={() => (setIsShown3(true))} onMouseLeave={() => (setIsShown3(false))}>
                {isShown3 === false && header("Envisonary Web Application")}
                {isShown3 === true && makeExperience("Envisonary Web Application", "Software Engineer | Java, Spring Boot, JavaScript, Node.js, MongoDB, Junit testing, Git", ["Led the implemetation of critical components within the Weather Prediction branch, focusing on the development of robust mailing classes to facilitate seamless communication and data exchange, resulting in a 90% improvement in data transmission efficiency.", "Advanced frontend-backend integration using Node.js and Spring Boot, ensuring efficient communication between the user interface and server-side components, resulting in a 20% reduction in server response time.", "Teamed up with 3 class members to deploy the Envisionary web application and successfully finished 80% of the project."])}
            </div>
        </div>
    </div>)
}

export default Projects;