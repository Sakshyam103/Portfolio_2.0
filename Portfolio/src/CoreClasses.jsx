import TypingEffect from "./TypingEffect.jsx";

function CoreClasses(){
    const takenClasses = ["Principle of Programming","Foundations of Computer Science", "Abstract Data Types and Programming Methodology", "Ethics and Policy in the Digital Age","Systems Programming","Programming Updates","Data Structures and Algorithms","Software Engineering","Data Base Management Systems","Privacy/Security/Cryptology"]
    const classInProgress = ["Software Deployment","Parallel Computing","Software Quality","Software Design"]
    return(

        <div className="w-screen h-screen bg-[url('/src/assets/des1.png')] bg-fixed">
            <div className="h-screen m-auto w-[50%] max-[1024px]:w-[80%] max-[480px]:w-[100%] flex flex-col gap-2 bg-gray-300 border-black border-2 p-3 rounded-lg shadow-xl shadow-black">
                <h1 className="text-3xl text-violet-950 text-center font-serif font-bold italic">Core Classes</h1>
                <div className="flex flex-row">
                    <div className="h-full m-3 p-4 bg-white flex-1">
                        <h1 className="text-lg text-violet-900 font-serif font-bold">Classes taken</h1>
                        <p><TypingEffect text={takenClasses}/></p>
                    </div>
                    <div className="h-full m-3 p-4 bg-white flex-12">
                        <h2 className="text-lg text-violet-900 font-serif font-bold">Classes in progress</h2>
                        <p><TypingEffect text={classInProgress}/> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoreClasses;