import React from "react";
import './Header.css';
import {FaBook, FaHome, FaPhone} from "react-icons/fa";
import {IoMdInformationCircle} from "react-icons/io";
import {FaGears} from "react-icons/fa6";
import {IoSchoolSharp} from "react-icons/io5";
import {HiBuildingOffice2} from "react-icons/hi2";
import {GrProjects} from "react-icons/gr";
import {BiCommand} from "react-icons/bi";

const Header = () => (
        <nav id="navbar" className="Navbar navbar nav-menu">
            <ul>
                <li><a href="#hero" className="nav-link scrollto active">
                    <span><FaHome style={{width: "3rem"}}/>Home</span></a></li>
                <li><a href="#about" className="nav-link scrollto"><span><IoMdInformationCircle style={{width: "3rem"}}/>About</span></a>
                </li>
                <li><a href="#skills" className="nav-link scrollto"><span><FaGears style={{width: "3rem"}} /> Skills</span></a>
                </li>
                <li><a href="#resume" className="nav-link scrollto">
                    <span><IoSchoolSharp style={{width: "3rem"}}/>Education</span></a></li>
                <li><a href="#exp" className="nav-link scrollto">
                    <span><HiBuildingOffice2 style={{width: "3rem"}}/>Experience</span></a></li>
                <li><a href="#portfolio" className="nav-link scrollto">
                    <span><GrProjects style={{width: "3rem"}}/>Projects</span></a></li>
                <li><a href="#extra" className="nav-link scrollto"><span><BiCommand style={{width: "3rem"}}/>Hobbies</span></a>
                </li>
                <li><a href="#pp" className="nav-link scrollto"><span><FaBook style={{width: "3rem"}}/>Paper Publication</span></a>
                </li>
                <li><a href="#contact" className="nav-link scrollto"><i className="bi bi-person-lines-fill"></i>
                    <span><FaPhone style={{width: "3rem"}}/>Contact</span></a></li>
            </ul>
        </nav>
)

export default Header;