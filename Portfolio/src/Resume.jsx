function Resume(){

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
        <div className="w-screen h-screen bg-[url('/src/assets/des1.png')] bg-fixed">
            <div className="h-screen m-auto w-[50%] max-[1024px]:w-[80%] max-[480px]:w-[100%] flex flex-col gap-2 bg-gray-300 border-black border-2 p-3 rounded-lg shadow-xl shadow-black">
                {/*<div>*/}
                {/*    <button onClick={downloadFile}>Download</button>*/}
                {/*</div>*/}
                <a className="w-full h-full" href="https://www.cs.oswego.edu/~ssarki/data/Updated%20Resume.pdf"><embed src="https://www.cs.oswego.edu/~ssarki/data/Updated%20Resume.pdf" className="h-[100%] w-[100%]"/></a>
            </div>
        </div>
    )
}


export default Resume;