import { useState, useRef, React } from "react";
import linkedIcon from "../images/linkedin.png";
import emailjs from "@emailjs/browser";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_TOKEN,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_PUBLIC
      )
      .then(
        (result) => {
          setAlert(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {alert && (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Message Sent!</AlertTitle>
          <AlertDescription>Thank you for your message.</AlertDescription>
          <CloseButton
            position="absolute"
            right="1"
            top="0"
            size="lg"
            onClick={() => setAlert(false)}
          />
        </Alert>
      )}

      <div
        className="flex w-full flex-col items-center border-t-2 py-[8rem] text-center"
        id="contact"
      >
        <h1 className="text-[2rem] text-text">Contact Me</h1>
        <p className="text-[.75rem] text-text xl:text-[1.3rem]">
          Connect with me via my LinkedIn or submit the form below to get
          started.
        </p>
        <Link to="http://www.linkedin.com/in/mark-blake-7493131a3">
          <img
            className="mt-5 aspect-auto w-20"
            src={linkedIcon}
            alt="linkedIn"
          />
        </Link>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="m-auto  mb-5 mt-5 flex h-[60vh] w-[90vw] flex-col items-center rounded-lg border border-white bg-slate-800 p-3 xl:w-auto"
        >
          <label
            htmlFor="name"
            className="w-[85vw] text-left text-[.75rem] text-white xl:w-[100%] xl:text-[1.3rem] "
          >
            Name:
          </label>
          <input
            type="text"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
            name="from_name"
            id="name"
            className="font-Roboto w-[85vw] border border-black pl-2 text-[1.3rem] xl:w-[100%]"
            required
          />

          <label
            htmlFor="email"
            className="w-[85vw] text-left text-[.75rem]  text-white xl:w-[100%] xl:text-[1.3rem]"
          >
            Email:
          </label>
          <input
            type="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            name="from_email"
            id="email"
            className="font-Roboto w-[85vw] border border-black pl-2 text-[1.3rem] xl:w-[100%]"
            required
          />

          <label
            htmlFor="message"
            className="w-[85vw] text-left text-[.75rem]  text-white xl:w-[100%] xl:text-[1.3rem]"
          >
            Message:
          </label>
          <textarea
            name="message"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            value={formData.message}
            id="message"
            cols="30"
            rows="10"
            className="w-[85vw] pl-2 text-[1.3rem] xl:w-auto"
            required
          ></textarea>

          <button className="my-4 w-[30%] border text-[1.25rem] text-white hover:bg-white hover:text-slate-800 xl:text-[1.5rem]">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
