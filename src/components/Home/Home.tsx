import React from "react";
import './Home.css';

const Home = () => (
    <div className="Home" id="home">
            <h1>Varnika Bagaria</h1>
            <p>I'm <strong>Varnika Bagaria</strong>
            </p>
            <div className="social-links">
                <a href="https://www.github.com/VarnikaB" className="facebook"><i className="bx bxl-github"></i></a>
                <a href="https://wa.me/916363506566" className="instagram"><i className="bx bxl-whatsapp"></i></a>
                <a href="mailto:varnikabagaria0110@gmail.com" className="google-plus"><i
                    className="bx bx-mail-send"></i></a>
                <a href="https://www.linkedin.com/in/varnika-bagaria" className="linkedin"><i
                    className="bx bxl-linkedin"></i></a>
            </div>
    </div>
)

export default Home;
