import "./App.css"
import {useState} from "react";
import TypingEffect from "./TypingEffect.jsx";
import {useNavigate} from "react-router-dom";
function Projects(){

    const [isShown, setIsShown] = useState(false);
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const navigate = useNavigate();


    // useEffect(() => {
    //
    //     document.getElementById('div1').addEventListener('mouseenter',()=> setIsShown(true));
    //
    //     return()=>{
    //         document.getElementById('div1').addEventListener('mouseleave',()=>setIsShown(false));
    //     }
    // }, []);


    // document.getElementById('div1').removeEventListener('mouseout',()=>document.getElementById('li1'))



    function makeExperience(a,b,c,d){
        if(!a || !b || !c || !d) {
            return null;
        }

        return (
            <div>
                <div>
                    <h1 className="text-3xl text-blue-700">{a}</h1>
                    <p className="text-lg text-blue-700">{b}</p>
                    <p className="text-lg text-blue-700">{c}</p>
                    <ul className="text-blue-500">
                        {<TypingEffect text={d}/>}
                    </ul>
                </div>
            </div>)}






    function header(a){
        return (
            <h1 className="text-6xl text-center text-blue-800 italic font-serif">{a}</h1>

        )
    }

    return (<div className="w-screen h-full bg-[url('/assets/des1.png')]">
        <div className="m-auto w-[50%] max-[1024px]:w-[80%] max-[480px]:w-[100%] h-full flex flex-col gap-2 bg-cover bg-[url('/assets/opa.png')] border-black border-2 p-3 rounded-lg shadow-xl shadow-black bg-fixed">
            <nav ><button className="h-6 text-center rounded-lg font-bold shadow-2xl shadow-blue-400 w-16 hover:bg-blue-700 bg-blue-600" onClick={()=>navigate("/")}>Back</button></nav>
            <div id="div1" className="h-full border-2 border-black rounded-lg hover:shadow-2xl text-blue-700 hover:text-purple-900 hover:h-auto bg-black m-3 p-4" onMouseEnter={()=>(setIsShown(true))}  onMouseLeave={() => (setIsShown(false))}>
                {isShown === false && header("International Student Technology Intern")}
                {isShown===true && makeExperience("International Student Technology Intern", "Frontend Development | React, Vite, Javascript","Objective: To develop interactive and user-friendly Optional Practical Training (OPT) and Curriculum Practical Training (CPT) checker tools.",["Contributed to identify the challenge faced by the department in dealing with hundreds of student inquiries related to OPT and CPT eligibility.","Spearheaded the development of interactive and seamless OPT and CPT eligibility checker web application that was integrated into the official SUNY Oswego website.","Increased user satisfaction and streamlined information retrieval for both students and administrative personnel by increasing the participation of more than 300 international students and getting positive responses from other universities."])}
            </div>
            <div id="div1"
                 className="h-full border-2 border-black rounded-lg hover:shadow-2xl text-blue-500-700 hover:text-purple-900 bg-black m-3 p-4"
                 onMouseEnter={() => (setIsShown1(true))} onMouseLeave={() => (setIsShown1(false))}>
                {isShown1 === false && header("Software Engineering Project")}
                {isShown1 === true && makeExperience("Software Engineering Project", "Envisionary Web Application | Java, Spring Boot, JavaScript, Node.js, MongoDB, Junit testing, Git", "Objective: Aiming to build a robust, scalable, and user-centric Envisionary Web application to predict weather, sports, movies, and planets with statistical data and notification in a team of 4 students.", ["Implemented critical components within the Weather Prediction using API, focusing on the development of vigorous mailing classes to facilitate seamless communication and data exchange.", "Advanced frontend-backend integration using Spring Boot and ensured efficient communication between the user interface and server-side components.", "Deployed the Envisionary web application, finishing 90% of the project along with different testing procedures."])}
            </div>
            <div id="div1"
                 className="h-full border-2 border-black rounded-lg hover:shadow-2xl text-blue-700 hover:text-purple-900 bg-black m-3 p-4"
                 onMouseEnter={() => (setIsShown2(true))} onMouseLeave={() => (setIsShown2(false))}>
                {isShown2 === false && header("Data Structure and Algorithm Project")}
                {isShown2 === true && makeExperience("Data Structure and Algorithm Project", "Web Scraper | Java, JSoup, GUI", "Objective: To compare more than 200 Wikipedia pages using different algorithms throughout a semester",["Prepared a clear and concise concept of similarity metrics and all the algorithms needed to complete the project with attention to details.", "Initiated with Java, Wikipedia pages, and the JSoup framework to extract text and establish a custom similarity metric based on frequency tables, and advanced with clustering and Dijkstra algorithms for better results.", "Completed a fully functional GUI-based interface that recommends similar websites based on user input, which was 100% accurate."])}
            </div>
            <div id="div1"
                 className="h-full border-2 border-black rounded-lg hover:shadow-2xl text-blue-700 hover:text-purple-900 bg-black m-3 p-4"
                 onMouseEnter={() => (setIsShown3(true))} onMouseLeave={() => (setIsShown3(false))}>
                {isShown3 === false && header("International Student and Scholar Services")}
                {isShown3 === true && makeExperience("International Student and Scholar Services", "Automation | Python, Glob, Pandas", "Objective: To automate and streamline manual processes.", ["Worked with supervisor to see automated solution instead of manually emailing scanned documents to more than 300 students.", "Optimized a robust solution for searching file locations using the Glob module and integrated PyPDF reader functionalities to enhance the efficiency and accuracy of file processing, reducing manual errors and increasing productivity by 70%.", "Instituted an automated email system using SMTP server to distribute processed files, resulting in an 80% reduction in manual email processing time."])}
            </div>
        </div>
    </div>)
}

export default Projects;