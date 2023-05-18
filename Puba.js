import React, { Component, Fragment } from "react";
//import Sarya from "./Sarya";
import './Puba.css';

class Puba extends Component{
    render(){
        return(
            <Fragment>
                <div className="container-fluid pt-2 ctn_pub">
                    <div className="d-flex ctn_header">
                        <div className="bg-light rounded-circle ctn_pseudo_sary">
                            
                        </div>
                        <div className="ms-3 ctn_anarana_fotoana">
                            <h6 className="mt-2 fw-bolder">HARITIANA Nomenjanahary</h6>
                            <h6 className="mt-3">Lundi 06/01/2018</h6>
                        </div>
                    </div>

                    <div className="container-fluid bg-light ctn_publication_legende">
                        <p>Notr premier course a debuter cette année, veuiller vous inscrire sur notre platforme ou nous joindre au contact suivante: 0341588820!
                            Les renseignements sont présenter si_dzssous!
                        </p>
                    </div>

                    <div className="container-fluid bg-light ctn_publication_sary">
                        
                    </div>

                    <div className="container-fluid bg-light plus_de_detaille">
                        <p>Voir plus...</p>
                    </div>

                    <div className="container-fluid d-flex ctn_publication_reaction">
                        <div className="bg-light me-2 ctn_reaction">1</div>
                        <div className="bg-light me-2 ctn_nbr_reaction">2</div>
                        <div className="d-flex  ctn_commentaire">
                            <input type="text" className="rounded-pill spcommentaire" placeholder="Commentaire"/>
                        </div>
                    </div>
                </div>


                <div className="container-fluid mt-2 pt-2 ctn_pub">
                    <div className="d-flex ctn_header">
                        <div className="bg-light rounded-circle ctn_pseudo_sary">

                        </div>
                        <div className="ms-3 ctn_anarana_fotoana">
                            <h6 className="mt-2 fw-bolder">NARISOA Jean Noel</h6>
                            <h6 className="mt-3">Jeudi 06/01/2008</h6>
                        </div>
                    </div>

                    <div className="container-fluid bg-light ctn_publication_legende">

                    </div>

                    <div className="container-fluid bg-light ctn_publication_sary">

                    </div>

                    <div className="container-fluid d-flex ctn_publication_reaction">
                        <div className="bg-light me-2 ctn_reaction">1</div>
                        <div className="bg-light me-2 ctn_nbr_reaction">2</div>
                        <div className="d-flex  ctn_commentaire">
                            <input type="text" className="rounded-pill spcommentaire" placeholder="Commentaire"/>
                        </div>
                    </div>
                    
                </div>
            </Fragment>
        )
    }
}

export default Puba;