import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";

import Resume from "./Resume";
import Diplome from "./Diplome";
import Experience from "./Experience";
import Formation from "./Formation";
import Creation from "./Creation";
import Contact from "./Contact";

import portrait from "../img/portrait.jpg";

class Main extends Component {
    render() {
        return(
            <HashRouter>
                <div>
                    <div>
                        <li><img src={portrait} alt="" /></li>
                        <ul>
                            <li><NavLink exact to="/">A propos de moi</NavLink></li>
                            <li><NavLink to="/diplome">Diplômes</NavLink></li>
                            <li><NavLink to="/experience">Experience pro</NavLink></li>
                            <li><NavLink to="/formation">Formations</NavLink></li>
                            <li><NavLink to="/creation">Créations</NavLink></li>
                            <li><NavLink to="/contact">Me contacter</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <Route exact path="/" component={Resume}/>
                        <Route path="/diplome" component={Diplome}/>
                        <Route path="/experience" component={Experience}/>
                        <Route path="/formation" component={Formation}/>
                        <Route path="/creation" component={Creation}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}
export default Main;