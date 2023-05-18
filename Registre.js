import React from "react";
import { Link} from 'react-router-dom';
import './Regisstre.css';

const Registre = () => {
    return(
        <div className="">
            <form className="mx-auto shadow p-3 mb-5 mt-5 bg-body rounded form_login">
                <h1 className="text-center">Create a count</h1>
                <div className="separator_reg"></div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="ms-2 d-flex justify-content-start form-label">First Name :</label>
                    <input type="text" className="form-control mb-3" id="exampleFormControlInput1" placeholder="First Name"/>

                    <label for="ln" className="ms-2 d-flex justify-content-start form-label">Last Name :</label>
                    <input type="text" className="form-control mb-3" id="ln" placeholder="First Name"/>

                    <label for="ddn" className="ms-2 d-flex justify-content-start form-label">Date de naissance :</label>
                    <input type="date" className="form-control mb-3" id="ddn" placeholder="Date de naissance"/>

                    <label for="nbph" className="ms-2 d-flex justify-content-start form-label">Number phone :</label>
                    <input type="number" className="form-control mb-3" id="nbph" placeholder="Number phone"/>

                    <label for="email" className="ms-2 d-flex justify-content-start form-label">E-mail :</label>
                    <input type="email" className="form-control" id="email" placeholder="example@gmail.com"/>

                    <div className="d-flex justify-content-between ms-5 me-5">
                        <button type="submit" className="btn btn-primary btn-lg mt-3"><Link className="text-light text-decoration-none">Confirmer</Link></button>
                        <button type="submit" className="btn btn-primary btn-lg mt-3"><Link className="text-light text-decoration-none" to="/Login">Connecte</Link></button>
                    </div>  

                </div>
            </form>
        </div>
    )
}

export default Registre;