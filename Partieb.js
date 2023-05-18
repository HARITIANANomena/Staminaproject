import React, { Component, Fragment } from "react";
import Rallie from "../compoActiviter/compoActiviterRallie/Rallie";

class Partieb extends Component{
    render() {
        return(
            <Fragment>
                <div className="container ps-0 pe-0 pb-3 bg-secondary mt-1 ctn_compo_activiter">
                    <Rallie/>
                </div>
            </Fragment>
        );
    }
}

export default Partieb;