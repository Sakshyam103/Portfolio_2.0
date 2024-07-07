import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home.jsx";
import "./App.css";
import AboutMe from "./AboutMe.jsx";
import Resume from "./Resume.jsx"
import Projects from "./Projects.jsx";
import CoreClasses from "./CoreClasses.jsx";
import Contact from "./Contact.jsx";


function App(){
    return (
        <>
            <Router>
                <div>
                    <Routes>
                        <Route path = "/" element={<Home/>}></Route>
                        <Route path = "/home/about_me" element={<AboutMe/>}></Route>
                        <Route path = "/home/work_experience" element={<Projects/>}></Route>
                        <Route path = "/home/resume" element={<Resume/>}></Route>
                        <Route path = "/home/core_classes" element={<CoreClasses/>}></Route>
                        <Route path="/home/contact" element={<Contact/>}></Route>
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App