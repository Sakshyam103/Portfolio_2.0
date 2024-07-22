import {useNavigate} from "react-router-dom";

function Resume(){
    const navigate1 = useNavigate();

    function downloadFile(){
        const link = document.createElement('a');
        link.href = "https://www.cs.oswego.edu/~ssarki/data/Updated%20Resume.pdf";
        link.download = "Resume.pdf";
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div className="w-screen h-screen bg-[url('/assets/des1.png')] bg-fixed">
            <div className="h-screen m-auto w-[50%] max-[1024px]:w-[80%] max-[480px]:w-[100%] flex flex-col gap-2 bg-cover bg-[url('/assets/opa.png')] border-black border-2 p-3 rounded-lg shadow-xl shadow-black">
                <nav ><button className="h-6 text-center rounded-lg font-bold shadow-2xl shadow-blue-400 w-16 hover:bg-blue-700 bg-blue-600" onClick={()=>navigate1("/")}>Back</button></nav>
                {/*<div>*/}
                {/*    <button onClick={downloadFile}>Download</button>*/}
                {/*</div>*/}
                <a className="w-full h-full" href="https://www.cs.oswego.edu/~ssarki/data/Updated%20Resume.pdf"><embed src="https://www.cs.oswego.edu/~ssarki/data/Updated%20Resume.pdf" className="h-[100%] w-[100%]"/></a>
            </div>
        </div>
    )
}


export default Resume;