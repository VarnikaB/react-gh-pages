import React from "react";
import './Hobbies.css';
import musicImage from './images/music.png';
import badmintonImage from './images/badminton.png';
import codingImage from './images/coding.png';
import sketchingImage from './images/img.png';

const Hobbies = () => (
    <div className="Hobbies" id="hobbies">
        <h1>Hobbies</h1>
        <div className="rows">
            <div className="row">
                <img src={musicImage} alt="Music"/>
                <img src={sketchingImage} alt="Sketching"/>
            </div>
            <div className="row">
                <img src={badmintonImage} alt="Badminton"/>
                <img src={codingImage} alt="Coding"/>
            </div>
        </div>

    </div>
)

export default Hobbies;
