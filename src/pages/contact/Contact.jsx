import React from "react";
import "./Contact.css";

import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import Header from "../../components/Header";

const Contact = () => {
   return (
      <>
         <Header title="Get In Touch" image={HeaderImage}>
            <p>
               We invite you to connect with us through our "Get in Touch" section. Whether you have questions, feedback, or want to explore membership options, our friendly team is ready to assist you. Reach out to us and let's embark on your fitness journey together.
            </p>
         </Header>

         <section className="contact">
            <div className="container contact__container">
               <div className="contact__wrapper">
                  <a
                     href="mailto:sayantan22.main@gmail.com"
                     target="_blank"
                     rel="noreferrer noopener"
                  >
                     <MdEmail />
                  </a>

                  <a
                     href="http://m.me/sayantanxyz222"
                     target="_blank"
                     rel="noreferrer noopener"
                  >
                     <BsMessenger />
                  </a>

                  <a
                     href="https://wa.me/+918617036877"
                     target="_blank"
                     rel="noreferrer noopener"
                  >
                     <IoLogoWhatsapp />
                  </a>
               </div>
            </div>
         </section>
      </>
   );
};

export default Contact;
