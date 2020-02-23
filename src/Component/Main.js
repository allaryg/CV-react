import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";

import Resume from "./Resume";
import Diplome from "./Diplome";
import Experience from "./Experience";
import Formation from "./Formation";
import Creation from "./Creation";
import Contact from "./Contact";

import maPhoto from "../img/maPhoto.jpg";
import "../styles/main.css";

class Main extends Component {
    render() {
        return(
            <HashRouter>
                <div className="container">
                    <div className="navigation">
                        <div className="photo">
                            <img src={maPhoto} alt="" className="img"/>
                        </div>
                        <ul className="navBar">
                            <li><NavLink exact to="/">A propos de moi</NavLink></li>
                            <li><NavLink exact to="/diplome">Diplômes</NavLink></li>
                            <li><NavLink exact to="/experience">Experience pro</NavLink></li>
                            <li><NavLink exact to="/formation">Formations</NavLink></li>
                            <li><NavLink exact to="/creation">Créations</NavLink></li>
                            <li><NavLink exact to="/contact">Me contacter</NavLink></li>
                        </ul>
                    </div>
                    <div className="component">
                        <Route exact path="/" component={Resume}/>
                        <Route exact path="/diplome" component={Diplome}/>
                        <Route exact path="/experience" component={Experience}/>
                        <Route exact path="/formation" component={Formation}/>
                        <Route exact path="/creation" component={Creation}/>
                        <Route exact path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}
export default Main;