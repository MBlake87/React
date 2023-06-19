
import { useState, useRef, React } from "react";
import linkedIcon from "../images/linkedin.png"
import emailjs from "@emailjs/browser"
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
} from '@chakra-ui/react'
import { Link } from "react-router-dom";


export function Contact() {

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

            <div className="w-full flex flex-col items-center text-center border-t-2 py-[4rem]" id="contact">
                <h1 className="text-white text-[2rem]">Contact Me</h1>
                <p className="text-white text-[.75rem] xl:text-[1.3rem]">Connect with me via my LinkedIn or submit the form below to get started.</p>
                <Link to="http://www.linkedin.com/in/mark-blake-7493131a3"><img className="aspect-auto w-20" src={linkedIcon} alt="linkedIn" /></Link>

                <form ref={form} onSubmit={sendEmail} className="items-center  m-auto mt-5 flex flex-col p-3 mb-5 w-[90vw] xl:w-auto h-[60vh] border border-white rounded-lg bg-slate-800">

                    <label htmlFor="name" className="text-white text-[.75rem] xl:text-[1.3rem] w-[85vw] text-left xl:w-[100%] " >Name:</label>
                    <input type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} name="from_name" id="name" className="border border-black text-[1.3rem] pl-2 font-Roboto w-[85vw] xl:w-[100%]" required />

                    <label htmlFor="email" className="text-white text-[.75rem] xl:text-[1.3rem]  w-[85vw] text-left xl:w-[100%]" >Email:</label>
                    <input type="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} name="from_email" id="email" className="border border-black text-[1.3rem] pl-2 font-Roboto w-[85vw] xl:w-[100%]" required />

                    <label htmlFor="message" className="text-white text-[.75rem] xl:text-[1.3rem]  text-left w-[85vw] xl:w-[100%]">Message:</label>
                    <textarea name="message" onChange={(e) => setFormData({ ...formData, message: e.target.value })} value={formData.message} id="message" cols="30" rows="10" className="text-[1.3rem] pl-2 w-[85vw] xl:w-auto" required></textarea>

                    <button className="text-[1.25rem] xl:text-[1.5rem] text-white border w-[30%] mt-5 hover:text-slate-800 hover:bg-white">Send</button>
                </form>

            </div>

        </>

    )
}