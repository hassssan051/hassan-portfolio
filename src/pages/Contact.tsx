import React from "react";
import ContactForm from "../components/ContactForm";


const contactInfo = [
  {
    icon: <></>,
    text: "+923350552250",
  },
  {
    icon: <></>,
    text: "",
  },
];

export default function Contact() {
  return (
    <>
      <h1 className='text-4xl text-neutral-content font-bold'>Contact</h1>
      {/* <Paragraph
        className='text-gray-600 text-lg '
        copyable>
        +923350552250
      </Paragraph>
      <Paragraph
        className='text-gray-600 text-lg'
        copyable>
        hassanzaidi4@gmail.com
      </Paragraph>
      <Paragraph
        className='text-gray-600 text-lg'
        copyable>
        hassanzaidi4practicing@gmail.com
      </Paragraph>
      <Paragraph
        className='text-gray-600 text-lg'
        copyable>
        hassan@skilledin.io
      </Paragraph> */}
      <ContactForm />
    </>
  );
}
