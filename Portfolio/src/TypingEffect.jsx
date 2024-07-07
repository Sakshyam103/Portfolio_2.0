import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
function TypingEffect({text}) {
    const [displayedText, setDisplayedText] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const[typingIndex, setTypingIndex] = useState(0);
    useEffect(()=>{
        // eslint-disable-next-line react/prop-types
        if(currentIndex<text.length) {
            // eslint-disable-next-line react/prop-types
            if (typingIndex < text[currentIndex].length) {
                const timeout = setTimeout(()=>{
                    setDisplayedText((prev)=>{
                        const newTextArray = [...prev];
                        newTextArray[currentIndex] = (newTextArray[currentIndex] || "") + text[currentIndex][typingIndex];
                        return newTextArray;
                    });
                    setTypingIndex((prev) => prev + 1);
                }, 1);
                return ()=> clearTimeout(timeout);
            }else{
                const timeout = setTimeout(()=>{
                    setCurrentIndex((prevState) => prevState + 1);
                    setTypingIndex(0);
                },500);
                return () => clearTimeout(timeout);
            }
            // const timeout = setTimeout(() => {
            //     setDisplayedText(prev => prev + text[currentIndex]);
            //     setCurrentIndex(prev => prev + 1);
            // }, 30);
            // return () => clearTimeout(timeout);
        }


    },[typingIndex, currentIndex, text]);

    // useEffect(() => {
    //     let index = 0;
    //     const type = () => {
    //         if (index < text.length) {
    //             setDisplayedText((prev) => prev + text[index]);
    //             index++;
    //             setTimeout(type, 500);
    //         }
    //     };
    //     setDisplayedText('');
    //     type();
    //     return () => {
    //         setDisplayedText('');
    //     };
    // }, [text]);
    return (<div>{displayedText.map((line,index)=>(<div key={index}>{line}</div> ))}</div>);
}

export default TypingEffect;
