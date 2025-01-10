import React from "react";
import './Contact.css';
import {FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp} from "react-icons/fa";
import {GoMail} from "react-icons/go";
import {AiFillMail} from "react-icons/ai";
import {FiMail} from "react-icons/fi";

const Contact = () => (
    <div className="Contact" id={"contact"}>
        <h1>Contact</h1>
        <p>I'm <strong>Varnika Bagaria</strong>
        </p>
        <div className="social-links">
            <a href="https://www.github.com/VarnikaB" className="facebook"><FaGithub/></a>
            <a href="https://wa.me/916363506566" className="instagram"><FaWhatsapp/></a>
            <a href="mailto:varnikabagaria0110@gmail.com" className="google-plus"><FiMail/></a>
            <a href="https://www.linkedin.com/in/varnika-bagaria" className="linkedin"><FaLinkedin/></a>
        </div>
    </div>
)

export default Contact;
