import React, { Component, Fragment } from "react";
import PubRalliea from "./publicationRallies/PubRalliea";

class Rallie extends Component{
    render(){
        return(
            <Fragment>
                <div className="container-fluid ps-0 pe-0 bg-primary spRallie">
                    <PubRalliea/>
                </div>
            </Fragment>
        )
    }
}

export default Rallie;