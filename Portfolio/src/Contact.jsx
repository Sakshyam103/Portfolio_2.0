import axios from "axios";


function Contact(){

    const email = async (e) => {
        e.preventDefault();
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        // const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        // const a = `{'fname':${fname}, 'lname':${lname}, 'email':${email}, 'message': ${message}}`
        // const response = await fetch('http://localhost:5000/email',{method:"POST",
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({a})
        // })
        // if (response.ok){
        //     console.log("sent to backend")
        //     var text1 = await response.text();
        //     console.log(text1)
        //
        // }
        const options = {
            method: 'POST',
            url: 'https://rapidmail.p.rapidapi.com/',
            headers: {
                'x-rapidapi-key': 'dddb37562fmsh7c5ff40717f0faap109b44jsn097426c31b34',
                'x-rapidapi-host': 'rapidmail.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            data: {
                ishtml: 'false',
                sendto: 'nepalisakshyam19@gmail.com',
                name: fname + lname,
                replyTo: email,
                title: `Email from ${fname} ${lname}`,
                body: message
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data);
            alert("Email sent successfully!")
        } catch (error) {
            console.error(error);
            alert('Failed to send email.')
        }
    };



    return(
        <div className="w-screen h-screen bg-[url('/src/assets/des1.png')] bg-fixed">
            <div className="h-screen m-auto w-[50%] max-[1024px]:w-[80%] max-[480px]:w-[100%] flex flex-col gap-2 bg-gray-300 border-black border-2 p-3 rounded-lg shadow-xl shadow-black">

                <h1 className="text-center text-4xl text-purple-950 font-bold font-serif italic pt-4 mt-5">Have some question?</h1>
                <h2 className="text-sm text-left p-4">Thank you for your interest in my Portfolio. If you have any questions or suggestions please fill out the form below or e-mail me at <a href="mailto:nepalisakshyam19@gmail.com">nepalisakshyam19@gmail.com</a> and I will get back to you soon.</h2>
                {/*<div className="bg-white w-[95%] mx-auto my-4 h-96 p-4 grid grid-rows-4 grid-cols-2">*/}
                {/*    <div className="col-span-2"><h1 className="text-3xl text-sky-500 border-b-4 border-b-indigo-500">Contact me</h1></div>*/}
                {/*    <div><input/></div>*/}

                {/*</div>*/}
                <div>
                    <form onSubmit={email}>
                        <div className="bg-white w-[95%] mx-auto my-4 h-full p-4 grid grid-rows-5 grid-cols-2 gap-2 shadow-gray-700 shadow-lg">
                            <div className="col-span-2"><h1 className="text-3xl text-sky-500">Contact me</h1>
                                <div className="col-span-2 w-44 h-2 bg-gradient-to-r from-blue-400 to-purple-500 -skew-x-12"></div>
                            </div>
                            <div>
                                <input type="text" id="fname" className="w-full h-10 border-solid border-gray-500 border-2 text-gray-600 pl-4 hover:shadow-lg hover:shadow-blue-400" placeholder= "First Name*"/>
                            </div>
                            <div>
                                <input type="text" id="lname" className="w-full h-10 border-solid border-gray-500 border-2 text-gray-600 pl-4" placeholder="Last Name"/>
                            </div>
                            <div>
                                <input type="text" id="phone" className="w-full h-10 border-solid border-gray-500 border-2 text-gray-600 pl-4" placeholder="Phone*"/>
                            </div>
                            <div >
                                <input type="text" id="email" className="w-full h-10 border-solid border-gray-500 border-2 text-gray-600 pl-4" placeholder="Email*"/>
                            </div>
                            <div className="col-span-2">
                                <input type="text" id="message" className="w-full h-20 border-solid border-gray-500 border-2 text-gray-600 pl-4" placeholder="message"/>
                            </div>
                            <div className="col-span-2 mt-2">
                                <button id="button" type="submit" className="m-auto h-10 w-36 shadow-sm  shadow-indigo-500 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl border-black hover:border-b-4">Send message</button>
                            </div>


                        </div>
                    </form>
                </div>
                <div className="flex w-full">
                    <div className="flex-1 pl-5 m-2 flex flex-row gap-4">
                        <a href="https://www.linkedin.com/in/sakshyam103/"><img className="fill-white bg-white border-white rounded-full border-2 h-7 w-7 hover:scale-110 hover:border-blue-600" src="/src/assets/linkedin.svg"/></a>
                        <a href="https://github.com/Sakshyam103"><img className="fill-white bg-white border-white rounded-full border-2 h-7 w-7 hover:bg-blue-400 hover:scale-110 hover:border-blue-600" src="/src/assets/github.svg"/></a>
                        <a href="https://www.instagram.com/sak_shyam19/"><img className="fill-white bg-white border-white rounded-full border-2 h-7 w-7 hover:bg-blue-400 hover:scale-110 hover:border-blue-600" src="/src/assets/instagram.svg"/></a>
                        <a href="https://www.facebook.com/sakshyam.nepali/"><img className="fill-white bg-white border-white rounded-full border-2 h-7 w-7 hover:bg-blue-400 hover:scale-110 hover:border-blue-600" src="/src/assets/facebook-f.svg"/></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;