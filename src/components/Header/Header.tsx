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
                <li>
                    <a href="#home" className="nav-link scrollto active" >
                        <span id="Icon-Home"><FaHome style={{width: "3rem"}}/></span>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#about" className="nav-link scrollto">
                        <span><IoMdInformationCircle style={{width: "3rem"}}/></span>
                        <span>About</span>
                    </a>
                </li>
                <li>
                    <a href="#skills" className="nav-link scrollto">
                        <span><FaGears style={{width: "3rem"}}/></span>
                        <span> Skills</span>
                    </a>
                </li>
                <li>
                    <a href="#exp" className="nav-link scrollto">
                        <span><HiBuildingOffice2 style={{width: "3rem"}}/></span>
                        <span>Experience</span>
                    </a>
                </li>
                <li>
                    <a href="#projects" className="nav-link scrollto">
                        <span><GrProjects style={{width: "3rem"}}/></span>
                        <span>Projects</span>
                    </a>
                </li>
                <li>
                    <a href="#education" className="nav-link scrollto">
                        <span><IoSchoolSharp style={{width: "3rem"}}/></span>
                        <span>Education</span>
                    </a>
                </li>
                <li>
                    <a href="#publication" className="nav-link scrollto">
                        <span><FaBook style={{width: "3rem"}}/></span>
                        <span>Publication</span>
                    </a>
                </li>
                <li>
                    <a href="#hobbies" className="nav-link scrollto">
                        <span><BiCommand style={{width: "3rem"}}/></span>
                        <span>Hobbies</span>
                    </a>
                </li>
                <li>
                    <a href="#contact" className="nav-link scrollto">
                        <span><FaPhone style={{width: "3rem"}}/></span>
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
)

export default Header;