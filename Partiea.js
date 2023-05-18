import React, { Component, Fragment } from "react";
import "./Partiea.css";

class Partiea extends Component{
    render() {
        return(
            <Fragment>
                <div className="container bg-primary sp_container_storie">
                    <div className="row row-cols-1 row-cols-lg-5 g-4 pb-2">
                        <div className="col sp_dim_card">
                            <div className="card h-100">
                                <div className="card-img-top spcarda">
                                    <p className="plus">+</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="..." className="card-img-top spcardb" alt=""/>   
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="..." className="card-img-top spcardc" alt=""/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="..." className="card-img-top spcardd" alt=""/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="..." className="card-img-top spcarde" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default Partiea;