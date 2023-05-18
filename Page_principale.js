import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Partiea from "./section/Partiea";
import './Page_principale.css';
import Partieb from "./section/Partieb";
//import Rallie from "./compoActiviter/compoActiviterRallie/Rallie";

class Pageprincipale extends Component{
    render() {
        return(
            <Fragment>

                <div className="container bg-primary d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h1 className="text-light">Stamina</h1>
                    </div>
                    <div className="mt-3 ctn_menu d-flex align-items-center">
                        <ul className="d-flex">
                            <li><Link className="fw-bolder tt">Actualité</Link></li>
                            <li><Link className="fw-bolder tt">Notification</Link></li>
                            <li><Link className="fw-bolder tt">Activivté</Link></li>
                            <li><Link className="fw-bolder tt">Profiles</Link></li>
                        </ul>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Chearch" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Chearch</button>
                        </div>
                    </div>
                </div>

                <Partiea/>
                <Partieb/>

            </Fragment>
        )
    }
}

export default Pageprincipale;