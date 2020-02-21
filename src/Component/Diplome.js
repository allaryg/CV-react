import React, {useState} from "react";

import "../styles/diplomes.css";

import bep from "../img/BEP.jpg";
import bac from "../img/BAC.jpg";
import bts from "../img/BTS.jpg";

function Diplome () {
    const item1 = (
        <div className="item">
            <div className="nom_diplome">
                <p>Brevet d’étude professionnel électrotechnique</p>
            </div>
            <div className="img_diplome"> 
                <img src={bep} alt=""/>
            </div>
            <div className="date_diplome">
                <p>2009</p>
            </div>
        </div>
    )
    const item2 = (
        <div className="item">
            <div className="nom_diplome">
                <p>Baccalauréat professionnel électrotechnique</p>
            </div>
            <div className="img_diplome"> 
                <img src={bac} alt=""/>
            </div>
            <div className="date_diplome">
                <p>2011</p>
            </div>
        </div>
    )
    const item3 = (
        <div className="item">
            <div className="nom_diplome">
                <p>Niveau BTS Assistance Technique d’Ingénieur</p>
            </div>
            <div className="img_diplome"> 
                <img src={bts} alt=""/>
            </div>
            <div className="date_diplome">
                <p>2013</p>
            </div>
        </div>
    )
    let sliderArray = [
        item1,
        item2,
        item3
    ]
    const [x, setX] = useState(0)
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100)
    }
    const goRight = () => {
        x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100)
    }
    return(
        <div className="slider">
            {sliderArray.map((item, index) => {
                return(
                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            <button id="goLeft" onClick={() => goLeft()}></button>
            <button id="goRight" onClick={() => goRight()}></button>
        </div>
    )
}
export default Diplome;

            /*<div id="carousel">
                <div className="carousel_container">

                    
                    <div className="carousel_item" id="one">
                        <div className="item">
                            <div className="nom_diplome">
                                <p>Brevet d’étude professionnel électrotechnique</p>
                            </div>
                            <div className="img_diplome"> 
                                <img src={bep} alt=""/>
                            </div>
                            <div className="date_diplome">
                                <p>2009</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel_item" id="two">
                        <div className="item">
                            <div className="nom_diplome">
                                <p>Baccalauréat professionnel électrotechnique</p>
                            </div>
                            <div className="img_diplome"> 
                                <img src={bac} alt=""/>
                            </div>
                            <div className="date_diplome">
                                <p>2011</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel_item" id="three">
                        <div className="item">
                            <div className="nom_diplome">
                                <p>Niveau BTS Assistance Technique d’Ingénieur</p>
                            </div>
                            <div className="img_diplome"> 
                                <img src={bts} alt=""/>
                            </div>
                            <div className="date_diplome">
                                <p>2013</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>*/