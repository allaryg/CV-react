import React, {Component} from "react";
import MonCV from "../allaryG_CV.pdf";

class Creation extends Component {
    render() {
        return(
            <div>
                <p>EN COURS DE CREATION (recherche d'une fonction à appliquer)</p>
                <div>
                    <a href="https://a-g-cv-react.herokuapp.com">Mon CV</a>
                </div>
                <div>
                    <a href={MonCV}>Mon CV.pdf</a>
                </div>
            </div>
        )
    }
}
export default Creation;