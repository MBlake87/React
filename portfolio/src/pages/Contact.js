
import { useEffect, useState, useRef, React } from "react";
import linkedIcon from "../images/linkedin.png"
import emailjs from "@emailjs/browser"
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Button,
    CloseButton,
} from '@chakra-ui/react'
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import { Link } from "react-router-dom";

export function Contact() {

    const handleWindowSizeChange = () => {
        if (window.screen.width < 768) {
            enableBodyScroll(document)
        } else {
            disableBodyScroll(document)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        if (window.screen.width > 768) { disableBodyScroll(document) } else { enableBodyScroll(document) }
        return () => {

            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);



    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [alert, setAlert] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_TOKEN, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_PUBLIC)
            .then((result) => {
                setAlert(true)
                setFormData({ name: "", email: "", message: "" })
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>

            {alert &&
                <Alert status='success'>
                    <AlertIcon />
                    <AlertTitle>Message Sent!</AlertTitle>
                    <AlertDescription>Thank you for your message.</AlertDescription>
                    <CloseButton position="absolute"
                        right="1"
                        top="0"
                        size="lg"
                        onClick={() => setAlert(false)}
                    />
                </Alert>}
            <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black w-full h-full xl:h-screen flex flex-col " >
                <div className="w-full flex flex-col items-center text-center">
                    <h1 className="text-white font-Roboto text-[3rem]">Contact Me....</h1>
                    <p className="text-white font-Roboto text-[2rem]">Connect with me via my LinkedIn or submit the form below to get started.</p>
                    <Link to="http://www.linkedin.com/in/mark-blake-7493131a3"><img className="aspect-auto w-20" src={linkedIcon} alt="linkedIn" /></Link>

                </div>
                <form ref={form} onSubmit={sendEmail} className="items-center  m-auto mt-5 flex flex-col p-3 mb-5 w-[90vw] xl:w-auto h-[70vh] border border-white rounded-lg bg-slate-800">

                    <label htmlFor="name" className="text-white  text-[2rem] font-Roboto w-[85vw] xl:w-[100%] " >Name:</label>
                    <input type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} name="from_name" id="name" className="border border-black text-[2rem] pl-2 font-Roboto w-[85vw] xl:w-[100%]" required />

                    <label htmlFor="email" className="text-white text-[2rem] w-[85vw] xl:w-[100%]" >Email:</label>
                    <input type="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} name="from_email" id="email" className="border border-black text-[2rem] pl-2 font-Roboto w-[85vw] xl:w-[100%]" required />

                    <label htmlFor="message" className="text-white text-[2rem] font-Roboto w-[85vw] xl:w-[100%]">Message:</label>
                    <textarea name="message" onChange={(e) => setFormData({ ...formData, message: e.target.value })} value={formData.message} id="message" cols="30" rows="10" className="text-[2rem] pl-2 w-[85vw] xl:w-auto" required></textarea>

                    <button className="text-[2rem] text-white border w-[30%] mt-5 hover:text-slate-800 hover:bg-white">Send</button>
                </form>
            </div >

        </>

    )
}